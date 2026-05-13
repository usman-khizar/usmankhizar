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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an SEO consultant do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An SEO consultant audits your website, identifies the technical, on-page, and authority issues limiting your rankings, and builds a strategy to fix them. The work spans technical SEO, content strategy, internal linking, and backlink acquisition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does SEO consulting cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO consulting engagements vary by scope. Monthly retainers typically cover ongoing strategy, implementation, and reporting. Project-based audits are available for businesses needing a one-time diagnostic and roadmap.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most sites see meaningful ranking movement within 3–6 months of consistent implementation. Technical fixes often show faster results — sometimes within 4–8 weeks of being indexed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All SEO consulting is delivered remotely. Current clients are based across the UK, US, and the Middle East.',
      },
    },
  ],
}

export default function SEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>

        {/* ── Hero ── */}
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

        {/* ── Feature cards + sub-page nav ── */}
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

          {/* Sub-page navigation buttons */}
          <div className="max-w-5xl mx-auto mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/services/seo-consulting/technical-seo" className="btn-secondary">Technical SEO</Link>
            <Link href="/services/seo-consulting/on-page-seo" className="btn-secondary">On-Page SEO</Link>
            <Link href="/services/seo-consulting/content-strategy" className="btn-secondary">Content Strategy</Link>
            <Link href="/services/seo-consulting/authority-building" className="btn-secondary">Authority Building</Link>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem', textAlign: 'center' }}>
              If you also want to win featured snippets and AI answer traffic, the next layer includes <Link href="/services/aeo-consulting/featured-snippet-optimisation" style={{ color: '#C4533A', textDecoration: 'none' }}>featured snippet optimisation</Link>, <Link href="/services/aeo-consulting/schema-markup" style={{ color: '#C4533A', textDecoration: 'none' }}>schema markup</Link>, and <Link href="/services/aeo-consulting/question-based-content" style={{ color: '#C4533A', textDecoration: 'none' }}>question-based content</Link> — see the full <Link href="/services/aeo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>AEO consulting</Link> approach.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-6 text-center">
            <Link href="/contact" className="btn-primary">Work With Me →</Link>
          </div>
        </section>

        {/* ── What Full-Stack SEO Actually Covers ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What Full-Stack SEO Actually Covers in 2026
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              Modern SEO is four interconnected systems — and weakness in any one layer limits the others. <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>Technical SEO foundations</Link> determine whether search engines can access and trust your pages: crawl authority, site structure, Core Web Vitals, and technical health all decide whether your content gets indexed before it competes. Build on broken technical foundations and no amount of content or link equity will scale.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>On-page SEO optimisation</Link> sits above the technical layer: keyword intent mapping, heading hierarchy, internal linking, and content depth that build search visibility signals on every page. These structural choices determine how search engine results pages understand and rank each piece of content you publish — and they are the fastest lever to pull once technical health is clean.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, marginBottom: '1rem' }}>
              <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>SEO content strategy</Link> is the discipline of building topical depth through content freshness, E-E-A-T alignment, and a keyword intent map that closes gaps rather than duplicates effort. Good content strategy turns domain authority into a durable competitive moat that raises the ranking floor across your entire site over time.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85 }}>
              The fourth layer is <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>authority building and link acquisition</Link>: the link equity and brand citations that signal to search engines that your domain is a preferred source. Search performance and organic traffic compound most effectively when all four layers are built in sequence — which is why organic search, done correctly, remains the highest-ROI channel in most business models.
            </p>
          </div>
        </section>

        {/* ── Who This Is For ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Who Hires an SEO Consultant
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Founders Building Their First Organic Channel</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>
                  If you are building your first organic channel, SEO is the highest-leverage investment you can make in sustainable growth. Unlike paid ads — which stop producing the moment you stop spending — organic search compounds over time. Every page that ranks continues to drive organic traffic months and years after publication. Founders who invest early in technical foundations and a structured content strategy are still benefiting from that decision three years later.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Growing Businesses Whose Traffic Has Plateaued</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>
                  Businesses whose organic traffic has plateaued almost always share the same three problems: technical debt that prevents crawlers from accessing important pages, content gaps where competitors cover topics you do not, and an authority deficit that stops your pages from outranking stronger domains. The fix is rarely just more content — it is technical remediation, keyword intent realignment, and targeted authority building working together.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>Agencies Needing a Specialist</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>
                  Agencies working on campaigns that need deeper search expertise bring me in as a specialist for the work that requires genuine depth. White-label SEO support covers everything from technical audits and content strategy to ongoing monthly delivery — with your brand on the output and my methodology behind it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              How the SEO Engagement Works
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Discovery', desc: 'Site audit, competitor analysis, and keyword landscape review to understand where you stand and what is holding you back from the rankings you should have.' },
                { title: 'Strategy', desc: 'Prioritised roadmap across technical, on-page, content, and authority — ranked by expected impact so the highest-leverage work ships first and early wins build momentum.' },
                { title: 'Execution', desc: 'Direct implementation or team briefing with full specifications. Every fix comes with a clear rationale, expected outcome, and measurable success criterion.' },
                { title: 'Measure', desc: 'Monthly reporting on rankings, organic traffic, and organic conversions — plain-English summaries that show what moved and what to focus on next.' },
              ].map((step, index) => (
                <div key={step.title} className="card-base" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, minHeight: 48, borderRadius: 100, backgroundColor: '#C4533A', color: '#FFF', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>{index + 1}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What does an SEO consultant do?', a: 'An SEO consultant audits your website, identifies the technical, on-page, and authority issues limiting your rankings, and builds a strategy to fix them. The work spans technical SEO, content strategy, internal linking, and backlink acquisition.' },
              { q: 'How much does SEO consulting cost?', a: 'SEO consulting engagements vary by scope. Monthly retainers typically cover ongoing strategy, implementation, and reporting. Project-based audits are available for businesses needing a one-time diagnostic and roadmap.' },
              { q: 'How long does SEO take to work?', a: 'Most sites see meaningful ranking movement within 3–6 months of consistent implementation. Technical fixes often show faster results — sometimes within 4–8 weeks of being indexed.' },
              { q: 'Do you work with businesses outside the UK?', a: 'Yes. All SEO consulting is delivered remotely. Current clients are based across the UK, US, and the Middle East.' },
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