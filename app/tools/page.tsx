import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import PillTag from '@/components/ui/PillTag'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free SEO & GEO Tools',
  description: 'Free tools for SEO, GEO, and AEO. Check your page\'s AI-citability, generate schema markup, analyse LinkedIn hooks, and more.',
  openGraph: {
    title: 'Free Tools | Usman Khizar',
    description: 'Free tools to improve your search visibility — GEO readiness checker, schema generator, hook analyser, and citation tracker.',
    url: 'https://usmankhizar.com/tools',
  },
  alternates: { canonical: 'https://usmankhizar.com/tools' },
}

const tools = [
  {
    name: 'GEO Readiness Checker',
    desc: 'Is your page AI-citable? Check in 30 seconds.',
    detail: 'Paste a URL and get an instant assessment of how likely your page is to be cited by ChatGPT, Perplexity, and Google AI Overviews.',
    cta: 'Try it free →',
    available: true,
    href: '/tools/geo-checker',
  },
  {
    name: 'Hook Analyser',
    desc: 'Score your LinkedIn hook against proven formats.',
    detail: 'Paste your LinkedIn opening line and get a score based on the patterns that actually stop the scroll — with specific suggestions to improve it.',
    cta: 'Try it free →',
    available: true,
    href: '/tools/hook-analyser',
  },
  {
    name: 'Schema Generator',
    desc: 'Generate FAQ and Article schema markup instantly.',
    detail: 'Enter your content and get ready-to-paste JSON-LD schema markup for FAQPage, Article, and Person schemas — no coding required.',
    cta: 'Try it free →',
    available: true,
    href: '/tools/schema-generator',
  },
  {
    name: 'Citation Tracker',
    desc: 'See if your brand appears in AI answers.',
    detail: 'Track whether your brand, products, or content are being cited by major AI systems. Know your GEO visibility at a glance.',
    cta: 'Join waitlist →',
    available: false,
    href: '#',
  },
]

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto text-center">
            <PillTag className="mb-5">Free Tools</PillTag>
            <h1
              style={{
                fontFamily: 'var(--font-archivo-black)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                color: '#1A1A1A',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}
            >
              Tools That Do the Thinking For You
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.7 }}>
              Free utilities I've built to make SEO, GEO, and LinkedIn optimisation faster. No sign-up required for most.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="card-base flex flex-col gap-4"
                style={{ opacity: tool.available ? 1 : 0.7, position: 'relative' }}
              >
                {!tool.available && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      backgroundColor: '#141210',
                      color: '#FAF8F4',
                      borderRadius: '100px',
                      padding: '3px 10px',
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    COMING SOON
                  </span>
                )}
                <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.15rem', color: '#1A1A1A' }}>
                  {tool.name}
                </h2>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, fontSize: '0.92rem', color: '#C4533A' }}>
                  {tool.desc}
                </p>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65, flex: 1 }}>
                  {tool.detail}
                </p>
                {tool.available ? (
                  <Link
                    href={tool.href}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      color: '#C4533A',
                      textDecoration: 'none',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {tool.cta}
                  </Link>
                ) : (
                  <Link href="/contact" className="btn-secondary" style={{ alignSelf: 'flex-start', padding: '8px 18px', fontSize: '0.85rem' }}>
                    {tool.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(50px, 6vw, 70px) 24px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Got a tool idea? I'm always building.
          </p>
          <Link href="/contact" className="btn-primary">Suggest a Tool →</Link>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
