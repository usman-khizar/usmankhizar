import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Schema Markup | Usman Khizar',
  description: 'Schema markup consulting for AEO and SEO. Implement FAQ, HowTo, Article and Person schema to improve visibility in search results and AI answer engines.',
  openGraph: {
    title: 'Schema Markup | Usman Khizar',
    description: 'Schema markup consulting for AEO and SEO. Improve visibility in search and AI answer engines with structured data.',
    url: 'https://usmankhizar.com/services/aeo-consulting/schema-markup',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schema Markup | Usman Khizar',
    description: 'Schema markup consulting for AEO and SEO.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/aeo-consulting/schema-markup' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does schema markup matter for AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Schema markup helps search engines and AI systems understand your content structure, which improves the chances of featured snippets and answer engine citations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which schema types are best for answer optimisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FAQ, HowTo, Article, and Person schema are commonly used for AEO, because they signal clear question-and-answer structure and author credibility.',
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
    { '@type': 'ListItem', position: 3, name: 'AEO Consulting', item: 'https://usmankhizar.com/services/aeo-consulting' },
    { '@type': 'ListItem', position: 4, name: 'Schema Markup', item: 'https://usmankhizar.com/services/aeo-consulting/schema-markup' },
  ],
}

export default function SchemaMarkupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">AEO Consulting</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Schema Markup for Answer Engine Optimisation
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Implement structured data that helps Google and AI answer systems recognise your page as the authoritative answer for search queries and direct-answer surfaces.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Schema Types That Power AEO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>FAQ Schema</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  FAQ schema helps search engines identify question-and-answer content quickly, making it easier to appear in both PAA and AI answer snippets.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Article Schema</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Article schema clarifies the content type, author, and publishing details, which is essential for answer engines and rich result eligibility.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>HowTo Schema</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  HowTo schema makes step-by-step guides easier to understand for answer engines and increases the odds of expanded search features.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Person Schema</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Person schema builds author credibility and helps search engines trust the content for answer engines and branded query results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How I implement schema markup
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { step: 'Audit', text: 'Assess existing markup and identify schema gaps for AEO, GEO, and traditional SEO.' },
                { step: 'Design', text: 'Choose the schema types that support your answer engine goals and brand signals.' },
                { step: 'Deploy', text: 'Implement structured data with clean, valid markup and semantic HTML.' },
                { step: 'Validate', text: 'Test on Google Rich Results, Schema.org, and AI answer compatibility.' },
              ].map((item, index) => (
                <div key={item.step} className="card-base" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, minHeight: 48, borderRadius: 100, backgroundColor: '#C4533A', color: '#FFF', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 700, fontSize: '1rem' }}>{index + 1}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{item.step}</h3>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              FAQs about schema and AEO
            </h2>
            {[
              { q: 'Does schema markup guarantee rich results?', a: 'No, schema markup does not guarantee rich results, but it increases the likelihood that search engines and AI systems will understand and display your content correctly.' },
              { q: 'Should I use FAQ or HowTo schema first?', a: 'Use the schema type that best matches the page’s content and search intent. FAQ schema is ideal for direct questions, while HowTo schema works well for step-by-step guides.' },
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
              Ready to add structure to your content?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Schema markup is one of the fastest ways to signal answer engines that your content is credible and ready for featured snippet and AI answer display.
            </p>
            <Link href="/contact" className="btn-primary">Start Schema Markup Optimisation →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
