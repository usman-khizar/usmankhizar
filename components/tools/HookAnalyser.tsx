'use client'

import { useState } from 'react'
import CheckList, { Check } from './CheckList'

function analyse(hook: string): Check[] {
  const text = hook.trim()
  const firstLine = text.split('\n')[0]
  const firstSentence = firstLine.split(/(?<=[.!?])\s/)[0]
  const words = firstSentence.split(/\s+/).filter(Boolean).length

  return [
    { ok: text.length <= 210, label: 'Fits before "see more"', tip: `It's ${text.length} characters. Aim for about 210 or fewer so the whole hook shows.` },
    { ok: words <= 14, label: 'First sentence is short', tip: `It's ${words} words. Cut it to 14 or fewer.` },
    { ok: /\d/.test(text), label: 'Includes a number', tip: 'Add a real figure: a result, a timeframe, or a count.' },
    { ok: /\b(I|my|you|your|we|our)\b/i.test(text), label: 'Speaks from or to a person', tip: 'Use "I" or "you" so it reads like a person talking.' },
    { ok: /\?|\b(but|until|instead|except|wrong|mistake|stop|nobody|never|without|almost|yet|lost|failed)\b/i.test(text), label: 'Creates tension or a question', tip: 'Add a contrast, a mistake, or a question that the post resolves.' },
    { ok: !/\b(excited to|thrilled|humbled|delighted|game[- ]?changer|in today's|fast-paced|unlock|leverage|synergy)\b/i.test(text), label: 'Avoids stock phrases', tip: 'Remove openers such as "Excited to announce" or "In today\'s world".' },
    { ok: !/#\w/.test(firstLine) && (firstLine.match(/\p{Extended_Pictographic}/gu)?.length ?? 0) <= 1, label: 'Opening line is clean', tip: 'Move hashtags to the end and keep emoji to one at most.' },
  ]
}

export default function HookAnalyser() {
  const [hook, setHook] = useState('')
  const [checks, setChecks] = useState<Check[] | null>(null)

  return (
    <div className="tool-grid">
      <form className="tool-form" onSubmit={(e) => { e.preventDefault(); setChecks(analyse(hook)) }}>
        <label htmlFor="hook-input">Your opening lines</label>
        <textarea id="hook-input" rows={6} required maxLength={600} value={hook} onChange={(e) => setHook(e.target.value)} placeholder="Paste the first one to three lines of your post" />
        <button type="submit" className="btn-primary">Check Hook</button>
      </form>
      {checks ? (
        <CheckList checks={checks} note="These are common hook patterns, not a prediction of reach. Nothing you paste leaves your browser." />
      ) : (
        <div className="tool-result"><p>Your results will appear here. Nothing you paste leaves your browser.</p></div>
      )}
    </div>
  )
}
