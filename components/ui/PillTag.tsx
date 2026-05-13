interface PillTagProps {
  children: React.ReactNode
  variant?: 'terracotta' | 'espresso' | 'tan'
  className?: string
}

export default function PillTag({ children, variant = 'terracotta', className = '' }: PillTagProps) {
  const styles: Record<string, React.CSSProperties> = {
    terracotta: { backgroundColor: '#C4533A', color: '#FAF8F4' },
    espresso: { backgroundColor: '#141210', color: '#FAF8F4' },
    tan: { backgroundColor: '#C9BCA8', color: '#1A1A1A' },
  }

  return (
    <span
      className={`pill-tag ${className}`}
      style={styles[variant]}
    >
      {children}
    </span>
  )
}