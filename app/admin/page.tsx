import Link from 'next/link'
import { requireAdmin } from '@/lib/admin-auth'
import { countByStatus, listLeads, listSites, type LeadFilter } from '@/lib/crm'
import { statuses, statusValues } from '@/lib/lead-options'
import AdminNav from './AdminNav'
import { ago, formLabel, statusLabel } from './format'

type Search = Promise<Record<string, string | string[] | undefined>>

const one = (v: string | string[] | undefined) => (typeof v === 'string' ? v.trim().slice(0, 120) : '')

export default async function Inbox({ searchParams }: { searchParams: Search }) {
  await requireAdmin()
  const sp = await searchParams
  const sites = await listSites()
  const filter: LeadFilter = {
    site: sites.some((s) => s.slug === one(sp.site)) ? one(sp.site) : undefined,
    status: statusValues.has(one(sp.status)) ? one(sp.status) : undefined,
    q: one(sp.q) || undefined,
  }
  const leads = await listLeads(filter)
  const counts = await countByStatus(filter)
  const total = Object.values(counts).reduce((a, b) => a + b, 0)

  const href = (change: Partial<LeadFilter>) => {
    const next = { ...filter, ...change }
    const p = new URLSearchParams()
    if (next.site) p.set('site', next.site)
    if (next.status) p.set('status', next.status)
    if (next.q) p.set('q', next.q)
    const s = p.toString()
    return s ? `?${s}` : '?'
  }
  const exportHref = `/admin/export${href({}) === '?' ? '' : href({})}`

  return (
    <>
      <AdminNav current="inbox" />
      <main className="crm-main">
        <div className="crm-head">
          <h1>Leads</h1>
          <a href={exportHref} className="crm-btn crm-btn-ghost">Export CSV</a>
        </div>

        <form className="crm-filters" method="get">
          <input type="search" name="q" defaultValue={filter.q} placeholder="Search name, email, phone, interest" aria-label="Search leads" />
          <select name="site" defaultValue={filter.site ?? ''} aria-label="Site">
            <option value="">All sites</option>
            {sites.map((s) => <option key={s.id} value={s.slug}>{s.name}</option>)}
          </select>
          {filter.status && <input type="hidden" name="status" value={filter.status} />}
          <button type="submit" className="crm-btn">Filter</button>
        </form>

        <nav className="crm-tabs" aria-label="Status">
          <Link href={href({ status: undefined })} aria-current={!filter.status ? 'page' : undefined}>All <span>{total}</span></Link>
          {statuses.map((s) => (
            <Link key={s.value} href={href({ status: s.value })} aria-current={filter.status === s.value ? 'page' : undefined}>
              {s.label} <span>{counts[s.value] ?? 0}</span>
            </Link>
          ))}
        </nav>

        {leads.length === 0 ? (
          <p className="crm-empty">{total === 0 && !filter.q ? 'No leads yet. They will appear here as soon as someone fills in a form.' : 'No leads match this filter.'}</p>
        ) : (
          <div className="crm-table-wrap">
            <table className="crm-table">
              <thead>
                <tr><th>Lead</th><th>Wants</th><th>Came from</th><th>Status</th><th>Last activity</th></tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td>
                      <Link href={`/admin/leads/${l.id}`} className="crm-lead">
                        <strong>{l.name || l.email}</strong>
                        {l.name && <span>{l.email}</span>}
                      </Link>
                    </td>
                    <td>{l.interest ?? '—'}{l.budget && <span className="crm-sub">{l.budget}</span>}</td>
                    <td>{formLabel(l.source)}<span className="crm-sub">{l.site_name}</span></td>
                    <td><span className={`crm-pill crm-${l.status}`}>{statusLabel(l.status)}</span></td>
                    <td>{ago(l.last_activity_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {leads.length === 300 && <p className="crm-sub">Showing the 300 most recent. Use search or export for the rest.</p>}
      </main>
    </>
  )
}
