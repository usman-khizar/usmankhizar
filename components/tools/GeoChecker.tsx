'use client'

import { useState } from 'react'
import CheckList, { Check } from './CheckList'

function analyse(input: string): Check[] {
  const isHtml = /<(p|h[1-6]|div|article|main|body|ul|table|script)\b/i.test(input)
  const doc = isHtml ? new DOMParser().parseFromString(input, 'text/html') : null
  const jsonLd = doc ? [...doc.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent ?? '').join(' ') : ''
  doc?.querySelectorAll('script, style, nav, header, footer, noscript').forEach((el) => el.remove())

  const lines = input.split('\n').map((l) => l.trim()).filter(Boolean)
  const headings = doc
    ? [...doc.querySelectorAll('h2, h3')].map((h) => h.textContent?.trim() ?? '')
    : lines.filter((l) => /^#{2,3}\s/.test(l) || (l.length < 90 && l.endsWith('?')))
  const paragraphs = doc
    ? [...doc.querySelectorAll('p')].map((p) => p.textContent?.trim() ?? '').filter((p) => p.length > 30)
    : lines.filter((l) => !l.startsWith('#') && l.length > 60)
  const text = doc ? doc.body.textContent ?? '' : input
  const words = text.split(/\s+/).filter(Boolean).length
  const first = paragraphs[0]?.split(/\s+/).length ?? 0
  const facts = text.match(/\b\d[\d,.]*\s?(%|percent|years?|days?|hours?|minutes?|months?|x\b)|[$£€]\s?\d|\b(19|20)\d{2}\b/gi)?.length ?? 0
  const long = paragraphs.filter((p) => p.split(/\s+/).length > 110).length

  return [
    { ok: first >= 20 && first <= 70, label: 'Opens with a short, direct answer', tip: `Your first paragraph is ${first} words. Answer the main question in 20 to 70 words before anything else.` },
    { ok: headings.length >= 3, label: 'Has at least three subheadings', tip: `Found ${headings.length}. Split the page into sections that each answer one thing.` },
    { ok: headings.some((h) => /\?$|^#*\s*(what|how|why|when|which|who|is|can|does|should)\b/i.test(h)), label: 'Uses question-style subheadings', tip: 'Rewrite at least one subheading as the question a customer would ask.' },
    { ok: facts >= 3, label: 'Includes specific figures or dates', tip: `Found ${facts}. Add real numbers, dates, prices, or timeframes you can stand behind.` },
    { ok: doc ? !!doc.querySelector('ul, ol, table') : /^([-*•]|\d+[.)])\s/m.test(input), label: 'Has a list or table', tip: 'Put steps, comparisons, or criteria into a list or table.' },
    { ok: paragraphs.length > 0 && long === 0, label: 'Keeps paragraphs under about 110 words', tip: long ? `${long} paragraph(s) run long. Break them up.` : 'No full paragraphs found.' },
    { ok: /\b(by|author|written by|reviewed by)\s+[A-Z]/.test(text) || /"author"/.test(jsonLd), label: 'Names an author', tip: 'Add a byline, and author details in your Article schema.' },
    { ok: /faq|frequently asked/i.test(text) || /FAQPage/.test(jsonLd), label: 'Has an FAQ section', tip: 'Add three to five real customer questions with short answers.' },
    { ok: words >= 300, label: 'Has enough content to answer the topic', tip: `Found ${words} words. Thin pages rarely answer a question completely.` },
  ]
}

export default function GeoChecker() {
  const [input, setInput] = useState('')
  const [checks, setChecks] = useState<Check[] | null>(null)

  return (
    <div className="tool-grid">
      <form className="tool-form" onSubmit={(e) => { e.preventDefault(); setChecks(analyse(input)) }}>
        <label htmlFor="geo-input">Page text or HTML</label>
        <textarea id="geo-input" rows={14} required minLength={100} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste your article, or the page's HTML source" />
        <button type="submit" className="btn-primary">Check Page</button>
      </form>
      {checks ? (
        <CheckList checks={checks} note="This checks on-page structure only. It can't see your authority, backlinks, or whether an AI tool cites you today." />
      ) : (
        <div className="tool-result"><p>Your results will appear here. Nothing you paste leaves your browser.</p></div>
      )}
    </div>
  )
}
