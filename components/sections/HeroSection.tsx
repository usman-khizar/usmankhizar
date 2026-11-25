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
            Brand strategist and fractional marketer
            <em>for founders who need it all connected.</em>
          </h1>
          <ul className="home-proof">
            <li><a href={UPWORK} target="_blank" rel="noopener noreferrer">Top Rated on Upwork</a></li>
            <li>5+ years in search marketing</li>
          </ul>
        </div>
        <div>
          <p className="home-hero-sub">
            I&apos;m Usman Khizar, a full-stack marketing consultant. I set your positioning, choose the channels, and build
            what runs them: website, search, CRM, automation, and social.
          </p>
          <div className="home-actions">
            <Link href="/contact" className="home-btn">Work With Me</Link>
            <Link href="#what-i-do" className="home-btn home-btn-ghost">See What I Do</Link>
          </div>
        </div>
      </div>
    </HeroScroll>
  )
}
