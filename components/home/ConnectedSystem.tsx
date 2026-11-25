'use client'

import { useCallback, useRef } from 'react'
import { useScrollProgress } from './useScrollProgress'

const parts = [
  { name: 'Brand', from: [-25, -24, 90, -20] },
  { name: 'Website', from: [27, -30, -120, 16] },
  { name: 'Search', from: [33, 6, 80, -14] },
  { name: 'CRM', from: [15, 34, -90, 24] },
  { name: 'Automation', from: [-22, 32, 110, 12] },
  { name: 'Social', from: [-35, 4, -140, -18] },
]

const ease = (t: number) => t * t * (3 - 2 * t)
const span = (p: number, a: number, b: number) => ease(Math.min(1, Math.max(0, (p - a) / (b - a))))

/** Six loose parts pull together into one turning ring around the customer as the section scrolls. */
export default function ConnectedSystem() {
  const trackRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  const onProgress = useCallback((p: number) => {
    const track = trackRef.current
    const scene = sceneRef.current
    if (!track || !scene) return
    const join = span(p, 0.08, 0.58)
    const w = scene.clientWidth
    const h = scene.clientHeight
    const radius = w < 600 ? w * 0.27 : Math.min(w * 0.4, 330)
    const spin = p * Math.PI * 1.1

    track.style.setProperty('--join', join.toFixed(3))
    scene.querySelectorAll<HTMLElement>('[data-part]').forEach((el, i) => {
      const a = (i / parts.length) * Math.PI * 2 + spin
      const [fx, fy, fz, fr] = parts[i].from
      const x = (fx / 100) * w * (1 - join) + Math.cos(a) * radius * join
      const y = (fy / 100) * h * (1 - join) + Math.sin(a) * h * 0.2 * join
      const z = fz * (1 - join) + Math.sin(a) * 190 * join
      const depth = (z + 260) / 520
      el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) rotate(${(fr * (1 - join)).toFixed(1)}deg)`
      el.style.zIndex = String(Math.round(z) + 300)
      el.style.opacity = (0.55 + 0.45 * Math.min(1, Math.max(0, depth))).toFixed(2)
      // Same perspective as the CSS scene, so each line meets its chip.
      const scale = 1000 / (1000 - z)
      const line = scene.querySelector(`[data-line="${i}"]`)
      line?.setAttribute('x2', (w / 2 + x * scale).toFixed(1))
      line?.setAttribute('y2', (h / 2 + y * scale).toFixed(1))
      line?.setAttribute('x1', (w / 2).toFixed(1))
      line?.setAttribute('y1', (h / 2).toFixed(1))
    })
  }, [])

  useScrollProgress(trackRef, 'pin', onProgress)

  return (
    <section ref={trackRef} className="sys">
      <div className="sys-stage">
        <div className="sys-copy">
          <div className="sys-a">
            <h2>Good parts. No system.</h2>
            <p>The website is built by one person, search by another, and social by whoever has time. Leads arrive, and nobody is sure whose job they are.</p>
          </div>
          <div className="sys-b">
            <h2>One system, around one customer.</h2>
            <p>The message, the pages, the channels, and the follow-up pull in the same direction, and one person is responsible for how they fit.</p>
          </div>
        </div>
        <div ref={sceneRef} className="sys-scene" aria-hidden="true">
          <svg>{parts.map((p, i) => <line key={p.name} data-line={i} />)}</svg>
          <span className="sys-core">Your customer</span>
          {parts.map((p, i) => (
            <span key={p.name} data-part className="sys-part" style={{ '--i': i } as React.CSSProperties}>{p.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
