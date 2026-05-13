import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Technical SEO Consultant | Usman Khizar',
  description: 'Fix the crawlability, Core Web Vitals, and structured data issues blocking your rankings. Technical SEO audit and implementation for founders and growing businesses.',
  openGraph: {
    title: 'Technical SEO Consultant | Usman Khizar',
    description: 'Fix the crawlability, Core Web Vitals, and structured data issues blocking your rankings.',
    url: 'https://usmankhizar.com/services/seo-consulting/technical-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Consultant | Usman Khizar',
    description: 'Fix crawlability, Core Web Vitals, and structured data issues blocking your rankings.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/seo-consulting/technical-seo' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is technical SEO and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Technical SEO is the process of optimising your website\'s infrastructure so search engines can crawl, index, and rank your pages correctly. Without it, even the best content cannot reach its ranking potential.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a technical SEO audit cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full technical SEO audit covers crawl errors, redirect chains, Core Web Vitals, structured data, XML sitemap health, robots.txt configuration, canonical tags, mobile-first indexing, and duplicate content issues — prioritised by ranking impact.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a technical SEO audit take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically 5–7 working days depending on site size. You receive a prioritised report with each fix ranked by its expected impact on rankings and crawl efficiency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical SEO if my content is good?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Good content on a technically broken site will not rank. Crawl budget issues, duplicate content, and poor Core Web Vitals actively suppress rankings regardless of content quality.',
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
    { '@type': 'ListItem', position: 4, name: 'Technical SEO', item: 'https://usmankhizar.com/services/seo-consulting/technical-seo' },
  ],
}

export default function TechnicalSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">Technical SEO</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Technical SEO Consultant for Founders & Growing Businesses
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Technical SEO is the foundation layer of any ranking strategy: it makes sure search engines can crawl, index, and understand your site before content and links are even considered.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginTop: '1rem' }}>
              Rankings start with a site search engines can actually crawl. I audit the technical foundations — crawlability, Core Web Vitals, structured data, and indexability — so your content has every opportunity to rank before a single word is written.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Technical SEO Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Full Crawl Analysis</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Surface every crawl error, redirect chain, and orphaned page blocking your rankings. Pairs with <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>on-page SEO optimisation</Link> once the foundations are clean.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Core Web Vitals Optimisation</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Fix LCP, CLS, and FID issues that hurt both rankings and user experience so your site loads fast and stays stable under real traffic.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Structured Data Implementation</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Add the schema signals that help search engines and AI systems understand your content. Essential groundwork before any <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO content strategy</Link> compounds.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Indexability Audit</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Ensure the right pages are indexed, the wrong pages are blocked, and nothing is cannibalising your rankings. This is the first step before <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>authority building and link acquisition</Link> can pay off.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How Technical SEO Works
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Crawl', desc: 'Full site crawl using Screaming Frog and GSC data to map every page, URL, and error.' },
                { title: 'Diagnose', desc: 'Prioritised issue list ranked by ranking impact so fixes drive measurable improvement.' },
                { title: 'Fix', desc: 'Direct implementation or developer briefs with exact specifications for every issue.' },
                { title: 'Monitor', desc: 'Track improvements in GSC, Core Web Vitals, and crawl coverage reports over time.' },
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
              Why Technical SEO Is the Foundation
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Technical SEO is the foundation layer because it controls crawl budget, robots.txt rules, XML sitemap health, and canonical tags before content ever competes. If search engines cannot trust your infrastructure, page speed, mobile-first indexing, and indexability issues will stop every other effort from scaling.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Redirect chains and duplicate content silently drain authority, and only log file analysis reveals what crawlers actually see versus what developers assume. Every misconfigured hreflang, redirect, or canonical tag creates friction that costs visibility.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Structured data and schema markup connect the site architecture to both traditional rankings and GEO citation signals. When search engines and AI systems can read your data clearly, your pages compete better in Google, ChatGPT, Perplexity, and AI Overviews.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              This is why I recommend full-stack search marketing on <Link href="/services" style={{ color: '#C4533A', textDecoration: 'none' }}>full-stack search marketing</Link>, with on-page SEO optimisation at <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>on-page SEO optimisation</Link> once your technical foundation is clean.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              {
                q: 'What is technical SEO and why does it matter?',
                a: 'Technical SEO is the process of optimising your website\'s infrastructure so search engines can crawl, index, and rank your pages correctly. Without it, even the best content cannot reach its ranking potential.',
              },
              {
                q: 'What does a technical SEO audit cover?',
                a: 'A full technical SEO audit covers crawl errors, redirect chains, Core Web Vitals, structured data, XML sitemap health, robots.txt configuration, canonical tags, mobile-first indexing, and duplicate content issues — prioritised by ranking impact.',
              },
              {
                q: 'How long does a technical SEO audit take?',
                a: 'Typically 5–7 working days depending on site size. You receive a prioritised report with each fix ranked by its expected impact on rankings and crawl efficiency.',
              },
              {
                q: 'Do I need technical SEO if my content is good?',
                a: 'Yes. Good content on a technically broken site will not rank. Crawl budget issues, duplicate content, and poor Core Web Vitals actively suppress rankings regardless of content quality.',
              },
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
              Ready for a technical SEO audit?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Speak with a search marketer who understands the entire stack. This is the kind of work that links SEO consulting services, full-stack search marketing, and the technical foundation that makes every other ranking signal matter.
            </p>
            <Link href="/contact" className="btn-primary">Book a Technical SEO Audit →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
