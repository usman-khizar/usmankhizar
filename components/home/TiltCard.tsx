'use client'

/** Leans toward the pointer. Touch and reduced-motion visitors get a flat card (handled in CSS). */
export default function TiltCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="tilt"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const el = e.currentTarget
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        el.style.setProperty('--rx', `${((0.5 - y) * 9).toFixed(2)}deg`)
        el.style.setProperty('--ry', `${((x - 0.5) * 11).toFixed(2)}deg`)
        el.style.setProperty('--gx', `${(x * 100).toFixed(0)}%`)
        el.style.setProperty('--gy', `${(y * 100).toFixed(0)}%`)
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty('--rx', '0deg')
        e.currentTarget.style.setProperty('--ry', '0deg')
      }}
    >
      <div className="tilt-in">{children}</div>
    </div>
  )
}
