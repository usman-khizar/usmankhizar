import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import PageHeroSection from '@/components/sections/PageHeroSection'
import PillTag from '@/components/ui/PillTag'
import { ServicesVisual } from '@/components/sections/HeroVisuals'

export const metadata: Metadata = {
  title: 'Full-Stack Search Marketing | Usman Khizar',
  description: 'Full-stack search marketing services covering SEO consulting, GEO, and AEO. Get ranked on Google, ChatGPT, Perplexity, and AI Overviews.',
  openGraph: {
    title: 'Full-Stack Search Marketing | Usman Khizar',
    description: 'Full-stack search marketing services covering SEO consulting, GEO, and AEO. Get ranked on Google, ChatGPT, Perplexity, and AI Overviews.',
    url: 'https://usmankhizar.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Search Marketing | Usman Khizar',
    description: 'Full-stack search marketing services covering SEO consulting, GEO, and AEO.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  serviceType: 'SEO, GEO & AEO Consulting',
  description: 'Full-stack search marketing including SEO, Generative Engine Optimisation, and Answer Engine Optimisation.',
  url: 'https://usmankhizar.com/services',
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
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="What I Do"
          title="Full-Stack Search Marketing: Visibility Built to Last"
          subtitle="I work with founders and businesses who want to rank on every modern search surface — not just Google, but ChatGPT, Perplexity, and AI Overviews too. For modern search visibility, combine SEO consulting, AEO consulting, and GEO services."
          primaryCta={{ text: 'Explore Services', href: '#seo' }}
          secondaryCta={{ text: 'Get Audit', href: '/contact' }}
          visualElement={<ServicesVisual />}
        />

        {/* Service 1: Full-Stack Search */}
        <section id="seo" style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div style={{ flex: 1 }}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['SEO', 'GEO', 'AEO'].map((t) => <PillTag key={t}>{t}</PillTag>)}
                </div>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                  Full-Stack Search Marketing
                </h2>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Most SEO consultants are still optimising for 2019 Google. I build strategies for the full modern search landscape — including the AI systems that are rapidly eating traditional search traffic as a freelance SEO consultant.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    { key: 'seo', body: <>Rank on Google organically — <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>technical SEO</Link>, <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>on-page optimisation</Link>, and <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>authority building</Link></> },
                    { key: 'geo', body: 'Get cited by ChatGPT, Perplexity, and AI Overviews (GEO consulting services)' },
                    { key: 'aeo', body: <>Appear in <Link href="/services/aeo-consulting/featured-snippet-optimisation" style={{ color: '#C4533A', textDecoration: 'none' }}>featured snippets</Link> and zero-click results (AEO)</> },
                    { key: 'parasite', body: 'Rank fast on high-authority third-party platforms (Parasite SEO)' },
                  ].map((item) => (
                    <li key={item.key} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '0.95rem' }}>
                      <span style={{ color: '#C4533A', flexShrink: 0 }}>→</span> {item.body}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/services/seo-consulting" className="btn-primary w-full sm:w-auto">SEO Consulting</Link>
                  <Link href="/services/geo-consulting" className="btn-secondary w-full sm:w-auto">GEO Consulting</Link>
                  <Link href="/services/aeo-consulting" className="btn-secondary w-full sm:w-auto">AEO Consulting</Link>
                </div>
              </div>
              <div
                style={{
                  flex: '0 0 40%',
                  background: '#FFFFFF',
                  border: '1px solid #C9BCA8',
                  borderRadius: 16,
                  padding: 32,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, backgroundColor: '#C4533A' }} />
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', color: '#5C5248', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
                  What you get
                </p>
                {[
                  { label: 'Technical SEO Audit', href: '/services/seo-consulting/technical-seo', desc: 'Full crawl, Core Web Vitals, indexability' },
                  { label: 'Content Strategy', href: '/services/seo-consulting/content-strategy', desc: 'Keyword map built around your business goals' },
                  { label: 'GEO Optimisation', href: null, desc: 'Structured for AI citation and featured answers' },
                  { label: 'Monthly Reporting', href: null, desc: 'Plain-English progress, not vanity metrics' },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #F5F0E8' }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.9rem', color: '#1A1A1A', marginBottom: '0.2rem' }}>
                      {item.href ? <Link href={item.href} style={{ color: '#1A1A1A', textDecoration: 'none' }}>{item.label}</Link> : item.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.85rem', color: '#5C5248' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: LinkedIn */}
        <section id="linkedin" style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
              <div style={{ flex: 1 }}>
                <PillTag className="mb-6">LinkedIn</PillTag>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                  LinkedIn Growth & Personal Brand
                </h2>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '2rem' }}>
                  LinkedIn is the highest-leverage channel for B2B founders in 2026. A well-positioned profile and a consistent content system can replace a full inbound funnel. I've built mine to do exactly that.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'Profile SEO — rank in LinkedIn search for your target terms',
                    'Content strategy built around your expertise and audience',
                    'Hook frameworks that stop the scroll',
                    'Turning post engagement into consulting leads',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '0.95rem' }}>
                      <span style={{ color: '#C4533A', flexShrink: 0 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">Work With Me</Link>
              </div>
              <div
                style={{
                  flex: '0 0 40%',
                  background: '#141210',
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <p style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '2rem', fontWeight: 700, color: '#C4533A', marginBottom: '0.5rem' }}>3–6mo</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', color: '#C9BCA8', marginBottom: '1.5rem' }}>Typical time to see consistent inbound</p>
                <p style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '2rem', fontWeight: 700, color: '#C4533A', marginBottom: '0.5rem' }}>5x</p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', color: '#C9BCA8', marginBottom: '1.5rem' }}>Average profile view increase</p>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#C9BCA8', fontStyle: 'italic', lineHeight: 1.6 }}>
                  "LinkedIn is not social media. It's a search engine with a feed attached."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Build & Market */}
        <section id="build" style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div style={{ flex: 1 }}>
                <PillTag className="mb-6">Build & Market</PillTag>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.25rem' }}>
                  Digital Products via Vibe Coding
                </h2>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '2rem' }}>
                  I build SEO-first digital products using AI-assisted code — then market them through the same content and search systems I teach clients. Every product I ship is a live case study.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {[
                    'AI-assisted MVP development (vibe coding)',
                    'SEO architecture built in from day one',
                    'Content marketing and distribution',
                    'GEO strategy for AI search discoverability',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '0.95rem' }}>
                      <span style={{ color: '#C4533A', flexShrink: 0 }}>→</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">Let's Talk</Link>
              </div>
              <div style={{ flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Build', 'Optimise', 'Distribute', 'Compound'].map((step, i) => (
                  <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: '#C4533A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-archivo-black)',
                        color: '#FAF8F4',
                        fontWeight: 900,
                        fontSize: '1rem',
                      }}
                    >
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '1rem', color: '#1A1A1A' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4-step process */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '3rem' }}>How We Work Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { n: '01', label: 'Discovery', desc: 'Deep dive into your business, audience, and current search presence.' },
                { n: '02', label: 'Strategy', desc: 'A focused plan across the search surfaces that matter most for you.' },
                { n: '03', label: 'Execution', desc: 'I build or guide the implementation — content, technical, and structure.' },
                { n: '04', label: 'Measure + Iterate', desc: 'Real data, plain-English reporting, and continuous refinement.' },
              ].map((step) => (
                <div key={step.n} className="text-center">
                  <div
                    style={{
                      fontFamily: 'var(--font-archivo-black)',
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: '#C4533A',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.n}
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{step.label}</p>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.88rem', color: '#5C5248', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry form */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 80px) 24px' }}>
          <div className="max-w-2xl mx-auto">
            <div className="card-base">
              <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '0.75rem' }}>Get In Touch</h2>
              <p style={{ fontFamily: 'var(--font-lora)', color: '#5C5248', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.65 }}>
                Tell me what you're working on and I'll come back to you within 48 hours.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}

function EnquiryForm() {
  return (
    <form action="/api/enquiry" method="POST" className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #C9BCA8', backgroundColor: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', outline: 'none' }}
      />
      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
        style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #C9BCA8', backgroundColor: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', outline: 'none' }}
      />
      <textarea
        name="message"
        placeholder="What are you working on?"
        rows={4}
        style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #C9BCA8', backgroundColor: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', outline: 'none', resize: 'vertical' }}
      />
      <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
        Send Enquiry
      </button>
    </form>
  )
}
