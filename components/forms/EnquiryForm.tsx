'use client'

import { useState } from 'react'
import { budgets, interests } from '@/lib/lead-options'
import { trackLead } from '@/lib/track'

/** The enquiry form. Saves to the CRM (and GHL when connected). */
export default function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, page: window.location.pathname }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        setError(typeof body?.error === 'string' ? body.error : '')
        throw new Error()
      }
    } catch {
      setStatus('error')
      return
    }
    setStatus('success')
    trackLead('enquiry')
  }

  if (status === 'success') {
    return (
      <div role="status" className="enq-done">
        <p><strong>Thanks. Your message is with me.</strong></p>
        <p>I&apos;ll reply within 48 hours.</p>
      </div>
    )
  }

  return (
    <form className="enq" onSubmit={handleSubmit}>
      <div className="enq-row">
        <div>
          <label htmlFor="enq-name">Name</label>
          <input id="enq-name" name="name" required maxLength={120} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="enq-email">Email</label>
          <input id="enq-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="enq-phone">WhatsApp or phone <span>(optional)</span></label>
        <input id="enq-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="+1 555 123 4567" />
      </div>
      <div className="enq-row">
        <div>
          <label htmlFor="enq-interest">What do you need?</label>
          <select id="enq-interest" name="interest" defaultValue="">
            <option value="" disabled>Choose one</option>
            {interests.map((i) => <option key={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="enq-budget">Monthly budget</label>
          <select id="enq-budget" name="budget" defaultValue="">
            <option value="" disabled>Choose one</option>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="enq-message">What are you working on?</label>
        <textarea id="enq-message" name="message" required maxLength={5000} rows={5} placeholder="Your business, what's not working, and what a good result looks like." />
      </div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1 }} />
      <button type="submit" className="btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
      </button>
      {status === 'error' && (
        <p role="alert" className="enq-error">
          {error || "That didn't send."} You can also email <a href="mailto:hello@usmankhizar.com">hello@usmankhizar.com</a>.
        </p>
      )}
    </form>
  )
}
