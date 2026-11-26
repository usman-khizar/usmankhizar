import { NextRequest, NextResponse } from 'next/server'
import { allowHit, canCaptureLeads, captureHomeLead, email as cleanEmail, text } from '@/lib/crm'
import { ipBucket } from '@/lib/client-ip'
import { isDbConfigured } from '@/lib/db'
import { budgets, interests } from '@/lib/lead-options'

/** The enquiry form on usmankhizar.com. */
export async function POST(req: NextRequest) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  if (data?.company) return NextResponse.json({ ok: true })

  const email = cleanEmail(data?.email)
  const name = text(data?.name, 120)
  const message = text(data?.message, 5000)
  if (!email || !name || !message) {
    return NextResponse.json({ error: 'Please add your name, email, and a message.' }, { status: 400 })
  }
  if (!canCaptureLeads()) return NextResponse.json({ error: 'The form is not available right now' }, { status: 503 })

  const interest = typeof data?.interest === 'string' && interests.includes(data.interest) ? data.interest : null
  const budget = typeof data?.budget === 'string' && budgets.includes(data.budget) ? data.budget : null

  try {
    if (isDbConfigured() && !(await allowHit(ipBucket(req.headers, 'form'), 20, 10))) {
      return NextResponse.json({ error: 'Too many tries. Please wait a few minutes.' }, { status: 429 })
    }
    const saved = await captureHomeLead({
      email,
      name,
      phone: text(data?.phone, 40),
      interest,
      budget,
      message,
      form: 'enquiry',
      page: text(data?.page, 200),
      tags: ['website-enquiry'],
    })
    if (!saved) return NextResponse.json({ error: 'Could not send your message' }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[enquiry] not saved:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Could not send your message' }, { status: 502 })
  }
}
