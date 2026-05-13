'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid #C9BCA8' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-1 no-underline">
          <span
            className="font-archivo text-xl tracking-tight"
            style={{ color: '#1A1A1A', fontFamily: 'var(--font-archivo-black)' }}
          >
            Usman Khizar
          </span>
          <span style={{ color: '#C4533A', fontSize: '1.4rem', lineHeight: 1 }}>.</span>
        </Link>

        {/* Desktop nav */}
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
                color: '#5C5248',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C4533A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5C5248')}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.875rem' }}>
            Work With Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#1A1A1A', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#1A1A1A', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, backgroundColor: '#1A1A1A', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: '#FAF8F4', borderTop: '1px solid #C9BCA8' }} className="md:hidden px-6 py-4 flex flex-col gap-4">
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
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, color: '#5C5248' }}
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