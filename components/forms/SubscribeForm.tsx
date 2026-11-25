'use client'

import Link from 'next/link'
import { useState } from 'react'
import { trackLead } from '@/lib/track'

interface SubscribeFormProps {
  compact?: boolean
  buttonColor?: string
  buttonLabel?: string
  /** Which signup this is. Adds a matching tag in GHL. */
  list?: 'growth-checklist'
  /** Replaces the default success message. */
  children?: React.ReactNode
}

export default function SubscribeForm({ compact = false, buttonColor = '#C4533A', buttonLabel = 'Sign Up', list, children }: SubscribeFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), company: form.get('company'), list }),
      })
      if (!res.ok) throw new Error()
    } catch {
      setStatus('error')
      return
    }
    setStatus('success')
    trackLead(list ?? 'email-signup')
  }

  const fontSize = compact ? '0.85rem' : '0.95rem'

  if (status === 'success' && children) return <div role="status">{children}</div>
  if (status === 'success') {
    return (
      <p role="status" style={{ color: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize }}>
        ✓ You&apos;re on the list.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? 'flex flex-col gap-2' : 'flex flex-col sm:flex-row sm:flex-wrap gap-3 max-w-md mx-auto'}
    >
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        aria-label="Email address"
        placeholder="your@email.com"
        style={{ flex: compact ? undefined : 1, minWidth: 0, padding: compact ? '8px 12px' : '12px 16px', borderRadius: 8, border: 'none', backgroundColor: '#FAF8F4', color: '#1A1A1A', fontSize }}
      />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1 }} />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{ padding: compact ? '8px 16px' : '12px 24px', backgroundColor: buttonColor, color: '#FAF8F4', borderRadius: 8, border: 'none', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize, cursor: 'pointer', whiteSpace: 'nowrap' }}
      >
        {status === 'loading' ? 'Sending…' : buttonLabel}
      </button>
      {status === 'error' && (
        <p role="alert" className="w-full" style={{ color: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.85rem' }}>
          Your signup wasn&apos;t saved. <Link href="/contact" style={{ textDecoration: 'underline' }}>Send me a message instead</Link>.
        </p>
      )}
    </form>
  )
}
