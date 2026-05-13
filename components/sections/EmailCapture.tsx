'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'dark' | 'terracotta'
  heading?: string
  subheading?: string
}

export default function EmailCapture({
  variant = 'dark',
  heading = 'Get the Search Stack Playbook',
  subheading = 'SEO + GEO + AEO combined into one actionable system. Free.',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const bg = variant === 'dark' ? '#141210' : '#C4533A'
  const textColor = '#FAF8F4'

  return (
    <section style={{ backgroundColor: bg, padding: '80px 24px' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2
          style={{
            fontFamily: 'var(--font-archivo-black)',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: textColor,
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            color: variant === 'dark' ? '#C9BCA8' : '#FAF8F4',
            fontSize: '1.05rem',
            marginBottom: '2rem',
          }}
        >
          {subheading}
        </p>

        {status === 'success' ? (
          <p style={{ color: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '1rem' }}>
            ✓ You're in. Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1.5px solid transparent',
                backgroundColor: '#FAF8F4',
                color: '#1A1A1A',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.95rem',
                outline: 'none',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#C4533A')}
              onBlur={(e) => (e.target.style.borderColor = 'transparent')}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                padding: '12px 24px',
                backgroundColor: variant === 'dark' ? '#C4533A' : '#1A1A1A',
                color: '#FAF8F4',
                borderRadius: '8px',
                border: 'none',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {status === 'loading' ? 'Sending…' : 'Send It'}
            </button>
          </form>
        )}
        <p style={{ marginTop: '0.75rem', fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', color: variant === 'dark' ? '#5C5248' : 'rgba(250,248,244,0.6)' }}>
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  )
}