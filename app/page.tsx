import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import HeroSection from '@/components/sections/HeroSection'
import PillTag from '@/components/ui/PillTag'
import PostCard, { Post } from '@/components/blog/PostCard'
import SEOWorkflowDiagram from '@/components/SEOWorkflowDiagram'

export const metadata: Metadata = {
  title: 'SEO Specialist & GEO Consultant | Usman Khizar',
  description: 'SEO specialist and GEO consultant helping brands rank on Google and get cited by AI. I build search visibility across every modern search surface.',
  openGraph: {
    title: 'SEO Specialist & GEO Consultant | Usman Khizar',
    description: 'SEO specialist and GEO consultant helping brands rank on Google and get cited by AI. I build search visibility across every modern search surface.',
    url: 'https://usmankhizar.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Specialist & GEO Consultant | Usman Khizar',
    description: 'SEO specialist and GEO consultant for founders, agencies, and local businesses. I optimise websites, GMB, content and SearchAtlas campaigns using GSC, Analytics, Ahrefs, Screaming Frog and modern SEO systems.',
  },
  alternates: { canonical: 'https://usmankhizar.com' },
}

const featuredPosts: Post[] = [
  {
    slug: 'what-is-generative-engine-optimization',
    title: 'What is Generative Engine Optimisation? The 2026 Guide',
    teaser: "GEO is the practice of optimising content so AI systems cite you. Here's everything you need to know.",
    category: 'SEO/GEO/AEO',
    readTime: '8 min read',
    date: '2026-03-10',
  },
  {
    slug: 'parasite-seo-7-platforms',
    title: 'Parasite SEO: 7 Platforms I Use to Rank Fast',
    teaser: 'High-authority platforms can rank in days, not months. Here are the seven I rely on.',
    category: 'Parasite SEO',
    readTime: '6 min read',
    date: '2026-02-28',
  },
  {
    slug: 'answer-engine-optimisation',
    title: 'Answer Engine Optimisation: What It Is and Why It Matters Now',
    teaser: 'AEO is about structuring content so search engines — and AI — can extract direct answers.',
    category: 'SEO/GEO/AEO',
    readTime: '5 min read',
    date: '2026-02-14',
  },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Usman Khizar',
  url: 'https://usmankhizar.com',
  jobTitle: 'Search Marketer',
  sameAs: [
    'https://www.linkedin.com/in/usmankhizar',
    'https://twitter.com/usmankhizar',
  ],
  description: 'SEO specialist and GEO consultant helping brands rank on Google and get cited by ChatGPT, Perplexity, and AI Overviews.',
  knowsAbout: [
    'SEO',
    'GEO',
    'Generative Engine Optimisation',
    'Answer Engine Optimisation',
    'Parasite SEO',
    'LinkedIn Growth',
    'AI search visibility',
    'LLM citation optimisation',
  ],
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
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar transparent={true} />
      <main style={{ paddingTop: 0 }}>
        {/* ── Hero ── */}
        <HeroSection />

        <p style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;">Usman Khizar is an SEO specialist and GEO consultant helping brands rank on Google and get cited by AI assistants including ChatGPT, Perplexity, Google AI Overviews, and Gemini. He provides search engine optimisation, generative engine optimisation, answer engine optimisation, parasite SEO, and LinkedIn growth services.</p>

        {/* ── How I Help ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center mb-12" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
              SEO, GEO & LinkedIn Growth Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <SearchIcon />,
                  label: 'SEO · GEO · AEO',
                  title: 'Full-Stack Search Visibility',
                  body: (
                    <>
                      Get found on Google and get cited by AI. I build <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>content strategies</Link> and <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>technical SEO foundations</Link> that rank on every modern search surface — not just 2019 Google. <Link href="/services/seo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>Explore SEO consulting</Link> or <Link href="/services/aeo-consulting" style={{ color: '#C4533A', textDecoration: 'none' }}>AEO consulting</Link>.
                    </>
                  ),
                  link: 'Explore the approach →',
                  href: '/services',
                },
                {
                  icon: <SearchIcon />,
                  label: 'SaaS SEO',
                  title: 'SaaS SEO Specialist',
                  body: "I help SaaS companies build topical authority, rank for high-intent product keywords, and get cited in AI-powered buying decisions. From content strategy to technical SEO foundations.",
                  link: 'Explore SaaS SEO →',
                  href: '/services/saas-seo',
                },
                {
                  icon: <SearchIcon />,
                  label: 'E-commerce SEO',
                  title: 'E-commerce SEO Specialist',
                  body: "I help e-commerce brands rank product and category pages, fix crawlability issues, and build the authority needed to outrank established competitors on Google and AI search.",
                  link: 'Explore E-commerce SEO →',
                  href: '/services/ecommerce-seo',
                },
                {
                  icon: <GraphIcon />,
                  label: 'Local SEO & SearchAtlas',
                  title: 'Local SEO Specialist',
                  body: (
                    <>
                      I work with top SEO agencies and local SEO gurus to optimise Google Business Profile and GMB categories, descriptions, services, and website service pages. <Link href="/services/local-seo-specialist" style={{ color: '#C4533A', textDecoration: 'none' }}>Local SEO specialist</Link> and <Link href="/services/search-atlas-seo-specialist" style={{ color: '#C4533A', textDecoration: 'none' }}>SearchAtlas SEO specialist</Link> pages explain the process.
                    </>
                  ),
                  link: 'Learn local SEO →',
                  href: '/services/local-seo-specialist',
                },
                {
                  icon: <CodeIcon />,
                  label: 'Vibe Code Products',
                  title: 'Build & Market',
                  body: "I build digital products using AI-assisted code and market them through SEO and content. The full system, not just the build.",
                  link: 'Learn the approach →',
                  href: '/services#build',
                },
                {
                  icon: <GraphIcon />,
                  label: 'LinkedIn Growth',
                  title: 'LinkedIn & Personal Brand',
                  body: "Grow an audience of the right people. Turn followers into leads. I teach the exact LinkedIn system I use to attract consulting clients.",
                  link: 'See how it works →',
                  href: '/services#linkedin',
                },
              ].map((card) => (
                <div key={card.title} className="card-base flex flex-col gap-4">
                  <div style={{ color: '#C4533A', width: 32, height: 32 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.92rem', color: '#1A1A1A', lineHeight: 1.65, flex: 1 }}>
                    {card.body}
                  </p>
                  <Link href={card.href} style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.85rem', color: '#C4533A', textDecoration: 'none' }}>
                    {card.link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What This Covers ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(40px, 6vw, 80px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              What This Covers
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.85, maxWidth: 860, margin: '0 auto' }}>
              Full-stack search marketing covers four interconnected layers. <Link href="/services/seo-consulting/technical-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>Technical SEO</Link> ensures search engines can crawl and index your site. <Link href="/services/seo-consulting/on-page-seo" style={{ color: '#C4533A', textDecoration: 'none' }}>On-page SEO</Link> structures every page for maximum relevance. <Link href="/services/seo-consulting/content-strategy" style={{ color: '#C4533A', textDecoration: 'none' }}>Content strategy</Link> builds topical authority that compounds over time. And <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>authority building</Link> earns the backlinks and trust signals that push pages to the top. For AI search surfaces, <Link href="/services/aeo-consulting/featured-snippet-optimisation" style={{ color: '#C4533A', textDecoration: 'none' }}>featured snippet optimisation</Link>, <Link href="/services/aeo-consulting/schema-markup" style={{ color: '#C4533A', textDecoration: 'none' }}>schema markup</Link>, and <Link href="/services/aeo-consulting/question-based-content" style={{ color: '#C4533A', textDecoration: 'none' }}>question-based content</Link> determine whether your pages get cited by ChatGPT, Perplexity, and Google AI Overviews.
            </p>
          </div>
        </section>

        {/* ── The Search Stack ── */}
        <section style={{ backgroundColor: '#141210', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span
                style={{
                  display: 'inline-block',
                  border: '1px solid #3A332C',
                  borderRadius: '100px',
                  padding: '5px 16px',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: '#C9BCA8',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                The Search Stack
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-archivo-black)',
                  fontWeight: 900,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  color: '#FAF8F4',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                GEO, AEO & LLM SEO All Start<br />With One Thing
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontSize: '1.05rem',
                  color: '#FAF8F4',
                  lineHeight: 1.75,
                  maxWidth: 600,
                  margin: '0 auto',
                }}
              >
                Every AI citation, every featured snippet, every Perplexity answer traces back to traditional SEO done right. The new search surfaces don't replace the foundation — they reward the businesses that already built it.
              </p>
            </div>

            {/* Layer cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  tier: '01',
                  name: 'Traditional SEO',
                  role: 'The Foundation',
                  desc: 'Technical health, crawlability, keyword targeting, and E-E-A-T. Without this, nothing above it works.',
                  tags: ['Technical Audit', 'On-Page', 'Backlinks', 'Authority'],
                  borderColor: '#3A332C',
                  tierColor: '#5C5248',
                  badge: null,
                },
                {
                  tier: '02',
                  name: 'GEO',
                  role: 'Generative Engine Optimisation',
                  desc: 'Structure your content so AI systems choose to cite you — not paraphrase you. Requires established authority first.',
                  tags: ['Information Density', 'Schema', 'Entity Clarity', 'AI Citation'],
                  borderColor: '#4A2820',
                  tierColor: '#C4533A',
                  badge: 'Builds on 01',
                },
                {
                  tier: '03',
                  name: 'AEO',
                  role: 'Answer Engine Optimisation',
                  desc: 'Win featured snippets, People Also Ask, and zero-click results by structuring answers engines can extract directly.',
                  tags: ['Featured Snippets', 'PAA', 'FAQ Schema', 'Zero-Click'],
                  borderColor: '#4A2820',
                  tierColor: '#C4533A',
                  badge: 'Builds on 02',
                },
                {
                  tier: '04',
                  name: 'LLM Visibility',
                  role: 'ChatGPT · Perplexity · Claude',
                  desc: 'AI models cite sources they already trust. Appear in AI answers at scale when your SEO, GEO, and AEO layers are solid.',
                  tags: ['ChatGPT', 'Perplexity', 'AI Overviews', 'Brand Mentions'],
                  borderColor: '#2A2520',
                  tierColor: '#FAF8F4',
                  badge: 'Builds on 03',
                },
              ].map((layer) => (
                <div
                  key={layer.tier}
                  style={{
                    backgroundColor: '#1A1612',
                    border: `1px solid ${layer.borderColor}`,
                    borderRadius: 12,
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      style={{
                        fontFamily: 'var(--font-jetbrains-mono)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: layer.tierColor,
                        lineHeight: 1,
                      }}
                    >
                      {layer.tier}
                    </span>
                    {layer.badge && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-dm-sans)',
                          fontWeight: 500,
                          color: '#FAF8F4',
                          border: '1px solid #2A2520',
                          borderRadius: '100px',
                          padding: '2px 9px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {layer.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: '#FAF8F4',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {layer.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.75rem',
                        color: '#FAF8F4',
                        fontWeight: 500,
                      }}
                    >
                      {layer.role}
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-lora)',
                      fontSize: '0.88rem',
                      color: '#FAF8F4',
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {layer.desc}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-dm-sans)',
                          fontWeight: 500,
                          color: '#FAF8F4',
                          border: '1px solid #2A2520',
                          borderRadius: '100px',
                          padding: '2px 9px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom truth */}
            <div
              style={{
                borderTop: '1px solid #2A2520',
                paddingTop: '2rem',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9rem',
                  color: '#5C5248',
                  lineHeight: 1.7,
                  maxWidth: 560,
                  margin: '0 auto 1.5rem',
                }}
              >
                The businesses appearing in AI answers didn't get there by chasing AI. They got there because their{' '}
                <strong style={{ color: '#FAF8F4', fontWeight: 600 }}>SEO foundation was already solid</strong> — and the new surfaces rewarded that.
              </p>
              <Link
                href="/services"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#C4533A',
                  textDecoration: 'none',
                }}
              >
                See how I build the full stack →
              </Link>
            </div>
          </div>
        </section>

        {/* ── My Process (workflow diagram) ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <PillTag className="mb-5">My Process</PillTag>
              <h2
                className="section-title"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '0.75rem' }}
              >
                How a Search Engagement Actually Runs
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontSize: '1rem',
                  color: '#5C5248',
                  lineHeight: 1.7,
                  maxWidth: 560,
                  margin: '0 auto',
                }}
              >
                No black boxes. Every sprint, every deliverable, every AI tool — visible from day one.
              </p>
            </div>
            <SEOWorkflowDiagram />
          </div>
        </section>

        {/* ── Latest Blog Posts ── */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '0.5rem' }}>
                Latest From The Blog
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '1rem' }}>
                Practical. Specific. No fluff.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/blog" className="btn-secondary">View All Posts</Link>
            </div>
          </div>
        </section>

        {/* ── Email Capture ── */}
        <EmailCapture />

        {/* ── About Tease ── */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div
              style={{
                flex: '0 0 40%',
                height: 360,
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid #C9BCA8',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/usman-photo.png"
                alt="Usman Khizar"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.12em', color: '#C4533A', textTransform: 'uppercase', marginBottom: '1rem' }}>
                A Bit About Me
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                I'm Usman Khizar — a search marketer obsessed with the intersection of traditional SEO and the new AI-powered search landscape.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '0.75rem' }}>
                I work directly with founders and small teams who want real visibility — not vanity metrics. Every strategy I build is one I've tested on my own projects first.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                When I'm not deep in keyword research or GEO audits, I'm building digital products and writing about what's actually working in search right now.
              </p>
              <Link href="/about" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, color: '#C4533A', textDecoration: 'none', fontSize: '0.95rem' }}>
                → Full story
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function SearchIcon() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  )
}
function GraphIcon() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 17l4-8 4 4 4-6 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function CodeIcon() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M8 9l-4 4 4 4M16 9l4 4-4 4M12 5l-2 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
