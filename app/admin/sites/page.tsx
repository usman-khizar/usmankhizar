import Link from 'next/link'
import { requireAdmin } from '@/lib/admin-auth'
import { listSites } from '@/lib/crm'
import { HOME_SITE } from '@/lib/db'
import AdminNav from '../AdminNav'
import { saveDomains } from '../actions'
import { AddSiteForm, NewKeyForm } from './SiteForms'

const ENDPOINT = 'https://usmankhizar.com/api/leads'

export default async function SitesPage() {
  await requireAdmin()
  const sites = await listSites()

  return (
    <>
      <AdminNav current="sites" />
      <main className="crm-main">
        <div className="crm-head"><h1>Sites</h1></div>
        <p className="crm-sub">Every website that sends leads here. Each one gets its own key, and its leads are kept apart from the others.</p>

        <div className="crm-cols">
          <section className="crm-card">
            <h2>Add a website</h2>
            <AddSiteForm endpoint={ENDPOINT} />
          </section>

          <section className="crm-card">
            <h2>How a site sends leads</h2>
            <p>Plain HTML form, no code needed:</p>
            <pre className="crm-code">{`<form action="${ENDPOINT}" method="post">
  <input type="hidden" name="site_key" value="YOUR_KEY">
  <input type="hidden" name="form" value="contact">
  <input type="hidden" name="redirect" value="https://example.com/thanks">
  <input name="name" placeholder="Name">
  <input name="email" type="email" required>
  <input name="phone" placeholder="WhatsApp">
  <textarea name="message"></textarea>
  <input name="_hp" style="display:none" tabindex="-1" autocomplete="off">
  <button>Send</button>
</form>`}</pre>
            <p>Or from JavaScript:</p>
            <pre className="crm-code">{`await fetch('${ENDPOINT}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'X-Site-Key': 'YOUR_KEY' },
  body: JSON.stringify({ email, name, phone, message, form: 'contact', tags: ['quote'] }),
})`}</pre>
            <p className="crm-sub">
              Known fields: email (required), name, phone or whatsapp, message, interest or service, budget, form, page, tags.
              Any other fields are kept with the submission. Posts from a browser only work from the site&apos;s own domains.
              Keep <code>_hp</code> empty and hidden: bots fill it in.
            </p>
          </section>
        </div>

        <div className="crm-table-wrap">
          <table className="crm-table">
            <thead><tr><th>Site</th><th>Domains</th><th>Leads</th><th>Key</th></tr></thead>
            <tbody>
              {sites.map((s) => (
                <tr key={s.id}>
                  <td><strong>{s.name}</strong><span className="crm-sub">{s.slug}</span></td>
                  <td>
                    <form action={saveDomains} className="crm-inline">
                      <input type="hidden" name="id" value={s.id} />
                      <input name="domains" defaultValue={s.domains.join(', ')} aria-label={`Domains for ${s.name}`} />
                      <button type="submit" className="crm-link">Save</button>
                    </form>
                  </td>
                  <td><Link href={`/admin?site=${encodeURIComponent(s.slug)}`}>{s.lead_count}</Link></td>
                  <td>{s.slug === HOME_SITE ? <span className="crm-sub">Built in, no key needed</span> : <NewKeyForm id={s.id} name={s.name} hasKey={s.has_key} endpoint={ENDPOINT} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
