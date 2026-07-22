import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import PageHeroSection from '@/components/sections/PageHeroSection'
import PillTag from '@/components/ui/PillTag'
import SEOWorkflowDiagram from '@/components/SEOWorkflowDiagram'
import { AboutVisual } from '@/components/sections/HeroVisuals'

export const metadata: Metadata = {
  title: 'About',
  description: 'Usman Khizar is a search marketer specialising in SEO, GEO, and AEO. Learn about his background, philosophy, and approach to modern search marketing.',
  openGraph: {
    title: 'About | Usman Khizar',
    description: 'SEO, GEO & AEO specialist. The story, the philosophy, and the work.',
    url: 'https://usmankhizar.com/about',
  },
  alternates: { canonical: 'https://usmankhizar.com/about' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Usman Khizar',
  jobTitle: 'SEO, GEO & AEO Specialist',
  description: 'Search marketer specialising in SEO, Generative Engine Optimisation, and Answer Engine Optimisation.',
  url: 'https://usmankhizar.com',
  sameAs: [
    'https://www.linkedin.com/in/usmankhizar',
    'https://twitter.com/usmankhizar',
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="About Me"
          title="Usman Khizar"
          subtitle="I help founders and businesses get found everywhere that matters in modern search — Google, ChatGPT, Perplexity, and AI Overviews. SEO, GEO & AEO specialist with 5+ years of proven experience."
          primaryCta={{ text: 'Start Project', href: '/contact' }}
          secondaryCta={{ text: 'LinkedIn', href: 'https://linkedin.com' }}
          visualElement={<AboutVisual />}
        />

        {/* Short version */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-3xl mx-auto">
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.1em', color: '#C4533A', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              The Short Version
            </p>
            <div className="flex flex-col gap-5">
              {[
                "I'm a search marketer who got obsessed with the gap between how most businesses approach SEO and what's actually happening in search right now.",
                "I specialise in the full modern search stack — traditional organic SEO, Generative Engine Optimisation (GEO) for AI citation, and Answer Engine Optimisation (AEO) for zero-click and featured results.",
                "Every strategy I recommend, I've already tested on my own projects. No theory. No fluff.",
              ].map((text, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.8 }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Stats row */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(50px, 6vw, 80px) 24px' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '11K+', label: 'Monthly GEO searches tracked' },
              { value: '5+', label: 'Years in search marketing' },
              { value: '3', label: 'Search surfaces specialised in' },
              { value: '∞', label: 'Curiosity about what\'s next' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '2.2rem', fontWeight: 700, color: '#C4533A', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', color: '#5C5248', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Longer version */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-3xl mx-auto">
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.1em', color: '#C4533A', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              The Longer Version
            </p>
            <div className="flex flex-col gap-6">
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }}>
                I came up through traditional SEO — keyword research, content strategy, technical audits, link building. The full playbook. And I got good at it. But around 2023 I started noticing that the nature of search was fundamentally changing. AI systems weren't just changing how people searched — they were changing who got visibility.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }}>
                I went deep on what I eventually started calling GEO — Generative Engine Optimisation. The question I was obsessed with: what makes a piece of content the one an AI system cites rather than paraphrases without attribution? That question led me down a rabbit hole of AI training data, citation patterns, and content structure that I'm still in.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }}>
                I work directly with founders and small teams — not through an agency, not through layers of account managers. When you work with me, you get me. I'm deliberate about capacity because I care more about results than revenue.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }}>
                Alongside consulting, I build digital products using AI-assisted code and market them through the same search systems I teach. I write about everything publicly on the blog — the wins, the failures, and the things that surprised me.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }}>
                If you're a founder who wants to stop paying for ads that disappear the moment you pause them, and start building search presence that compounds — let's talk.
              </p>
            </div>
          </div>
        </section>

        {/* What I believe */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-10 text-center" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>What I Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Specificity beats generality every time.', body: 'Vague content ranks for nothing and gets cited by nothing. The more specific and authoritative a piece of content, the harder it is to ignore.' },
                { title: 'Search and brand are the same thing now.', body: 'What AI says about you shapes how people perceive you before they ever visit your site. Search presence is brand presence.' },
                { title: 'Test it before you teach it.', body: 'I only write about and recommend strategies I\'ve run on real projects. Opinions without evidence are just noise.' },
                { title: 'Compound beats campaign.', body: 'A piece of content that ranks and gets cited for five years is worth more than a campaign that drives a spike and disappears.' },
              ].map((item) => (
                <div key={item.title} className="card-base">
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '0.95rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>→ {item.title}</p>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Workflow Diagram */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <PillTag className="mb-5">My Process</PillTag>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>How I Run a Search Engagement</h2>
            </div>
            <SEOWorkflowDiagram />
          </div>
        </section>

        {/* CTAs */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(50px, 6vw, 70px) 24px' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Ready to Work Together?</h2>
            <p style={{ fontFamily: 'var(--font-lora)', color: '#5C5248', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              I take a limited number of clients at a time. If you want search visibility that compounds, let's talk.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Work With Me →</Link>
              <Link href="/blog" className="btn-secondary">Read the Blog →</Link>
            </div>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
