import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

interface LegalPageProps {
  title: string
  sections: { heading: string; body: string[] }[]
}

export default function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64, backgroundColor: '#FAF8F4' }}>
        <div className="max-w-3xl mx-auto" style={{ padding: 'clamp(48px, 7vw, 88px) 24px', fontFamily: 'var(--font-dm-sans)', color: '#5C5248', lineHeight: 1.75 }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>{title}</h1>
          <p style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}>Last updated 25 November 2026</p>
          {sections.map((s) => (
            <section key={s.heading} style={{ marginTop: '2.25rem' }}>
              <h2 style={{ fontWeight: 600, fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>{s.heading}</h2>
              {s.body.map((p) => <p key={p} style={{ marginBottom: '0.75rem' }}>{p}</p>)}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
