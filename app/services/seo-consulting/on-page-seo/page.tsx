import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'On-Page SEO Specialist | Usman Khizar',
  description: 'Turn underperforming pages into ranking pages with on-page SEO strategy, heading hierarchy, and internal linking that reinforces topical relevance.',
  openGraph: {
    title: 'On-Page SEO Specialist | Usman Khizar',
    description: 'Turn underperforming pages into ranking pages with on-page SEO strategy, heading hierarchy, and internal linking.',
    url: 'https://usmankhizar.com/services/seo-consulting/on-page-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Page SEO Specialist | Usman Khizar',
    description: 'Turn underperforming pages into ranking pages with on-page SEO strategy, heading hierarchy, and internal linking.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/seo-consulting/on-page-seo' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is on-page SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On-page SEO is the practice of optimising individual pages so search engines understand the topic, intent, and relevance of each page — covering title tags, heading structure, content depth, internal links, and keyword placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important on-page SEO factor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Search intent alignment. A page can be technically perfect but rank poorly if it targets the wrong intent. Every on-page optimisation starts with understanding what the searcher actually wants to find.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can on-page SEO be fixed without rewriting content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most structural improvements — title tags, headings, internal links — do not require touching the core copy. Where content gaps exist, I brief additions rather than full rewrites.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly do on-page changes affect rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most pages see movement within 4–8 weeks of changes being crawled and indexed.',
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
    { '@type': 'ListItem', position: 4, name: 'On-Page SEO', item: 'https://usmankhizar.com/services/seo-consulting/on-page-seo' },
  ],
}

export default function OnPageSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">On-Page SEO</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              On-Page SEO Specialist: Turning Good Pages Into Ranking Pages
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              On-page SEO is the practice of optimising individual pages so search engines understand the topic, intent, and relevance of each page — covering title tags, heading structure, content depth, internal links, and keyword placement.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginTop: '1rem' }}>
              Most pages fail to rank not because the content is bad — but because the structure sends the wrong signals. I fix title tags, heading hierarchy, internal linking, and content depth so search engines understand exactly what each page is about and why it deserves to rank.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What On-Page SEO Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Title Tag & Meta Optimisation</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Keyword-led titles under 60 characters. Meta descriptions built for click-through rate. The first signals search engines see — and the ones most sites get wrong. Built on solid <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>technical SEO foundations</Link>.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Heading Hierarchy</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  H1, H2, H3 structured around primary and secondary keywords. Semantic signals on every page that align with search intent and support broader <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO content strategy</Link>.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Internal Linking Architecture</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Connect pages with contextual anchor text that passes authority and matches user intent — the bridge between on-page SEO and your broader <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>link building and authority</Link> strategy.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Content Depth Audit</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Identify what your top-ranking competitors cover that you don't — and close the gap with a targeted <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO content strategy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How On-Page SEO Works
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Audit', desc: 'Page-by-page review of every on-page ranking signal.' },
                { title: 'Map', desc: 'Keyword-to-page mapping to eliminate cannibalisation.' },
                { title: 'Optimise', desc: 'Implement structural changes with copy preserved.' },
                { title: 'Test', desc: 'Monitor ranking movement within 4–8 weeks in GSC.' },
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
              How Structure Affects Search Intent
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Search intent and on-page structure are inseparable. When your title tags, meta descriptions, and heading hierarchy reflect semantic keywords and topical relevance, your page tells Google and LLMs exactly who it is written for.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Heading structure and entity optimisation create logical content flow. H1, H2, H3 tags build trust signals, while readability and content depth keep people on the page and reduce bounce signals.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Internal linking uses anchor text to reinforce page authority, support topical relevance, and avoid keyword cannibalisation. This is the link between content gaps, page authority, and long-term rankings.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              That is why the best pages combine on-page SEO with <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>technical SEO foundations</Link> and a broader <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO content strategy</Link>, all within the same SEO consulting services framework.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is on-page SEO?', a: 'On-page SEO is the practice of optimising individual pages so search engines understand the topic, intent, and relevance of each page — covering title tags, heading structure, content depth, internal links, and keyword placement.' },
              { q: 'What is the most important on-page SEO factor?', a: 'Search intent alignment. A page can be technically perfect but rank poorly if it targets the wrong intent. Every on-page optimisation starts with understanding what the searcher actually wants to find.' },
              { q: 'Can on-page SEO be fixed without rewriting content?', a: 'Yes. Most structural improvements — title tags, headings, internal links — do not require touching the core copy. Where content gaps exist, I brief additions rather than full rewrites.' },
              { q: 'How quickly do on-page changes affect rankings?', a: 'Most pages see movement within 4–8 weeks of changes being crawled and indexed.' },
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
              Ready to improve your pages?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              I work with a search marketer mindset to connect page authority, topical relevance, and the full-stack search marketing approach your business needs.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Link back to <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO consulting services</Link>, <Link href="/services" style={{ color: '#C4533A', textDecoration: 'none' }}>full-stack search marketing</Link>, and the single best <Link href="/" style={{ color: '#C4533A', textDecoration: 'none' }}>search marketer</Link> for your business.
            </p>
            <Link href="/contact" className="btn-primary">Start with an On-Page Audit →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
