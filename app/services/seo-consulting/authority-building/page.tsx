import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Authority Building | Usman Khizar',
  description: 'Authority building and backlink strategy for SEO growth, featured snippets, and trust signals that make search engines value your pages.',
  openGraph: {
    title: 'Authority Building | Usman Khizar',
    description: 'Authority building and backlink strategy for SEO growth, featured snippets, and trust signals.',
    url: 'https://usmankhizar.com/services/seo-consulting/authority-building',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authority Building | Usman Khizar',
    description: 'Authority building and backlink strategy for SEO growth, featured snippets, and trust signals.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/seo-consulting/authority-building' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is authority building in SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Authority building in SEO is the process of earning backlinks, brand mentions, and trust signals that make search engines view your site as a reliable source.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does link acquisition support SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Link acquisition supports SEO by passing page authority, increasing topical relevance, and signalling credibility to search engines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can authority be built without outreach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, through strong content, internal linking, and stakeholder amplification. However, proactive outreach accelerates the process and produces higher-value placements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What role does authority play in featured snippets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Authority makes your pages more likely to be trusted for featured snippets because search engines prefer reliable sources when selecting direct answers.',
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
    { '@type': 'ListItem', position: 4, name: 'Authority Building', item: 'https://usmankhizar.com/services/seo-consulting/authority-building' },
  ],
}

export default function AuthorityBuildingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">Authority Building</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Authority Building and Link Acquisition for SEO Success
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Authority building is the process of earning backlinks, brand mentions, and trust signals that make search engines value your pages more highly.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginTop: '1rem' }}>
              I help founders and businesses win the placements, citations, and editorial mentions that support featured snippets, zero-click search, and long-term organic rankings.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Authority Building Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Link Acquisition Strategy</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Build a link acquisition plan that targets high-value editorial placements and citation opportunities to pass authority where it matters most.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Featured Snippet Support</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Earn the trust signals and content structure that make your pages more likely to be chosen for featured snippets and direct answer results.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Brand Citation & Mentions</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Grow your brand citations across the web so search engines and AI systems have more reasons to trust and cite your content.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Authority-Based Content Planning</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Align your link building and content strategy so every asset can earn authority naturally and support your ranking priorities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How Authority Building Works
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Assess', desc: 'Map your current backlink profile, page authority, and content opportunities.' },
                { title: 'Target', desc: 'Identify the citations, publications, and partners most likely to pass meaningful authority.' },
                { title: 'Create', desc: 'Develop link-worthy content that aligns with topical relevance and search intent.' },
                { title: 'Amplify', desc: 'Execute outreach and digital PR to turn content into earned authority and citations.' },
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
              Why Authority Matters for SEO
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Authority building is what makes search engines trust your pages. Without it, even the strongest on-page SEO and content strategy can struggle to compete for featured snippets and zero-click results.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Page authority, backlink profile, and brand citations are the signals that tell Google your content is not just relevant, but reliable. This is especially important for high-value keywords and AI-driven search results.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Authority building works best alongside strong <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>technical SEO foundations</Link> and a tight <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>on-page SEO optimisation</Link> strategy.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              Together they create the kind of SEO consulting services that can scale visibility, traffic, and long-term brand authority.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What is authority building in SEO?', a: 'Authority building in SEO is the process of earning backlinks, brand mentions, and trust signals that make search engines view your site as a reliable source.' },
              { q: 'How does link acquisition support SEO?', a: 'Link acquisition supports SEO by passing page authority, increasing topical relevance, and signalling credibility to search engines.' },
              { q: 'Can authority be built without outreach?', a: 'Yes, through strong content, internal linking, and stakeholder amplification. However, proactive outreach accelerates the process and produces higher-value placements.' },
              { q: 'What role does authority play in featured snippets?', a: 'Authority makes your pages more likely to be trusted for featured snippets because search engines prefer reliable sources when selecting direct answers.' },
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
              Ready to earn more authority?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              I help brands win the citations and backlinks that make search engines and AI systems trust their pages.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              This is the work that connects <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO consulting services</Link>, <Link href="/services" style={{ color: '#C4533A', textDecoration: 'none' }}>full-stack search marketing</Link>, and the right search marketer strategy.
            </p>
            <Link href="/contact" className="btn-primary">Start Authority Building →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
