import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GhlForm from '@/components/forms/GhlForm'
import PageHeroSection from '@/components/sections/PageHeroSection'
import { ContactVisual } from '@/components/sections/HeroVisuals'

const description = "Tell me about your business, goals, or project. I'll reply within 48 hours with honest thoughts on whether and how I can help."

export const metadata: Metadata = {
  title: 'Contact',
  description,
  openGraph: { images: ogImages, title: 'Work With Usman Khizar', description, url: 'https://usmankhizar.com/contact', type: 'website' },
  alternates: { canonical: 'https://usmankhizar.com/contact' },
}

const details = [
  { label: 'Response time', value: 'Within 48 hours' },
  { label: 'Availability', value: 'Limited: a few projects at a time' },
  { label: 'Email', value: 'hello@usmankhizar.com', href: 'mailto:hello@usmankhizar.com' },
]

const valueStyle = { fontFamily: 'var(--font-dm-sans)', fontWeight: 500, fontSize: '0.95rem', color: '#1A1A1A' }

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="Work With Me"
          title="Let's Build Something Worth Finding."
          subtitle="Tell me what you're working on. I'll come back within 48 hours with honest thoughts on whether I can help, and how."
          visualElement={<ContactVisual />}
        />

        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(32px, 6vw, 80px) 24px' }}>
          <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row gap-12">
            <div className="flex flex-col gap-4 md:flex-1">
              {details.map((item) => (
                <div key={item.label} style={{ borderBottom: '1px solid #C9BCA8', paddingBottom: '0.75rem' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', color: '#5C5248', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                    {item.label}
                  </p>
                  {item.href ? <a href={item.href} style={valueStyle}>{item.value}</a> : <p style={valueStyle}>{item.value}</p>}
                </div>
              ))}
            </div>
            <div id="enquiry" className="md:flex-1">
              <GhlForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
