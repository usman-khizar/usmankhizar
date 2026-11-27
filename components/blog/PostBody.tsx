import Link from 'next/link'

// A small, safe renderer for plain-text posts. Supports:
// ## and ### headings, "- " lists, "1. " lists, | pipe tables | (first row is the header),
// **bold**, and [text](/path or https://url) links. Everything is rendered as React elements, never raw HTML.

const P = { fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.8 }
const H2 = { fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.4rem', color: '#1A1A1A', margin: '2.75rem 0 0.85rem', lineHeight: 1.3 }
const H3 = { fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: '1.15rem', color: '#1A1A1A', margin: '2rem 0 0.6rem', lineHeight: 1.35 }

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80)
}

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g

function inline(text: string, key: string) {
  return text.split(TOKEN).map((part, i) => {
    const k = `${key}-${i}`
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={k} style={{ color: '#1A1A1A' }}>{part.slice(2, -2)}</strong>
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part)
    if (link) {
      const [, label, href] = link
      if (href.startsWith('/')) return <Link key={k} href={href} style={{ color: '#A8432D', textDecoration: 'underline' }}>{label}</Link>
      if (/^https?:\/\//.test(href)) {
        return <a key={k} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#A8432D', textDecoration: 'underline' }}>{label}</a>
      }
      return label
    }
    return part
  })
}

function cells(row: string) {
  return row.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
}

export default function PostBody({ content }: { content: string }) {
  return content.split(/\n\s*\n/).map((block, i) => {
    const text = block.trim()
    const key = `b${i}`
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean)

    if (text.startsWith('### ')) return <h3 key={key} id={slug(text.slice(4))} style={H3}>{inline(text.slice(4), key)}</h3>
    if (text.startsWith('## ')) return <h2 key={key} id={slug(text.slice(3))} style={H2}>{inline(text.slice(3), key)}</h2>

    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul key={key} style={{ ...P, listStyle: 'disc', paddingLeft: '1.4rem', margin: '0 0 1.5rem', display: 'grid', gap: '0.5rem' }}>
          {lines.map((l, j) => <li key={j}>{inline(l.slice(2), `${key}-${j}`)}</li>)}
        </ul>
      )
    }

    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      return (
        <ol key={key} style={{ ...P, listStyle: 'decimal', paddingLeft: '1.4rem', margin: '0 0 1.5rem', display: 'grid', gap: '0.5rem' }}>
          {lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s/, ''), `${key}-${j}`)}</li>)}
        </ol>
      )
    }

    if (lines.length > 1 && lines.every((l) => l.startsWith('|'))) {
      const rows = lines.filter((l) => !/^\|?[\s:|-]+\|?$/.test(l)).map(cells)
      const [head, ...body] = rows
      return (
        <div key={key} style={{ overflowX: 'auto', margin: '0 0 1.75rem', border: '1px solid #E2D9CB', borderRadius: 10 }}>
          <table style={{ width: '100%', minWidth: 520, borderCollapse: 'collapse', fontFamily: 'var(--font-dm-sans)', fontSize: '0.92rem', color: '#3F3730' }}>
            <thead>
              <tr>{head.map((h, j) => <th key={j} style={{ textAlign: 'left', padding: '10px 14px', background: '#F5F0E8', color: '#1A1A1A', fontWeight: 700, borderBottom: '1px solid #E2D9CB' }}>{inline(h, `${key}-h${j}`)}</th>)}</tr>
            </thead>
            <tbody>
              {body.map((r, j) => (
                <tr key={j}>
                  {r.map((c, k) => <td key={k} style={{ padding: '10px 14px', borderBottom: j === body.length - 1 ? 'none' : '1px solid #EFE7DA', verticalAlign: 'top', fontWeight: k === 0 ? 600 : 400 }}>{inline(c, `${key}-${j}-${k}`)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <p key={key} style={{ ...P, marginBottom: '1.25rem', whiteSpace: 'pre-line' }}>
        {inline(text, key)}
      </p>
    )
  })
}
