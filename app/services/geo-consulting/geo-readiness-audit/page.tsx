import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'GEO Readiness Audit | Usman Khizar',
  description: 'A GEO readiness audit assesses how citable your content is to AI systems like ChatGPT, Perplexity, and Google AI Overviews — and identifies the gaps to fix first.',
  openGraph: {
    title: 'GEO Readiness Audit | Usman Khizar',
    description: 'Assess how citable your content is to AI systems and identify the gaps limiting your AI search visibility.',
    url: 'https://usmankhizar.com/services/geo-consulting/geo-readiness-audit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Readiness Audit | Usman Khizar',
    description: 'Assess how citable your content is to AI systems.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/geo-consulting/geo-readiness-audit' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a GEO readiness audit cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A GEO readiness audit reviews your content structure, entity signals, schema markup, answer-first formatting, and topical depth to assess how likely AI systems are to cite your pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a GEO readiness audit take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A GEO readiness audit typically takes 5–7 working days and delivers a prioritised report with specific recommendations for improving AI citation eligibility.',
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
    { '@type': 'ListItem', position: 4, name: 'GEO Readiness Audit', item: 'https://usmankhizar.com/services/geo-consulting/geo-readiness-audit' },
  ],
}

export default function GEOReadinessAuditPage() {
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
              GEO Readiness Audit: Know Where You Stand With AI Search
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Before you can improve your AI citation rate, you need to understand your current baseline. A GEO readiness audit tells you exactly how citable your content is — and what is preventing AI systems from choosing you as a source.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What the GEO Readiness Audit Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Content Structure Analysis</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Review of answer-first formatting, definition clarity, and direct-answer blocks across your key pages — the elements AI systems use to identify citable content.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Entity Authority Assessment</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Evaluate how consistently your brand and topical entities appear across your site and the broader web — a key signal in AI citation selection. Connects to broader <Link href="/services/geo-consulting/entity-building" style={{ color: '#C4533A', textDecoration: 'none' }}>entity building strategy</Link>.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Schema Markup Review</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Audit existing structured data for completeness and accuracy — including FAQ, Article, Person, and any custom schema that signals content type to AI crawlers.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Prioritised Recommendations</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  A ranked action list covering <Link href="/services/geo-consulting/content-restructuring" style={{ color: '#C4533A', textDecoration: 'none' }}>content restructuring</Link>, schema additions, and authority signals — ordered by expected impact on citation rate.
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
              { q: 'What does a GEO readiness audit cover?', a: 'A GEO readiness audit reviews your content structure, entity signals, schema markup, answer-first formatting, and topical depth to assess how likely AI systems are to cite your pages.' },
              { q: 'How long does a GEO readiness audit take?', a: 'A GEO readiness audit typically takes 5–7 working days and delivers a prioritised report with specific recommendations for improving AI citation eligibility.' },
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
              Ready to see where you stand?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              The GEO readiness audit is the first step in the full <Link href="/services/geo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO consulting</Link> process.
            </p>
            <Link href="/contact" className="btn-primary">Book a GEO Readiness Audit →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}