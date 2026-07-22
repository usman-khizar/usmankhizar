'use client'

import { useState } from 'react'

interface FaqItemData {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItemData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className="faq-item" key={item.q}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <svg
                className={`faq-arrow ${isOpen ? 'open' : ''}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
              <div className="faq-answer-inner">
                <p className="faq-answer-content">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
