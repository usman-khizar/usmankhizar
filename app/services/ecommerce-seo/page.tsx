import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeroSection from '@/components/sections/PageHeroSection'
import { SEOVisual } from '@/components/sections/HeroVisuals'
import PillTag from '@/components/ui/PillTag'

export const metadata: Metadata = {
  title: 'E-commerce SEO Specialist | Usman Khizar',
  description: 'E-commerce SEO specialist helping online stores rank product and category pages, fix crawlability issues, and outrank competitors on Google and AI search.',
  openGraph: {
    title: 'E-commerce SEO Specialist | Usman Khizar',
    description: 'E-commerce SEO specialist helping online stores rank product and category pages, fix crawlability issues, and outrank competitors on Google and AI search.',
    url: 'https://usmankhizar.com/services/ecommerce-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce SEO Specialist | Usman Khizar',
    description: 'E-commerce SEO specialist helping online stores rank product pages and build authority against established competitors.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/ecommerce-seo' },
}

const ecommerceServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-commerce SEO Specialist',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'E-commerce SEO specialist helping online stores rank product and category pages, fix crawlability issues, and build authority needed to outrank established competitors.',
  url: 'https://usmankhizar.com/services/ecommerce-seo',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'E-commerce SEO Specialist', item: 'https://usmankhizar.com/services/ecommerce-seo' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes e-commerce SEO different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'E-commerce SEO focuses on product and category page rankings, faceted navigation, canonicalisation, pagination, and building topical authority to compete against established retailers. High crawl efficiency and proper schema setup are critical.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you fix e-commerce crawlability issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I audit your site structure, parameter handling, pagination, and internal linking. Then I fix crawl budget waste, implement proper canonicalisation, and optimise faceted navigation so Google prioritises product and category pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you rank e-commerce products against established competitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I build topical authority through content strategy, internal linking, and authority building. I also optimise product pages for product reviews, ratings schema, and structured data that influence rankings and CTR.',
      },
    },
  ],
}

export default function EcommerceSeoSpecialistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="E-commerce SEO Specialist"
          title="E-commerce SEO Specialist"
          subtitle="I help e-commerce brands rank product and category pages, fix crawlability issues, and build the authority needed to outrank established competitors on Google and AI search."
          primaryCta={{ text: 'Get Audit', href: '/contact' }}
          visualElement={<SEOVisual />}
        />

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
                What E-commerce SEO Actually Requires
              </h2>
              <ul style={{ listStyle: 'disc inside', color: '#5C5248', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                <li><strong>Product page optimisation:</strong> keyword targeting, unique descriptions, schema markup, and internal linking that signal product relevance and authority.</li>
                <li><strong>Category page structure:</strong> proper hierarchy, faceted navigation, canonicalisation, and pagination setup to maximise crawl efficiency.</li>
                <li><strong>Technical SEO for crawl budget:</strong> fixing duplicate content, optimising site speed, and ensuring Google indexes your product and category pages first.</li>
                <li><strong>Authority building for e-commerce:</strong> earning backlinks, reviews, and mentions that help newer brands compete against established retailers.</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
                Most e-commerce sites waste crawl budget on duplicate product variations, redundant category pages, and poor internal linking. Fixing these unlocks rankings.
              </p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #C9BCA8', borderRadius: 28, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '1rem' }}>
                My E-commerce SEO Process
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { num: '01', title: 'Site Structure Audit', desc: 'Crawl analysis, duplicate content detection, pagination issues, and faceted navigation problems.' },
                  { num: '02', title: 'Product Page Strategy', desc: 'Keyword mapping, unique content guidelines, schema implementation, and internal linking plan.' },
                  { num: '03', title: 'Crawl Efficiency Fixes', desc: 'Canonicalisation setup, parameter handling, crawl budget prioritisation, and indexation fixes.' },
                  { num: '04', title: 'Authority & Rankings', desc: 'Backlink strategy, review schema implementation, and content that outranks established competitors.' },
                ].map((step) => (
                  <div key={step.num} style={{ paddingBottom: '1rem', borderBottom: '1px solid #C9BCA8' }}>
                    <p style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.9rem', fontWeight: 600, color: '#C4533A', marginBottom: '0.25rem' }}>
                      {step.num}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', lineHeight: 1.6, fontWeight: 600 }}>
                      {step.title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Why E-commerce Stores Work With Me
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              {[
                { title: 'Crawl Budget Recovery', desc: 'Most e-commerce sites waste 40–60% of crawl budget. Fixing this unlocks organic traffic without creating new content.' },
                { title: 'Product Page Rankings', desc: 'I optimise product pages for conversational queries, comparison searches, and buyer-intent keywords competitors miss.' },
                { title: 'Competitive Authority', desc: 'New e-commerce brands need strategic backlinks and authority building to outrank established retailers on high-value keywords.' },
              ].map((proof) => (
                <div key={proof.title} style={{ padding: '1.5rem', border: '1px solid #C9BCA8', borderRadius: 12, textAlign: 'left' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                    {proof.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>
                    {proof.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px', textAlign: 'center' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Ready to unlock e-commerce organic revenue?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
              Let's audit your e-commerce site structure, identify crawl budget waste, and build a strategy that ranks products and drives sales.
            </p>
            <Link
              href="/contact"
              className="service-cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#C4533A',
                color: 'white',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                fontWeight: '600',
                padding: '14px 28px',
                borderRadius: '100px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
              }}
            >
              Get an e-commerce SEO audit
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
