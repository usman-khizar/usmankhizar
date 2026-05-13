import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Content Strategy | Usman Khizar',
  description: 'SEO content strategy that turns keyword research and topical relevance into pages that rank for the right search intent.',
  openGraph: {
    title: 'Content Strategy | Usman Khizar',
    description: 'SEO content strategy that turns keyword research and topical relevance into pages that rank.',
    url: 'https://usmankhizar.com/services/seo-consulting/content-strategy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Strategy | Usman Khizar',
    description: 'SEO content strategy that turns keyword research and topical relevance into pages that rank.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/seo-consulting/content-strategy' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SEO content strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO content strategy is the planning and optimisation of content to match keyword intent, topical relevance, and user needs across the search ecosystem.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does content strategy improve rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By aligning keyword research, content depth, and semantic keywords to search intent, a content strategy helps search engines understand which pages should rank for specific queries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does content strategy require more pages or deeper pages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on intent. Some topics need deeper pages, while others need broader topical coverage. The right choice comes from gap analysis and content planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the role of keyword density in content strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keyword density is a supporting signal, not a target. The page should use semantic keywords naturally while maintaining readability and topical relevance.',
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
    { '@type': 'ListItem', position: 3, name: 'SEO Consulting', item: 'https://usmankhizar.com/services/seo-consulting' },
    { '@type': 'ListItem', position: 4, name: 'Content Strategy', item: 'https://usmankhizar.com/services/seo-consulting/content-strategy' },
  ],
}

export default function ContentStrategyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">Content Strategy</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              SEO Content Strategy for Search-Driven Growth
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              SEO content strategy is the planning and optimisation of content to match keyword intent, topical relevance, and user needs across the search ecosystem.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginTop: '1rem' }}>
              I design campaigns that close content gaps, strengthen page authority, and make every article, service page, and blog post align with what people are actually searching for.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Content Strategy Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Keyword Research & Gap Analysis</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Identify the search intent behind every opportunity and close content gaps with pages built around topical relevance. This complements <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>on-page SEO optimisation</Link>.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Semantic Keyword Mapping</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Use semantic keywords and entity optimisation to make your pages easier for search engines and AI systems to classify while avoiding keyword cannibalisation.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Content Depth Planning</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Match page authority to intent by deciding when to publish deeper pillar pages and when to focus on specific long-tail topics with <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>link building and authority</Link> in mind.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Content Briefs & Execution</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Deliver briefs built to satisfy search intent, readability, and discoverability — the same approach I use for every technical and on-page optimisation project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How Content Strategy Works
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Research', desc: 'Map keywords, search intent, and competitor content to understand what should rank.' },
                { title: 'Plan', desc: 'Build a content plan that balances depth, authority, and topical relevance.' },
                { title: 'Produce', desc: 'Create pages with the right structure, keyword usage, and internal linking.' },
                { title: 'Measure', desc: 'Track performance and update the strategy based on rankings and engagement.' },
              ].map((step, index) => (
                <div key={step.title} className="card-base" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, minHeight: 48, borderRadius: 100, backgroundColor: '#C4533A', color: '#FFF', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 700, fontSize: '1rem' }}>{index + 1}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Why SEO Content Strategy Matters
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              SEO content strategy starts with keyword density and search intent, but it succeeds through topical relevance, readability, and entity optimisation. That means each page answers a real search query clearly and naturally.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Title tags and meta descriptions are the first chance to signal intent, while heading structure and semantic keywords help both Google and AI systems understand the page. Good content depth reflects the topic comprehensively without becoming confusing.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Anchor text and internal linking shape page authority flow and prevent keyword cannibalisation. That is why content strategy must be built hand in hand with <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>technical SEO foundations</Link> and the broader <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>on-page SEO optimisation</Link> process.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              When the right topics are planned, the right pages are built, and the right internal links are in place, every page becomes a stronger part of the overall SEO consulting services roadmap.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is SEO content strategy?', a: 'SEO content strategy is the planning and optimisation of content to match keyword intent, topical relevance, and user needs across the search ecosystem.' },
              { q: 'How does content strategy improve rankings?', a: 'By aligning keyword research, content depth, and semantic keywords to search intent, a content strategy helps search engines understand which pages should rank for specific queries.' },
              { q: 'Does content strategy require more pages or deeper pages?', a: 'It depends on intent. Some topics need deeper pages, while others need broader topical coverage. The right choice comes from gap analysis and content planning.' },
              { q: 'What is the role of keyword density in content strategy?', a: 'Keyword density is a supporting signal, not a target. The page should use semantic keywords naturally while maintaining readability and topical relevance.' },
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
              Ready to turn strategy into traffic?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              I create the SEO content strategy that connects keyword research, page authority, and the full-stack search marketing plan your business needs.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              This is the work that links <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO consulting services</Link>, <Link href="/services" style={{ color: '#C4533A', textDecoration: 'none' }}>full-stack search marketing</Link>, and a tested search marketer approach.
            </p>
            <Link href="/contact" className="btn-primary">Start with a Content Strategy Review →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
