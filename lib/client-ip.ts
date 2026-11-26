import 'server-only'
import { createHash } from 'node:crypto'

/** A hashed visitor address for rate limits, so raw IPs are never stored. */
export function ipBucket(headers: Headers, prefix: string) {
  // Vercel sets x-real-ip and overwrites x-forwarded-for, so visitors cannot fake them there.
  const ip = headers.get('x-real-ip') || headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  return `${prefix}:${createHash('sha256').update(ip).digest('hex').slice(0, 32)}`
}
