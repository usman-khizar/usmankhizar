'use client'

import { useCallback, useRef } from 'react'
import { useScrollProgress } from './useScrollProgress'

/** A list that becomes a turning 3D drum while it scrolls past. Stays a plain list without motion. */
export default function SkillDrum({ skills }: { skills: string[] }) {
  const ref = useRef<HTMLDivElement>(null)

  const onProgress = useCallback((p: number) => {
    const el = ref.current
    if (!el) return
    const turn = Math.min(1, Math.max(0, (p - 0.28) / 0.44)) * (el.querySelectorAll('li').length - 1)
    el.style.setProperty('--turn', turn.toFixed(3))
    el.querySelectorAll<HTMLElement>('li').forEach((li, i) => {
      const off = Math.abs(i - turn)
      li.style.opacity = Math.max(0.12, 1 - off * 0.34).toFixed(2)
      li.dataset.front = off < 0.5 ? 'true' : 'false'
    })
  }, [])

  useScrollProgress(ref, 'through', onProgress)

  return (
    <div ref={ref} className="drum">
      <ul>
        {skills.map((s, i) => <li key={s} style={{ '--i': i } as React.CSSProperties}>{s}</li>)}
      </ul>
    </div>
  )
}
