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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is answer engine optimisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer engine optimisation (AEO) is the practice of structuring content so search engines and AI systems extract and display it as a direct answer — in featured snippets, AI Overviews, voice results, and answer boxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between AEO and GEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AEO focuses on winning answer positions in traditional search interfaces — featured snippets, PAA boxes, and AI Overviews. GEO focuses on being cited by conversational AI systems like ChatGPT and Perplexity. The content signals overlap significantly but the target surfaces differ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does AEO hurt my click-through rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Featured snippets can reduce clicks for simple queries but significantly increase brand visibility and clicks for complex queries where users want more detail. The net effect on qualified traffic is typically positive.',
      },
    },
    {
      '@type': 'Question',
      name: 'What content changes are needed for AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Answer-first structure, FAQ sections with FAQPage schema, clear H2 and H3 headings framed as questions, direct definitions in the opening paragraph, and HowTo markup for process content.',
      },
    },
  ],
}

export default function AEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* ── Hero ── */}
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

        {/* ── Service cards + sub-page nav ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Featured Snippet Optimisation',
                desc: (
                  <>
                    Identify high-value snippet opportunities and structure content to win the featured position. <Link href="/services/aeo-consulting/featured-snippet-optimisation" style={{ color: '#C4533A', textDecoration: 'none' }}>Explore featured snippet optimisation</Link>.
                  </>
                ),
              },
              {
                title: 'Schema Markup',
                desc: (
                  <>
                    FAQ, HowTo, Article, and Person schema implemented correctly to signal structure to search engines. <Link href="/services/aeo-consulting/schema-markup" style={{ color: '#C4533A', textDecoration: 'none' }}>See the schema markup approach</Link>.
                  </>
                ),
              },
              {
                title: 'Question-Based Content',
                desc: (
                  <>
                    Map search intent to direct-answer content that satisfies both users and AI answer engines. <Link href="/services/aeo-consulting/question-based-content" style={{ color: '#C4533A', textDecoration: 'none' }}>Read about question-based content</Link>.
                  </>
                ),
              },
              {
                title: 'Voice & Conversational Search',
                desc: (
                  <>
                    Optimise for the natural-language queries that dominate voice and AI assistant search. <Link href="/services/aeo-consulting/voice-and-conversational-search" style={{ color: '#C4533A', textDecoration: 'none' }}>Discover the voice search strategy</Link>.
                  </>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem', textAlign: 'center' }}>
              AEO works best on top of a solid SEO foundation — see the <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO consulting page</Link> for the layer that makes AEO possible.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-6 text-center">
            <Link href="/contact" className="btn-primary">Get an AEO Strategy →</Link>
          </div>

          {/* Sub-page navigation buttons */}
          <div className="max-w-5xl mx-auto mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/services/aeo-consulting/featured-snippet-optimisation" className="btn-secondary">Featured Snippets</Link>
            <Link href="/services/aeo-consulting/schema-markup" className="btn-secondary">Schema Markup</Link>
            <Link href="/services/aeo-consulting/question-based-content" className="btn-secondary">Question-Based Content</Link>
            <Link href="/services/aeo-consulting/voice-and-conversational-search" className="btn-secondary">Voice Search</Link>
          </div>
        </section>

        {/* ── Why Direct Answers Win ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Answer Engine Optimisation: Why Direct Answers Win in 2026
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Search interfaces are shifting from ten blue links to direct answer surfaces. Featured snippets, AI Overviews, voice search results, and answer boxes all share the same mechanism: a search engine or AI system extracts a piece of content and presents it as the answer, without requiring the user to click through.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Zero-click search is not a threat to brands that structure content correctly — it is an opportunity. Appearing in featured snippets and AI Overviews builds brand recognition at the top of the SERP, even for queries that never result in a visit. The visibility drives trust, and the trust drives conversions on queries that do result in a click.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              The signals that win these positions are specific: question-based content structure, answer-first paragraphs, FAQ schema, HowTo schema, and precise formatting that matches the extraction logic of SERP features and AI answer systems. Schema markup is not optional — it is the layer that makes structured content readable as a direct answer by search engines and AI systems alike.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              AEO sits alongside <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO consulting services</Link> as a separate discipline with overlapping foundations. Well-structured, authoritative content does both. That is why <Link href="/services/geo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>GEO consulting</Link> — the layer above AEO targeting AI citations — becomes significantly easier when your answer optimisation is already in place.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is answer engine optimisation?', a: 'Answer engine optimisation (AEO) is the practice of structuring content so search engines and AI systems extract and display it as a direct answer — in featured snippets, AI Overviews, voice results, and answer boxes.' },
              { q: 'What is the difference between AEO and GEO?', a: 'AEO focuses on winning answer positions in traditional search interfaces — featured snippets, PAA boxes, and AI Overviews. GEO focuses on being cited by conversational AI systems like ChatGPT and Perplexity. The content signals overlap significantly but the target surfaces differ.' },
              { q: 'Does AEO hurt my click-through rate?', a: 'Featured snippets can reduce clicks for simple queries but significantly increase brand visibility and clicks for complex queries where users want more detail. The net effect on qualified traffic is typically positive.' },
              { q: 'What content changes are needed for AEO?', a: 'Answer-first structure, FAQ sections with FAQPage schema, clear H2 and H3 headings framed as questions, direct definitions in the opening paragraph, and HowTo markup for process content.' },
            ].map((faq) => (
              <div key={faq.q} className="card-base" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}