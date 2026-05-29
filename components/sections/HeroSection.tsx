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
      {/* Desktop: full-bleed photo on the right */}
      <div className="hero-photo-bg" aria-hidden="true">
        <Image
          src="/usman-photo.png"
          alt=""
          fill
          priority
          sizes="55vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>

      {/* Desktop floating social-proof cards over the photo */}
      <div className="hero-float-cards" aria-hidden="true">
        <div className="hero-float-card" style={{ top: '18%', right: '6%' }}>
          11,000+ monthly GEO searches
        </div>
        <div className="hero-float-card" style={{ top: '50%', right: '3%' }}>
          Perplexity · ChatGPT · AI Overviews
        </div>
        <div className="hero-float-card" style={{ bottom: '22%', right: '10%' }}>
          SEO · Parasite · LinkedIn
        </div>
      </div>

      {/* Left text content */}
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
                  width={28}
                  height={28}
                  style={{ width: 28, height: 28, objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hero-buttons">
          <Link href="/services" className="btn-primary hero-btn">
            Get Found Everywhere →
          </Link>
          <Link href="/services" className="btn-secondary hero-btn">
            See How It Works
          </Link>
        </div>

        <a
          href="https://www.upwork.com/freelancers/~01fad6eab5741b8ac8?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="upwork-logo-link"
          style={{ marginTop: '1.25rem', textDecoration: 'none' }}
        >
          <Image
            src="/upwork-logo-png-transparent.png"
            alt="Upwork"
            width={60}
            height={20}
            style={{ height: 20, width: 'auto', objectFit: 'contain' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '14px',
              color: '#5C5248',
            }}
          >
            Available on Upwork
          </span>
        </a>
      </div>

      {/* Mobile: photo below text */}
      <div className="hero-mobile-photo">
        <div className="hero-mobile-photo-fade" aria-hidden="true" />
        <Image
          src="/usman-photo.png"
          alt="Usman Khizar"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </div>
    </section>
  )
}
