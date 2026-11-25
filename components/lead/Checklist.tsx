'use client'

import Link from 'next/link'
import { useState } from 'react'
import { checklist, checkCount } from '@/lib/checklist'

export default function Checklist() {
  const [done, setDone] = useState<Set<string>>(new Set())

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // The area with the most unticked checks is where to start.
  const gaps = checklist
    .map((g, i) => ({ area: g.area, open: g.items.filter((_, j) => !done.has(`${i}-${j}`)).length }))
    .sort((a, b) => b.open - a.open)

  return (
    <>
      {checklist.map((group, i) => (
        <fieldset key={group.area} className="check-group">
          <legend>{group.area}</legend>
          {group.items.map((item, j) => {
            const id = `${i}-${j}`
            return (
              <label key={id} htmlFor={`check-${id}`}>
                <input id={`check-${id}`} type="checkbox" checked={done.has(id)} onChange={() => toggle(id)} />
                <span>{item}</span>
              </label>
            )
          })}
        </fieldset>
      ))}
      <div className="check-score" role="status">
        <p className="check-total">{done.size} of {checkCount}</p>
        <p>
          {done.size === 0
            ? 'Tick what is already true for your business.'
            : gaps[0].open === 0
              ? 'Everything is in place. Keep checking it each quarter.'
              : `Start with ${gaps[0].area.toLowerCase()}. It has the most open checks.`}
        </p>
        <Link href="/contact" className="home-btn">Talk Through Your Score</Link>
      </div>
    </>
  )
}
