import Link from 'next/link'
import { notFound } from 'next/navigation'
import { requireAdmin } from '@/lib/admin-auth'
import { getLead } from '@/lib/crm'
import { isGhlConfigured } from '@/lib/ghl'
import { statuses } from '@/lib/lead-options'
import AdminNav from '../../AdminNav'
import { removeLead, updateLead } from '../../actions'
import { formLabel, statusLabel, when, whatsapp } from '../../format'

type Props = { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }

function str(v: unknown) {
  return typeof v === 'string' && v ? v : null
}

export default async function LeadPage({ params, searchParams }: Props) {
  await requireAdmin()
  const { id } = await params
  const confirmDelete = (await searchParams).confirm === '1'
  const found = await getLead(id)
  if (!found) notFound()
  const { lead, activity } = found
  const wa = whatsapp(lead.phone)

  return (
    <>
      <AdminNav current="inbox" />
      <main className="crm-main crm-detail">
        <p><Link href="/admin" className="crm-back">← All leads</Link></p>
        <div className="crm-head">
          <div>
            <h1>{lead.name || lead.email}</h1>
            <p className="crm-sub">{lead.site_name} · first seen {when(lead.created_at)} via {formLabel(lead.source)}</p>
          </div>
          <span className={`crm-pill crm-${lead.status}`}>{statusLabel(lead.status)}</span>
        </div>

        <div className="crm-cols">
          <section className="crm-card">
            <h2>Contact</h2>
            <dl className="crm-dl">
              <dt>Email</dt><dd><a href={`mailto:${lead.email}`}>{lead.email}</a></dd>
              <dt>Phone</dt><dd>{lead.phone ? <>{lead.phone}{wa && <> · <a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></>}</> : '—'}</dd>
              <dt>Wants</dt><dd>{lead.interest ?? '—'}</dd>
              <dt>Budget</dt><dd>{lead.budget ?? '—'}</dd>
              <dt>Tags</dt><dd>{lead.tags.length ? lead.tags.join(', ') : '—'}</dd>
              <dt>GHL</dt><dd>{lead.ghl_contact_id ? 'Saved' : lead.site_slug !== 'usmankhizar' ? 'Not used for this site' : isGhlConfigured() ? 'Not saved' : 'Not connected'}</dd>
            </dl>

            <form key={`${lead.status}-${activity.length}`} action={updateLead} className="crm-form">
              <input type="hidden" name="id" value={lead.id} />
              <label htmlFor="status">Status</label>
              <select id="status" name="status" defaultValue={lead.status}>
                {statuses.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              <label htmlFor="note">Add a note</label>
              <textarea id="note" name="note" rows={4} maxLength={5000} placeholder="Called, sent proposal, follow up Friday…" />
              <button type="submit" className="crm-btn">Save</button>
            </form>
          </section>

          <section className="crm-card">
            <h2>History</h2>
            <ol className="crm-timeline">
              {activity.map((a) => {
                const d = a.data ?? {}
                const fields = d.fields && typeof d.fields === 'object' ? Object.entries(d.fields as Record<string, unknown>) : []
                return (
                  <li key={a.id} className={`crm-ev crm-ev-${a.kind}`}>
                    <p className="crm-ev-head">
                      <span>
                      {a.kind === 'form' && <>Filled in <strong>{formLabel(str(d.form))}</strong>{str(d.page) && <> on {str(d.page)}</>}</>}
                      {a.kind === 'note' && <strong>Note</strong>}
                      {a.kind === 'status' && <>Status: {statusLabel(String(d.from ?? ''))} → <strong>{statusLabel(String(d.to ?? ''))}</strong></>}
                      {a.kind === 'sync' && <strong>GHL</strong>}
                      </span>
                      <time>{when(a.created_at)}</time>
                    </p>
                    {a.body && <p className="crm-ev-body">{a.body}</p>}
                    {fields.length > 0 && (
                      <dl className="crm-dl crm-dl-small">
                        {fields.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{String(v)}</dd></div>)}
                      </dl>
                    )}
                  </li>
                )
              })}
            </ol>
          </section>
        </div>

        <section className="crm-danger">
          {confirmDelete ? (
            <form action={removeLead}>
              <input type="hidden" name="id" value={lead.id} />
              <input type="hidden" name="confirm" value="delete" />
              <p>This permanently deletes {lead.email} and all of their history. It can&apos;t be undone. It does not delete them from GHL.</p>
              <button type="submit" className="crm-btn crm-btn-danger">Yes, delete permanently</button>{' '}
              <Link href={`/admin/leads/${lead.id}`}>Cancel</Link>
            </form>
          ) : (
            <form action={removeLead}>
              <input type="hidden" name="id" value={lead.id} />
              <button type="submit" className="crm-link">Delete this lead (for erasure requests)</button>
            </form>
          )}
        </section>
      </main>
    </>
  )
}
