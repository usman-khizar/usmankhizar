import type { MetadataRoute } from 'next'
import { publishedPosts } from '@/lib/posts'

const baseUrl = 'https://usmankhizar.com'
const lastUpdated = '2026-11-25'

const pages = [
  '',
  '/services',
  '/services/seo-consulting',
  '/services/seo-consulting/technical-seo',
  '/services/seo-consulting/on-page-seo',
  '/services/seo-consulting/content-strategy',
  '/services/seo-consulting/authority-building',
  '/services/geo-consulting',
  '/services/geo-consulting/geo-readiness-audit',
  '/services/geo-consulting/content-restructuring',
  '/services/geo-consulting/citation-monitoring',
  '/services/geo-consulting/entity-building',
  '/services/aeo-consulting',
  '/services/aeo-consulting/featured-snippet-optimisation',
  '/services/aeo-consulting/schema-markup',
  '/services/aeo-consulting/question-based-content',
  '/services/aeo-consulting/voice-and-conversational-search',
  '/services/seo-backlink-expert',
  '/services/link-building',
  '/services/local-seo-specialist',
  '/services/saas-seo',
  '/services/ecommerce-seo',
  '/services/search-atlas-seo-specialist',
  '/blog',
  '/about',
  '/tools',
  '/tools/geo-checker',
  '/tools/hook-analyser',
  '/tools/schema-generator',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: lastUpdated })),
    ...publishedPosts.map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: post.date })),
  ]
}
