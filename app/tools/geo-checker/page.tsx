import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import ToolShell from '@/components/tools/ToolShell'
import GeoChecker from '@/components/tools/GeoChecker'

const description = 'Paste a page and check its structure for AI search: direct answers, question headings, facts, FAQs, and more. Free, no sign-up.'

export const metadata: Metadata = {
  title: 'GEO Readiness Checker',
  description,
  openGraph: { images: ogImages, title: 'GEO Readiness Checker', description, url: 'https://usmankhizar.com/tools/geo-checker' },
  alternates: { canonical: 'https://usmankhizar.com/tools/geo-checker' },
}

export default function GeoCheckerPage() {
  return (
    <ToolShell title="GEO Readiness Checker" intro="Paste a page to see how well its structure supports being quoted by AI search. You get nine checks and a fix for each one that fails.">
      <GeoChecker />
    </ToolShell>
  )
}
