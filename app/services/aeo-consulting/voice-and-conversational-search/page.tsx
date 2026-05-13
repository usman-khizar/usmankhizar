import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Voice & Conversational Search | Usman Khizar',
  description: 'Voice and conversational search optimisation for answer engines, smart speakers, and AI assistants. Adapt your AEO strategy for natural-language queries.',
  openGraph: {
    title: 'Voice & Conversational Search | Usman Khizar',
    description: 'Voice and conversational search optimisation for answer engines, smart speakers, and AI assistants.',
    url: 'https://usmankhizar.com/services/aeo-consulting/voice-and-conversational-search',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice & Conversational Search | Usman Khizar',
    description: 'Voice and conversational search optimisation for AEO.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/aeo-consulting/voice-and-conversational-search' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is conversational search optimisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Conversational search optimisation is the practice of structuring content for natural language queries, voice assistants, and AI answer systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does voice search affect AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voice search increases the importance of conversational phrasing and direct answer structure, which feeds into broader AEO ranking signals.',
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
    { '@type': 'ListItem', position: 3, name: 'AEO Consulting', item: 'https://usmankhizar.com/services/aeo-consulting' },
    { '@type': 'ListItem', position: 4, name: 'Voice & Conversational Search', item: 'https://usmankhizar.com/services/aeo-consulting/voice-and-conversational-search' },
  ],
}

export default function VoiceAndConversationalSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">AEO Consulting</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Voice & Conversational Search for Answer Engines
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Natural-language search is the fast-growing edge of AEO. I optimise content for voice assistants and conversational AI so your brand can be cited in spoken and written answer surfaces.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              What voice search optimisation includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Conversational query modelling</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Map the questions users ask aloud and the phrases voice assistants are more likely to pass through to answer engines.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Answer-first copy</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Write content with the answer up front so AI and voice systems can surface it without forcing listeners or readers to scroll too far.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Natural language tone</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Use conversational phrasing that matches how people speak, while keeping the page optimised for search engine extraction.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>AI answer readiness</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Prepare your content to be cited by AI systems in written responses, spoken answers, and assistant-level summaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              The optimisation sequence
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { step: 'Listen', text: 'Review voice search queries and conversational patterns relevant to your niche.' },
                { step: 'Answer', text: 'Craft short, direct responses that voice assistants can read aloud or AI models can cite.' },
                { step: 'Expand', text: 'Add supporting context that helps both users and answer engines understand the page.' },
                { step: 'Validate', text: 'Test search and voice behaviour with query simulations and schema checks.' },
              ].map((item, index) => (
                <div key={item.step} className="card-base" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ minWidth: 48, minHeight: 48, borderRadius: 100, backgroundColor: '#C4533A', color: '#FFF', display: 'grid', placeItems: 'center', fontFamily: 'var(--font-jetbrains-mono)', fontWeight: 700, fontSize: '1rem' }}>{index + 1}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{item.step}</h3>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              FAQs about voice search optimisation
            </h2>
            {[
              { q: 'Will voice search traffic convert differently?', a: 'Voice search traffic often comes from high-intent, question-based queries, making conversion optimization important on answer pages.' },
              { q: 'Is conversational search only for smart speakers?', a: 'No, it also includes AI assistants, mobile voice search, and natural-language entry points in search engines and chat interfaces.' },
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
              Ready to optimise for voice and AI?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Voice and conversational search are the newest AEO entry points — this work makes your content easier for both people and AI systems to find.
            </p>
            <Link href="/contact" className="btn-primary">Start Voice Search Optimisation →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
