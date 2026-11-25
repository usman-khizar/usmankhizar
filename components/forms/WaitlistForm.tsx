'use client'

import { useState } from 'react'
import { trackLead } from '@/lib/track'
import { tracks } from '@/lib/tracks'

/** Training waitlist. Saves to GHL when connected, otherwise opens a ready-to-send email. */
export default function WaitlistForm({ canSubscribe }: { canSubscribe: boolean }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [skill, setSkill] = useState(tracks[0].slug)

  const name = tracks.find((t) => t.slug === skill)?.name ?? ''
  const mail = `mailto:hello@usmankhizar.com?subject=${encodeURIComponent(`Training list: ${name}`)}&body=${encodeURIComponent(`Hi Usman,\n\nPlease add me to the list for ${name}.\n\nMy name:\nMy WhatsApp (optional):\nWhat I want to be able to do:\n`)}`

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), company: form.get('company'), list: 'training', skill }),
      })
      if (!res.ok) throw new Error()
    } catch {
      setStatus('error')
      return
    }
    setStatus('success')
    trackLead('training-waitlist')
  }

  if (status === 'success') {
    return <p role="status" className="wait-done">You&apos;re on the list for {name}. I&apos;ll email you the dates and fee before they go public.</p>
  }

  const picker = (
    <div>
      <label htmlFor="wait-skill">Which skill first?</label>
      <select id="wait-skill" value={skill} onChange={(e) => setSkill(e.target.value)}>
        {tracks.map((t) => <option key={t.slug} value={t.slug}>{t.name}</option>)}
      </select>
    </div>
  )

  if (!canSubscribe) {
    return (
      <div className="wait">
        {picker}
        <a href={mail} className="home-btn">Join the List by Email</a>
        <p>Opens a message to hello@usmankhizar.com with your choice filled in.</p>
      </div>
    )
  }

  return (
    <form className="wait" onSubmit={handleSubmit}>
      {picker}
      <div>
        <label htmlFor="wait-email">Email</label>
        <input id="wait-email" type="email" name="email" required autoComplete="email" placeholder="you@email.com" />
      </div>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1 }} />
      <button type="submit" className="home-btn" disabled={status === 'loading'}>{status === 'loading' ? 'Saving…' : 'Join the List'}</button>
      {status === 'error' && <p role="alert">That wasn&apos;t saved. <a href={mail}>Email me instead</a>.</p>}
    </form>
  )
}
