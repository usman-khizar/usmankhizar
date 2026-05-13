import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'AI Citation Monitoring | Usman Khizar',
  description: 'Track whether your brand is cited by ChatGPT, Perplexity, and Google AI Overviews. AI citation monitoring as part of a GEO strategy.',
  openGraph: {
    title: 'AI Citation Monitoring | Usman Khizar',
    description: 'Track whether your brand appears in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews.',
    url: 'https://usmankhizar.com/services/geo-consulting/citation-monitoring',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Citation Monitoring | Usman Khizar',
    description: 'Track your brand citations in AI-generated answers.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/geo-consulting/citation-monitoring' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI citation monitoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI citation monitoring is the process of systematically testing whether your brand, content, or products appear in AI-generated answers from systems like ChatGPT, Perplexity, and Google AI Overviews.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I monitor AI citations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly monitoring provides a clear baseline, while weekly spot checks are useful during periods of active GEO work to measure whether content changes are improving citation rates.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://usmankhizar.com/services' },
    { '@type': 'ListItem', position: 3, name: 'GEO Consulting', item: 'https://usmankhizar.com/services/geo-consulting' },
    { '@type': 'ListItem', position: 4, name: 'Citation Monitoring', item: 'https://usmankhizar.com/services/geo-consulting/citation-monitoring' },
  ],
}

export default function CitationMonitoringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">GEO Consulting</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              AI Citation Monitoring: Know When You're Being Cited
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              You can't improve what you don't measure. Citation monitoring tracks whether your brand appears in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews — giving you the data to validate GEO efforts and identify gaps.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Citation Monitoring Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Brand Mention Tracking</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Regular testing across key queries to identify when and where your brand appears in AI-generated answers — and when competitors are cited instead of you.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Query Coverage Analysis</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Map the queries where you appear as a source versus the queries where you should appear but don't — the gap that <Link href="/services/geo-consulting/content-restructuring" style={{ color: '#C4533A', textDecoration: 'none' }}>content restructuring</Link> and <Link href="/services/geo-consulting/entity-building" style={{ color: '#C4533A', textDecoration: 'none' }}>entity building</Link> address.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Competitor Citation Benchmarking</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Understand which competitors are being cited for your target queries and what content patterns are driving their AI visibility.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Monthly Reporting</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Plain-English reports showing citation trends, new appearances, and priority opportunities — tied directly back to the <Link href="/services/geo-consulting/geo-readiness-audit" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO readiness audit</Link> baseline.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is AI citation monitoring?', a: 'AI citation monitoring is the process of systematically testing whether your brand, content, or products appear in AI-generated answers from systems like ChatGPT, Perplexity, and Google AI Overviews.' },
              { q: 'How often should I monitor AI citations?', a: 'Monthly monitoring provides a clear baseline, while weekly spot checks are useful during periods of active GEO work to measure whether content changes are improving citation rates.' },
            ].map((faq) => (
              <div key={faq.q} className="card-base" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Ready to start tracking AI citations?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Citation monitoring is the measurement layer of the full <Link href="/services/geo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO consulting</Link> strategy — it turns effort into data.
            </p>
            <Link href="/contact" className="btn-primary">Set Up Citation Monitoring →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}