import { track } from '@vercel/analytics'

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
}

/** Reports a saved lead to whichever analytics tools are loaded. */
export function trackLead(form: string) {
  const w = window as TrackingWindow
  track('lead', { form })
  w.gtag?.('event', 'generate_lead', { form })
  w.fbq?.('track', 'Lead', { content_name: form })
}
