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

const geoPostContent = {
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
  faqs: [
    { q: 'What is Generative Engine Optimisation?', a: 'GEO is the practice of structuring and optimising content so that AI-powered search engines like ChatGPT, Perplexity, and Google AI Overviews cite it when answering user queries.' },
    { q: 'How is GEO different from SEO?', a: 'SEO optimises for ranking algorithms that score and sort pages. GEO optimises for AI systems that synthesise answers from multiple sources — the goal is citation, not just ranking.' },
    { q: 'How do I know if my content is GEO-ready?', a: 'Check whether your key pages answer specific questions directly, contain verifiable statistics or unique data, and clearly establish the author as an expert. If not, you have GEO gaps to address.' },
  ],
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const isGeoPost = slug === 'what-is-generative-engine-optimization'
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

  const faqSchema = isGeoPost
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: geoPostContent.faqs.map((faq) => ({
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
              {isGeoPost ? (
                <>
                  {/* Stat callout */}
                  <div style={{ backgroundColor: '#F5F0E8', borderLeft: '3px solid #C4533A', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '1.5rem', color: '#C4533A', fontWeight: 700 }}>~40%</span>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', color: '#5C5248', marginTop: '0.25rem' }}>of Google searches now trigger an AI Overview — and that number is growing every month.</p>
                  </div>

                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {geoPostContent.intro}
                  </p>

                  {geoPostContent.sections.map((section) => (
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
                      "The brands that appear in AI answers don't just get clicks — they build trust at scale. That's the compounding effect of GEO done right."
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
                      {geoPostContent.faqs.map((faq) => (
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
                {isGeoPost && (
                  <div className="card-base" style={{ padding: 20 }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: '#5C5248', textTransform: 'uppercase', marginBottom: '1rem' }}>
                      Contents
                    </p>
                    <div className="flex flex-col gap-2">
                      {geoPostContent.sections.map((s) => (
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