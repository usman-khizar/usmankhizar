import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'

export const metadata: Metadata = {
  title: 'SearchAtlas SEO Specialist | Agentic SEO Specialist | Usman Khizar',
  description: 'SearchAtlas SEO specialist and agentic SEO specialist for agencies and businesses. Expert in SearchAtlas Otto, campaign management, pixel integration, GSC, Analytics and GMB connections.',
  openGraph: {
    title: 'SearchAtlas SEO Specialist | Agentic SEO Specialist | Usman Khizar',
    description: 'SearchAtlas SEO specialist and agentic SEO specialist for agencies and businesses. Expert in SearchAtlas Otto, campaign management, pixel integration, GSC, Analytics and GMB connections.',
    url: 'https://usmankhizar.com/services/search-atlas-seo-specialist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SearchAtlas SEO Specialist | Agentic SEO Specialist | Usman Khizar',
    description: 'SearchAtlas SEO specialist with expert use of SearchAtlas Otto to manage SEO campaigns, link GSC, Analytics, GMB and website via pixel code.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/search-atlas-seo-specialist' },
}

const searchAtlasServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SearchAtlas SEO Specialist',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'SearchAtlas SEO specialist and agentic SEO specialist for agencies and businesses. Expert in SearchAtlas Otto, campaign management, pixel setup, and linking GSC, Analytics and GMB for full SEO visibility.',
  url: 'https://usmankhizar.com/services/search-atlas-seo-specialist',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'SearchAtlas SEO Specialist', item: 'https://usmankhizar.com/services/search-atlas-seo-specialist' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SearchAtlas Otto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SearchAtlas Otto is a platform for managing SEO campaigns inside one dashboard. It connects website data, pixel tracking, Google Search Console, Analytics and Google Business Profile to make optimization decisions faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does SearchAtlas support agency SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SearchAtlas helps agencies run SEO at scale by centralising campaign tracking, website health, keyword performance and local listing signals. I implement SearchAtlas Otto for agencies and businesses to streamline SEO workflows and reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an agentic SEO specialist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An agentic SEO specialist uses modern platforms like SearchAtlas to manage the entire SEO campaign, connecting website pixels, GSC, Analytics and GMB so optimization becomes proactive instead of reactive.',
      },
    },
  ],
}

export default function SearchAtlasSeoSpecialistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(searchAtlasServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">SearchAtlas SEO Specialist</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              SearchAtlas Otto SEO Specialist for Agencies and Business Growth
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, maxWidth: 760 }}>
              I help agencies and businesses use SearchAtlas Otto as a full campaign platform: connect your website with pixel code, sync Google Search Console, Google Analytics and Google Business Profile, and manage SEO from one dashboard.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
                Agentic SEO through SearchAtlas and campaign orchestration
              </h2>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                SearchAtlas lets you manage SEO like a modern growth system. I set up SearchAtlas Otto so your website pixel, Search Console, Analytics and GMB data feed into one platform and your SEO team can act on the right signals faster.
              </p>
              <ul style={{ listStyle: 'disc inside', color: '#5C5248', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontSize: '1rem' }}>
                <li>Implement SearchAtlas pixel code and connect your website to the platform.</li>
                <li>Link Google Search Console, Google Analytics and Google Business Profile for unified campaign data.</li>
                <li>Use SearchAtlas Otto to manage organic performance, content updates, and technical issues in one workflow.</li>
                <li>Work as an agentic SEO specialist to keep your agency or business ahead of ranking, citation, and local visibility signals.</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginTop: '1.5rem' }}>
                SearchAtlas is most powerful when it is used as the central operating system for modern SEO. I make sure the platform tracks both website health and local entity signals, so your technical, content and local investments all feed back into the same campaign dashboard.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginTop: '1rem' }}>
                The SearchAtlas workflow is built on the same technical and content principles found in my <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>Technical SEO</Link> and <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>Content Strategy</Link> pages. For local entity and GPS/GBF alignment, see <Link href="/services/local-seo-specialist" style={{ color: '#C4533A', textDecoration: 'none' }}>Local SEO Specialist</Link>.</p>
              <ul style={{ listStyle: 'disc inside', color: '#5C5248', lineHeight: 1.8, fontFamily: 'var(--font-lora)', fontSize: '1rem', marginTop: '1rem' }}>
                <li>SEO campaign orchestration with SearchAtlas Otto for content, technical and local performance.</li>
                <li>Connected data feeds from your website, pixel, GSC, Analytics and GMB.</li>
                <li>Faster issue resolution through SearchAtlas alerts and unified reporting.</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #C9BCA8', borderRadius: 28, padding: '1.5rem', boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '1rem' }}>
                What makes this page different
              </h3>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1rem' }}>
                SearchAtlas is not just a reporting tool. It is a centralised SEO operating system for agencies and businesses that want to move faster on technical fixes, content updates, local signals, and campaign performance.
              </p>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {[
                  'SearchAtlas Otto setup for website intelligence',
                  'Pixel installation and website connection',
                  'GSC, Analytics and GMB property linking',
                  'Agentic SEO workflows for agencies and campaigns',
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
              Manage SEO from one unified campaign platform
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              SearchAtlas is built to connect the dots between your website, search data, local listings and campaign signal. The right setup lets you optimise faster and make fewer guesswork decisions.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1.5rem' }}>
              If you want an SEO specialist who can deploy SearchAtlas Otto, implement the pixel code, and keep your campaign aligned with GSC, Analytics and GMB, this is the right place to start.
            </p>
            <Link href="/contact" className="btn-primary">Work with a SearchAtlas specialist →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
