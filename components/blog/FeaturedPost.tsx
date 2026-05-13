'use client'

import Link from 'next/link'
import PillTag from '../ui/PillTag'
import type { Post } from './PostCard'

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          background: '#FFFFFF',
          borderRadius: 16,
          border: '1px solid #C9BCA8',
          padding: 'clamp(24px, 4vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translateY(-3px)'
          el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'translateY(0)'
          el.style.boxShadow = 'none'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, backgroundColor: '#C4533A' }} />
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span style={{ backgroundColor: '#141210', color: '#FAF8F4', borderRadius: '100px', padding: '4px 12px', fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.06em' }}>
            FEATURED
          </span>
          <PillTag>{post.category}</PillTag>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.78rem', color: '#5C5248' }}>{post.readTime}</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-archivo-black)', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#1A1A1A', lineHeight: 1.2, marginBottom: '0.75rem' }}>
          {post.title}
        </h2>
        <p style={{ fontFamily: 'var(--font-lora)', fontSize: '1rem', color: '#5C5248', lineHeight: 1.7, maxWidth: 640, marginBottom: '1.5rem' }}>
          {post.teaser}
        </p>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.9rem', color: '#C4533A' }}>
          Read the full post →
        </span>
      </article>
    </Link>
  )
}