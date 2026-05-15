import { allPosts } from '@/lib/posts'

export async function GET() {
  const baseUrl = 'https://usmankhizar.com'
  const lastMod = '2026-05-15'

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/tools`, priority: 0.6, changeFrequency: 'monthly' },
  ]

  const servicePages = [
    `${baseUrl}/services/seo-consulting`,
    `${baseUrl}/services/geo-consulting`,
    `${baseUrl}/services/aeo-consulting`,
  ].map(url => ({ url, priority: 0.9, changeFrequency: 'weekly' }))

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
  ].map(url => ({ url, priority: 0.8, changeFrequency: 'monthly' }))

  const blogPosts = allPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly',
  }))

  const allUrls = [
    ...staticPages,
    ...servicePages,
    ...subServicePages,
    ...blogPosts,
  ].map(page => ({
    ...page,
    lastModified: lastMod,
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `<url>
<loc>${url.url}</loc>
<lastmod>${url.lastModified}</lastmod>
<changefreq>${url.changeFrequency}</changefreq>
<priority>${url.priority}</priority>
</url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
    },
  })
}