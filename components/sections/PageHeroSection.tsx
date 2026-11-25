'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface PageHeroSectionProps {
  eyebrow?: string
  title: string | ReactNode
  subtitle: string | ReactNode
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  visualElement?: ReactNode
  backgroundColor?: 'dark' | 'light'
}

export default function PageHeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visualElement,
  backgroundColor = 'dark',
}: PageHeroSectionProps) {
  const light = backgroundColor === 'light'

  return (
    <section className={`page-hero${light ? ' page-hero-light' : ''}`}>
      {visualElement && (
        <div className="page-hero-visual" aria-hidden="true">
          {visualElement}
        </div>
      )}

      {/* Main Content */}
      <div className="page-hero-content">
        <div className="page-hero-copy">
        {eyebrow && (
          <span
            style={{
              display: 'inline-block',
              background: backgroundColor === 'light' ? 'rgba(196, 83, 58, 0.1)' : 'rgba(196,83,58,0.20)',
              border: backgroundColor === 'light' ? '1px solid rgba(196, 83, 58, 0.3)' : '1px solid rgba(196,83,58,0.45)',
              color: backgroundColor === 'light' ? '#C4533A' : '#E8917A',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '100px',
              marginBottom: '24px',
            }}
          >
            {eyebrow}
          </span>
        )}

        <h1
          style={{
            fontFamily: 'var(--font-archivo-black), serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 3.6vw, 3.25rem)',
            lineHeight: 1.1,
            textWrap: 'balance',
            letterSpacing: '-0.02em',
            color: backgroundColor === 'light' ? '#1A1A1A' : '#F5F0E8',
            margin: '0 0 24px 0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '16px',
            color: backgroundColor === 'light' ? '#5C5248' : 'rgba(245,240,232,0.78)',
            lineHeight: 1.65,
            maxWidth: '500px',
            margin: '0 0 36px 0',
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>

        {/* CTA Row */}
        {(primaryCta || secondaryCta) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#C4533A',
                  color: 'white',
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '14px 28px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#D4622A';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#C4533A';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'transparent',
                  border: backgroundColor === 'light' ? '1px solid #C9BCA8' : '1px solid rgba(245,240,232,0.20)',
                  color: backgroundColor === 'light' ? '#5C5248' : 'rgba(245,240,232,0.75)',
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '14px 24px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  const elem = e.currentTarget as HTMLElement;
                  elem.style.borderColor = backgroundColor === 'light' ? '#C4533A' : 'rgba(245,240,232,0.45)';
                  elem.style.color = backgroundColor === 'light' ? '#C4533A' : '#F5F0E8';
                }}
                onMouseLeave={(e) => {
                  const elem = e.currentTarget as HTMLElement;
                  elem.style.borderColor = backgroundColor === 'light' ? '#C9BCA8' : 'rgba(245,240,232,0.20)';
                  elem.style.color = backgroundColor === 'light' ? '#5C5248' : 'rgba(245,240,232,0.75)';
                }}
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}
        </div>
      </div>
    </section>
  )
}
