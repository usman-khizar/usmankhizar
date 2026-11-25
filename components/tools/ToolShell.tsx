import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'

interface ToolShellProps {
  title: string
  intro: string
  children: React.ReactNode
}

export default function ToolShell({ title, intro, children }: ToolShellProps) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(40px, 6vw, 72px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <Link href="/tools" style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.85rem', color: '#A8432D' }}>
              ← All tools
            </Link>
            <h1 className="section-title" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', margin: '1rem 0 0.75rem' }}>{title}</h1>
            <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.65, maxWidth: 640, marginBottom: '2rem' }}>{intro}</p>
            {children}
          </div>
        </section>
        <EmailCapture />
      </main>
      <Footer />
    </>
  )
}
