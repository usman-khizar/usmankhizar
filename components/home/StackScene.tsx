'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export interface StackLayer {
  name: string
  body: string
  links: { label: string; href: string }[]
}

/** Isometric layers that lift one at a time as the matching text reaches the middle of the screen. */
export default function StackScene({ layers }: { layers: StackLayer[] }) {
  const listRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const items = [...(listRef.current?.children ?? [])]
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(items.indexOf(entry.target))
      },
      { rootMargin: '-48% 0px -48% 0px' },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="stack3d">
      <div className="stack3d-view" aria-hidden="true">
        <div className="stack3d-tower">
          {layers.map((layer, i) => (
            <div key={layer.name} className={`stack3d-plane${i === active ? ' is-active' : ''}${i < active ? ' is-done' : ''}${i > active ? ' is-next' : ''}`} style={{ '--i': i } as React.CSSProperties}>
              <span>{layer.name}</span>
            </div>
          ))}
        </div>
      </div>
      <ol ref={listRef} className="stack3d-list">
        {layers.map((layer, i) => (
          <li key={layer.name} className={i === active ? 'is-active' : undefined}>
            <h3>{layer.name}</h3>
            <p>{layer.body}</p>
            {layer.links.length > 0 && (
              <p className="home-links">
                {layer.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
