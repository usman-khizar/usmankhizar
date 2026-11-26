import Link from 'next/link'
import SubscribeForm from '@/components/forms/SubscribeForm'
import { canCaptureLeads } from '@/lib/crm'

interface EmailCaptureProps {
  variant?: 'dark' | 'terracotta'
  heading?: string
  subheading?: string
}

export default function EmailCapture({
  variant = 'dark',
  heading = 'Get My Marketing Notes',
  subheading = 'Practical notes on brand, search, and automation in your inbox. Free.',
}: EmailCaptureProps) {
  const dark = variant === 'dark'
  // Until the CRM or GHL is connected there is nowhere to save an email, so don't ask for one.
  const canSubscribe = canCaptureLeads()

  return (
    <section style={{ backgroundColor: dark ? '#141210' : '#A8432D', padding: '80px 24px' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 style={{ fontFamily: 'var(--font-archivo-black)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#FAF8F4', lineHeight: 1.15, marginBottom: '1rem' }}>
          {canSubscribe ? heading : 'Have a Marketing Question?'}
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-sans)', color: dark ? '#C9BCA8' : '#FAF8F4', fontSize: '1.05rem', marginBottom: '2rem' }}>
          {canSubscribe ? subheading : "Tell me what you're working on and I'll reply within 48 hours."}
        </p>
        {canSubscribe ? (
          <>
            <SubscribeForm buttonColor={dark ? '#C4533A' : '#1A1A1A'} />
            <p style={{ marginTop: '0.75rem', fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', color: dark ? '#C9BCA8' : '#FAF8F4' }}>
              Unsubscribe any time. See the <Link href="/privacy" style={{ textDecoration: 'underline' }}>privacy policy</Link>.
            </p>
          </>
        ) : (
          <Link href="/contact" className="btn-primary" style={dark ? undefined : { backgroundColor: '#1A1A1A' }}>
            Send a Message
          </Link>
        )}
      </div>
    </section>
  )
}
