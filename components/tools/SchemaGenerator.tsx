'use client'

import { useState } from 'react'

type Kind = 'FAQPage' | 'Article' | 'Person'

const fields: Record<Exclude<Kind, 'FAQPage'>, { name: string; label: string; type?: string; required?: boolean }[]> = {
  Article: [
    { name: 'headline', label: 'Headline', required: true },
    { name: 'description', label: 'Description' },
    { name: 'author', label: 'Author name', required: true },
    { name: 'datePublished', label: 'Date published', type: 'date' },
    { name: 'url', label: 'Page URL', type: 'url' },
    { name: 'image', label: 'Image URL', type: 'url' },
  ],
  Person: [
    { name: 'name', label: 'Full name', required: true },
    { name: 'jobTitle', label: 'Job title' },
    { name: 'description', label: 'Short bio' },
    { name: 'url', label: 'Website', type: 'url' },
    { name: 'sameAs', label: 'Profile URLs, separated by commas' },
  ],
}

function build(kind: Kind, form: FormData): string {
  const value = (name: string) => String(form.get(name) ?? '').trim()
  let schema: Record<string, unknown> = { '@context': 'https://schema.org', '@type': kind }

  if (kind === 'FAQPage') {
    const questions = form.getAll('q').map((v) => String(v).trim())
    const answers = form.getAll('a').map((v) => String(v).trim())
    schema.mainEntity = questions
      .map((name, i) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text: answers[i] } }))
      .filter((item) => item.name && item.acceptedAnswer.text)
  } else {
    const entries = fields[kind].map(({ name }) => [name, value(name)] as const).filter(([, v]) => v)
    schema = { ...schema, ...Object.fromEntries(entries) }
    if (schema.author) schema.author = { '@type': 'Person', name: schema.author }
    if (typeof schema.sameAs === 'string') schema.sameAs = schema.sameAs.split(',').map((s) => s.trim()).filter(Boolean)
  }

  // Escape "<" so pasted content can't close the script tag early.
  const json = JSON.stringify(schema, null, 2).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">\n${json}\n</script>`
}

export default function SchemaGenerator() {
  const [kind, setKind] = useState<Kind>('FAQPage')
  const [rows, setRows] = useState(2)
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState('')

  async function copy() {
    try {
      await navigator.clipboard.writeText(output)
      setCopied('Copied')
    } catch {
      setCopied('Select the code and copy it manually')
    }
  }

  return (
    <div className="tool-grid">
      <form
        key={kind}
        className="tool-form"
        onSubmit={(e) => {
          e.preventDefault()
          setCopied('')
          setOutput(build(kind, new FormData(e.currentTarget)))
        }}
      >
        <label htmlFor="schema-kind">Schema type</label>
        <select id="schema-kind" value={kind} onChange={(e) => { setKind(e.target.value as Kind); setOutput('') }}>
          <option value="FAQPage">FAQ page</option>
          <option value="Article">Article</option>
          <option value="Person">Person</option>
        </select>

        {kind === 'FAQPage' ? (
          <>
            {Array.from({ length: rows }, (_, i) => (
              <div key={i} className="tool-form">
                <label htmlFor={`q${i}`}>Question {i + 1}</label>
                <input id={`q${i}`} name="q" type="text" required={i === 0} />
                <label htmlFor={`a${i}`}>Answer {i + 1}</label>
                <textarea id={`a${i}`} name="a" rows={3} required={i === 0} />
              </div>
            ))}
            <button type="button" className="btn-secondary" onClick={() => setRows(rows + 1)}>Add Question</button>
          </>
        ) : (
          fields[kind].map((f) => (
            <div key={f.name} className="tool-form">
              <label htmlFor={f.name}>{f.label}</label>
              <input id={f.name} name={f.name} type={f.type ?? 'text'} required={f.required} />
            </div>
          ))
        )}
        <button type="submit" className="btn-primary">Generate Schema</button>
      </form>

      <div className="tool-result">
        {output ? (
          <>
            <pre>{output}</pre>
            <button type="button" className="btn-primary" onClick={copy}>Copy Code</button>
            <p role="status" className="tool-note">{copied || "Paste it into your page's HTML. Only mark up content visitors can see on the page."}</p>
          </>
        ) : (
          <p>Your code will appear here.</p>
        )}
      </div>
    </div>
  )
}
