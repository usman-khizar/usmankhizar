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
  backgroundColor?: string
}

export default function PageHeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visualElement,
  backgroundColor = '#1a1208',
}: PageHeroSectionProps) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundColor: backgroundColor === 'light' ? '#F5F0E8' : backgroundColor,
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* Background Effects - only for dark theme */}
      {backgroundColor !== 'light' && (
        <>
          <div
            className="hero-bg"
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              background: `
                radial-gradient(at 70% 40%, #c4533a59 0%, #0000 55%),
                radial-gradient(at 30% 80%, #b8860b26 0%, #0000 50%),
                linear-gradient(160deg, #1a1208 0%, #2a1810 30%, #1a0e08 60%, #0d0a06 100%)
              `,
            }}
          />
          <div
            className="hero-grid"
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
              backgroundImage: `
                linear-gradient(rgba(245,240,232,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,240,232,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </>
      )}

      {/* Visual Element - Right Side */}
      {visualElement && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '50%',
            zIndex: 2,
            pointerEvents: 'none',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            {visualElement}
            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(to right, 
                    ${backgroundColor === 'light' ? 'rgba(245,240,232,1)' : 'rgba(60, 33, 23, 1)'} 0%,
                    ${backgroundColor === 'light' ? 'rgba(245,240,232,0.7)' : 'rgba(60, 33, 23, 0.8)'} 15%,
                    ${backgroundColor === 'light' ? 'rgba(245,240,232,0.3)' : 'rgba(60, 33, 23, 0.35)'} 35%,
                    ${backgroundColor === 'light' ? 'rgba(245,240,232,0)' : 'rgba(60, 33, 23, 0)'} 55%,
                    transparent 100%
                  )
                `,
              }}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 600,
          padding: '60px 24px 72px',
          marginLeft: 'clamp(24px, 5%, 60px)',
        }}
      >
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
            fontSize: 'clamp(24px, 2.2vw, 48px)',
            lineHeight: 1.05,
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
            color: backgroundColor === 'light' ? '#5C5248' : 'rgba(245,240,232,0.60)',
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
    </section>
  )
}
