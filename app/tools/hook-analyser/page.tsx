import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import ToolShell from '@/components/tools/ToolShell'
import HookAnalyser from '@/components/tools/HookAnalyser'

const description = 'Check your LinkedIn opening lines for length, clarity, tension, and stock phrases. Free, no sign-up.'

export const metadata: Metadata = {
  title: 'LinkedIn Hook Analyser',
  description,
  openGraph: { images: ogImages, title: 'LinkedIn Hook Analyser', description, url: 'https://usmankhizar.com/tools/hook-analyser' },
  alternates: { canonical: 'https://usmankhizar.com/tools/hook-analyser' },
}

export default function HookAnalyserPage() {
  return (
    <ToolShell title="LinkedIn Hook Analyser" intro="Paste the opening of your LinkedIn post to check it against seven common hook patterns.">
      <HookAnalyser />
    </ToolShell>
  )
}
