'use client'

import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHeroSection from '@/components/sections/PageHeroSection'
import { ContactVisual } from '@/components/sections/HeroVisuals'
import PillTag from '@/components/ui/PillTag'

export default function ContactPage() {

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="Work With Me"
          title="Let's Build Something Worth Finding."
          subtitle="Tell me what you're working on. I'll come back within 48 hours with honest thoughts on whether I can help — and how. Limited availability for select projects."
          visualElement={<ContactVisual />}
        />

        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Left */}
            <div style={{ flex: 1 }}>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Response time', value: 'Within 48 hours' },
                  { label: 'Availability', value: 'Limited — a few projects at a time' },
                  { label: 'Email', value: 'hello@usmankhizar.com' },
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: '1px solid #C9BCA8', paddingBottom: '0.75rem' }}>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.75rem', color: '#5C5248', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, fontSize: '0.95rem', color: '#1A1A1A' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ flex: 1 }}>
              <iframe
                src="https://link.readyondemand.com/widget/form/4pJtCDndQtutaGWLDgEr"
                style={{ width: '100%', height: '525px', border: 'none', borderRadius: '8px' }}
                id="inline-4pJtCDndQtutaGWLDgEr"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Send Enquiry"
                data-height="525"
                data-layout-iframe-id="inline-4pJtCDndQtutaGWLDgEr"
                data-form-id="4pJtCDndQtutaGWLDgEr"
                title="Send Enquiry"
              />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>
      </main>
      <Footer />
      <Script src="https://link.readyondemand.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  )
}
