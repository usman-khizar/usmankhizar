import { NextRequest, NextResponse } from 'next/server'
import { isGhlConfigured, saveSubscriber } from '@/lib/ghl'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let email = ''
  let trap = ''
  try {
    const data = await req.json()
    email = typeof data?.email === 'string' ? data.email.trim().toLowerCase() : ''
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
    await saveSubscriber(email)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe] not saved:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Could not save your signup' }, { status: 502 })
  }
}
