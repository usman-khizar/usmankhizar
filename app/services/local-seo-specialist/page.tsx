import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'

export const metadata: Metadata = {
  title: 'Local SEO Specialist | Usman Khizar',
  description: 'Local SEO specialist with experience working at top SEO agencies and with local SEO gurus. GMB optimisation, local service page sync, website audits and data-driven SEO for Google Business Profile visibility.',
  openGraph: {
    title: 'Local SEO Specialist | Usman Khizar',
    description: 'Local SEO specialist with experience working at top SEO agencies and local SEO gurus. GMB optimisation, local service page sync, website audits and data-driven SEO for Google Business Profile visibility.',
    url: 'https://usmankhizar.com/services/local-seo-specialist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Specialist | Usman Khizar',
    description: 'Local SEO specialist with agency and local SEO guru experience. GMB optimisation, category audits, website quality audits, and content aligned to Google Business Profile.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/local-seo-specialist' },
}

const localSeoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Specialist',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'Local SEO specialist with experience in GMB optimisation, category audits, Google Business Profile services, website quality audits, and content alignment for local search visibility.',
  url: 'https://usmankhizar.com/services/local-seo-specialist',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'Local SEO Specialist', item: 'https://usmankhizar.com/services/local-seo-specialist' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a local SEO specialist do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A local SEO specialist optimises Google Business Profile, audits GMB categories, descriptions, and services, syncs website service pages with local listing categories, and performs technical and content audits using GSC, Analytics, Ahrefs, and Screaming Frog.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you optimise Google Business Profile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I audit GMB categories, descriptions, service fields and local signals, then align the business profile with website service pages and local landing pages for a stronger local search footprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do you use for local SEO audits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'I use Google Search Console, Google Analytics, Ahrefs, Screaming Frog and local GMB data to audit technical SEO, content quality, page performance, and local search readiness.',
      },
    },
  ],
}

export default function LocalSeoSpecialistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">Local SEO Specialist</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Local SEO Specialist for Agencies, Multi-Location Brands and Small Business Growth
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, maxWidth: 760 }}>
              I bring agency-level local SEO expertise and local SEO guru know-how to Google Business Profile optimisation, website quality audits, and content alignment. My process combines GMB category, description and services audits with website audits powered by GSC, Analytics, Ahrefs and Screaming Frog.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
                Local SEO built around GMB and website service page alignment
              </h2>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                My local SEO approach combines Google Business Profile optimisation with website service page structure. That means auditing GMB categories, business description, service listings and primary categories, then syncing them to the website for the strongest local relevance signal.
              </p>
              <ul style={{ listStyle: 'disc inside', color: '#5C5248', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontSize: '1rem' }}>
                <li>Optimize GMB/Google Business Profile categories, services, and description for local search intent.</li>
                <li>Audit website service pages and local landing pages to ensure primary categories and services match GMB fields.</li>
                <li>Run site quality audits with Google Search Console, Google Analytics, Ahrefs and Screaming Frog.</li>
                <li>Use GSC and Analytics data to refine content, improve rankings, and measure local search performance.</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginTop: '1.5rem' }}>
                Local SEO success is built on technical SEO, on-page relevance, and off-page authority. I map local SEO entities to service pages and GMB fields so search engines see a consistent signal across your website and business profile.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginTop: '1rem' }}>
                This page sits alongside my broader SEO work. For the underlying site audit and crawl health checks, see <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>Technical SEO</Link>. For content and service-page optimisation, see <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>On-Page SEO</Link>. For authority-building and citation signals, see <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>Authority Building</Link>.</p>
              <ul style={{ listStyle: 'disc inside', color: '#5C5248', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontSize: '1rem', marginTop: '1rem' }}>
                <li>Technical local SEO: audit crawlability, mobile performance, metadata and schema for local intent.</li>
                <li>On-page local SEO: target GMB categories, service names and search terms in page structure and content.</li>
                <li>Off-page local authority: align citations, reviews and local directory signals with your GMB profile.</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #C9BCA8', borderRadius: 28, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '1rem' }}>
                Local SEO expertise you can trust
              </h3>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1rem' }}>
                I have worked with top SEO agencies and local SEO gurus to deliver consistent local search growth. The same audit-driven process scales across multi-location businesses, service-area practices, and high-intent local categories.
              </p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {[
                  'GMB category & service audits',
                  'Google Business Profile description optimisation',
                  'Website service page sync to local listing categories',
                  'Data-driven content optimisation using GSC data',
                  'Website quality audit with Ahrefs and Screaming Frog',
                ].map((item) => (
                  <p key={item} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', lineHeight: 1.6 }}>
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Why local SEO still wins for service-based businesses
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Local search is the highest-intent channel for brick-and-mortar brands and service-area businesses. When your website and Google Business Profile speak the same language, Google can match your business to more local queries and drive more visible leads.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              This is not just about citations or rankings. It is about making sure your local services, categories, and website pages align so Google understands your business, your service areas, and the customer intent you want to capture.
            </p>
            <Link href="/contact" className="btn-primary">Work with a local SEO specialist →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
