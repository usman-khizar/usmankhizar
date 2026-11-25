import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that apply when you use usmankhizar.com.',
  openGraph: { images: ogImages, title: 'Terms of Use', description: 'The terms that apply when you use usmankhizar.com.', url: 'https://usmankhizar.com/terms' },
  alternates: { canonical: 'https://usmankhizar.com/terms' },
}

const sections = [
  { heading: 'Using this site', body: ['By using this site you agree to these terms. Please do not misuse the site, interfere with it, or try to access parts of it that are not public.'] },
  { heading: 'Information on the site', body: ['Articles and tools are general information. They are not a guarantee of rankings, traffic, leads, revenue, or other results. Search engines, AI tools, and social platforms change often and are outside my control.'] },
  { heading: 'Services and training', body: ['Consulting, projects, and classes are agreed separately in writing. That agreement sets the scope, price, payment terms, and any refund terms, and takes priority over this page.'] },
  { heading: 'Content', body: ['Unless stated otherwise, the writing, design, and tools on this site belong to Usman Khizar. You may link to and quote short passages with credit. Product names and logos belong to their owners.'] },
  { heading: 'Links to other sites', body: ['This site links to other websites. I am not responsible for their content or how they handle your data.'] },
  { heading: 'Changes and contact', body: ['I may update these terms, and the date above shows the latest version. Questions: hello@usmankhizar.com.'] },
]

export default function TermsPage() {
  return <LegalPage title="Terms of Use" sections={sections} />
}
