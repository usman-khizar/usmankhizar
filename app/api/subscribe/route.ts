import { NextRequest, NextResponse } from 'next/server'
import { allowHit, canCaptureLeads, captureHomeLead, email as cleanEmail, text } from '@/lib/crm'
import { ipBucket } from '@/lib/client-ip'
import { isDbConfigured } from '@/lib/db'
import { tracks } from '@/lib/tracks'

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  // Hidden field: people leave it empty, bots fill it in.
  if (data?.company) return NextResponse.json({ ok: true })

  const email = cleanEmail(data?.email)
  if (!email) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  if (!canCaptureLeads()) {
    return NextResponse.json({ error: 'Signups are not available right now' }, { status: 503 })
  }

  const list = data?.list === 'growth-checklist' || data?.list === 'training' ? data.list : 'newsletter'
  const track = tracks.find((t) => t.slug === data?.skill)
  const skill = track?.slug ?? ''
  const tags =
    list === 'growth-checklist' ? ['website-newsletter', 'growth-checklist']
    : list === 'training' ? ['training-waitlist', ...(skill ? [`training-${skill}`] : [])]
    : ['website-newsletter']

  try {
    if (isDbConfigured() && !(await allowHit(ipBucket(req.headers, 'form'), 20, 10))) {
      return NextResponse.json({ error: 'Too many tries. Please wait a few minutes.' }, { status: 429 })
    }
    const saved = await captureHomeLead({
      email,
      form: list,
      interest: track ? `Training: ${track.name}` : null,
      page: text(data?.page, 200),
      tags,
    })
    if (!saved) return NextResponse.json({ error: 'Could not save your signup' }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe] not saved:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Could not save your signup' }, { status: 502 })
  }
}
