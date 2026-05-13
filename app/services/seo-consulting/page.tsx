import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'SEO Consulting | Usman Khizar',
  description: 'SEO consulting for founders and businesses. Technical SEO, content strategy, and authority building to rank on Google and build sustainable organic traffic.',
  openGraph: {
    title: 'SEO Consulting | Usman Khizar',
    description: 'SEO consulting for founders and businesses. Technical SEO, content strategy, and authority building to rank on Google.',
    url: 'https://usmankhizar.com/services/seo-consulting',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Consulting | Usman Khizar',
    description: 'SEO consulting for founders and businesses. Technical SEO, content strategy, and authority building.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/seo-consulting' },
}

const seoServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Consulting',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'SEO consulting services including technical SEO, on-page optimization, content strategy, and authority building to rank on Google.',
  url: 'https://usmankhizar.com/services/seo-consulting',
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
      name: 'SEO Consulting',
      item: 'https://usmankhizar.com/services/seo-consulting',
    },
  ],
}

export default function SEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">SEO Consulting</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              SEO Consulting for Founders & Growing Businesses
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 620 }}>
              Google organic traffic compounds. Paid ads stop the moment you stop paying. I help you build the kind of search presence that works while you sleep — through technical excellence, smart content, and earned authority.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Technical SEO',
                desc: (
                  <>
                    Full crawl analysis, Core Web Vitals optimisation, structured data, indexability — the foundations that unlock rankings. <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>Explore the technical SEO process</Link>.
                  </>
                ),
              },
              {
                title: 'On-Page SEO',
                desc: (
                  <>
                    Title tags, heading hierarchy, internal linking, content depth — turning decent pages into ranking pages. <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>See the on-page SEO framework</Link>.
                  </>
                ),
              },
              {
                title: 'Content Strategy',
                desc: (
                  <>
                    Keyword research grounded in commercial intent. A content plan that builds topical authority, not just traffic. <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>Read how content strategy supports search marketing</Link>.
                  </>
                ),
              },
              {
                title: 'Authority Building',
                desc: (
                  <>
                    Backlink strategy through editorial outreach, digital PR, and parasite SEO on high-authority platforms. <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>Discover the authority-building approach</Link>.
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
              If you also want to win featured snippets and AI answer traffic, see the <Link href="/services/aeo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>AEO consulting page</Link> for the next layer of modern search visibility.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-10 text-center">
            <Link href="/contact" className="btn-primary">Work With Me →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
