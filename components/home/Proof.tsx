import Image from 'next/image'
import Link from 'next/link'
import { testimonials } from '@/lib/testimonials'
import TiltCard from './TiltCard'

const UPWORK = 'https://www.upwork.com/freelancers/~01fad6eab5741b8ac8?mp_source=share'

export default function Proof() {
  return (
    <section className="home-section home-tint">
      <div className="home-wrap">
        <h2>Don&apos;t take my word for it. Check my reviews.</h2>
        <p className="home-lead">Anyone can praise themselves on their own website. Here&apos;s where to look me up before we talk.</p>

        {testimonials.length > 0 && (
          <div className="quotes rise">
            {testimonials.map((t) => (
              <figure key={t.name + t.quote.slice(0, 20)}>
                {t.image && <Image src={t.image.src} width={t.image.width} height={t.image.height} alt={t.image.alt} sizes="(max-width: 860px) 90vw, 540px" />}
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>, {t.role}
                  {t.sourceUrl && <> · <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer">See the original</a></>}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="home-ways rise">
          <TiltCard>
            <h3>Read what clients say</h3>
            <p className="home-fit">Reviews I can&apos;t write or edit.</p>
            <p>My Upwork profile is Top Rated. Client feedback there is left by the people who paid for the work.</p>
            <p className="home-links"><a href={UPWORK} target="_blank" rel="noopener noreferrer">Open my Upwork profile</a></p>
          </TiltCard>
          <TiltCard>
            <h3>See who you&apos;d be working with</h3>
            <p className="home-fit">A name, a face, and a track record.</p>
            <p>No stock team photo. Look through my background, what I publish, and who I&apos;m connected to.</p>
            <p className="home-links"><a href="https://www.linkedin.com/in/usmankhizar" target="_blank" rel="noopener noreferrer">Open my LinkedIn</a></p>
          </TiltCard>
          <TiltCard>
            <h3>Test my thinking for free</h3>
            <p className="home-fit">Useful before you pay me anything.</p>
            <p>Run the free tools on your own pages. If they don&apos;t show you something worth fixing, you&apos;ve lost two minutes.</p>
            <p className="home-links"><Link href="/tools">Try the tools</Link></p>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}
