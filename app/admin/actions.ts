'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { endSession, isAdminConfigured, passwordMatches, requireAdmin, startSession } from '@/lib/admin-auth'
import { ipBucket } from '@/lib/client-ip'
import { addLeadNote, allowHit, clearHits, createSite, deleteLead, domain, rotateSiteKey, setLeadStatus, text, updateSiteDomains } from '@/lib/crm'

export type LoginState = { error?: string } | undefined

export async function login(_: LoginState, form: FormData): Promise<LoginState> {
  if (!isAdminConfigured()) return { error: 'The inbox is not set up yet.' }
  const h = await headers()
  const bucket = ipBucket(h, 'login')
  // Per-address and site-wide limits on wrong passwords.
  if (!(await allowHit(bucket, 8, 15)) || !(await allowHit('login:all', 60, 15))) {
    return { error: 'Too many tries. Wait 15 minutes and try again.' }
  }
  const pw = form.get('password')
  if (typeof pw !== 'string' || !passwordMatches(pw)) {
    await new Promise((r) => setTimeout(r, 600))
    return { error: 'That password is not right.' }
  }
  await clearHits(bucket)
  await startSession()
  redirect('/admin')
}

export async function logout() {
  await endSession()
  redirect('/admin/login')
}

function leadId(form: FormData) {
  const id = form.get('id')
  if (typeof id !== 'string' || !/^\d{1,18}$/.test(id)) throw new Error('Bad lead id')
  return id
}

export async function updateLead(form: FormData) {
  await requireAdmin()
  const id = leadId(form)
  const status = form.get('status')
  if (typeof status === 'string' && status) await setLeadStatus(id, status)
  const note = text(form.get('note'), 5000)
  if (note) await addLeadNote(id, note)
  revalidatePath(`/admin/leads/${id}`)
}

export async function removeLead(form: FormData) {
  await requireAdmin()
  const id = leadId(form)
  if (form.get('confirm') !== 'delete') redirect(`/admin/leads/${id}?confirm=1`)
  await deleteLead(id)
  redirect('/admin')
}

function domainsFrom(form: FormData) {
  const raw = typeof form.get('domains') === 'string' ? String(form.get('domains')) : ''
  return [...new Set(raw.split(/[\s,]+/).map(domain).filter((d): d is string => Boolean(d)))].slice(0, 20)
}

export type SiteState = { error?: string; created?: { name: string; key: string } } | undefined

export async function addSite(_: SiteState, form: FormData): Promise<SiteState> {
  await requireAdmin()
  const name = text(form.get('name'), 80)
  const domains = domainsFrom(form)
  if (!name) return { error: 'Give the site a name.' }
  if (!domains.length) return { error: 'Add at least one domain, like example.com.' }
  const { key } = await createSite(name, domains)
  revalidatePath('/admin/sites')
  return { created: { name, key } }
}

export async function newSiteKey(_: SiteState, form: FormData): Promise<SiteState> {
  await requireAdmin()
  const id = form.get('id')
  const name = text(form.get('name'), 80) ?? 'Site'
  if (typeof id !== 'string' || !/^\d+$/.test(id)) return { error: 'Bad site id' }
  const key = await rotateSiteKey(id)
  revalidatePath('/admin/sites')
  return { created: { name, key } }
}

export async function saveDomains(form: FormData) {
  await requireAdmin()
  const id = form.get('id')
  if (typeof id !== 'string' || !/^\d+$/.test(id)) throw new Error('Bad site id')
  await updateSiteDomains(id, domainsFrom(form))
  revalidatePath('/admin/sites')
}
