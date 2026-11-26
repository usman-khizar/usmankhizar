import { isSignedIn } from '@/lib/admin-auth'
import { exportLeads, type LeadFilter } from '@/lib/crm'
import { statusValues } from '@/lib/lead-options'

// Spreadsheet apps run cells starting with these as formulas, so they are prefixed with '.
function cell(v: unknown) {
  let s = v == null ? '' : v instanceof Date ? v.toISOString() : Array.isArray(v) ? v.join(', ') : String(v)
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`
  return `"${s.replace(/"/g, '""')}"`
}

export async function GET(req: Request) {
  if (!(await isSignedIn())) return new Response('Sign in first', { status: 401 })
  const p = new URL(req.url).searchParams
  const status = p.get('status') ?? ''
  const filter: LeadFilter = {
    site: p.get('site')?.slice(0, 60) || undefined,
    status: statusValues.has(status) ? status : undefined,
    q: p.get('q')?.slice(0, 120) || undefined,
  }
  const rows = await exportLeads(filter)
  const cols = ['site_name', 'name', 'email', 'phone', 'status', 'interest', 'budget', 'source', 'tags', 'last_message', 'created_at', 'last_activity_at'] as const
  const csv = [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\r\n')
  const date = new Date().toISOString().slice(0, 10)
  return new Response(`﻿${csv}`, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="leads-${date}.csv"`,
      'Cache-Control': 'no-store',
    },
  })
}
