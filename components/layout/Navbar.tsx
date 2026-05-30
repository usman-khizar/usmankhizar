'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const isDark = transparent
  const isScrolledOpaque = transparent && scrolled

  const navStyle: React.CSSProperties = {
    backgroundColor: isScrolledOpaque
      ? 'rgba(13,10,8,0.85)'
      : transparent
      ? 'transparent'
      : '#FAF8F4',
    borderBottom: transparent ? 'none' : '1px solid #C9BCA8',
    backdropFilter: isScrolledOpaque ? 'blur(12px)' : undefined,
    WebkitBackdropFilter: isScrolledOpaque ? 'blur(12px)' : undefined,
    transition: 'background-color 0.3s ease',
  }

  const logoColor = isDark ? '#F5F0E8' : '#1A1A1A'
  const linkColor = isDark ? 'rgba(245,240,232,0.70)' : '#5C5248'
  const linkHover = isDark ? '#F5F0E8' : '#C4533A'
  const hamburgerColor = isDark ? '#F5F0E8' : '#1A1A1A'

  return (
    <nav style={navStyle} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-1 no-underline">
          <span
            style={{
              color: logoColor,
              fontFamily: 'var(--font-archivo-black)',
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              transition: 'color 0.3s',
            }}
          >
            Usman Khizar
          </span>
          <span style={{ color: '#C4533A', fontSize: '1.4rem', lineHeight: 1 }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
            { label: 'Tools', href: '/tools' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline transition-colors"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                fontSize: '0.9rem',
                color: linkColor,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.875rem' }}
          >
            Work With Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, backgroundColor: hamburgerColor, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, backgroundColor: hamburgerColor, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, backgroundColor: hamburgerColor, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: transparent ? 'rgba(13,10,8,0.95)' : '#FAF8F4',
            borderTop: transparent ? '1px solid rgba(245,240,232,0.10)' : '1px solid #C9BCA8',
          }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {[
            { label: 'Services', href: '/services' },
            { label: 'Blog', href: '/blog' },
            { label: 'About', href: '/about' },
            { label: 'Tools', href: '/tools' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                color: transparent ? 'rgba(245,240,232,0.75)' : '#5C5248',
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-center" onClick={() => setOpen(false)}>
            Work With Me
          </Link>
        </div>
      )}
    </nav>
  )
}
