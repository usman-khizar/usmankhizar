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

export default function GEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(geoServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
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
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
