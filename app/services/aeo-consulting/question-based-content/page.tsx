import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'
import EmailCapture from '@/components/sections/EmailCapture'

export const metadata: Metadata = {
  title: 'Question-Based Content | Usman Khizar',
  description: 'Question-based content for AEO. Create direct answer pages that satisfy search intent, win People Also Ask, and become AI-ready sources.',
  openGraph: {
    title: 'Question-Based Content | Usman Khizar',
    description: 'Question-based content for AEO. Create direct answer pages that win People Also Ask and AI answers.',
    url: 'https://usmankhizar.com/services/aeo-consulting/question-based-content',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Question-Based Content | Usman Khizar',
    description: 'Question-based content for AEO and AI answer engines.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/aeo-consulting/question-based-content' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is question-based content?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Question-based content is written around the exact language searchers use, with direct answers and supporting details that match search intent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does question-based content support AEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It helps answer engines and featured snippet algorithms find the precise answers they need, improving the odds of being selected for zero-click features.',
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
    { '@type': 'ListItem', position: 4, name: 'Question-Based Content', item: 'https://usmankhizar.com/services/aeo-consulting/question-based-content' },
  ],
}

export default function QuestionBasedContentPage() {
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
              Question-Based Content That Wins Search Answers
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 680 }}>
              Create content in the exact question-and-answer format searchers expect, so your pages are more likely to appear in featured snippets, PAA, and AI answer surfaces.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Why question-based content matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Search intent first</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Pages built around questions are easier for answer algorithms to match to queries, which makes them strong candidates for zero-click features.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Clear answer structure</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Direct answers, bullet lists, and follow-up details make search engines more likely to extract your content for featured snippets and AI citations.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>Topic cluster synergy</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  Question pages support broader topic clusters and make your site more authoritative for both search engines and AI answer systems.
                </p>
              </div>
              <div className="card-base">
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>AEO-ready content</h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.65 }}>
                  This content is designed for both Google’s direct-answer features and the AI models that increasingly surface search results based on structured answers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              The content workflow
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { step: 'Capture', text: 'Collect the real search questions your audience is asking and the exact phrasing AI answer systems prefer.' },
                { step: 'Answer', text: 'Write precise, helpful responses that can be pulled directly into search engine snippets and AI outputs.' },
                { step: 'Expand', text: 'Add supporting details that keep readers engaged while satisfying answer extraction.' },
                { step: 'Link', text: 'Connect question pages with the broader topic cluster and existing authority assets.' },
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
              Frequently Asked Questions
            </h2>
            {[
              { q: 'How is question-based content different from blog posts?', a: 'Question-based content is structured around direct answers to search queries, making it more likely to win featured snippets and AI citations than a generic blog post.' },
              { q: 'Should I target long-tail questions or broad topics?', a: 'Start with high-intent questions that match your business goals, then expand into broader topic clusters once the answers establish authority.' },
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
              Want AI-ready answers?
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Question-based content is a core part of <Link href="/services/aeo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>AEO consulting</Link>, and it works best when paired with schema and snippet optimisation.
            </p>
            <Link href="/contact" className="btn-primary">Start Question Content Optimisation →</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
