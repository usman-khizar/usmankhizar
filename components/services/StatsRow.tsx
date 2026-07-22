interface Stat {
  value: string
  label: string
}

export default function StatsRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="stats-row">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
