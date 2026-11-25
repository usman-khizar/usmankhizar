'use client'

import { useState } from 'react'
import { LeadMagnetButton } from '@/components/lead/LeadMagnet'

const format = (n: number) => new Intl.NumberFormat('en', { maximumFractionDigits: n < 10 ? 1 : 0 }).format(n)

const fields = [
  { key: 'visitors', label: 'Website visitors a month', min: 100, max: 50000, step: 100, unit: '' },
  { key: 'rate', label: 'Visitors who become leads', min: 0.1, max: 10, step: 0.1, unit: '%' },
  { key: 'close', label: 'Leads who become customers', min: 1, max: 80, step: 1, unit: '%' },
  { key: 'value', label: 'Average sale, in your currency', min: 50, max: 20000, step: 50, unit: '' },
  { key: 'better', label: 'Lead rate you want to reach', min: 0.1, max: 10, step: 0.1, unit: '%' },
] as const

type Key = (typeof fields)[number]['key']

/** Shows what the visitor's own numbers are worth today and at the lead rate they choose. */
export default function LeakCalculator() {
  const [v, setV] = useState<Record<Key, number>>({ visitors: 3000, rate: 1, close: 20, value: 1000, better: 2 })

  const month = (rate: number) => v.visitors * (rate / 100) * (v.close / 100) * v.value
  const now = month(v.rate)
  const then = month(v.better)
  const top = Math.max(now, then, 1)
  const gap = then - now

  return (
    <div className="calc">
      <div className="calc-form">
        {fields.map((f) => (
          <div key={f.key}>
            <label htmlFor={`calc-${f.key}`}>{f.label}</label>
            <output htmlFor={`calc-${f.key}`}>{format(v[f.key])}{f.unit}</output>
            <input
              id={`calc-${f.key}`}
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={v[f.key]}
              onChange={(e) => setV({ ...v, [f.key]: Number(e.target.value) })}
            />
          </div>
        ))}
        <p className="calc-note">These start as example numbers. Move them to yours. It is simple arithmetic, not a forecast.</p>
      </div>
      <div className="calc-out">
        <div className="calc-bars" aria-hidden="true">
          {[{ label: 'Today', n: now }, { label: 'At your target', n: then }].map((b, i) => (
            <div key={b.label} className={`calc-bar${i ? ' is-target' : ''}`}>
              <div className="calc-block" style={{ '--h': Math.max(0.04, b.n / top) } as React.CSSProperties}><i /><i /><i /></div>
              <strong>{format(b.n)}</strong>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
        <p role="status">
          {gap > 0
            ? <>The difference is <strong>{format(gap)} a month</strong> in sales, from the same traffic.</>
            : <>Set a target above your current lead rate to see the difference.</>}
        </p>
        <LeadMagnetButton>Find My Leaks</LeadMagnetButton>
      </div>
    </div>
  )
}
