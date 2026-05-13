interface StatCalloutProps {
  value: string
  label: string
}

export default function StatCallout({ value, label }: StatCalloutProps) {
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#C4533A',
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.85rem',
          color: '#5C5248',
          marginTop: '0.4rem',
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  )
}