'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#141210', color: '#FAF8F4' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Name + tagline */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span style={{ fontFamily: 'var(--font-archivo-black)', fontSize: '1.25rem', fontWeight: 900, color: '#FAF8F4' }}>
                Usman Khizar
              </span>
              <span style={{ color: '#C4533A', fontSize: '1.4rem' }}>.</span>
            </div>
            <p style={{ fontFamily: 'var(--font-lora)', color: '#C9BCA8', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Search marketer helping founders and businesses get found on Google, in AI, and everywhere in between.
            </p>
          </div>

          {/* Col 2: Nav links */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: '#C9BCA8', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'Tools', href: '/tools' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontFamily: 'var(--font-dm-sans)', color: '#C9BCA8', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C4533A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C9BCA8')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Services sub-pages */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: '#C9BCA8', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Services
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'SEO Consulting', href: '/services/seo-consulting' },
                { label: '— Technical SEO', href: '/services/seo-consulting/technical-seo' },
                { label: '— On-Page SEO', href: '/services/seo-consulting/on-page-seo' },
                { label: '— Content Strategy', href: '/services/seo-consulting/content-strategy' },
                { label: '— Authority Building', href: '/services/seo-consulting/authority-building' },
                { label: 'AEO Consulting', href: '/services/aeo-consulting' },
                { label: '— Featured Snippets', href: '/services/aeo-consulting/featured-snippet-optimisation' },
                { label: '— Schema Markup', href: '/services/aeo-consulting/schema-markup' },
                { label: '— Question Content', href: '/services/aeo-consulting/question-based-content' },
                { label: '— Voice Search', href: '/services/aeo-consulting/voice-and-conversational-search' },
                { label: 'GEO Consulting', href: '/services/geo-consulting' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontFamily: 'var(--font-dm-sans)', color: '#C9BCA8', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C4533A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C9BCA8')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Social + contact */}
          <div>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: '#C9BCA8', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/usmankhizar"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-dm-sans)', color: '#C9BCA8', fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href="https://twitter.com/usmankhizar"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-dm-sans)', color: '#C9BCA8', fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <XIcon /> Twitter / X
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01fad6eab5741b8ac8?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-dm-sans)', color: '#C9BCA8', fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#6FDA44', flexShrink: 0 }} /> Upwork
              </a>
              <a
                href="mailto:enquiries@usmankhizar.com"
                style={{ fontFamily: 'var(--font-dm-sans)', color: '#C9BCA8', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                enquiries@usmankhizar.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1E1A18', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Usman Khizar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
