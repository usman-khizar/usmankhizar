import 'server-only'
import { createHash, createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { isDbConfigured } from './db'

const COOKIE = 'uk_admin'
const MAX_AGE = 7 * 24 * 60 * 60

function password() {
  const p = process.env.ADMIN_PASSWORD ?? ''
  // A short password is treated as not set, so the inbox can't be opened with a weak one.
  return p.length >= 12 ? p : null
}

export function isAdminConfigured() {
  return password() !== null && isDbConfigured()
}

// The signing key comes from the password, so changing the password signs everyone out.
function key() {
  return createHash('sha256').update(`uk-admin-session:${password()}`).digest()
}

function sign(expires: number) {
  return createHmac('sha256', key()).update(String(expires)).digest('base64url')
}

function same(a: Buffer, b: Buffer) {
  return a.length === b.length && timingSafeEqual(a, b)
}

export function passwordMatches(input: string) {
  const p = password()
  if (!p) return false
  const hash = (v: string) => createHash('sha256').update(v).digest()
  return same(hash(input), hash(p))
}

export async function startSession() {
  const expires = Date.now() + MAX_AGE * 1000
  ;(await cookies()).set(COOKIE, `${expires}.${sign(expires)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/admin',
    maxAge: MAX_AGE,
  })
}

export async function endSession() {
  ;(await cookies()).delete({ name: COOKIE, path: '/admin' })
}

export async function isSignedIn() {
  if (!isAdminConfigured()) return false
  const value = (await cookies()).get(COOKIE)?.value ?? ''
  const [exp, sig] = value.split('.')
  const expires = Number(exp)
  if (!sig || !Number.isFinite(expires) || expires < Date.now()) return false
  return same(Buffer.from(sig), Buffer.from(sign(expires)))
}

/** Use at the top of every admin page and action. */
export async function requireAdmin() {
  if (!(await isSignedIn())) redirect('/admin/login')
}
