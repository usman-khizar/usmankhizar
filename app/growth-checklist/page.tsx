import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Checklist from '@/components/lead/Checklist'
import { checkCount } from '@/lib/checklist'

const description = `${checkCount} checks across brand, website, search, CRM, automation, and social to find where your marketing is leaking leads.`

export const metadata: Metadata = {
  title: 'The Growth Checklist',
  description,
  openGraph: { images: ogImages, title: 'The Growth Checklist', description, url: 'https://usmankhizar.com/growth-checklist' },
  alternates: { canonical: 'https://usmankhizar.com/growth-checklist' },
  // Offered in exchange for an email, so it stays out of search results.
  robots: { index: false, follow: true },
}

export default function GrowthChecklistPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64, backgroundColor: '#FAF8F4' }}>
        <div className="check-page">
          <h1 className="section-title">The Growth Checklist</h1>
          <p className="check-intro">{description} It takes about ten minutes.</p>
          <Checklist />
        </div>
      </main>
      <Footer />
    </>
  )
}
