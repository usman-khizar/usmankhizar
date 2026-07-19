import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'

export const metadata: Metadata = {
  title: 'SEO Backlink Expert | Usman Khizar',
  description: 'Hire an SEO backlink expert who builds real links from real sites. No PBNs, no spam — just high-authority placements that move rankings and stick.',
  openGraph: {
    title: 'SEO Backlink Expert | Usman Khizar',
    description: 'Hire an SEO backlink expert who builds real links from real sites. No PBNs, no spam — just high-authority placements that move rankings and stick.',
    url: 'https://usmankhizar.com/services/seo-backlink-expert',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Backlink Expert | Usman Khizar',
    description: 'Hire an SEO backlink expert who builds real links from real sites. No PBNs, no spam — just high-authority placements that move rankings and stick.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/seo-backlink-expert' },
}

const backlinkServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Backlink Expert',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'SEO backlink expert building real, editorial backlinks through direct-to-admin outreach — guest posts, niche edits, parasite SEO, and authority link building for GEO and AI visibility.',
  url: 'https://usmankhizar.com/services/seo-backlink-expert',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'SEO Backlink Expert', item: 'https://usmankhizar.com/services/seo-backlink-expert' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many links do I need per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "There's no universal number — it depends on your current authority, competitor link profiles, and how aggressive your ranking timeline is. Most clients start with 4-8 placements a month, enough to build steady momentum without triggering an unnatural velocity pattern. I give a specific recommendation after auditing your site and competitors.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from link building?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see initial ranking movement within 8-12 weeks, with more substantial gains compounding over 4-6 months. Link building is a compounding strategy — links placed today keep contributing authority long after the campaign ends, so results tend to accelerate rather than plateau.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a guest post and a niche edit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A guest post is a new article written specifically for the host site, with your link placed naturally inside the body. A niche edit adds your link into an existing, already-ranking page. Niche edits tend to show faster results because the host page's authority is already established.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build links for GEO and AI visibility as well as Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The same fundamentals — topical relevance, editorial placement, real domains — are exactly what AI answer engines like ChatGPT and Perplexity use to decide which sources are trustworthy enough to cite. Every campaign is built to work across both traditional Google rankings and AI-driven citation visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Reach out through my contact page or message me directly on Upwork or LinkedIn. I'll review your current backlink profile, identify the highest-impact niches and site types for your business, and put together a placement plan with realistic timelines and pricing before any work begins.",
      },
    },
  ],
}

export default function SeoBacklinkExpertPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(backlinkServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto">
            <PillTag className="mb-5">SEO Backlink Expert</PillTag>
            <h1 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              SEO Backlink Expert
            </h1>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, maxWidth: 760 }}>
              Most link building fails for one reason — the links aren't real. They're placed on sites that exist only to sell links, clustered in link farms, or buried on pages with zero traffic and zero editorial value. I'm Usman Khizar, an SEO backlink expert who builds links the way Google actually rewards: real placements, real sites, real editorial context. I work directly with website owners — not through marketplace middlemen — which means I access the same high-authority domains listed on major link marketplaces at roughly half the cost, because I go direct to the same admins who list there.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              What Makes a Backlink Actually Work in 2026
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Domain Authority is a starting point, not a scorecard. A backlink from a DA 35 site that covers your exact niche will move rankings faster than a DA 70 link from a domain with no topical connection to your business. Google's algorithms — and the AI models now citing sources in search — read the context around a link before they read the number attached to the site that hosts it.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Placement matters just as much as the domain. A link buried in a sitewide footer or a sidebar widget carries a fraction of the weight of a link placed inside the body of an article, surrounded by relevant text, written by an editor who chose to include it. That's the difference between a link built to manipulate rankings and a link that reflects genuine editorial judgment.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Anchor text diversity and link velocity round out the picture. Sites that acquire twenty exact-match anchors in a week look manufactured; sites that build a natural mix of branded, partial-match, and generic anchors over time look real — because they are.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
              This matters even more now that Perplexity and ChatGPT treat backlink authority as a trust signal when deciding which sources to cite. A site with a weak, spammy link profile gets skipped in AI-generated answers, regardless of how well the content itself is written.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              My Link Building Approach
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 760 }}>
              Building links that hold up under scrutiny comes down to three things: who you talk to, what you link to, and how carefully you vet every placement before it goes live.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '1.5rem', border: '1px solid #C9BCA8', borderRadius: 16, backgroundColor: '#FAF8F4' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>
                  Direct-to-Admin Outreach
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>
                  Most link building agencies and marketplaces sell you access to a network — but you rarely see who actually owns the site or how the placement gets made. I skip that layer entirely. Over the years I've built and maintained a verified database of website owners and editors across 30+ niches, and I work directly with the same admins who list their sites on major link marketplaces. That means you're not getting a similar site in the same niche — you're getting placements on the identical domains, negotiated without a marketplace's markup sitting on top. Cutting out that middle layer typically cuts cost by roughly 50%, and turnaround is faster too.
                </p>
              </div>
              <div style={{ padding: '1.5rem', border: '1px solid #C9BCA8', borderRadius: 16, backgroundColor: '#FAF8F4' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>
                  Topical Relevance First
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>
                  Every placement starts with a niche match, not a DA filter. I'd rather secure a link from a DA 40 site that covers your exact industry than a DA 70 site with no topical connection to what you do — because that's what search engines actually reward. A finance client gets links from finance and business publications. A SaaS client gets links from software and productivity sites. This is the single biggest lever in modern link building.
                </p>
              </div>
              <div style={{ padding: '1.5rem', border: '1px solid #C9BCA8', borderRadius: 16, backgroundColor: '#FAF8F4' }}>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>
                  White-Hat Only
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.95rem', color: '#5C5248', lineHeight: 1.75 }}>
                  No PBNs. No link farms. No expired-domain schemes dressed up as "aged domains." Every placement I secure sits on a live, indexed site that receives real traffic and applies real editorial standards — meaning an actual person reviews and approves the content before it goes live. It's slower and costs more than buying links in bulk, and it's the only approach that survives a Google algorithm update.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Types of Link Building I Specialise In
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              Different goals call for different placement types. Here's how I match strategy to what actually moves the needle for each kind of client.
            </p>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.4rem' }}>
                  Guest post link building
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                  I write and place original articles on relevant, editorially-run publications in your niche, earning a contextual link inside the body content rather than an author bio nobody reads. Every guest post is written to genuinely fit the host site's audience, not just to house a link.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.4rem' }}>
                  Niche edit / link insertion
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                  Rather than publishing new content, I identify existing, already-ranking pages relevant to your topic and negotiate the addition of a natural, contextual link inside the existing text. Niche edits often work faster than guest posts because the page's authority and rankings are already established.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.4rem' }}>
                  Parasite SEO link building
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                  I build and rank content on high-authority third-party platforms — established publishing platforms, directories, and community sites — then build links into that content to compound its ranking power. This gets your brand visibility on page one even before your own domain competes for that keyword.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.4rem' }}>
                  Authority link building for GEO
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                  AI answer engines cite sources based on the strength and consistency of their backlink profile. I build links specifically aimed at getting your site treated as a citable, trustworthy source — the same signal ChatGPT and Perplexity use to decide who gets quoted in an AI-generated answer.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.4rem' }}>
                  Off-page SEO for local businesses
                </h3>
                <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                  For local and multi-location businesses, I secure links from local publications, industry associations, and community sites that reinforce geographic and topical relevance — the exact signals Google uses to rank local service pages and Google Business Profiles.
                </p>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75, marginTop: '1.75rem' }}>
              This work sits alongside the broader off-page strategy covered in <Link href="/services/seo-consulting/authority-building" style={{ color: '#C4533A', textDecoration: 'none' }}>Authority Building</Link>, and complements <Link href="/services/local-seo-specialist" style={{ color: '#C4533A', textDecoration: 'none' }}>Local SEO Specialist</Link> for businesses that also need geographic relevance.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Results I've Delivered
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Results are the only measure that matters. On one US mortgage site, a combined on-page and link building strategy took monthly impressions from the low thousands to the hundreds of thousands within six months — driven as much by which sites linked back as by the content itself.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              That result comes from relationships, not luck. I maintain direct admin relationships across 30+ niches, which means I can secure placements on the exact same sites listed in major link marketplaces, at roughly half of marketplace pricing, without sacrificing quality or turnaround.
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm also Top Rated on Upwork as a search marketer and GEO specialist — a status earned through consistent, verified client results rather than a paid badge.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              {[
                { title: '6-Month Growth', desc: 'A US mortgage site grew from low thousands to hundreds of thousands of monthly impressions through combined on-page and link building work.' },
                { title: '30+ Niches Covered', desc: 'Direct admin relationships across more than 30 niches, built and maintained over years of outreach.' },
                { title: '~50% Below Marketplace', desc: 'Placements on the same sites listed in major link marketplaces, secured without the marketplace markup.' },
                { title: 'Top Rated on Upwork', desc: 'Recognised as a search marketer and GEO specialist through verified client outcomes.' },
              ].map((proof) => (
                <div key={proof.title} style={{ padding: '1.5rem', border: '1px solid #C9BCA8', borderRadius: 12, textAlign: 'left' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                    {proof.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>
                    {proof.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Who I Work With
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
              I work with SaaS companies that need authoritative backlinks to support product and comparison pages, e-commerce brands competing against retailers with decades of link equity, and local businesses that need geographically and topically relevant placements. I also partner with agencies that need reliable white-label link building they can resell under their own name, and with consultants and founders building personal authority for GEO and AEO visibility — where getting cited by AI tools matters as much as ranking on Google.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(60px, 8vw, 100px) 24px' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                {
                  q: 'How many links do I need per month?',
                  a: "There's no universal number — it depends on your current authority, competitor link profiles, and how aggressive your ranking timeline is. Most clients start with 4-8 placements a month, enough to build steady momentum without triggering an unnatural velocity pattern. I give a specific recommendation after auditing your site and competitors.",
                },
                {
                  q: 'How long does it take to see results from link building?',
                  a: 'Most clients see initial ranking movement within 8-12 weeks, with more substantial gains compounding over 4-6 months. Link building is a compounding strategy — links placed today keep contributing authority long after the campaign ends, so results tend to accelerate rather than plateau.',
                },
                {
                  q: "What's the difference between a guest post and a niche edit?",
                  a: "A guest post is a new article written specifically for the host site, with your link placed naturally inside the body. A niche edit adds your link into an existing, already-ranking page. Niche edits tend to show faster results because the host page's authority is already established.",
                },
                {
                  q: 'Do you build links for GEO and AI visibility as well as Google?',
                  a: 'Yes. The same fundamentals — topical relevance, editorial placement, real domains — are exactly what AI answer engines like ChatGPT and Perplexity use to decide which sources are trustworthy enough to cite. Every campaign is built to work across both traditional Google rankings and AI-driven citation visibility.',
                },
                {
                  q: 'How do I get started?',
                  a: "Reach out through my contact page or message me directly on Upwork or LinkedIn. I'll review your current backlink profile, identify the highest-impact niches and site types for your business, and put together a placement plan with realistic timelines and pricing before any work begins.",
                },
              ].map((item) => (
                <div key={item.q} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #C9BCA8' }}>
                  <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.05rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                    {item.q}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(60px, 8vw, 100px) 24px', textAlign: 'center' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', marginBottom: '1.5rem' }}>
              Work With an SEO Backlink Expert
            </h2>
            <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
              If you're ready to build backlinks that actually move rankings — not just numbers on a report — let's talk. You can review my track record and client feedback on my{' '}
              <Link href="https://www.upwork.com/freelancers/usmankhizar" style={{ color: '#C4533A', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">Upwork profile</Link>, connect with me on{' '}
              <Link href="https://www.linkedin.com/in/usman-khizar-seo/" style={{ color: '#C4533A', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">LinkedIn</Link>, or go straight to my contact page to discuss your project.
            </p>
            <Link href="/contact" className="btn-primary">Work with an SEO backlink expert →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
