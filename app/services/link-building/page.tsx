import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ServiceHero from '@/components/services/ServiceHero'
import SectionCard from '@/components/services/SectionCard'
import SectionHeading from '@/components/services/SectionHeading'
import StatsRow from '@/components/services/StatsRow'
import ProcessSteps from '@/components/services/ProcessSteps'
import FaqAccordion from '@/components/services/FaqAccordion'
import CtaBanner from '@/components/services/CtaBanner'
import TrustStrip from '@/components/services/TrustStrip'
import { SearchIcon, LinkIcon, PeopleIcon, ChecklistIcon, StarIcon, QuestionIcon } from '@/components/services/icons'

export const metadata: Metadata = {
  title: 'Link Building Expert & Specialist | Link Building Service | Usman Khizar',
  description: 'Hire a link building expert for high-quality backlinks, outreach, and ranking growth. Link building specialist offering a white-hat link building service for SEO visibility.',
  openGraph: {
    title: 'Link Building Expert & Specialist | Link Building Service | Usman Khizar',
    description: 'Hire a link building expert for high-quality backlinks, outreach, and ranking growth. Link building specialist offering a white-hat link building service for SEO visibility.',
    url: 'https://usmankhizar.com/services/link-building',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link Building Expert & Specialist | Link Building Service | Usman Khizar',
    description: 'Hire a link building expert for high-quality backlinks, outreach, and ranking growth. Link building specialist offering a white-hat link building service for SEO visibility.',
  },
  alternates: { canonical: 'https://usmankhizar.com/services/link-building' },
}

const linkBuildingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Link Building Expert & Specialist',
  provider: { '@type': 'Person', name: 'Usman Khizar' },
  description: 'Link building expert and specialist offering a white-hat link building service: guest posting, niche edits, digital PR, broken link building, and local link building through direct-to-admin outreach.',
  url: 'https://usmankhizar.com/services/link-building',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://usmankhizar.com' },
    { '@type': 'ListItem', position: 2, name: 'Link Building Expert & Specialist', item: 'https://usmankhizar.com/services/link-building' },
  ],
}

const faqItems = [
  {
    q: 'What is a link building expert and what do they do?',
    a: "A link building expert identifies, negotiates, and secures backlinks from relevant, authoritative sites on a client's behalf, through guest posts, digital PR, and direct outreach to site owners. The goal isn't just accumulating links; it's improving a site's backlink profile in ways that move real search results, using relationships and editorial standards a bulk marketplace can't replicate.",
  },
  {
    q: 'How is your link building service different from link building agencies?',
    a: "Most agencies buy inventory through marketplaces and mark up the price. My link building service skips that layer, I go direct to the same site admins those agencies already work with, which means identical access at roughly half the cost. It's less about a different network and more about removing an unnecessary reseller in the middle.",
  },
  {
    q: 'How many backlinks do I need to rank?',
    a: "There's no fixed number, it depends on your industry's competitiveness, your current backlink profile, and how aggressive your timeline is. Most campaigns start with 4-8 quality placements a month, enough to build steady momentum without an unnatural spike that search engines flag. I give an exact recommendation after a backlink audit of your site and top competitors.",
  },
  {
    q: "What's the difference between guest posting and niche edits?",
    a: "A guest post is a brand-new article written for a host site, with your link placed naturally inside it. This kind of edit instead inserts a link into an existing, already-ranking page. It usually moves faster since that page's authority is already established, while a fresh article gives more control over framing and context, which matters for brand-sensitive campaigns.",
  },
  {
    q: 'Do you build links for AI search visibility as well as Google?',
    a: 'Yes. AI systems like ChatGPT and Perplexity weigh backlink strength heavily when deciding which sources are trustworthy enough to cite in an answer. The same link building fundamentals, relevance, editorial context, real domains, apply to both. Every campaign I run is built to support strong Google results and AI citation trust at the same time.',
  },
  {
    q: 'How do I get started with your link building service?',
    a: "Message me through my contact page, Upwork, or LinkedIn. I'll review what's currently linking to your site and your target industries, flag the highest-impact opportunities for your business, and put together a plan with realistic pricing and timelines before any outreach begins on your behalf.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function LinkBuildingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkBuildingServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <ServiceHero
          title="Link Building Expert & Specialist"
          subtitle="I'm Usman Khizar, a link building expert who builds backlinks the way search engines actually reward them: real, editorial, earned through direct relationships, not bought in bulk from a marketplace. My link building service is white-hat only, built on direct-to-admin outreach rather than the reseller networks most agencies rely on. I maintain a verified database of website owners across 30+ industries, so when a client needs high-quality backlinks in a specific niche, I go straight to the same admins listed on major marketplaces, not a similar site but the identical domain, at roughly half the price."
          pills={['Link Building', 'SEO']}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Link Building Expert & Specialist' },
          ]}
        />

        <section style={{ backgroundColor: '#F5F0E8', padding: '40px 24px 0' }}>
          <div className="max-w-4xl mx-auto">
            <StatsRow
              stats={[
                { value: '30+', label: 'niches' },
                { value: '50%', label: 'cost saving vs marketplaces' },
                { value: 'Top Rated', label: 'on Upwork' },
              ]}
            />
          </div>
        </section>

        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(48px, 7vw, 80px) 24px' }}>
          <div className="max-w-4xl mx-auto">
            <SectionCard>
              <SectionHeading icon={<SearchIcon />}>Why Link Building Still Drives Rankings in 2026</SectionHeading>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Search engines have added hundreds of ranking factors since the early days of SEO, but backlinks remain one of the strongest trust signals in the algorithm. A page that earns links from authoritative, topically relevant sites tells a search engine that real publishers vouch for it, a signal that's still difficult to fake, which is why link building continues to move rankings when it's done correctly.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                The problem is that too many agencies recycle the same low-quality networks across dozens of clients. The same PBNs, the same guest post farms, the same expired domains get sold to whoever pays, which means the backlinks lose most of their SEO value the moment a search engine's spam systems catch on. Link building only works long-term when the placements are real, and real doesn't scale the way a marketplace wants it to.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
                This matters even more now that AI-influenced search, ChatGPT, Perplexity, Google's AI Overviews, treats citation authority as a trust metric of its own. A site with a strong, clean backlink profile gets treated as more citable; a site propped up by link farms gets ignored. Long-term SEO visibility now depends on the same fundamentals: authoritative, relevant, earned links that compound in value over time.
              </p>
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<LinkIcon />}>What Most Link Building Services Get Wrong</SectionHeading>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Too many services still lean on the same shortcuts: link farms and PBNs dressed up as "authority networks," exact-match anchor text stuffed into every placement, and a volume-over-relevance mindset that treats fifty mediocre links as better than five excellent ones. None of it holds up. A link building expert who understands how search engines evaluate a backlink profile knows that relevance and editorial context matter more than raw quantity.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
                The other failure point is process. Marketplace-sourced sourcing relies on bulk listings, not manual outreach, nobody vets whether the site still gets traffic, whether the topic fits, or whether a real editor approves the content. That's how clients end up with links in name only: technically live but doing nothing for rankings because the domains are thin, off-topic, or half-dead. The fix isn't complicated, just slower: relevance-first placement, manual outreach to real site owners, and editorial standards that would hold up to real scrutiny.
              </p>
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<PeopleIcon />}>My Link Building Service: The Direct-to-Admin Advantage</SectionHeading>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Most agencies and resellers don't own the sites they sell links on; they source inventory from independent site owners through a marketplace layer, then mark the price up before it reaches you. I cut that layer out. Through years of manual outreach and relationship building, I maintain direct contact with the same admins who list their domains on major marketplaces.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                That distinction matters because it's not a similar site in your space, it's the identical domain, minus the reseller markup. When you work with me, you're not paying for a middleman's negotiation; you're paying close to what the site owner would actually accept, which is why link acquisition through my process typically runs at roughly 50% below marketplace pricing, with faster turnaround because there's no approval queue to sit in.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
                Build relationships is the operating principle here, not just a phrase. The same site owners I worked with years ago are the ones placing links for clients today, which means I know which sites still perform, which have gone quiet, and which admins actually review content before it goes live, the difference between a placement that works and one that quietly earns nothing.
              </p>
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<LinkIcon />}>Link Building Strategies I Use</SectionHeading>
              <div style={{ display: 'grid', gap: '1.75rem' }}>
                {[
                  {
                    title: 'Guest Posting',
                    desc: "Guest posting is still one of the most reliable strategies when it's done for the right reason: earning a contextual placement inside a genuinely useful article, not just parking a link in an author bio. I identify guest post opportunities by matching your industry to publications whose audience actually overlaps with your customers, then either write the piece myself or brief a writer who understands the topic. The outreach here isn't a mail-merge template blasted to hundreds of sites; it's a shortlist where the content creation makes sense for both sides, so you get an SEO-relevant link inside real editorial content, not a footer credit nobody reads.",
                  },
                  {
                    title: 'Niche Edits and Link Insertion',
                    desc: 'A niche edit adds your link into an existing, already-ranking page instead of publishing something new. Because the page already has traffic and topical authority, these edits often outperform a fresh guest post for search rankings, the placement inherits authority the moment it goes live. This tactic only works at scale because of direct relationships: site owners who already know and trust me will make a targeted edit to relevant, older content rather than treating every request as a fresh negotiation, turning opportunities into relevant backlinks without the wait.',
                  },
                  {
                    title: 'Digital PR and Earned Links',
                    desc: "Digital PR earns high-authority backlinks by giving journalists and publishers a genuine reason to write about you: original research, commentary on industry news, or data nobody else has published. It's slower than a guest post, but the placements it earns tend to carry more weight because nobody paid for them directly. For clients who need brand visibility beyond raw search engine rankings, digital PR is one of the few ways to earn backlinks a competitor genuinely can't copy.",
                  },
                  {
                    title: 'Broken Link Building',
                    desc: "Broken link building means finding dead links on relevant sites, pages linking out to content that's gone 404, and offering your own resource as the replacement. It's outreach with a built-in reason to say yes: you're fixing something broken on their site, not asking for a favour. I run this as a smaller, ongoing channel that picks up opportunities other seo tactics simply miss.",
                  },
                  {
                    title: 'Local Link Building',
                    desc: "Local link building targets a different kind of relevance: local publications, chambers of commerce, and industry associations that reinforce where a business actually operates. These backlinks work alongside citations and Google Business Profile signals to build the kind of local, geographic visibility that generic national efforts can't replicate, proving to a search engine that you're a genuine, active part of the community you're targeting.",
                  },
                ].map((s) => (
                  <div key={s.title}>
                    <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.98rem', color: '#5C5248', lineHeight: 1.75 }}>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<ChecklistIcon />}>Link Building for SEO: My Process in 5 Steps</SectionHeading>
              <ProcessSteps
                steps={[
                  { num: '01', title: 'Backlink Audit', desc: "Every engagement starts with a backlink audit, a full read of your current link profile, including anchor text distribution, referring domain quality, and any toxic or spammy backlinks dragging down your overall standing. I benchmark this against two or three real competitors so we know exactly where the gap is, not just what a generic seo audit template calls good or bad." },
                  { num: '02', title: 'Target Identification', desc: 'Next I identify target sites: domains that are topically relevant to your industry, still receiving organic traffic, and carrying real domain authority rather than an inflated metric. I map this against your priority keyword list so every target supports a specific goal instead of adding a random link with no purpose. Link building only compounds when every target is chosen on purpose.' },
                  { num: '03', title: 'Direct Outreach', desc: "With targets confirmed, outreach begins, using existing relationships across 30+ industries wherever possible, and manual outreach where I don't yet have a contact. This is the step most agencies skip by defaulting to a marketplace list. As a link builder, I'd rather spend the extra week building a real relationship than accept whatever inventory happens to be available that month." },
                  { num: '04', title: 'Content and Placement', desc: "For guest posts and niche edits, this is where content marketing meets seo and content strategy: writing or briefing a piece that fits the host site's editorial standards, so the result reads as something the site would have published anyway. If an editor rejects the angle, I rewrite it rather than push a link that damages the relationship for future work." },
                  { num: '05', title: 'Tracking and Reporting', desc: "Every link gets tracked after it goes live: confirmed indexation, anchor text used, referring page authority, and whether it's still live 90 days later, since campaigns with a high link-death rate waste your budget without saying so. I report against the metric that matters most: overall ranking movement on the keywords targeted, backed by the same case studies and data I'd show any client asking for proof." },
                ]}
              />
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<StarIcon />}>Link Building Results and Case Studies</SectionHeading>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                The clearest example is a US mortgage website where a combined link building and on-page SEO strategy took monthly impressions from the low thousands into the hundreds of thousands within six months, not from one lucky link, but from a steady, compounding backlink campaign paired with content fixes that let the site actually convert search gains into organic traffic.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                That result isn't a one-off. I maintain direct relationships with site owners across more than 30 industries, which is what lets me secure spots on the exact same domains listed in major marketplaces, typically at around 50% below what resellers charge for identical inventory. Clients get marketplace-grade high-quality backlinks without paying a marketplace's margin.
              </p>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8, marginBottom: '2rem' }}>
                I'm also Top Rated on Upwork as an SEO and link building specialist, a status built on repeat clients and verified outcomes rather than a paid badge. Case studies and client history are available on request for anyone evaluating a link builder before committing budget.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                {[
                  { title: '6-Month Growth', desc: 'A US mortgage site grew from low thousands to hundreds of thousands of monthly impressions through combined link building and on-page SEO.' },
                  { title: '30+ Industries Covered', desc: 'Direct relationships with site owners across more than 30 industries, built over years of manual outreach.' },
                  { title: '~50% Below Marketplace', desc: 'Direct access to the same domains listed in major marketplaces, without the reseller markup.' },
                  { title: 'Top Rated on Upwork', desc: 'Recognised as an SEO and link building specialist through verified client outcomes.' },
                ].map((proof) => (
                  <div key={proof.title} style={{ padding: '1.5rem', border: '1px solid #E8E0D5', borderRadius: 12, textAlign: 'left' }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                      {proof.title}
                    </p>
                    <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.65 }}>
                      {proof.desc}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<PeopleIcon />}>Who Hires Me as Their Link Building Expert</SectionHeading>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.03rem', color: '#5C5248', lineHeight: 1.8 }}>
                SaaS companies hire me to build backlinks that support product and comparison pages against competitors with years of accumulated authority. E-commerce brands need industry-specific, topically relevant links to compete against retailers with deep link profiles. Local businesses need geographically relevant backlinks and citation signals more than raw domain count. Digital marketing agencies and seo agencies bring me in for white-label link building they can resell under their own name without building an internal team. Consultants and founders come to me for personal authority building aimed at GEO and AEO visibility, where a marketing strategy built only around Google search results is already incomplete. Whatever the vertical, the ask is the same: a link builder who treats every project like it has to earn its keep.
              </p>
            </SectionCard>

            <SectionCard>
              <SectionHeading icon={<QuestionIcon />}>Frequently Asked Questions About Link Building</SectionHeading>
              <FaqAccordion items={faqItems} />
            </SectionCard>

            <TrustStrip />

            <CtaBanner
              headline="Hire a Link Building Expert"
              subtext="If you want a link builder who treats every link like it has to earn a real result, not just add a row to a report, let's talk. Success here isn't about volume; it's about a link building service built on real relationships that hold up over time."
              secondaryHref="https://www.upwork.com/freelancers/usmankhizar"
            />
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem', color: '#5C5248', textAlign: 'center', marginTop: '1.25rem' }}>
              Also active on{' '}
              <Link href="https://www.linkedin.com/in/usman-khizar-seo/" style={{ color: '#C4533A', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
              {' '}— every enquiry gets reviewed personally before quoting a strategic link building plan.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
