import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Featured Snippet Optimisation | Usman Khizar',
  description: 'Featured snippet optimisation for zero-click visibility, People Also Ask and AI answer surfaces. AEO consulting that wins position zero on Google and AI overviews.',
  openGraph: {
    title: 'Featured Snippet Optimisation | Usman Khizar',
    description: 'Featured snippet optimisation for zero-click visibility, People Also Ask and AI answer surfaces.',
    url: 'https://usmankhizar.com/services/aeo-consulting/featured-snippet-optimisation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Featured Snippet Optimisation | Usman Khizar',
    description: 'AEO consulting for featured snippets, zero-click results and AI answer surfaces.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/aeo-consulting/featured-snippet-optimisation' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is featured snippet optimisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Featured snippet optimisation is the process of structuring content, answer blocks, and page markup so search engines are more likely to select it as the zero-click answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I improve People Also Ask visibility?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Improve People Also Ask visibility by writing clear question-and-answer content, using strong subheadings, and aligning the page with search intent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does featured snippet optimisation help AI answers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Featured snippet optimisation helps AI systems identify concise answers, which improves your chances of being cited in ChatGPT, Perplexity, and other answer engines.',
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
    { '@type': 'ListItem', position: 4, name: 'Featured Snippet Optimisation', item: 'https://usmankhizar.com/services/aeo-consulting/featured-snippet-optimisation' },
  ],
}

export default function FeaturedSnippetOptimisationPage() {
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
              Featured Snippet Optimisation for Zero-Click Search
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              I optimise content so search engines and AI answer systems are more likely to choose it as the featured answer. That means more visibility, traffic, and authority from the exact phrases people are asking.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Featured Snippet Optimisation Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Snippet Opportunity Mapping</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Identify the exact questions, keywords, and answer formats where your site can win featured snippets, People Also Ask, and direct-answer visibility.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Answer Block Design</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Create concise answer blocks, tables, and bullet lists that are easy for search engines and AI to extract as definitive responses.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Intent Alignment</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Align your page with the searcher’s intent, from informational discovery to commercial research, so the featured snippet is both accurate and click-worthy.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Sister Content Integration</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Combine featured snippet targeting with question-based content and schema markup for the full AEO stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How the process works
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { step: 'Research', text: 'Find the questions and keyword patterns where featured snippets and AI answer surfaces are already pulling results.' },
                { step: 'Structure', text: 'Build crisp answer sections, bullet lists, and summary paragraphs that satisfy direct-answer extraction.' },
                { step: 'Schema', text: 'Add the right structured data and HTML semantics to help engines understand the content hierarchy.' },
                { step: 'Monitor', text: 'Track featured snippet movement, People Also Ask triggers, and answer engine citations.' },
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
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is a featured snippet?', a: 'A featured snippet is the answer box at the top of Google search, often pulled from content with clear structure and concise answers.' },
              { q: 'How fast can I see featured snippet improvements?', a: 'You can often see movement in a few weeks after restructuring the content and updating markup, but results vary depending on competition.' },
              { q: 'Do AI answer engines use featured snippets?', a: 'Yes, AI answer engines often rely on the same concise answers and structured content that win featured snippets.' },
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
              Want to win position zero?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              This featured snippet work is part of the broader <Link href="/services/aeo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>AEO consulting strategy</Link>, which also includes schema markup and question-based content.
            </p>
            <Link href="/contact" className="btn-primary">Book a Featured Snippet Review →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
