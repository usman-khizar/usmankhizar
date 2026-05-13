import { Post } from '@/components/blog/PostCard'

export interface FullPost extends Post {
  content: string
  author: string
}

export const allPosts: FullPost[] = [
  {
    slug: 'what-is-generative-engine-optimization',
    title: 'What is Generative Engine Optimisation? The 2026 Guide',
    teaser: "GEO is the practice of optimising content so AI systems cite you. Here's everything you need to know to get started.",
    category: 'SEO/GEO/AEO',
    readTime: '8 min read',
    date: '2026-03-10',
    author: 'Usman Khizar',
    content: '',
  },
  {
    slug: 'geo-vs-seo-2026',
    title: 'GEO vs SEO: Which One Should You Focus On in 2026?',
    teaser: 'Both matter. But the order you tackle them, and how you integrate them, changes everything.',
    category: 'SEO/GEO/AEO',
    readTime: '6 min read',
    date: '2026-03-01',
    author: 'Usman Khizar',
    content: '',
  },
  {
    slug: 'parasite-seo-7-platforms',
    title: 'Parasite SEO: 7 Platforms I Use to Rank Fast',
    teaser: 'High-authority platforms can rank in days, not months. Here are the seven I rely on for quick wins.',
    category: 'Parasite SEO',
    readTime: '6 min read',
    date: '2026-02-28',
    author: 'Usman Khizar',
    content: '',
  },
  {
    slug: 'how-to-get-cited-by-perplexity',
    title: 'How to Get Your Page Cited by Perplexity',
    teaser: 'Perplexity cites sources differently from Google. Here is exactly how to structure content for AI citation.',
    category: 'SEO/GEO/AEO',
    readTime: '7 min read',
    date: '2026-02-20',
    author: 'Usman Khizar',
    content: '',
  },
  {
    slug: 'linkedin-profile-seo',
    title: 'LinkedIn Profile SEO: How to Rank in LinkedIn Search',
    teaser: "LinkedIn has its own algorithm. Here's how to optimise your profile so the right people find you.",
    category: 'LinkedIn',
    readTime: '5 min read',
    date: '2026-02-14',
    author: 'Usman Khizar',
    content: '',
  },
  {
    slug: 'answer-engine-optimisation',
    title: 'Answer Engine Optimisation: What It Is and Why It Matters Now',
    teaser: 'AEO is about structuring content so search engines — and AI — can extract direct answers. Here is the full picture.',
    category: 'SEO/GEO/AEO',
    readTime: '5 min read',
    date: '2026-02-07',
    author: 'Usman Khizar',
    content: '',
  },
]

export function getPostBySlug(slug: string): FullPost | undefined {
  return allPosts.find((p) => p.slug === slug)
}