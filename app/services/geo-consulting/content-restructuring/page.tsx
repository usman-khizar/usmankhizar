import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Content Restructuring for GEO | Usman Khizar',
  description: 'Restructure existing content with answer-first formatting, definitions, and direct answers that AI systems cite. GEO content restructuring for ChatGPT and Perplexity visibility.',
  openGraph: {
    title: 'Content Restructuring for GEO | Usman Khizar',
    description: 'Restructure existing content so AI systems like ChatGPT and Perplexity cite it as a source.',
    url: 'https://usmankhizar.com/services/geo-consulting/content-restructuring',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Restructuring for GEO | Usman Khizar',
    description: 'Restructure existing content so AI systems cite it.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/geo-consulting/content-restructuring' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is GEO content restructuring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO content restructuring is the process of reformatting existing pages with answer-first structure, clear definitions, statistics, and direct answers that make it easier for AI systems to extract and cite your content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does content restructuring require rewriting everything?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Most restructuring work involves repositioning existing information, adding direct answer blocks, and improving formatting — not rewriting the core content from scratch.',
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
    { '@type': 'ListItem', position: 4, name: 'Content Restructuring', item: 'https://usmankhizar.com/services/geo-consulting/content-restructuring' },
  ],
}

export default function ContentRestructuringPage() {
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
              Content Restructuring for AI Citation
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Most sites already have the content AI systems want to cite. The problem is formatting. Content restructuring reformats existing pages with direct answers, clear definitions, and answer-first structure that makes extraction easy for ChatGPT, Perplexity, and AI Overviews.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Content Restructuring Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Answer-First Formatting</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Reposition the direct answer to each question at the top of the relevant section — the single highest-impact change for AI citation eligibility.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Definition Blocks</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Add concise, clearly attributed definitions for key terms and concepts — a format AI systems consistently favour for direct answers and knowledge panel content.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Statistics and Sourcing</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Incorporate cited statistics, data points, and expert references that increase factual specificity — a key signal in AI source selection.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Schema and Semantic Markup</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Add FAQ schema, Article schema, and semantic HTML signals that help AI crawlers classify content as reliable and extractable. Feeds directly into the <Link href="/services/geo-consulting/geo-readiness-audit" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO readiness audit</Link> recommendations.
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
              { q: 'What is GEO content restructuring?', a: 'GEO content restructuring is the process of reformatting existing pages with answer-first structure, clear definitions, statistics, and direct answers that make it easier for AI systems to extract and cite your content.' },
              { q: 'Does content restructuring require rewriting everything?', a: 'No. Most restructuring work involves repositioning existing information, adding direct answer blocks, and improving formatting — not rewriting the core content from scratch.' },
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
              Ready to make your content citable?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Content restructuring is part of the full <Link href="/services/geo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO consulting</Link> process — typically the highest-impact first step after the readiness audit.
            </p>
            <Link href="/contact" className="btn-primary">Start Content Restructuring →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}