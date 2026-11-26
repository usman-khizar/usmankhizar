import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How usmankhizar.com collects, uses, and stores your information.',
  openGraph: { images: ogImages, title: 'Privacy Policy', description: 'How usmankhizar.com collects, uses, and stores your information.', url: 'https://usmankhizar.com/privacy' },
  alternates: { canonical: 'https://usmankhizar.com/privacy' },
}

const sections = [
  { heading: 'What I collect', body: ['When you send an enquiry or sign up, I collect what you enter, such as your name, email address, website, and message.', 'The site also collects basic usage data, such as pages viewed and the type of device used.', 'The free tools run in your browser. Text you paste into them is not sent to me.'] },
  { heading: 'How I use it', body: ['I use your details to reply to you, provide services or training you ask for, and send emails you signed up for. I use usage data to understand and improve the site.', 'I do not sell your information.'] },
  { heading: 'Who processes it', body: ['Enquiries and sign-ups are stored in a database hosted by Neon through Vercel, and may also be kept in HighLevel through the ReadyOnDemand platform. The site is hosted on Vercel, which also provides analytics. Google Analytics or the Meta Pixel may be used to measure visits and sign-ups.', 'These companies process data on their own servers, which may be outside your country.'] },
  { heading: 'Cookies', body: ['The embedded enquiry form and any analytics tools in use may set cookies. You can block or delete cookies in your browser settings.'] },
  { heading: 'How long I keep it', body: ['I keep enquiry and client records for as long as needed to respond, deliver the work, and meet legal or accounting duties. You can ask me to delete your details sooner.'] },
  { heading: 'Your choices', body: ['You can ask to see, correct, or delete the information I hold about you, or unsubscribe from emails at any time. Email hello@usmankhizar.com.'] },
]

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} />
}
