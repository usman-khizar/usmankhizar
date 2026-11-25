import Image from 'next/image'
import Link from 'next/link'
import HeroScroll from './HeroScroll'
import poster from '@/public/hero/poster.webp'

const UPWORK = 'https://www.upwork.com/freelancers/~01fad6eab5741b8ac8?mp_source=share'

export default function HeroSection() {
  return (
    <HeroScroll
      poster={
        <Image
          src={poster}
          alt="Usman Khizar sitting in a lounge chair with a laptop, facing the camera"
          preload
          sizes="(max-width: 860px) 125vw, 900px"
        />
      }
    >
      <div className="home-wrap home-hero-panel">
        <div>
          <h1>
            You don&apos;t have a marketing problem. You have six.
            <em>Hire one brand strategist and fractional marketer to own them all.</em>
          </h1>
          <ul className="home-proof">
            <li><a href={UPWORK} target="_blank" rel="noopener noreferrer">Top Rated on Upwork</a></li>
            <li>5+ years in search marketing</li>
          </ul>
        </div>
        <div>
          <p className="home-hero-sub">
            A website here. SEO there. Leads on WhatsApp that nobody answers. I&apos;m Usman Khizar, and I turn the pieces
            into one system that brings in customers.
          </p>
          <div className="home-actions">
            <Link href="/contact" className="home-btn">Apply to Work With Me</Link>
            <Link href="#what-i-do" className="home-btn home-btn-ghost">See How</Link>
          </div>
        </div>
      </div>
    </HeroScroll>
  )
}
