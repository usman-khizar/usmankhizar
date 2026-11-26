import { NextRequest, NextResponse } from 'next/server'
import { allowHit, captureSiteLead, email as cleanEmail, findSiteByKey, tags as cleanTags, text } from '@/lib/crm'
import { ipBucket } from '@/lib/client-ip'
import { isDbConfigured } from '@/lib/db'

// Lead intake for every other website. Works from fetch() and from a plain HTML form.
// Docs for site owners are on the Sites page in /admin.

const KNOWN = new Set([
  'email', 'name', 'full_name', 'fullName', 'phone', 'whatsapp', 'message', 'interest', 'service', 'budget',
  'form', 'page', 'tags', 'site_key', 'siteKey', 'redirect', '_hp',
])

function cors(origin: string | null): Record<string, string> {
  if (!origin) return {}
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Site-Key',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

// The preflight only says the request may be sent. The real request is checked against the site's domains.
export function OPTIONS(req: NextRequest) {
  return new Response(null, { status: 204, headers: cors(req.headers.get('origin')) })
}

async function readBody(req: NextRequest): Promise<{ data: Record<string, unknown>; html: boolean } | null> {
  const type = req.headers.get('content-type') ?? ''
  try {
    if (type.includes('application/json')) return { data: await req.json(), html: false }
    if (type.includes('form')) {
      const form = await req.formData()
      const data: Record<string, unknown> = {}
      for (const [k, v] of form) if (typeof v === 'string') data[k] = v
      return { data, html: true }
    }
  } catch {
    return null
  }
  return null
}

function hostOf(url: string | null) {
  if (!url || url === 'null') return null
  try {
    return new URL(url).host.toLowerCase()
  } catch {
    return null
  }
}

function allowedHost(host: string, domains: string[]) {
  const bare = host.replace(/^www\./, '')
  return domains.some((d) => d === host || d.replace(/^www\./, '') === bare)
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin')
  const headers = cors(origin)
  const fail = (error: string, status: number) => NextResponse.json({ error }, { status, headers })

  if (!isDbConfigured()) return fail('Lead intake is not set up', 503)
  const body = await readBody(req)
  if (!body || typeof body.data !== 'object' || body.data === null) return fail('Send JSON or form data', 400)
  const { data, html } = body

  const auth = req.headers.get('authorization')
  const key =
    req.headers.get('x-site-key') ||
    (auth?.startsWith('Bearer ') ? auth.slice(7) : '') ||
    (typeof data.site_key === 'string' ? data.site_key : '') ||
    (typeof data.siteKey === 'string' ? data.siteKey : '')
  const site = key ? await findSiteByKey(key.trim()) : null
  if (!site) return fail('Unknown site key', 401)

  // Browsers always send Origin. Only the site's own domains may post from a browser.
  const originHost = hostOf(origin)
  if (origin && origin !== 'null' && (!originHost || !allowedHost(originHost, site.domains))) {
    return fail('This domain is not allowed for this site key', 403)
  }

  const redirect = typeof data.redirect === 'string' ? data.redirect : null
  const redirectHost = hostOf(redirect)
  const goTo = redirect && redirectHost && allowedHost(redirectHost, site.domains) ? redirect : null
  const done = () =>
    goTo ? NextResponse.redirect(goTo, 303)
    : html ? new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Thank you</title><p style="font:18px system-ui;margin:3rem auto;max-width:32rem;padding:0 1rem">Thank you. Your message was sent.</p>', { headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' } })
    : NextResponse.json({ ok: true }, { headers })

  // Hidden field: people leave it empty, bots fill it in.
  if (data._hp) return done()

  const email = cleanEmail(data.email)
  if (!email) return fail('A valid email is required', 400)

  if (!(await allowHit(ipBucket(req.headers, `site${site.id}`), 30, 10))) return fail('Too many submissions. Try again later.', 429)

  const extra: Record<string, string> = {}
  for (const [k, v] of Object.entries(data)) {
    if (KNOWN.has(k) || Object.keys(extra).length >= 20) continue
    const name = text(k, 60)
    const value = typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' ? text(String(v), 1000) : null
    if (name && value) extra[name] = value
  }

  try {
    await captureSiteLead(site.id, {
      email,
      name: text(data.name ?? data.full_name ?? data.fullName, 120),
      phone: text(data.phone ?? data.whatsapp, 40),
      interest: text(data.interest ?? data.service, 120),
      budget: text(data.budget, 60),
      message: text(data.message, 5000),
      form: text(data.form, 40) ?? 'form',
      page: text(data.page, 300) ?? (hostOf(req.headers.get('referer')) ? req.headers.get('referer')!.slice(0, 300) : null),
      tags: cleanTags(data.tags),
      extra,
    })
  } catch (err) {
    console.error('[leads] not saved:', err instanceof Error ? err.message : err)
    return fail('Could not save the lead', 502)
  }
  return done()
}
