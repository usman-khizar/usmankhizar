import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import EmailCapture from '@/components/sections/EmailCapture'
import PostCard from '@/components/blog/PostCard'
import FeaturedPost from '@/components/blog/FeaturedPost'
import PageHeroSection from '@/components/sections/PageHeroSection'
import PillTag from '@/components/ui/PillTag'
import { BlogVisual } from '@/components/sections/HeroVisuals'
import Link from 'next/link'
import { allPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical writing on SEO, GEO, AEO, Parasite SEO, and LinkedIn growth. No fluff — only what actually works in modern search.',
  openGraph: {
    title: 'Blog | Usman Khizar',
    description: 'Practical. Specific. No fluff. SEO, GEO, AEO and LinkedIn growth from someone who does it.',
    url: 'https://usmankhizar.com/blog',
  },
  alternates: { canonical: 'https://usmankhizar.com/blog' },
}

const categories = ['All', 'SEO/GEO/AEO', 'Parasite SEO', 'LinkedIn', 'Copywriting', 'Tools']

const featured = allPosts[0]
const rest = allPosts.slice(1)

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <PageHeroSection
          eyebrow="The Blog"
          title="Practical. Specific. No Fluff."
          subtitle="Everything I write here I've tested on real projects. SEO, GEO, AEO, Parasite SEO, and LinkedIn — the stuff that's actually working right now."
          primaryCta={{ text: 'Read Articles', href: '#featured' }}
          visualElement={<BlogVisual />}
        />

        {/* Category filter tabs */}
        <section style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid #C9BCA8', padding: '0 24px' }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-1 overflow-x-auto py-4" style={{ scrollbarWidth: 'none' }}>
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    backgroundColor: i === 0 ? '#C4533A' : 'transparent',
                    color: i === 0 ? '#FAF8F4' : '#5C5248',
                    border: i === 0 ? 'none' : '1px solid #C9BCA8',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured post */}
        <section style={{ backgroundColor: '#F5F0E8', padding: 'clamp(40px, 6vw, 70px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <FeaturedPost post={featured} />
          </div>
        </section>

        {/* Post grid */}
        <section style={{ backgroundColor: '#FAF8F4', padding: 'clamp(40px, 6vw, 70px) 24px' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page email capture strip */}
        <EmailCapture variant="terracotta" heading="Get the Search Stack Playbook" subheading="SEO + GEO + AEO in one actionable system. Free to subscribers." />

        <section style={{ backgroundColor: '#FAF8F4', padding: '40px 24px 60px' }}>
          <div className="max-w-5xl mx-auto text-center">
            <p style={{ fontFamily: 'var(--font-dm-sans)', color: '#5C5248', fontSize: '0.9rem' }}>
              More posts coming. <Link href="/contact" style={{ color: '#C4533A', fontWeight: 600, textDecoration: 'none' }}>Request a topic →</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
