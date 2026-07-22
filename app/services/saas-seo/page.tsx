import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeroSection from '@/components/sections/PageHeroSection'
import { SEOVisual } from '@/components/sections/HeroVisuals'
import PillTag from '@/components/ui/PillTag'

export const metadata: Metadata = {
  title: 'SaaS SEO Specialist | Usman Khizar',
  description: 'SaaS SEO specialist helping software companies build topical authority, rank for product keywords, and get cited by AI. Technical SEO and content strategy for SaaS.',
  openGraph: {
    title: 'SaaS SEO Specialist | Usman Khizar',
    description: 'SaaS SEO specialist helping software companies build topical authority, rank for product keywords, and get cited by AI. Technical SEO and content strategy for SaaS.',
    url: 'https://usmankhizar.com/services/saas-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS SEO Specialist | Usman Khizar',
    description: 'SaaS SEO specialist helping software companies rank for product keywords and build authority in AI-powered buying decisions.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/saas-seo' },
}

const saasServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS SEO Specialist',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'SaaS SEO specialist helping software companies build topical authority, rank for high-intent product keywords, and get cited in AI-powered buying decisions.',
  url: 'https://usmankhizar.com/services/saas-seo',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'SaaS SEO Specialist', item: 'https://usmankhizar.com/services/saas-seo' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes SaaS SEO different from traditional SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SaaS SEO focuses on long sales cycles, high-intent product keywords, and multiple buyer personas. Buyers now start research in ChatGPT and Perplexity, not just Google. Effective SaaS SEO ranks on both surfaces while building topical authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you build topical authority for SaaS products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I audit your product category and competitive landscape, map core and related topics, then create a content strategy that ranks for product keywords while establishing E-E-A-T in your category. Content is structured for both Google and AI citation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GEO for SaaS buying decisions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO (Generative Engine Optimisation) means structuring product content so AI systems like ChatGPT cite your solution in buying decision queries. It builds on solid SEO foundation and requires strategic schema, information density, and entity clarity.',
      },
    },
  ],
}

export default function SaasSeoSpecialistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(saasServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="SaaS SEO Specialist"
          title="SaaS SEO Specialist"
          subtitle="SaaS companies face a unique SEO challenge — high competition, long sales cycles, and buyers who now start their research in ChatGPT and Perplexity, not just Google. I build SEO strategies that work across both."
          primaryCta={{ text: 'Build Strategy', href: '/contact' }}
          visualElement={<SEOVisual />}
        />

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
                What SaaS SEO Actually Requires
              </h2>
              <ul style={{ listStyle: 'disc inside', color: '#5C5248', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                <li><strong>Topical authority:</strong> ranking for core and adjacent product keywords while establishing expertise, experience, authority, and trust in your category.</li>
                <li><strong>Product-led keyword strategy:</strong> targeting high-intent buying queries that align with your pricing tiers, buyer personas, and sales cycle.</li>
                <li><strong>Technical SEO for app subdomains:</strong> ensuring your help center, blog, and product documentation are discoverable, crawlable, and properly indexed.</li>
                <li><strong>GEO for AI-assisted buying decisions:</strong> structuring product pages and comparison content so ChatGPT, Perplexity, and Google AI Overviews cite your solution.</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
                Most SaaS SEO fails because teams focus only on Google volume and miss the long-tail buying queries that define modern search.
              </p>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #C9BCA8', borderRadius: 28, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '1rem' }}>
                My SaaS SEO Process
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  { num: '01', title: 'Audit & Gap Analysis', desc: 'Competitive landscape, keyword mapping, content gaps, and search intent analysis.' },
                  { num: '02', title: 'Keyword & Topic Mapping', desc: 'High-intent product keywords, buying journey content, and comparison queries.' },
                  { num: '03', title: 'On-Page + Technical Fixes', desc: 'Ranking improvements, crawlability, page structure, schema, and AI citation setup.' },
                  { num: '04', title: 'Authority Building', desc: 'Backlink strategy, mentions in industry publications, and brand visibility.' },
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
              Why SaaS Brands Work With Me
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              {[
                { title: 'DA 60+ Placements', desc: 'I target high-authority domains in your space — industry publications, review sites, and thought leadership platforms.' },
                { title: 'Pages in Positions 8–40 Rescued', desc: 'Most SaaS ranking improvements come from optimising existing content for better CTR and keyword relevance.' },
                { title: 'AI Citation Layer Added', desc: 'On top of Google strategy, I structure product content for ChatGPT, Perplexity, and Google AI Overviews.' },
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
              Ready to grow organic pipeline?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
              Let's audit your SaaS SEO foundation, map your competitive landscape, and build a content strategy that ranks and converts.
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
              Get a SaaS SEO audit
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
