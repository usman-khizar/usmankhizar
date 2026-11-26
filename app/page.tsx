import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import HeroSection from '@/components/sections/HeroSection'
import PostCard, { Post } from '@/components/blog/PostCard'
import GrowthGlobe from '@/components/home/GrowthGlobe'
import LeakCalculator from '@/components/home/LeakCalculator'
import Proof from '@/components/home/Proof'
import SkillDrum from '@/components/home/SkillDrum'
import StackScene from '@/components/home/StackScene'
import TiltCard from '@/components/home/TiltCard'
import { LeadMagnetButton } from '@/components/lead/LeadMagnet'
import { checkCount } from '@/lib/checklist'
import './home.css'

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

const thoughts = [
  'We get traffic. We just don\'t get customers from it.',
  'I pay three freelancers, and they have never spoken to each other.',
  'Leads come in on WhatsApp, email, and Instagram. Some never get a reply.',
  'I have no idea which part of our marketing is working.',
]

const ways = [
  {
    title: 'Marketing consulting',
    fit: '"Just tell me what to fix first."',
    body: "You have a team but no clear priorities. I review all your marketing and tell you exactly what to fix first, and why.",
    gets: ['A full review of brand, website, SEO, CRM, automation, and social', 'Fixes ranked by impact, biggest wins first', 'A plan your team can start the same week'],
  },
  {
    title: 'Fractional marketing',
    fit: '"I need someone to own this."',
    body: 'A senior marketing lead for a part-time fee. I make the plan, do the hands-on work, and report results in plain English.',
    gets: ['Strategy and execution from one person', 'Your website, CRM, and follow-up connected', 'One person responsible for the whole plan'],
  },
  {
    title: 'Brand strategy',
    fit: '"Customers only compare us on price."',
    body: "If buyers can't see why you're different, they pick the cheapest. I sharpen your message so they pick you.",
    gets: ['Who you serve, and why they should choose you', 'A clear message your whole team can repeat', 'Used across your website, profiles, and content'],
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
  { title: "We find what's broken", body: "A close look at your business, customers, numbers, and what you've already tried. No sales pitch, just the facts." },
  { title: 'You get a clear plan', body: "What to fix, in what order, and what to stop paying for. You'll know exactly what happens next." },
  { title: 'I build it with you', body: "Pages, content, CRM, and automations get built and connected. You don't just get a report and a handshake." },
  { title: 'We double down on what works', body: "We track real leads and real sales. What works gets more budget. What doesn't gets cut." },
]

const skills = ['Brand strategy', 'SEO and AI search', 'Website design and development', 'GoHighLevel and CRM', 'AI automation', 'Social media marketing']

const faqs = [
  { q: 'What does Usman Khizar do?', a: 'Usman Khizar is a marketing consultant, brand strategist, and fractional marketer. Usman helps businesses get more customers by connecting their brand, website, SEO, CRM, automation, and social media into one system, and does the hands-on work too.' },
  { q: 'What does it cost?', a: 'It depends on how much work you hand over. After a short call, you get the scope and price in writing, as a one-time project or a monthly fee, before any work starts.' },
  { q: 'What is a fractional marketer?', a: "A fractional marketer is a senior marketing lead you hire part-time instead of full-time. I own your marketing plan, do hands-on work across brand, website, search, CRM, automation, and social, and report on results. You get senior skills without a full-time salary." },
  { q: 'How is this different from hiring an agency?', a: "You work with me directly, not an account manager. You see the plan before you commit, and if I'm not the right fit, I'll tell you." },
  { q: 'How long until I see results?', a: "Fixing follow-up and key pages can work quickly, because those leads are already coming in. SEO and brand take months to build. I'll tell you which is which for your business, and I won't promise numbers I don't control." },
  { q: 'Can you work with my existing team or agency?', a: "Yes. I can set the direction, fill the gaps, and make sure everyone's work connects." },
  { q: 'Can you set up GoHighLevel for me?', a: 'Yes. I set up pipelines, forms, booking calendars, and follow-up workflows in GoHighLevel, connected to your website so every enquiry gets answered and tracked.' },
  { q: 'What happens after I get in touch?', a: "I read every message myself and reply within 48 hours. I take on a limited number of clients at a time, so I'll tell you straight away whether and when I can help." },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const deckColors = ['#FFFFFF', '#FBF3E6', '#F6E8D3', '#F0DDBF']

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar transparent={true} />
      <main>
        <HeroSection />
        <section className="home-section">
          <div className="home-wrap">
            <h2>Sound familiar?</h2>
            <ul className="pain rise">
              {thoughts.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="home-lead">
              These look like four problems. They&apos;re one: nobody owns your marketing from start to finish. That&apos;s the job I
              take on.
            </p>
          </div>
        </section>

        <GrowthGlobe />

        <section id="offers" className="home-section">
          <div className="home-wrap">
            <h2>Three ways to work with me</h2>
            <div className="home-ways rise">
              {ways.map((w) => (
                <TiltCard key={w.title}>
                  <h3>{w.title}</h3>
                  <p className="home-fit">{w.fit}</p>
                  <p>{w.body}</p>
                  <ul className="ticks">{w.gets.map((g) => <li key={g}>{g}</li>)}</ul>
                </TiltCard>
              ))}
            </div>
            <div className="cta-line">
              <Link href="/contact" className="home-btn">Apply to Work With Me</Link>
              <p>A limited number of projects at a time. I reply within 48 hours.</p>
            </div>
          </div>
        </section>

        <section id="what-i-do" className="home-section home-tint">
          <div className="home-wrap">
            <h2>Six marketing roles. One person.</h2>
            <p className="home-lead">Most businesses hire a designer, an SEO, a CRM person, and a content writer who never talk to each other. With me, all six jobs work together.</p>
            <StackScene layers={stack} />
          </div>
        </section>

        <section className="home-section home-dark">
          <div className="home-wrap">
            <h2>More traffic won&apos;t fix a leaky website.</h2>
            <p className="home-lead">Put in your own numbers. See how many more customers you&apos;d get from the visitors you already have.</p>
            <LeakCalculator />
          </div>
        </section>

        <section id="process" className="home-section">
          <div className="home-wrap">
            <h2>How we work together, in four steps</h2>
            <ol className="deck">
              {steps.map((step, i) => (
                <li key={step.title} style={{ '--i': i, '--deck': deckColors[i] } as React.CSSProperties}>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band">
          <div className="home-wrap">
            <div className="rise">
              <h2>Free: find out why your marketing isn&apos;t bringing in customers.</h2>
              <p>The Growth Checklist: {checkCount} yes-or-no checks across your whole marketing. Ten minutes, free, and you&apos;ll know which area to fix first.</p>
              <LeadMagnetButton>Get the Free Checklist</LeadMagnetButton>
            </div>
            <div className="lead-sheets" aria-hidden="true"><i /><i /><i><b /><b /><b /><b /></i></div>
          </div>
        </section>

        <section id="skills" className="home-section home-dark">
          <div className="home-wrap home-learn">
            <div>
              <h2>Hire one person. Get six skill sets.</h2>
              <p className="home-lead">
                Strategy and hands-on work from the same person. No handoffs, no lost details, and no paying two people to explain
                things to each other.
              </p>
              <Link href="/contact" className="home-btn">Apply to Work With Me</Link>
              <p className="home-mail"><Link href="/services" className="home-text-link">See every service</Link></p>
            </div>
            <SkillDrum skills={skills} />
          </div>
        </section>

        <section className="home-section">
          <div className="home-wrap home-about rise">
            <div className="home-about-photo">
              <Image src="/usman-khizar.jpg" alt="Usman Khizar" fill sizes="(max-width: 860px) 80vw, 360px" />
            </div>
            <div>
              <h2>I started in SEO. Then I saw why traffic alone doesn&apos;t sell.</h2>
              <p>
                Keyword research, content, technical audits, link building. I came up through all of it. But a first-page ranking
                can&apos;t rescue a message nobody understands, and more traffic can&apos;t help a lead nobody calls back.
              </p>
              <p>
                So I learned the rest. Today I work directly with founders and small teams across the whole path, from the first
                search to the signed customer. If your marketing has good parts and no owner, that&apos;s the job I do.
              </p>
              <Link href="/about" className="home-text-link">Read my story</Link>
            </div>
          </div>
        </section>

        <Proof />

        <section className="home-section">
          <div className="home-wrap">
            <h2>Questions before we talk</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q} name="faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closer">
          <div className="home-wrap rise">
            <h2>Ready for marketing that brings in customers?</h2>
            <p>Tell me what you&apos;re working on. I&apos;ll come back within 48 hours with honest thoughts on whether I can help, and how.</p>
            <Link href="/contact" className="home-btn">Apply to Work With Me</Link>
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
