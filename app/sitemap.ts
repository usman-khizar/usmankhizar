import type { MetadataRoute } from 'next'
import { allPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://usmankhizar.com'
  const lastMod = new Date('2026-05-15')

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/tools`, priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  const servicePages = [
    `${baseUrl}/services/seo-consulting`,
    `${baseUrl}/services/geo-consulting`,
    `${baseUrl}/services/aeo-consulting`,
  ].map(url => ({ url, priority: 0.9, changeFrequency: 'weekly' as const }))

  const subServicePages = [
    // SEO sub-pages
    `${baseUrl}/services/seo-consulting/technical-seo`,
    `${baseUrl}/services/seo-consulting/on-page-seo`,
    `${baseUrl}/services/seo-consulting/content-strategy`,
    `${baseUrl}/services/seo-consulting/authority-building`,
    // AEO sub-pages
    `${baseUrl}/services/aeo-consulting/featured-snippet-optimisation`,
    `${baseUrl}/services/aeo-consulting/schema-markup`,
    `${baseUrl}/services/aeo-consulting/question-based-content`,
    `${baseUrl}/services/aeo-consulting/voice-and-conversational-search`,
    // GEO sub-pages
    `${baseUrl}/services/geo-consulting/citation-monitoring`,
    `${baseUrl}/services/geo-consulting/content-restructuring`,
    `${baseUrl}/services/geo-consulting/entity-building`,
    `${baseUrl}/services/geo-consulting/geo-readiness-audit`,
  ].map(url => ({ url, priority: 0.8, changeFrequency: 'monthly' as const }))

  const blogPosts = allPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...subServicePages,
    ...blogPosts,
  ].map(page => ({
    ...page,
    lastModified: lastMod,
  }))
}
