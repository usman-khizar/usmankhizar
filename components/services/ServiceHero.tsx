import Link from 'next/link'
import PillTag from '@/components/ui/PillTag'

interface Crumb {
  label: string
  href?: string
}

interface ServiceHeroProps {
  title: string
  subtitle: string
  pills: string[]
  breadcrumbs: Crumb[]
}

export default function ServiceHero({ title, subtitle, pills, breadcrumbs }: ServiceHeroProps) {
  return (
    <section className="service-hero">
      <div className="max-w-4xl mx-auto">
        <nav className="service-breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {i > 0 && <span className="crumb-sep" aria-hidden="true">→</span>}
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span className="crumb-current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="service-hero-pills">
          {pills.map((p) => (
            <PillTag key={p}>{p}</PillTag>
          ))}
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-archivo-black)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.05rem',
            color: '#C9BCA8',
            lineHeight: 1.75,
            maxWidth: 760,
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
