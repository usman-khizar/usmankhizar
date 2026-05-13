import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Entity Building for GEO | Usman Khizar',
  description: 'Build entity authority so AI systems like ChatGPT and Perplexity recognise and cite your brand. Entity building as part of a GEO consulting strategy.',
  openGraph: {
    title: 'Entity Building for GEO | Usman Khizar',
    description: 'Build entity authority so AI systems recognise and cite your brand across AI search surfaces.',
    url: 'https://usmankhizar.com/services/geo-consulting/entity-building',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entity Building for GEO | Usman Khizar',
    description: 'Build entity authority for AI citation.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/geo-consulting/entity-building' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is entity building in GEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entity building in GEO is the process of establishing consistent, credible mentions of your brand across the web so AI systems recognise you as an authoritative entity on specific topics and cite you in generated answers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is entity building different from link building?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Link building targets backlinks for SEO ranking signals. Entity building targets brand mentions, citations, and consistent entity references across authoritative sources — the signals AI systems use to identify citable sources.',
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
    { '@type': 'ListItem', position: 4, name: 'Entity Building', item: 'https://usmankhizar.com/services/geo-consulting/entity-building' },
  ],
}

export default function EntityBuildingPage() {
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
              Entity Building: Make AI Systems Recognise Your Brand
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              AI systems cite entities they recognise. Entity building creates the consistent, cross-platform brand presence that makes your business legible to AI models as an authoritative source on specific topics.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Entity Building Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Brand Entity Consistency</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Ensure your brand name, description, and topical associations appear consistently across your site, social profiles, and third-party platforms — the pattern AI systems use to build entity recognition.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Topical Authority Development</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Build a consistent presence on the specific topics you want to own in AI search — through structured content, external mentions, and editorial coverage. Works alongside <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO authority building</Link>.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Schema and Structured Identity</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Implement Person, Organisation, and Brand schema that gives AI crawlers a structured definition of who you are and what you are an authority on.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Citation Baseline Tracking</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Measure entity recognition progress through <Link href="/services/geo-consulting/citation-monitoring" style={{ color: '#C4533A', textDecoration: 'none' }}>citation monitoring</Link> — validating that entity building efforts translate into AI appearances.
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
              { q: 'What is entity building in GEO?', a: 'Entity building in GEO is the process of establishing consistent, credible mentions of your brand across the web so AI systems recognise you as an authoritative entity on specific topics and cite you in generated answers.' },
              { q: 'How is entity building different from link building?', a: 'Link building targets backlinks for SEO ranking signals. Entity building targets brand mentions, citations, and consistent entity references across authoritative sources — the signals AI systems use to identify citable sources.' },
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
              Ready to build entity authority?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Entity building is the long-term foundation of <Link href="/services/geo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO consulting</Link> — start with a <Link href="/services/geo-consulting/geo-readiness-audit" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO readiness audit</Link> to understand your current entity baseline.
            </p>
            <Link href="/contact" className="btn-primary">Start Entity Building →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}