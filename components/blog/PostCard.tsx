'use client'

import Link from 'next/link'
import PillTag from '../ui/PillTag'

export interface Post {
  slug: string
  title: string
  teaser: string
  category: string
  readTime: string
  date: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article
        className="card-base h-full flex flex-col"
        style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
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
        <div className="flex items-center justify-between mb-4">
          <PillTag>{post.category}</PillTag>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#5C5248' }}>{post.readTime}</span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: '#1A1A1A',
            lineHeight: 1.3,
            marginBottom: '0.75rem',
            flex: 1,
          }}
        >
          {post.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', color: '#5C5248', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {post.teaser}
        </p>
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 600, fontSize: '0.85rem', color: '#C4533A' }}>
          Read more →
        </span>
      </article>
    </Link>
  )
}