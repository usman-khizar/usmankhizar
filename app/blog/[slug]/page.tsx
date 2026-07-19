import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import PillTag from '@/components/ui/PillTag'
import PostCard from '@/components/blog/PostCard'
import { allPosts, getPostBySlug } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.teaser,
    openGraph: {
      title: `${post.title} | Usman Khizar`,
      description: post.teaser,
      url: `https://usmankhizar.com/blog/${slug}`,
    },
    alternates: { canonical: `https://usmankhizar.com/blog/${slug}` },
  }
}

type RichPostContent = {
  statValue: string
  statLabel: string
  intro: string
  sections: { heading: string; body: string }[]
  quote: string
  faqs: { q: string; a: string }[]
}

const richPostsContent: Record<string, RichPostContent> = {
  'what-is-generative-engine-optimization': {
    statValue: '~40%',
    statLabel: 'of Google searches now trigger an AI Overview — and that number is growing every month.',
    intro: `Generative Engine Optimisation (GEO) is the discipline of structuring your content so that AI-powered search systems — ChatGPT, Perplexity, Google AI Overviews, and their successors — reference and cite your pages when answering user queries.`,
    sections: [
      {
        heading: 'Why GEO Is Different From Traditional SEO',
        body: `Traditional SEO is fundamentally about signals: backlinks, on-page keywords, Core Web Vitals. You're optimising for a ranking algorithm that scores and sorts pages. GEO is different. You're optimising for an AI system that synthesises information from multiple sources and constructs a new answer. The AI doesn't just rank your page — it decides whether your content is worth citing at all.`,
      },
      {
        heading: 'The Three Pillars of GEO',
        body: `The core of GEO sits on three pillars. First: information density. AI systems prefer content that is specific, factual, and citable — not vague overviews. Second: structure. Direct answers, clear headings, definition-style formatting, and FAQ sections all make it easier for AI to extract and attribute your content. Third: authority signals. AI systems are trained to cite sources that appear credible — this means real expertise, verifiable facts, and a recognisable brand presence across the web.`,
      },
      {
        heading: 'How to Audit Your Content for GEO Readiness',
        body: `Start by asking three questions about each key page. Does the page answer a specific question directly, in the first 150 words? Does it contain statistics, named sources, or unique data that makes it worth citing? Is the author and brand clearly established, with evidence of expertise? If you answer no to any of these, you have a GEO gap.`,
      },
      {
        heading: 'GEO Is Not Optional in 2026',
        body: `AI Overviews now appear on a significant percentage of Google searches. Perplexity and ChatGPT are processing hundreds of millions of queries per month. The brands that get cited in these answers capture a disproportionate share of mindshare — even when users don't click through. GEO is brand awareness at search scale.`,
      },
    ],
    quote: `The brands that appear in AI answers don't just get clicks — they build trust at scale. That's the compounding effect of GEO done right.`,
    faqs: [
      { q: 'What is Generative Engine Optimisation?', a: 'GEO is the practice of structuring and optimising content so that AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews cite it when answering user queries.' },
      { q: 'How is GEO different from SEO?', a: 'SEO optimises for ranking algorithms that score and sort pages. GEO optimises for AI systems that synthesise answers from multiple sources — the goal is citation, not just ranking.' },
      { q: 'How do I know if my content is GEO-ready?', a: 'Check whether your key pages answer specific questions directly, contain verifiable statistics or unique data, and clearly establish the author as an expert. If not, you have GEO gaps to address.' },
    ],
  },
  'answer-engine-optimisation': {
    statValue: '~60%',
    statLabel: 'of searches now end without a click — the answer engine already gave the reader what they needed.',
    intro: `Answer Engine Optimisation (AEO) is the practice of structuring content so that answer engines — Google's featured snippets and AI Overviews, voice assistants, ChatGPT, Perplexity — can extract a direct, complete answer and serve it without a click. Search is no longer just a ranked list of blue links. Increasingly, it's a single synthesised answer pulled straight from whichever page did the structuring work in advance.`,
    sections: [
      {
        heading: 'Why Answer Engines Change the Search Game',
        body: `Featured snippets, People Also Ask, Google AI Overviews, and conversational assistants like ChatGPT and Perplexity all work the same way: they pull from structured, authoritative content and present it as a direct answer. AI Overviews alone now appear on a large share of Google searches, voice search is inherently question-based, and zero-click results keep growing every quarter. Being the source an answer engine extracts from is a visibility channel of its own now, separate from where you rank.`,
      },
      {
        heading: 'The Core Signals Answer Engines Look For',
        body: `Five signals do most of the work. Answer-first structure: the direct, complete answer sits in the first 100 words, since AI systems weight the opening paragraph more heavily than anything below it. Question-based headings: H2s and H3s phrased the way people actually ask, "What is X" before you explain X. FAQPage schema: JSON-LD markup so Google and AI systems can parse question-and-answer pairs directly, rather than guessing at structure. Factual specificity: named examples, real data, and direct definitions, because vague content doesn't get extracted or cited. Entity clarity: Person and About schema stating who wrote the page and why they're qualified to answer.`,
      },
      {
        heading: 'AEO vs SEO vs GEO',
        body: `The three disciplines overlap but aren't identical. SEO optimises for ranking position. GEO optimises for citation inside AI-generated answers. AEO optimises for direct-answer extraction, regardless of whether that answer appears in a featured snippet, a voice response, or a chat interface. In practice, a well-structured page tends to satisfy all three at once, because the same underlying signals — authority, structure, specificity — are what each discipline rewards.`,
      },
      {
        heading: 'A 5-Step AEO Readiness Audit',
        body: `Run every key page through the same checklist. Does the first paragraph contain a direct, complete answer? Are the H2s and H3s phrased as real questions? Is FAQPage schema implemented on the page? Are specific facts, stats, and named examples present, rather than generalities? Is Person or About schema in place, identifying the author and their expertise? A page that fails two or more of these is being skipped by answer engines regardless of how well it ranks.`,
      },
    ],
    quote: `If your page can't state the answer in the first two sentences, an answer engine will find one that can.`,
    faqs: [
      { q: 'What is Answer Engine Optimisation?', a: 'AEO is the practice of structuring content — answer-first paragraphs, question-based headings, FAQPage schema, specific facts, and clear author signals — so that featured snippets, AI Overviews, and voice assistants can extract a direct answer from the page.' },
      { q: 'How is AEO different from SEO and GEO?', a: 'SEO optimises for ranking position, GEO optimises for citation inside AI-generated answers, and AEO optimises for direct-answer extraction. The same authority and structure signals tend to support all three at once.' },
      { q: 'How do I audit a page for AEO readiness?', a: "Check whether the first paragraph answers the question directly, whether headings are phrased as questions, whether FAQPage schema is implemented, whether specific facts and named examples are present, and whether Person or About schema identifies the author's expertise." },
    ],
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const richContent = richPostsContent[slug]
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.teaser,
    author: { '@type': 'Person', name: 'Usman Khizar', url: 'https://usmankhizar.com' },
    datePublished: post.date,
    url: `https://usmankhizar.com/blog/${slug}`,
  }

  const faqSchema = richContent
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: richContent.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        {/* Post header */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(50px, 7vw, 90px) 24px', position: 'relative' }}>
          <div className="max-w-3xl mx-auto">
            <PillTag className="mb-5">{post.category}</PillTag>
            <h1
              style={{
                fontFamily: 'var(--font-archivo-black)',
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: '#1A1A1A',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              {post.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.1rem', color: '#5C5248', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {post.teaser}
            </p>
            <div className="flex flex-wrap gap-4 items-center" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', color: '#5C5248' }}>
              <span>By <strong style={{ color: '#1A1A1A' }}>{post.author}</strong></span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        {/* Post body + sidebar */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(50px, 6vw, 80px) 24px' }}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Body */}
            <article style={{ flex: 1, maxWidth: 680 }}>
              {richContent ? (
                <>
                  {/* Stat callout */}
                  <div style={{ backgroundColor: '#F5F0E8', borderLeft: '3px solid #C4533A', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '1.5rem', color: '#C4533A', fontWeight: 700 }}>{richContent.statValue}</span>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', color: '#5C5248', marginTop: '0.25rem' }}>{richContent.statLabel}</p>
                  </div>

                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {richContent.intro}
                  </p>

                  {richContent.sections.map((section) => (
                    <div key={section.heading} style={{ marginBottom: '2.5rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.25rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>
                        {section.heading}
                      </h2>
                      <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }}>
                        {section.body}
                      </p>
                    </div>
                  ))}

                  {/* Pull quote */}
                  <blockquote
                    style={{
                      borderLeft: '3px solid #C4533A',
                      paddingLeft: '1.5rem',
                      margin: '2.5rem 0',
                    }}
                  >
                    <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '1.15rem', color: '#1A1A1A', lineHeight: 1.7 }}>
                      "{richContent.quote}"
                    </p>
                    <footer style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', color: '#5C5248', marginTop: '0.5rem' }}>
                      — Usman Khizar
                    </footer>
                  </blockquote>

                  {/* FAQs */}
                  <div style={{ marginTop: '3rem', borderTop: '1px solid #C9BCA8', paddingTop: '2.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.25rem', color: '#1A1A1A', marginBottom: '1.5rem' }}>
                      Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-5">
                      {richContent.faqs.map((faq) => (
                        <div key={faq.q}>
                          <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.95rem', color: '#1A1A1A', marginBottom: '0.4rem' }}>
                            {faq.q}
                          </h3>
                          <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.92rem', color: '#5C5248', lineHeight: 1.65 }}>
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
                    This post is coming soon. <Link href="/blog" style={{ color: '#C4533A', fontWeight: 600 }}>Browse all posts →</Link>
                  </p>
                </div>
              )}
            </article>

            {/* Sidebar — desktop only */}
            <aside
              className="hidden lg:block"
              style={{ width: 260, flexShrink: 0 }}
            >
              <div style={{ position: 'sticky', top: 88, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* TOC */}
                {richContent && (
                  <div className="card-base" style={{ padding: 20 }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: '#5C5248', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      Contents
                    </p>
                    <div className="flex flex-col gap-2">
                      {richContent.sections.map((s) => (
                        <p key={s.heading} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.82rem', color: '#5C5248', lineHeight: 1.4, cursor: 'pointer' }}>
                          {s.heading}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {/* Mini email capture */}
                <div style={{ backgroundColor: '#141210', borderRadius: 14, padding: 20 }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '0.9rem', color: '#FAF8F4', marginBottom: '0.5rem' }}>Get the playbook</p>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.82rem', color: '#C9BCA8', marginBottom: '1rem', lineHeight: 1.5 }}>
                    SEO + GEO + AEO in one system. Free.
                  </p>
                  <form action="/api/subscribe" method="POST" className="flex flex-col gap-2">
                    <input type="email" name="email" placeholder="your@email.com" style={{ padding: '8px 12px', borderRadius: 6, border: 'none', fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', color: '#1A1A1A', backgroundColor: '#FAF8F4' }} />
                    <button type="submit" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Send It</button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Author card + share */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(40px, 5vw, 60px) 24px' }}>
          <div className="max-w-3xl mx-auto">
            <div className="card-base flex flex-col sm:flex-row gap-5 items-start">
              <div style={{ width: 64, height: 64, borderRadius: '50%', border: '2px solid #C9BCA8', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                <Image src="/usman-photo.png" alt="Usman Khizar" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} sizes="64px" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.3rem' }}>Usman Khizar</p>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  Search marketer specialising in SEO, GEO, and AEO. I help founders and businesses get found everywhere in search.
                </p>
                <Link href="/about" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.85rem', color: '#C4533A', textDecoration: 'none' }}>
                  More about Usman →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related posts */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(40px, 6vw, 70px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title mb-8" style={{ fontSize: '1.5rem' }}>Keep Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}