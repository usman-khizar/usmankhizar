import type { Metadata } from 'next'
import './admin.css'

export const metadata: Metadata = {
  title: { absolute: 'Leads | Usman Khizar CRM' },
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="crm">{children}</div>
}
