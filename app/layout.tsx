import type { Metadata } from 'next'
import { Archivo_Black, DM_Sans, Lora, JetBrains_Mono } from 'next/font/google'
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
  description: 'Usman Khizar is a search marketer specialising in SEO, Generative Engine Optimisation (GEO), and Answer Engine Optimisation (AEO) for founders and businesses.',
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
  description: 'Search marketer specialising in SEO, Generative Engine Optimisation, and Answer Engine Optimisation',
  url: 'https://usmankhizar.com',
  sameAs: [
    'https://www.linkedin.com/in/usmankhizar',
    'https://twitter.com/usmankhizar',
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
      </body>
    </html>
  )
}
