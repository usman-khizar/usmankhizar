import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'AEO Consulting | Usman Khizar',
  description: 'AEO consulting for featured snippets, AI Overviews, and zero-click results. Answer Engine Optimisation to structure content for direct answers.',
  openGraph: {
    title: 'AEO Consulting | Usman Khizar',
    description: 'AEO consulting for featured snippets, AI Overviews, and zero-click results. Answer Engine Optimisation.',
    url: 'https://usmankhizar.com/services/aeo-consulting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AEO Consulting | Usman Khizar',
    description: 'AEO consulting for featured snippets, AI Overviews, and zero-click results.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/aeo-consulting' },
}

const aeoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AEO Consulting',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'Answer Engine Optimisation consulting for featured snippets, AI Overviews, and zero-click search results.',
  url: 'https://usmankhizar.com/services/aeo-consulting',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://usmankhizar.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://usmankhizar.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AEO Consulting',
      item: 'https://usmankhizar.com/services/aeo-consulting',
    },
  ],
}

export default function AEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">AEO Consulting</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              AEO Consulting: Be the Answer, Not Just a Result
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 620 }}>
              Search is moving from ten blue links to direct answers. AEO is the practice of structuring content so that search engines — and AI — pull it as the definitive answer to a question.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Featured Snippet Optimisation', desc: 'Identify high-value snippet opportunities and structure content to win the featured position.' },
              { title: 'Schema Markup', desc: 'FAQ, HowTo, Article, and Person schema implemented correctly to signal structure to search engines.' },
              { title: 'Question-Based Content', desc: 'Map search intent to direct-answer content that satisfies both users and AI answer engines.' },
              { title: 'Voice & Conversational Search', desc: 'Optimise for the natural-language queries that dominate voice and AI assistant search.' },
            ].map((item) => (
              <div key={item.title} className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto mt-10 text-center">
            <Link href="/contact" className="btn-primary">Get an AEO Strategy →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
