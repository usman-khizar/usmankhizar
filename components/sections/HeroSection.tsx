import Image from 'next/image'
import Link from 'next/link'

const logos = [
  { src: '/claude-logo-png_seeklogo-554534.png', alt: 'Claude' },
  { src: '/ChatGPT-Logo.svg.webp', alt: 'ChatGPT' },
  { src: '/perplexity-logo.png', alt: 'Perplexity' },
  { src: '/gamini.jpg', alt: 'Gemini' },
]

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Desktop: photo pinned to right, left-edge faded */}
      <div className="hero-photo-bg" aria-hidden="true">
        <Image
          src="/usman_khizar_seo_specialist.png"
          alt=""
          fill
          priority
          sizes="55vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>

      {/* Floating glass cards over the dark photo area */}
      <div className="hero-float-cards" aria-hidden="true">
        <div className="hero-float-card" style={{ top: '22%', right: '4%' }}>
          11,000+ monthly GEO searches
        </div>
        <div className="hero-float-card" style={{ top: '45%', right: '2%' }}>
          Perplexity · ChatGPT · AI Overviews
        </div>
        <div className="hero-float-card" style={{ top: '65%', right: '5%' }}>
          SEO · Parasite · LinkedIn
        </div>
      </div>

      {/* Left text content — warm cream side */}
      <div className="hero-content">
        <span className="hero-eyebrow-pill">SEO · GEO · AEO</span>

        <h1 className="hero-h1">
          <span className="hero-h1-black">Grow Your Brand</span>
          <span className="hero-h1-black">With Search</span>
          <span className="hero-h1-italic">AI Actually Cites.</span>
        </h1>

        <p className="hero-sub">
          Most brands optimise for Google clicks. The ones winning in 2026 show up in
          ChatGPT, Perplexity, and AI Overviews too. I build visibility across every surface.
        </p>

        <div className="hero-llm-section">
          <p className="hero-llm-label">MENTIONED ACROSS</p>
          <div className="hero-llm-logos">
            {logos.map((logo, i) => (
              <div
                key={logo.alt}
                className="hero-llm-pill"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={26}
                  height={26}
                  style={{ width: 26, height: 26, objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hero-buttons">
          <Link
            href="/services"
            className="btn-primary"
            style={{ padding: '14px 28px', fontSize: '15px' }}
          >
            Get Found Everywhere →
          </Link>
          <Link
            href="/services"
            className="btn-secondary"
            style={{ padding: '14px 28px', fontSize: '15px' }}
          >
            See How It Works
          </Link>
        </div>

        <a
          href="https://www.upwork.com/freelancers/~01fad6eab5741b8ac8?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="upwork-logo-link"
          style={{ marginTop: '20px', textDecoration: 'none' }}
        >
          <Image
            src="/upwork-logo-png-transparent.png"
            alt="Upwork"
            width={60}
            height={18}
            style={{ height: 18, width: 'auto', objectFit: 'contain' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              color: '#8A8070',
            }}
          >
            Available on Upwork
          </span>
        </a>
      </div>

      {/* Mobile: photo block below content, dark background */}
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
