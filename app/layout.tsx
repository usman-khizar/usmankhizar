import type { Metadata } from 'next'
import { Archivo_Black, DM_Sans, Lora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const archivoBl = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const lora = Lora({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://usmankhizar.com'),
  title: {
    default: 'Usman Khizar | SEO, GEO & AEO Specialist',
    template: '%s | Usman Khizar',
  },
  description: 'SEO specialist and GEO consultant helping brands rank on Google and get cited by AI. I build search visibility across every modern search surface.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usmankhizar.com',
    siteName: 'Usman Khizar',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@usmankhizar',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Usman Khizar',
  jobTitle: 'SEO, GEO & AEO Specialist',
  description: 'SEO specialist and GEO consultant helping brands rank on Google and get cited by ChatGPT, Perplexity, and AI Overviews.',
  url: 'https://usmankhizar.com',
  sameAs: [
    'https://www.linkedin.com/in/usmankhizar',
    'https://twitter.com/usmankhizar',
  ],
  knowsAbout: [
    'SEO',
    'GEO',
    'Generative Engine Optimisation',
    'Answer Engine Optimisation',
    'Parasite SEO',
    'LinkedIn Growth',
    'AI search visibility',
    'LLM citation optimisation',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoBl.variable} ${dmSans.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
