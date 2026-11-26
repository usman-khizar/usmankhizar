'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import SubscribeForm from '@/components/forms/SubscribeForm'
import { checkCount } from '@/lib/checklist'

const KEY = 'growth-checklist-popup'
const QUIET_DAYS = 14
const OPEN_EVENT = 'open-lead-magnet'
const GHL_FORM = 'https://link.readyondemand.com/widget/form/4pJtCDndQtutaGWLDgEr'
// Pages where a popup would get in the way of what the visitor came to do.
const EXCLUDED = ['/contact', '/growth-checklist', '/privacy', '/terms', '/tools/', '/admin', '/admin/']

function recentlySeen() {
  try {
    const at = Number(localStorage.getItem(KEY))
    return at > 0 && Date.now() - at < QUIET_DAYS * 86_400_000
  } catch {
    return false
  }
}

function markSeen() {
  try {
    localStorage.setItem(KEY, String(Date.now()))
  } catch {
    // Storage is blocked: the popup may show again on the next visit.
  }
}

/** Opens the checklist popup from anywhere on the site. */
export function LeadMagnetButton({ children, className = 'home-btn' }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {children}
    </button>
  )
}

export default function LeadMagnet({ canSubscribe }: { canSubscribe: boolean }) {
  const path = usePathname()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const [bar, setBar] = useState(false)
  const excluded = EXCLUDED.some((p) => path === p || (p.endsWith('/') && path.startsWith(p)))

  const show = useCallback(() => {
    setBar(false)
    setOpen(true)
    markSeen()
    if (!dialogRef.current?.open) dialogRef.current?.showModal()
  }, [])

  useEffect(() => {
    window.addEventListener(OPEN_EVENT, show)
    return () => window.removeEventListener(OPEN_EVENT, show)
  }, [show])

  useEffect(() => {
    if (excluded || recentlySeen()) return
    let shown = false
    const started = Date.now()

    const offer = () => {
      // Never interrupt typing, or stack on an open dialog.
      const typing = document.activeElement?.matches('input, textarea, select, iframe')
      if (shown || typing || document.querySelector('dialog[open]')) return
      shown = true
      stop()
      // Phones get a small bar; a full popup there is intrusive.
      if (window.innerWidth <= 860) setBar(true)
      else show()
    }
    const onScroll = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight
      if (range > 0 && window.scrollY / range > 0.55 && Date.now() - started > 12_000) offer()
    }
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget && Date.now() - started > 8_000) offer()
    }
    const stop = () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mouseout', onLeave)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('mouseout', onLeave)
    return stop
  }, [excluded, path, show])

  function close() {
    dialogRef.current?.close()
  }

  return (
    <>
      {bar && !excluded && (
        <div className="lead-bar">
          <p>Free: the {checkCount}-point Growth Checklist</p>
          <button type="button" className="home-btn" onClick={show}>Get It</button>
          <button type="button" className="lead-x" aria-label="Dismiss" onClick={() => { setBar(false); markSeen() }}>×</button>
        </div>
      )}
      <dialog
        ref={dialogRef}
        className="lead-dialog"
        aria-labelledby="lead-title"
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === e.currentTarget) close() }}
      >
        <div className="lead-body">
          <button type="button" className="lead-x" aria-label="Close" onClick={close}>×</button>
          <div className="lead-copy">
            <div className="lead-sheets" aria-hidden="true">
              <i /><i /><i><b /><b /><b /><b /></i>
            </div>
            <h2 id="lead-title">Find where your marketing leaks leads</h2>
            <p>The Growth Checklist: {checkCount} checks across brand, website, search, CRM, automation, and social. About ten minutes.</p>
          </div>
          <div className="lead-form">
            {open && (canSubscribe ? (
              <>
                <SubscribeForm list="growth-checklist" buttonLabel="Send Me the Checklist">
                  <p>You&apos;re in. Here is your checklist.</p>
                  <Link href="/growth-checklist" className="home-btn" onClick={close}>Open the Checklist</Link>
                </SubscribeForm>
                <p className="lead-note">
                  You&apos;ll also get my marketing notes. Unsubscribe any time. <Link href="/privacy" onClick={close}>Privacy policy</Link>
                </p>
              </>
            ) : (
              <>
                <p>Send your details and I&apos;ll reply within 48 hours.</p>
                <iframe src={GHL_FORM} title="Send your details" />
                <Link href="/growth-checklist" className="home-btn home-btn-ghost" onClick={close}>Open the Checklist</Link>
              </>
            ))}
          </div>
        </div>
      </dialog>
    </>
  )
}
