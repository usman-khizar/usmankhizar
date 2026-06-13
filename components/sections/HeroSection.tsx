import Image from 'next/image'
import Link from 'next/link'

const logos = [
  { src: '/claude-logo-png_seeklogo-554534.png', alt: 'Claude' },
  { src: '/ChatGPT-Logo.svg.webp', alt: 'ChatGPT' },
  { src: '/perplexity-logo.png', alt: 'Perplexity' },
  { src: '/gamini-bg-removed.png', alt: 'Gemini' },
]

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Dark gradient background */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      {/* Terracotta glow orb behind the photo */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Person photo — desktop, right side, bottom-anchored */}
      <div className="hero-photo-wrap" aria-hidden="true">
        <Image
          src="/usman_khizar_seo_specialist.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 0px, 42vw"
          style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
        />
      </div>

      {/* TOP LEFT — small brand statement (desktop only) */}
      <div className="hero-topleft">
        <p>SEO systems, AI visibility, and authority-led growth for brands that want to own search.</p>
      </div>

      {/* TOP RIGHT — Upwork credibility card (desktop only) */}
      <div className="hero-topright">
        <div className="hero-avatar">UK</div>
        <div className="hero-topright-text">
          <strong>Top Rated on Upwork</strong>
          <span>Search marketer &amp; GEO specialist</span>
        </div>
        <div className="hero-play-btn" aria-hidden="true">
          <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
            <path d="M1 1l6 4-6 4V1z" fill="rgba(196,83,58,0.9)" />
          </svg>
        </div>
      </div>

      {/* MAIN CONTENT — absolute bottom-left on desktop, static on mobile */}
      <div className="hero-content">
        <span className="hero-eyebrow-pill">SEO · GEO · AEO</span>

        <h1 className="hero-h1">
          <span className="hero-h1-line">Grow Your Brand</span>
          <em className="hero-h1-italic">With SEO + GEO</em>
          <span className="hero-h1-line">AI Actually Cites.</span>
        </h1>

        <p className="hero-sub">
          Most brands optimise for Google clicks. The ones winning in 2026 show up in
          ChatGPT, Perplexity, and AI Overviews too. I build visibility across every surface.
        </p>

        <div className="hero-cta-row">
          <Link href="/services" className="hero-btn-primary">
            Explore Growth Plan
            <span className="hero-btn-arrow" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </Link>
          <Link href="/services" className="hero-btn-secondary">
            See How It Works
          </Link>
        </div>

        <div className="hero-llm-row">
          <span className="hero-llm-label">MENTIONED ACROSS</span>
          <div className="hero-llm-icons">
            {logos.map((logo, i) => (
              <div
                key={logo.alt}
                className="hero-llm-icon"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={20}
                  height={20}
                  style={{ width: 20, height: 20, objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GLASS CARD — bottom centre (desktop only) */}
      <div className="hero-glass-card">
        <p className="hero-glass-text">
          Turn your website, content, and brand signals into measurable organic growth —
          on Google and in AI answers.
        </p>
        <div className="hero-glass-btns">
          <Link href="/services/seo-consulting" className="hero-glass-btn-primary">SEO Audit</Link>
          <Link href="/services/geo-consulting" className="hero-glass-btn-secondary">GEO Plan</Link>
        </div>
      </div>

      {/* BOTTOM RIGHT — rating + Upwork (desktop only) */}
      <div className="hero-bottomright">
        <div className="hero-rating">4.9<span>★</span></div>
        <div className="hero-rating-sub">
          Trusted by agencies,<br />
          SaaS teams, and founders
        </div>
        <a
          href="https://www.upwork.com/freelancers/~01fad6eab5741b8ac8?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-upwork-link"
        >
          <span className="hero-upwork-dot" />
          Available on Upwork
        </a>
      </div>

      {/* MOBILE PHOTO — shown below text content on mobile */}
      <div className="hero-mobile-photo">
        <Image
          src="/usman_khizar_seo_specialist.png"
          alt="Usman Khizar"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>
    </section>
  )
}
