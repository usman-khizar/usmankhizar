import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'GEO Consulting | Usman Khizar',
  description: 'GEO consulting services to get your brand cited by ChatGPT, Perplexity, and Google AI Overviews. Generative Engine Optimisation for AI-powered search.',
  openGraph: {
    title: 'GEO Consulting | Usman Khizar',
    description: 'GEO consulting services to get your brand cited by ChatGPT, Perplexity, and Google AI Overviews. Generative Engine Optimisation.',
    url: 'https://usmankhizar.com/services/geo-consulting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO Consulting | Usman Khizar',
    description: 'GEO consulting services to get your brand cited by ChatGPT, Perplexity, and Google AI Overviews.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/geo-consulting' },
}

const geoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GEO Consulting',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'Generative Engine Optimisation consulting to get your brand cited by ChatGPT, Perplexity, and Google AI Overviews.',
  url: 'https://usmankhizar.com/services/geo-consulting',
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
      name: 'GEO Consulting',
      item: 'https://usmankhizar.com/services/geo-consulting',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is generative engine optimisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generative engine optimisation (GEO) is the practice of structuring content so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite your brand as a source. Unlike traditional SEO which targets rankings, GEO targets citations in AI-generated answers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is GEO different from SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO optimises for search engine rankings. GEO optimises for AI citations. The signals are different — GEO prioritises entity clarity, structured answers, factual specificity, and topical authority over backlinks and keyword density.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does GEO take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citations in AI systems can appear within 4–8 weeks for well-structured content on sites with existing authority. New domains take longer as entity recognition builds over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need GEO if I already do SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI search is capturing a growing share of queries that previously went to Google. Sites optimising only for traditional search are losing visibility to competitors who appear in AI answers.',
      },
    },
  ],
}

export default function GEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(geoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* ── Hero ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">GEO Consulting</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              GEO Consulting: Get Cited by ChatGPT, Perplexity & AI Overviews
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 620 }}>
              Generative Engine Optimisation (GEO) is the practice of structuring your content so AI systems reference and cite you. As AI-powered search captures a growing share of queries, GEO is no longer optional — it's the next layer of search strategy.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        {/* ── What GEO Consulting Includes ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              What GEO Consulting Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'GEO Readiness Audit', desc: 'Assess how citable your existing content is to AI systems. Identify gaps in structure, authority signals, and topical depth.' },
                { title: 'Content Restructuring', desc: 'Reformat existing content with clear definitions, statistics, expert quotes, and direct answers that AI systems pull from.' },
                { title: 'Citation Monitoring', desc: 'Track whether your brand appears in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews.' },
              ].map((item) => (
                <div key={item.title} className="card-base">
                  <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/contact" className="btn-primary">Start with a GEO Audit →</Link>
            </div>

            {/* Sub-page navigation buttons */}
            <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Link href="/services/geo-consulting/geo-readiness-audit" className="btn-secondary w-full justify-center">GEO Readiness Audit</Link>
              <Link href="/services/geo-consulting/content-restructuring" className="btn-secondary w-full justify-center">Content Restructuring</Link>
              <Link href="/services/geo-consulting/citation-monitoring" className="btn-secondary w-full justify-center">Citation Monitoring</Link>
              <Link href="/services/geo-consulting/entity-building" className="btn-secondary w-full justify-center">Entity Building</Link>
            </div>
          </div>
        </section>

        {/* ── Why GEO Is No Longer Optional ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Why Generative Engine Optimisation Matters in 2026
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              The search landscape is changing faster than most businesses realise. AI search now accounts for a growing share of queries that previously went to traditional search results — and AI systems like ChatGPT, Perplexity, and Google AI Overviews do not rank pages. They cite them.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              This distinction matters. Large language models and AI crawlers use information retrieval logic that is fundamentally different from Google's traditional algorithm. Backlinks and keyword density are weak signals for AI citation. What counts is entity authority, structured content, factual specificity, and the kind of authoritative sources that appear consistently across multiple credible contexts.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Zero-click search has existed since Google introduced featured snippets, but the rise of generative AI has made it the dominant format. Training data and real-time retrieval both favour content that is dense, specific, and clearly attributed to a recognised entity. Citation signals for AI systems include consistent entity mentions across the web, structured definitions and direct answers, schema-marked content, and a pattern of being referenced by other authoritative sources.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              Brands that build these signals now are doing for AI search what early SEOs did for Google in 2005 — establishing presence in a channel before most competitors even know the rules have changed.
            </p>
          </div>
        </section>

        {/* ── GEO vs SEO ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              GEO vs SEO: What Changes and What Stays the Same
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Header row */}
              <div style={{ backgroundColor: '#C4533A', borderRadius: '8px 8px 0 0', padding: '0.75rem 1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '0.95rem', color: '#FAF8F4' }}>GEO</p>
              </div>
              <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px 8px 0 0', padding: '0.75rem 1.25rem' }}>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '0.95rem', color: '#FAF8F4' }}>SEO</p>
              </div>
              {/* Rows */}
              {[
                { label: 'Goal', geo: 'Get cited by AI systems', seo: 'Rank in search results' },
                { label: 'Signal', geo: 'Entity clarity + structured answers', seo: 'Backlinks + on-page keywords' },
                { label: 'Surface', geo: 'ChatGPT, Perplexity, AI Overviews', seo: 'Google, Bing SERPs' },
                { label: 'Content format', geo: 'Direct answers, definitions, facts', seo: 'Long-form, keyword-optimised' },
                { label: 'Speed', geo: 'Citation possible in weeks', seo: 'Rankings take months' },
              ].map((row) => (
                <>
                  <div key={`geo-${row.label}`} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E2D9', padding: '0.9rem 1.25rem' }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', color: '#C4533A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>{row.label}</p>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.92rem', color: '#1A1A1A' }}>{row.geo}</p>
                  </div>
                  <div key={`seo-${row.label}`} style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E2D9', padding: '0.9rem 1.25rem' }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', color: '#5C5248', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>{row.label}</p>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.92rem', color: '#1A1A1A' }}>{row.seo}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Makes Content Citable ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Actually Makes a Page Get Cited by ChatGPT or Perplexity
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              AI systems select sources based on extractable quality signals that differ from traditional ranking factors. Answer-first structure — putting the direct response to a question in the opening sentence — makes it significantly easier for AI models to extract and cite your content. Pages that bury the answer beneath a long preamble are passed over regardless of how authoritative the domain is.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Entity mentions throughout the page build the topical depth that AI systems use to classify a source as authoritative on a given subject. Authoritative attribution — statistics with named sources, expert quotes, and factual specificity — signals the kind of reliability that AI models prioritise when selecting citations. Schema markup helps AI crawlers classify your content correctly; FAQ schema, Article schema, and Person schema all contribute to citation eligibility.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              llms.txt signals provide a direct interface for AI systems to understand your site's content structure and preferred citation format. This work overlaps significantly with both <Link href="/services/aeo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>AEO consulting</Link> and <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO consulting services</Link> — the same content structure that wins featured snippets also wins AI citations.
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
              { q: 'What is generative engine optimisation?', a: 'Generative engine optimisation (GEO) is the practice of structuring content so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite your brand as a source. Unlike traditional SEO which targets rankings, GEO targets citations in AI-generated answers.' },
              { q: 'How is GEO different from SEO?', a: 'SEO optimises for search engine rankings. GEO optimises for AI citations. The signals are different — GEO prioritises entity clarity, structured answers, factual specificity, and topical authority over backlinks and keyword density.' },
              { q: 'How long does GEO take to show results?', a: 'Citations in AI systems can appear within 4–8 weeks for well-structured content on sites with existing authority. New domains take longer as entity recognition builds over time.' },
              { q: 'Do I need GEO if I already do SEO?', a: 'Yes. AI search is capturing a growing share of queries that previously went to Google. Sites optimising only for traditional search are losing visibility to competitors who appear in AI answers.' },
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