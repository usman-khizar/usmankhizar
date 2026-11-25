import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import ToolShell from '@/components/tools/ToolShell'
import SchemaGenerator from '@/components/tools/SchemaGenerator'

const description = 'Generate FAQ, Article, and Person JSON-LD schema markup that is ready to paste into your page. Free, no sign-up.'

export const metadata: Metadata = {
  title: 'Schema Markup Generator',
  description,
  openGraph: { images: ogImages, title: 'Schema Markup Generator', description, url: 'https://usmankhizar.com/tools/schema-generator' },
  alternates: { canonical: 'https://usmankhizar.com/tools/schema-generator' },
}

export default function SchemaGeneratorPage() {
  return (
    <ToolShell title="Schema Markup Generator" intro="Fill in the fields to get JSON-LD for an FAQ page, article, or person, ready to paste into your site.">
      <SchemaGenerator />
    </ToolShell>
  )
}
