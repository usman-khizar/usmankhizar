'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PillTag from '@/components/ui/PillTag'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(60px, 8vw, 100px) 24px', position: 'relative' }}>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
            {/* Left */}
            <div style={{ flex: 1 }}>
              <PillTag className="mb-5">Work With Me</PillTag>
              <h1
                style={{
                  fontFamily: 'var(--font-archivo-black)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                Let's Build Something Worth Finding.
              </h1>
              <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1.05rem', color: '#5C5248', lineHeight: 1.75, marginBottom: '2rem' }}>
                Tell me what you're working on. I'll come back within 48 hours with honest thoughts on whether I can help — and how.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { label: 'Response time', value: 'Within 48 hours' },
                  { label: 'Availability', value: 'Limited — a few projects at a time' },
                  { label: 'Email', value: 'enquiries@usmankhizar.com' },
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
              <div className="card-base">
                {status === 'success' ? (
                  <div className="text-center" style={{ padding: '2rem 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                    <h2 style={{ fontFamily: 'var(--font-archivo-black)', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '0.75rem' }}>
                      Got it. Thank you.
                    </h2>
                    <p style={{ fontFamily: 'var(--font-lora)', color: '#5C5248', fontSize: '0.95rem', lineHeight: 1.65 }}>
                      I'll be in touch within 48 hours. In the meantime, feel free to read the blog.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.82rem', color: '#1A1A1A', display: 'block', marginBottom: '0.4rem' }}>
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #C9BCA8', backgroundColor: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', outline: 'none' }}
                        onFocus={(e) => (e.target.style.borderColor = '#C4533A')}
                        onBlur={(e) => (e.target.style.borderColor = '#C9BCA8')}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.82rem', color: '#1A1A1A', display: 'block', marginBottom: '0.4rem' }}>
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #C9BCA8', backgroundColor: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', outline: 'none' }}
                        onFocus={(e) => (e.target.style.borderColor = '#C4533A')}
                        onBlur={(e) => (e.target.style.borderColor = '#C9BCA8')}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.82rem', color: '#1A1A1A', display: 'block', marginBottom: '0.4rem' }}>
                        What are you working on?
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, and where you're getting stuck..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #C9BCA8', backgroundColor: '#FAF8F4', fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', color: '#1A1A1A', outline: 'none', resize: 'vertical' }}
                        onFocus={(e) => (e.target.style.borderColor = '#C4533A')}
                        onBlur={(e) => (e.target.style.borderColor = '#C9BCA8')}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary"
                      style={{ alignSelf: 'flex-start' }}
                    >
                      {status === 'loading' ? 'Sending…' : 'Send Enquiry →'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, backgroundColor: '#C4533A' }} />
        </section>
      </main>
      <Footer />
    </>
  )
}
