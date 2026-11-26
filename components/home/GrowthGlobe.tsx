'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Bot, CalendarCheck, Compass, FileText, Filter, Gauge, GitBranch, Globe2, Layers, Link2, Magnet, MapPin, Megaphone,
  MessageSquareText, MousePointerClick, Network, PenLine, Quote, Repeat, Search, Sparkles, Target, UserRound, Video,
  type LucideIcon,
} from 'lucide-react'
import { brandPaths } from '@/lib/brand-paths'

type Chip = { label: string; icon?: LucideIcon; brand?: string; mark?: string }
type Chapter = { name: string; body: string; services: Chip[]; tools: Chip[] }

const chapters: Chapter[] = [
  {
    name: 'Brand and positioning',
    body: 'Who you serve, why they should choose you, and how you say it everywhere.',
    services: [{ label: 'Positioning', icon: Compass }, { label: 'Messaging', icon: Quote }, { label: 'Offer design', icon: Target }, { label: 'Personal brand', icon: UserRound }],
    tools: [{ label: 'LinkedIn', brand: 'linkedin' }, { label: 'Canva', brand: 'canva' }, { label: 'Upwork', brand: 'upwork' }],
  },
  {
    name: 'Websites and landing pages',
    body: 'Fast pages that explain the offer and turn visits into enquiries.',
    services: [{ label: 'Web design', icon: Layers }, { label: 'Landing pages', icon: MousePointerClick }, { label: 'Lead capture', icon: Magnet }, { label: 'Page speed', icon: Gauge }],
    tools: [{ label: 'Next.js', brand: 'next' }, { label: 'React', brand: 'react' }, { label: 'Vercel', brand: 'vercel' }, { label: 'GitHub', brand: 'github' }],
  },
  {
    name: 'Search and AI visibility',
    body: 'Rank on Google, and get quoted when people ask AI instead.',
    services: [{ label: 'Technical SEO', icon: Search }, { label: 'GEO and AEO', icon: Sparkles }, { label: 'Local SEO', icon: MapPin }, { label: 'Link building', icon: Link2 }],
    tools: [{ label: 'Search Console', brand: 'searchconsole' }, { label: 'Ahrefs', mark: 'a' }, { label: 'Screaming Frog', mark: 'SF' }, { label: 'Search Atlas', mark: 'SA' }, { label: 'Analytics', brand: 'analytics' }],
  },
  {
    name: 'CRM and GoHighLevel',
    body: 'Every enquiry answered, tracked, and followed up.',
    services: [{ label: 'Pipelines', icon: Filter }, { label: 'Booking calendars', icon: CalendarCheck }, { label: 'Forms', icon: FileText }, { label: 'Follow-up', icon: Repeat }],
    tools: [{ label: 'GoHighLevel', mark: 'HL' }, { label: 'WhatsApp', brand: 'whatsapp' }, { label: 'ClickUp', brand: 'clickup' }, { label: 'Slack', brand: 'slack' }],
  },
  {
    name: 'AI automation',
    body: 'Repeat work handled by workflows, with a person checking what matters.',
    services: [{ label: 'AI workflows', icon: Network }, { label: 'Lead routing', icon: GitBranch }, { label: 'AI assistants', icon: Bot }],
    tools: [{ label: 'Claude', brand: 'claude' }, { label: 'ChatGPT', brand: 'openai' }, { label: 'Gemini', brand: 'gemini' }, { label: 'Perplexity', brand: 'perplexity' }, { label: 'ElevenLabs', brand: 'elevenlabs' }],
  },
  {
    name: 'Social and content',
    body: 'A content plan you can keep, on the platforms your buyers use.',
    services: [{ label: 'Content plan', icon: PenLine }, { label: 'LinkedIn posts', icon: MessageSquareText }, { label: 'Short video', icon: Video }, { label: 'Distribution', icon: Megaphone }],
    tools: [{ label: 'YouTube', brand: 'youtube' }, { label: 'Reddit', brand: 'reddit' }, { label: 'Medium', brand: 'medium' }, { label: 'Quora', brand: 'quora' }],
  },
]

const N = chapters.length
const RAD = Math.PI / 180
// Where a chapter's chips sit around its centre: [longitude, latitude]. Services and tools alternate.
// Smaller globes get one row per chip, so labels never meet.
const SLOTS_SMALL = [[-17, 49], [17, 35], [-19, 21], [18, 7], [-18, -7], [18, -21], [-30, -31], [24, -45], [0, 66]]
const SLOTS = [[-21, 37], [16, 43], [-34, 12], [31, 18], [0, 13], [-20, -15], [24, -11], [2, -38], [-2, 62]]

const chips = chapters.flatMap((c, ci) => {
  const mixed: { chip: Chip; kind: 'service' | 'tool' }[] = []
  for (let i = 0; i < Math.max(c.services.length, c.tools.length); i++) {
    if (c.services[i]) mixed.push({ chip: c.services[i], kind: 'service' })
    if (c.tools[i]) mixed.push({ chip: c.tools[i], kind: 'tool' })
  }
  return mixed.map(({ chip, kind }, i) => ({ chip, kind, chapter: ci, wide: [ci * (360 / N) + SLOTS[i][0], SLOTS[i][1]], slim: [ci * (360 / N) + SLOTS_SMALL[i][0], SLOTS_SMALL[i][1]] }))
})

const smooth = (t: number) => t * t * (3 - 2 * t)
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))

function ChipIcon({ chip }: { chip: Chip }) {
  if (chip.icon) return <chip.icon size={16} strokeWidth={2} aria-hidden="true" />
  if (chip.brand && brandPaths[chip.brand]) {
    return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d={brandPaths[chip.brand]} /></svg>
  }
  return <i className="gl-mark" aria-hidden="true">{chip.mark}</i>
}

/**
 * A dotted globe that turns one sixth per service area as the page scrolls, bringing that area's
 * services and tools to the front. Without motion it is a plain, readable list.
 */
export default function GrowthGlobe() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pausedRef = useRef(false)
  const [active, setActive] = useState(0)
  const [filter, setFilter] = useState<'all' | 'service' | 'tool'>('all')
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!track || !stage || !canvas || !ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    track.dataset.motion = 'on'
    const els = [...stage.querySelectorAll<HTMLElement>('[data-chip]')]
    let land: Float32Array | null = null
    let w = 0, h = 0, cx = 0, cy = 0, R = 0, small = false
    let raf = 0, visible = false, last = 0, clock = 0
    let pos = -1, drag = 0, dragging = false, dragX = 0, shown = -1

    fetch('/globe-land.json')
      .then((r) => r.json())
      .then((flat: number[]) => {
        // Unit vectors, so each frame only rotates them.
        const v = new Float32Array((flat.length / 2) * 3)
        for (let i = 0, k = 0; i < flat.length; i += 2, k += 3) {
          const la = (flat[i] / 10) * RAD
          const lo = (flat[i + 1] / 10) * RAD
          v[k] = Math.cos(la) * Math.sin(lo)
          v[k + 1] = Math.sin(la)
          v[k + 2] = Math.cos(la) * Math.cos(lo)
        }
        land = v
      })
      .catch(() => { /* The sphere and labels still work without the map. */ })

    const resize = () => {
      w = stage.clientWidth
      h = stage.clientHeight
      small = w <= 860
      R = small ? Math.min(w * 0.44, h * (h < 720 ? 0.265 : 0.25)) : Math.min(w * 0.215, h * 0.335)
      cx = small ? w / 2 : w * 0.665
      cy = small ? h * (h < 720 ? 0.6 : 0.665) : h * 0.535
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const TILT = 0.2
    const ct = Math.cos(TILT), st = Math.sin(TILT)

    const frame = (now: number) => {
      raf = 0
      const dt = Math.min(50, now - last || 16)
      last = now
      if (!pausedRef.current) clock += dt

      // Scroll position to chapter position, resting on each chapter.
      const r = track.getBoundingClientRect()
      const p = clamp(-r.top / Math.max(1, r.height - window.innerHeight))
      const at = p * (N - 1)
      const base = Math.floor(at)
      const goal = base + smooth(clamp((at - base - 0.22) / 0.56))
      pos = pos < 0 ? goal : pos + (goal - pos) * (1 - Math.pow(0.86, dt / 16))
      if (!dragging) drag *= Math.pow(0.97, dt / 16)
      const chapter = Math.round(pos)
      if (chapter !== shown) { shown = chapter; setActive(chapter) }

      const rot = -(pos * (360 / N)) * RAD + drag + Math.sin(clock / 5200) * 0.07
      const cr = Math.cos(rot), sr = Math.sin(rot)
      const project = (x: number, y: number, z: number): [number, number, number] => {
        const x1 = x * cr + z * sr
        const z1 = z * cr - x * sr
        return [x1, y * ct - z1 * st, y * st + z1 * ct]
      }
      const onSphere = (lon: number, lat: number) => {
        const c = Math.cos(lat * RAD)
        return project(c * Math.sin(lon * RAD), Math.sin(lat * RAD), c * Math.cos(lon * RAD))
      }

      ctx.clearRect(0, 0, w, h)

      // Warm haze, then the ball, lit from the upper right like the hero.
      let g = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.75)
      g.addColorStop(0, 'rgba(214, 106, 66, 0.34)')
      g.addColorStop(0.4, 'rgba(160, 78, 46, 0.12)')
      g.addColorStop(1, 'rgba(120, 60, 36, 0)')
      ctx.fillStyle = g
      ctx.fillRect(cx - R * 1.8, cy - R * 1.8, R * 3.6, R * 3.6)
      g = ctx.createRadialGradient(cx + R * 0.42, cy - R * 0.5, R * 0.05, cx, cy, R)
      g.addColorStop(0, '#8a5a3e')
      g.addColorStop(0.35, '#4f3222')
      g.addColorStop(0.75, '#271811')
      g.addColorStop(1, '#170f0b')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fill()

      if (land) {
        // Group dots by brightness so the fill style only changes a few times a frame.
        const buckets: number[][] = [[], [], [], [], []]
        const back: number[] = []
        for (let i = 0; i < land.length; i += 3) {
          const [x, y, z] = project(land[i], land[i + 1], land[i + 2])
          if (z < 0.02) { if (z < -0.25) back.push(cx + x * R, cy - y * R); continue }
          const lit = clamp(0.28 + 0.5 * z + 0.34 * x + 0.3 * y)
          buckets[Math.min(4, Math.floor(lit * 5))].push(cx + x * R, cy - y * R, 0.45 + 0.55 * z)
        }
        const dot = R * 0.0145
        ctx.fillStyle = 'rgba(240, 190, 150, 0.06)'
        ctx.beginPath()
        for (let i = 0; i < back.length; i += 2) { ctx.moveTo(back[i] + dot * 0.6, back[i + 1]); ctx.arc(back[i], back[i + 1], dot * 0.6, 0, 7) }
        ctx.fill()
        const tones = ['rgba(150,88,60,.55)', 'rgba(192,98,66,.75)', 'rgba(222,118,82,.9)', 'rgba(242,154,112,.97)', 'rgba(255,206,164,1)']
        buckets.forEach((list, b) => {
          ctx.fillStyle = tones[b]
          ctx.beginPath()
          for (let i = 0; i < list.length; i += 3) {
            const s = dot * list[i + 2]
            ctx.moveTo(list[i] + s, list[i + 1])
            ctx.arc(list[i], list[i + 1], s, 0, 7)
          }
          ctx.fill()
        })
      }

      // Rim light.
      g = ctx.createLinearGradient(cx - R, cy + R, cx + R, cy - R)
      g.addColorStop(0.35, 'rgba(255, 210, 160, 0)')
      g.addColorStop(1, 'rgba(255, 214, 170, 0.85)')
      ctx.strokeStyle = g
      ctx.lineWidth = 1.6
      ctx.beginPath()
      ctx.arc(cx, cy, R - 0.8, 0, Math.PI * 2)
      ctx.stroke()

      // Routes between the active chapter's chips, with a light travelling along each.
      const place = (c: (typeof chips)[number]) => (R < 265 ? c.slim : c.wide)
      const mine = chips.filter((c) => c.chapter === chapter).map(place)
      const strength = 1 - Math.min(1, Math.abs(pos - chapter) * 2.6)
      if (strength > 0.02) {
        for (let i = 0; i < mine.length; i++) {
          const a = mine[i], b = mine[(i + 2) % mine.length]
          ctx.beginPath()
          let started = false
          const pts: [number, number, number][] = []
          for (let k = 0; k <= 18; k++) {
            const t = k / 18
            const [x, y, z] = onSphere(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)
            const lift = 1 + Math.sin(t * Math.PI) * 0.1
            const pt: [number, number, number] = [cx + x * R * lift, cy - y * R * lift, z]
            pts.push(pt)
            if (z < 0.05) { started = false; continue }
            if (started) ctx.lineTo(pt[0], pt[1]); else { ctx.moveTo(pt[0], pt[1]); started = true }
          }
          ctx.strokeStyle = `rgba(255, 190, 150, ${(0.34 * strength).toFixed(3)})`
          ctx.lineWidth = 1
          ctx.stroke()
          const q = pts[Math.floor((((clock / 2600 + i * 0.17) % 1) * 18))]
          if (q && q[2] > 0.05) {
            ctx.fillStyle = `rgba(255, 232, 205, ${(0.95 * strength).toFixed(3)})`
            ctx.beginPath()
            ctx.arc(q[0], q[1], 2.3, 0, 7)
            ctx.fill()
          }
        }
      }

      // Labels.
      els.forEach((el, i) => {
        const c = chips[i]
        const [x, y, z] = onSphere(...(place(c) as [number, number]))
        const near = 1 - clamp(Math.abs(c.chapter - pos) * 1.15)
        const front = clamp((z - 0.12) / 0.4)
        const show = small ? front * near : front * (0.1 + 0.9 * near)
        if (show < 0.03) { el.style.visibility = 'hidden'; return }
        const lift = 1.07
        const scale = (0.72 + 0.28 * front) * (0.84 + 0.16 * near)
        el.style.visibility = 'visible'
        el.style.opacity = show.toFixed(2)
        el.style.zIndex = String(10 + Math.round(z * 100))
        el.style.transform = `translate3d(${(cx + x * R * lift).toFixed(1)}px, ${(cy - y * R * lift).toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(3)})`
      })

      if (visible) schedule()
    }
    const schedule = () => { if (!raf) raf = requestAnimationFrame(frame) }

    const down = (e: PointerEvent) => { dragging = true; dragX = e.clientX; canvas.setPointerCapture(e.pointerId) }
    const move = (e: PointerEvent) => { if (dragging) { drag += (e.clientX - dragX) / (R * 1.1); dragX = e.clientX } }
    const up = () => { dragging = false; drag = Math.atan2(Math.sin(drag), Math.cos(drag)) }
    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerup', up)
    canvas.addEventListener('pointercancel', up)

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule() }, { rootMargin: '10% 0px' })
    io.observe(track)
    const ro = new ResizeObserver(resize)
    ro.observe(stage)
    resize()

    return () => {
      visible = false
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      canvas.removeEventListener('pointerdown', down)
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerup', up)
      canvas.removeEventListener('pointercancel', up)
      delete track.dataset.motion
    }
  }, [])

  function goTo(i: number) {
    const track = trackRef.current
    if (!track) return
    const top = track.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + ((track.offsetHeight - window.innerHeight) * i) / (N - 1), behavior: 'smooth' })
  }

  return (
    <section ref={trackRef} className="gl">
      <div ref={stageRef} className="gl-stage" data-filter={filter}>
        <canvas ref={canvasRef} className="gl-canvas" aria-hidden="true" />
        <div className="gl-head">
          <h2>Every service and tool you need to grow, under one roof.</h2>
          <div className="gl-nav" role="group" aria-label="Service areas">
            {chapters.map((c, i) => (
              <button key={c.name} type="button" aria-current={i === active ? 'true' : undefined} onClick={() => goTo(i)}>{c.name}</button>
            ))}
          </div>
        </div>
        {chapters.map((c, ci) => (
          <div key={c.name} className={`gl-group${ci === active ? ' is-active' : ''}`}>
            <div className="gl-text">
              <h3>{c.name}</h3>
              <p>{c.body}</p>
            </div>
            <ul>
              {chips.filter((x) => x.chapter === ci).map(({ chip, kind }) => (
                <li key={chip.label} data-chip data-kind={kind}><ChipIcon chip={chip} />{chip.label}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="gl-tools" role="group" aria-label="Globe controls">
          {(['all', 'service', 'tool'] as const).map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f === 'all' ? 'All' : f === 'service' ? 'Services' : 'Tools'}</button>
          ))}
          <button type="button" aria-pressed={paused} onClick={() => { pausedRef.current = !paused; setPaused(!paused) }}>{paused ? 'Resume drift' : 'Pause drift'}</button>
          <span><Globe2 size={15} aria-hidden="true" /> Drag to spin</span>
        </div>
      </div>
    </section>
  )
}
