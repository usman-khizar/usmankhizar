export interface Check {
  ok: boolean
  label: string
  tip: string
}

/** Shows how many checks passed, then each result with a fix for the ones that failed. */
export default function CheckList({ checks, note }: { checks: Check[]; note: string }) {
  const passed = checks.filter((c) => c.ok).length
  return (
    <div className="tool-result" role="status">
      <p className="tool-score">
        {passed} of {checks.length} <span>checks passed</span>
      </p>
      <ul className="flex flex-col gap-3">
        {checks.map((c) => (
          <li key={c.label} className="flex gap-3">
            <span className={c.ok ? 'tool-pass' : 'tool-fix'}>{c.ok ? 'Pass' : 'Fix'}</span>
            <div style={{ minWidth: 0 }}>
              <strong>{c.label}</strong>
              {!c.ok && <p>{c.tip}</p>}
            </div>
          </li>
        ))}
      </ul>
      <p className="tool-note">{note}</p>
    </div>
  )
}
