'use client'

import { RefObject, useEffect } from 'react'

/**
 * Calls `onProgress` with 0 to 1 as the element scrolls.
 * - "pin": 0 when its top reaches the viewport top, 1 when its bottom reaches the viewport bottom.
 * - "through": 0 when it enters from below, 1 when it has left at the top.
 * Does nothing for people who prefer reduced motion, so the static layout stays.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, mode: 'pin' | 'through', onProgress: (p: number) => void) {
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.dataset.motion = 'on'

    let raf = 0
    let current = -1
    let visible = false

    const tick = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const h = window.innerHeight
      const raw = mode === 'pin' ? -r.top / Math.max(1, r.height - h) : (h - r.top) / (r.height + h)
      const goal = Math.min(1, Math.max(0, raw))
      current = current < 0 ? goal : current + (goal - current) * 0.2
      if (Math.abs(goal - current) < 0.001) current = goal
      onProgress(current)
      if (current !== goal) schedule()
    }
    const schedule = () => {
      if (!raf && visible) raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      schedule()
    }, { rootMargin: '20% 0px' })
    io.observe(el)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      delete el.dataset.motion
    }
  }, [ref, mode, onProgress])
}
