import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import HeroSection from '@/components/sections/HeroSection'
import PostCard, { Post } from '@/components/blog/PostCard'

const title = 'Brand Strategist & Fractional Marketer | Usman Khizar'
const description = 'Usman Khizar is a marketing consultant, brand strategist, and fractional full-stack marketer covering positioning, websites, search, CRM, automation, and social.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { images: ogImages, title, description, url: 'https://usmankhizar.com', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
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

const ways = [
  {
    title: 'Marketing consulting',
    fit: 'You have a team and need clear direction.',
    body: 'I review what you are doing, find what is holding it back, and give you a prioritised plan your team can run.',
  },
  {
    title: 'Brand strategy',
    fit: 'People do not quickly understand why to choose you.',
    body: 'We define who you serve, what you stand for, and how you say it, then carry that through your site, profiles, and content.',
  },
  {
    title: 'Fractional marketing',
    fit: 'You need a marketing lead, but not a full-time hire.',
    body: 'I join part-time, own the plan and priorities, do the hands-on work, and report on it in plain English.',
  },
]

const stack = [
  { name: 'Brand and positioning', body: 'Audience, message, offer, and personal brand, including LinkedIn.', links: [{ label: 'LinkedIn growth', href: '/services#linkedin' }] },
  { name: 'Websites and landing pages', body: 'Design and development, with search and lead capture planned in from the start.', links: [{ label: 'Build and market', href: '/services#build' }] },
  {
    name: 'Search and AI visibility',
    body: 'Rankings on Google, and content structured for ChatGPT, Perplexity, and AI Overviews.',
    links: [
      { label: 'SEO', href: '/services/seo-consulting' },
      { label: 'GEO', href: '/services/geo-consulting' },
      { label: 'AEO', href: '/services/aeo-consulting' },
      { label: 'Local SEO', href: '/services/local-seo-specialist' },
      { label: 'SaaS SEO', href: '/services/saas-seo' },
      { label: 'E-commerce SEO', href: '/services/ecommerce-seo' },
      { label: 'Link building', href: '/services/link-building' },
    ],
  },
  { name: 'CRM and GoHighLevel', body: 'Pipelines, forms, calendars, and follow-up, so enquiries are answered and tracked.', links: [] },
  { name: 'AI automation', body: 'Workflows that take repeat work off your team, with a person checking what matters.', links: [] },
  { name: 'Social and content', body: 'A content plan, a publishing rhythm, and posts that lead somewhere.', links: [{ label: 'Content strategy', href: '/services/seo-consulting/content-strategy' }] },
]

const steps = [
  { title: 'Discovery', body: 'We go through your business, audience, numbers, and what you have already tried.' },
  { title: 'Strategy', body: 'You get a focused plan: positioning, channels, priorities, and what to leave alone.' },
  { title: 'Build', body: 'I build it or guide your team: pages, content, campaigns, CRM, and automations.' },
  { title: 'Measure', body: 'We look at real leads and revenue, then change what is not working.' },
]

const skills = ['SEO and AI search', 'GoHighLevel', 'Website design and development', 'AI automation', 'Social media marketing', 'Digital marketing']

const learnMail = `mailto:hello@usmankhizar.com?subject=${encodeURIComponent('I want to learn with you')}&body=${encodeURIComponent('Hi Usman, I would like to learn: ')}`

export default function HomePage() {
  return (
    <>
      <Navbar transparent={true} />
      <main>
        <HeroSection />

        <section className="home-section">
          <div className="home-wrap">
            <h2>Three ways to work together</h2>
            <div className="home-ways">
              {ways.map((w) => (
                <div key={w.title}>
                  <h3>{w.title}</h3>
                  <p className="home-fit">{w.fit}</p>
                  <p>{w.body}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="home-btn">Tell Me What You Need</Link>
          </div>
        </section>

        <section id="what-i-do" className="home-section home-tint">
          <div className="home-wrap">
            <h2>The whole stack, one person accountable</h2>
            <p className="home-lead">Most growth problems sit between channels. I work across all of them, so each part supports the next.</p>
            <dl className="home-stack">
              {stack.map((row) => (
                <div key={row.name}>
                  <dt>{row.name}</dt>
                  <dd>
                    <p>{row.body}</p>
                    {row.links.length > 0 && (
                      <p className="home-links">
                        {row.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                      </p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="process" className="home-section">
          <div className="home-wrap">
            <h2>How an engagement runs</h2>
            <ol className="home-steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="learn" className="home-section home-dark">
          <div className="home-wrap home-learn">
            <div>
              <h2>Want to learn these skills?</h2>
              <p className="home-lead">
                I&apos;m planning live online classes for students and career starters. Tell me which skill you want, and
                I&apos;ll send you the details when enrolment opens.
              </p>
              <a href={learnMail} className="home-btn">Email Me Your Skill</a>
              <p className="home-mail">hello@usmankhizar.com</p>
            </div>
            <ul>
              {skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        <section className="home-section">
          <div className="home-wrap home-about">
            <div className="home-about-photo">
              <Image src="/usman-photo.png" alt="Usman Khizar" fill sizes="(max-width: 860px) 80vw, 360px" />
            </div>
            <div>
              <h2>You work with me, not an account team</h2>
              <p>
                I came up through search: keyword research, content, technical audits, and link building. Over time the work
                grew into everything around it, because good rankings can&apos;t fix an unclear brand or a lead nobody follows up.
              </p>
              <p>
                I work directly with founders and small teams, and I take a limited number of projects at a time.
              </p>
              <Link href="/about" className="home-text-link">Read my story</Link>
            </div>
          </div>
        </section>

        <section className="home-section home-tint">
          <div className="home-wrap">
            <h2>From the blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ margin: '2rem 0' }}>
              {featuredPosts.map((post) => <PostCard key={post.slug} post={post} />)}
            </div>
            <Link href="/blog" className="home-text-link">View all posts</Link>
          </div>
        </section>

        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
