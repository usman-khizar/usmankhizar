import { forms, statuses } from '@/lib/lead-options'

const labels: Record<string, string> = Object.fromEntries(statuses.map((s) => [s.value, s.label]))

export const statusLabel = (s: string) => labels[s] ?? s
export const formLabel = (f: string | null) => (f ? forms[f] ?? f : 'Unknown')

export function when(d: Date) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' }).format(d)
}

export function ago(d: Date) {
  const mins = Math.round((Date.now() - d.getTime()) / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.round(mins / 60)
  if (hours < 48) return `${hours}h ago`
  return `${Math.round(hours / 24)}d ago`
}

/** wa.me needs the full international number, so only numbers written with + or 00 get a link. */
export function whatsapp(phone: string | null) {
  const p = (phone ?? '').trim()
  if (!/^(\+|00)/.test(p)) return null
  const digits = p.replace(/\D/g, '').replace(/^00/, '')
  return digits.length >= 8 ? `https://wa.me/${digits}` : null
}
