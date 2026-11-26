import Link from 'next/link'
import { logout } from './actions'

export default function AdminNav({ current }: { current: 'inbox' | 'sites' }) {
  return (
    <header className="crm-nav">
      <Link href="/admin" className="crm-brand">UK CRM</Link>
      <nav>
        <Link href="/admin" aria-current={current === 'inbox' ? 'page' : undefined}>Leads</Link>
        <Link href="/admin/sites" aria-current={current === 'sites' ? 'page' : undefined}>Sites</Link>
      </nav>
      <form action={logout}>
        <button type="submit" className="crm-link">Sign out</button>
      </form>
    </header>
  )
}
