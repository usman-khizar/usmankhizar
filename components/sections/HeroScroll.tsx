'use client'

import { useEffect, useRef } from 'react'

const FRAME_COUNT = 46
const WIDTH = 960
const HEIGHT = 680

/** Frames in coarse-to-fine order, so early scrolling already covers the whole turn. */
function loadOrder() {
  const order: number[] = []
  for (const step of [16, 8, 4, 2, 1]) {
    for (let i = 0; i < FRAME_COUNT; i += step) if (!order.includes(i)) order.push(i)
  }
  return order
}

/**
 * Pins the hero while the page scrolls past it and plays the turn frame by frame.
 * The poster in `children` stays visible until frames load, without JS, and for
 * people who prefer reduced motion.
 */
export default function HeroScroll({ poster, children }: { poster: React.ReactNode; children: React.ReactNode }) {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!track || !stage || !canvas || !ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const folder = window.innerWidth <= 860 ? 'm' : 'd'
    const frames: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT)
    let stopped = false
    let raf = 0
    let current = 0
    let drawn = -1

    const target = () => {
      const distance = track.offsetHeight - window.innerHeight
      if (distance <= 0) return 0
      // Finish the turn slightly before the hero unpins, so the last pose is held.
      const raw = -track.getBoundingClientRect().top / distance / 0.88
      return Math.min(1, Math.max(0, raw))
    }

    const nearestLoaded = (index: number) => {
      for (let d = 0; d < FRAME_COUNT; d++) {
        if (frames[index - d]) return index - d
        if (frames[index + d]) return index + d
      }
      return -1
    }

    const render = () => {
      raf = 0
      const goal = target()
      current += (goal - current) * 0.22
      if (Math.abs(goal - current) < 0.0015) current = goal
      stage.style.setProperty('--p', current.toFixed(4))

      const index = nearestLoaded(Math.round(current * (FRAME_COUNT - 1)))
      const image = index >= 0 ? frames[index] : undefined
      if (image && index !== drawn) {
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        ctx.drawImage(image, 0, 0, WIDTH, HEIGHT)
        drawn = index
        stage.dataset.ready = 'true'
      }
      if (current !== goal) schedule()
    }

    const schedule = () => {
      if (!raf && !stopped) raf = requestAnimationFrame(render)
    }

    const queue = loadOrder()
    const loadNext = async () => {
      while (queue.length && !stopped) {
        const i = queue.shift()!
        const image = new Image()
        image.src = `/hero/${folder}/${String(i).padStart(2, '0')}.webp`
        try {
          await image.decode()
          frames[i] = image
          schedule()
        } catch {
          // A missing frame is skipped; the nearest loaded one is drawn instead.
        }
      }
    }
    for (let n = 0; n < 4; n++) loadNext()

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    schedule()

    return () => {
      stopped = true
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <section ref={trackRef} className="home-hero">
      <div ref={stageRef} className="home-hero-stage">
        <div className="home-hero-beam" aria-hidden="true" />
        <p className="home-hero-word" aria-hidden="true">Growth</p>
        <div className="home-hero-figure">
          {poster}
          <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  )
}
