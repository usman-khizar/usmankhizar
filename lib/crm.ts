import 'server-only'
import { createHash, randomBytes } from 'node:crypto'
import { db, HOME_SITE, isDbConfigured } from './db'
import { isGhlConfigured, saveContact } from './ghl'
import { statusValues } from './lead-options'

// ---------- Cleaning what visitors send ----------

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TAG = /^[a-z0-9][a-z0-9-]{0,39}$/

/** Trims, strips control characters, and caps the length. Empty becomes null. */
export function text(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const v = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max)
  return v === '' ? null : v
}

export function email(value: unknown): string | null {
  const v = typeof value === 'string' ? value.trim().toLowerCase() : ''
  return v.length <= 254 && EMAIL.test(v) ? v : null
}

export function tags(value: unknown): string[] {
  const list = Array.isArray(value) ? value : typeof value === 'string' ? value.split(',') : []
  const out = new Set<string>()
  for (const t of list) {
    const v = typeof t === 'string' ? t.trim().toLowerCase() : ''
    if (TAG.test(v)) out.add(v)
    if (out.size >= 10) break
  }
  return [...out]
}

export interface LeadInput {
  email: string
  name?: string | null
  phone?: string | null
  interest?: string | null
  budget?: string | null
  message?: string | null
  /** Which form it came from, e.g. "enquiry" or "growth-checklist". */
  form: string
  /** The page the form was on. */
  page?: string | null
  tags: string[]
  /** Any other fields a site's form sent, kept with the submission. */
  extra?: Record<string, string>
}

// ---------- Saving leads ----------

/** Leads can be saved if the database or GHL is connected. */
export function canCaptureLeads() {
  return isDbConfigured() || isGhlConfigured()
}

async function saveToDb(siteId: string, lead: LeadInput) {
  const sql = await db()
  const [row] = await sql<{ id: string }[]>`
    insert into leads (site_id, email, name, phone, source, interest, budget, tags)
    values (${siteId}, ${lead.email}, ${lead.name ?? null}, ${lead.phone ?? null}, ${lead.form},
            ${lead.interest ?? null}, ${lead.budget ?? null}, ${lead.tags})
    on conflict (site_id, email) do update set
      name = coalesce(excluded.name, leads.name),
      phone = coalesce(excluded.phone, leads.phone),
      interest = coalesce(excluded.interest, leads.interest),
      budget = coalesce(excluded.budget, leads.budget),
      tags = array(select distinct unnest(leads.tags || excluded.tags)),
      updated_at = now(),
      last_activity_at = now()
    returning id`
  await sql`
    insert into lead_activity (lead_id, kind, body, data)
    values (${row.id}, 'form', ${lead.message ?? null}, ${sql.json({
      form: lead.form,
      page: lead.page ?? null,
      interest: lead.interest ?? null,
      budget: lead.budget ?? null,
      tags: lead.tags,
      ...(lead.extra && Object.keys(lead.extra).length ? { fields: lead.extra } : {}),
    })})`
  return row.id
}

async function homeSiteId() {
  const sql = await db()
  const [site] = await sql<{ id: string }[]>`select id from sites where slug = ${HOME_SITE}`
  return site.id
}

/**
 * Saves a lead from usmankhizar.com: to the database, and to GHL when it is connected.
 * Returns true if at least one of them saved it.
 */
export async function captureHomeLead(lead: LeadInput): Promise<boolean> {
  const toDb = isDbConfigured() ? homeSiteId().then((id) => saveToDb(id, lead)) : null
  const toGhl = isGhlConfigured()
    ? saveContact({ email: lead.email, name: lead.name, phone: lead.phone, tags: lead.tags, source: `usmankhizar.com ${lead.form}` })
    : null
  const [dbResult, ghlResult] = await Promise.allSettled([toDb, toGhl])

  if (dbResult.status === 'rejected') console.error('[crm] database save failed:', errorText(dbResult.reason))
  if (ghlResult.status === 'rejected') console.error('[crm] GHL save failed:', errorText(ghlResult.reason))

  const leadId = dbResult.status === 'fulfilled' ? dbResult.value : null
  if (leadId && toGhl) {
    // Record the GHL outcome on the lead, so a failed sync is visible in the inbox.
    try {
      const sql = await db()
      if (ghlResult.status === 'fulfilled' && ghlResult.value) {
        await sql`update leads set ghl_contact_id = ${ghlResult.value} where id = ${leadId}`
      } else {
        await sql`insert into lead_activity (lead_id, kind, body) values (${leadId}, 'sync', 'Not saved to GHL. Add it there by hand if needed.')`
      }
    } catch (err) {
      console.error('[crm] could not record GHL sync:', errorText(err))
    }
  }
  return Boolean(leadId) || (ghlResult.status === 'fulfilled' && Boolean(ghlResult.value))
}

/** Saves a lead sent by another website. */
export async function captureSiteLead(siteId: string, lead: LeadInput) {
  await saveToDb(siteId, lead)
}

function errorText(err: unknown) {
  return err instanceof Error ? err.message : String(err)
}

// ---------- Rate limits ----------

/** Counts a hit. Returns false once `limit` hits land in `minutes`. */
export async function allowHit(bucket: string, limit: number, minutes: number) {
  const sql = await db()
  const [{ n }] = await sql<{ n: number }[]>`
    select count(*)::int as n from rate_hits where bucket = ${bucket} and at > now() - make_interval(mins => ${minutes})`
  if (n >= limit) return false
  await sql`insert into rate_hits (bucket) values (${bucket})`
  if (Math.random() < 0.02) await sql`delete from rate_hits where at < now() - interval '1 day'`
  return true
}

export async function clearHits(bucket: string) {
  const sql = await db()
  await sql`delete from rate_hits where bucket = ${bucket}`
}

// ---------- Sites ----------

export interface Site {
  id: string
  slug: string
  name: string
  domains: string[]
  has_key: boolean
  lead_count: number
  created_at: Date
}

const hashKey = (key: string) => createHash('sha256').update(key).digest('hex')

export async function listSites(): Promise<Site[]> {
  const sql = await db()
  return sql<Site[]>`
    select s.id, s.slug, s.name, s.domains, s.key_hash is not null as has_key, s.created_at,
           (select count(*)::int from leads l where l.site_id = s.id) as lead_count
    from sites s order by s.id`
}

/** Normalises "https://www.Example.com/page" to "www.example.com". */
export function domain(value: string): string | null {
  const v = value.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/[/?#].*$/, '')
  return /^[a-z0-9.-]+(:\d+)?$/.test(v) && v.includes('.') || /^localhost(:\d+)?$/.test(v) ? v : null
}

/** Creates a site and returns its key. The key is shown once; only its hash is stored. */
export async function createSite(name: string, domains: string[]) {
  const sql = await db()
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'site'
  const key = newKey()
  for (let i = 0; i < 20; i++) {
    const slug = i === 0 ? base : `${base}-${i + 1}`
    const rows = await sql`
      insert into sites (slug, name, domains, key_hash) values (${slug}, ${name}, ${domains}, ${hashKey(key)})
      on conflict (slug) do nothing returning id`
    if (rows.length) return { slug, key }
  }
  throw new Error('Could not pick a unique site name')
}

export async function rotateSiteKey(siteId: string) {
  const sql = await db()
  const key = newKey()
  await sql`update sites set key_hash = ${hashKey(key)} where id = ${siteId} and slug <> ${HOME_SITE}`
  return key
}

export async function updateSiteDomains(siteId: string, domains: string[]) {
  const sql = await db()
  await sql`update sites set domains = ${domains} where id = ${siteId}`
}

export async function findSiteByKey(key: string) {
  if (!/^ukcrm_[A-Za-z0-9_-]{20,80}$/.test(key)) return null
  const sql = await db()
  const [site] = await sql<{ id: string; slug: string; domains: string[] }[]>`
    select id, slug, domains from sites where key_hash = ${hashKey(key)}`
  return site ?? null
}

function newKey() {
  return `ukcrm_${randomBytes(24).toString('base64url')}`
}

// ---------- Inbox ----------

export interface LeadRow {
  id: string
  email: string
  name: string | null
  phone: string | null
  status: string
  source: string | null
  interest: string | null
  budget: string | null
  tags: string[]
  ghl_contact_id: string | null
  site_name: string
  site_slug: string
  created_at: Date
  last_activity_at: Date
}

export interface LeadFilter {
  site?: string
  status?: string
  q?: string
}

function where(sql: Awaited<ReturnType<typeof db>>, f: LeadFilter, withStatus = true) {
  const like = f.q ? `%${f.q.replace(/[\\%_]/g, '\\$&')}%` : null
  return sql`
    where true
    ${f.site ? sql`and s.slug = ${f.site}` : sql``}
    ${withStatus && f.status ? sql`and l.status = ${f.status}` : sql``}
    ${like ? sql`and (l.email ilike ${like} or l.name ilike ${like} or l.phone ilike ${like} or l.interest ilike ${like})` : sql``}`
}

export async function listLeads(f: LeadFilter, limit = 300): Promise<LeadRow[]> {
  const sql = await db()
  return sql<LeadRow[]>`
    select l.*, s.name as site_name, s.slug as site_slug
    from leads l join sites s on s.id = l.site_id
    ${where(sql, f)}
    order by l.last_activity_at desc
    limit ${limit}`
}

export async function countByStatus(f: LeadFilter) {
  const sql = await db()
  const rows = await sql<{ status: string; n: number }[]>`
    select l.status, count(*)::int as n from leads l join sites s on s.id = l.site_id
    ${where(sql, f, false)}
    group by l.status`
  return Object.fromEntries(rows.map((r) => [r.status, r.n])) as Record<string, number>
}

export interface Activity {
  id: string
  kind: string
  body: string | null
  data: Record<string, unknown> | null
  created_at: Date
}

export async function getLead(id: string) {
  if (!/^\d{1,18}$/.test(id)) return null
  const sql = await db()
  const [lead] = await sql<LeadRow[]>`
    select l.*, s.name as site_name, s.slug as site_slug from leads l join sites s on s.id = l.site_id where l.id = ${id}`
  if (!lead) return null
  const activity = await sql<Activity[]>`
    select id, kind, body, data, created_at from lead_activity where lead_id = ${id} order by created_at desc, id desc`
  return { lead, activity }
}

export async function setLeadStatus(id: string, status: string) {
  if (!statusValues.has(status)) throw new Error('Unknown status')
  const sql = await db()
  const [old] = await sql<{ status: string }[]>`select status from leads where id = ${id}`
  if (!old || old.status === status) return
  await sql`update leads set status = ${status}, updated_at = now() where id = ${id}`
  await sql`insert into lead_activity (lead_id, kind, data) values (${id}, 'status', ${sql.json({ from: old.status, to: status })})`
}

export async function addLeadNote(id: string, note: string) {
  const sql = await db()
  await sql`insert into lead_activity (lead_id, kind, body) values (${id}, 'note', ${note})`
  await sql`update leads set updated_at = now() where id = ${id}`
}

/** Permanently removes a lead and its history, for erasure requests. */
export async function deleteLead(id: string) {
  const sql = await db()
  await sql`delete from leads where id = ${id}`
}

/** Every lead matching the filter, with its latest message, for CSV export. */
export async function exportLeads(f: LeadFilter) {
  const sql = await db()
  return sql<(LeadRow & { last_message: string | null })[]>`
    select l.*, s.name as site_name, s.slug as site_slug,
      (select a.body from lead_activity a where a.lead_id = l.id and a.kind = 'form' and a.body is not null
       order by a.created_at desc limit 1) as last_message
    from leads l join sites s on s.id = l.site_id
    ${where(sql, f)}
    order by l.created_at desc`
}
