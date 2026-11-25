import { NextRequest, NextResponse } from 'next/server'
import { isGhlConfigured, saveSubscriber } from '@/lib/ghl'
import { trackSlugs } from '@/lib/tracks'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let email = ''
  let trap = ''
  let list = ''
  let skill = ''
  try {
    const data = await req.json()
    email = typeof data?.email === 'string' ? data.email.trim().toLowerCase() : ''
    list = typeof data?.list === 'string' ? data.list : ''
    skill = typeof data?.skill === 'string' && trackSlugs.has(data.skill) ? data.skill : ''
    trap = typeof data?.company === 'string' ? data.company : ''
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Hidden field: people leave it empty, bots fill it in.
  if (trap) return NextResponse.json({ ok: true })

  if (email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  if (!isGhlConfigured()) {
    return NextResponse.json({ error: 'Signups are not available right now' }, { status: 503 })
  }

  try {
    const tags =
      list === 'growth-checklist' ? ['website-newsletter', 'growth-checklist']
      : list === 'training' ? ['training-waitlist', ...(skill ? [`training-${skill}`] : [])]
      : ['website-newsletter']
    await saveSubscriber(email, tags)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe] not saved:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Could not save your signup' }, { status: 502 })
  }
}
