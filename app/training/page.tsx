import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WaitlistForm from '@/components/forms/WaitlistForm'
import SkillDrum from '@/components/home/SkillDrum'
import TiltCard from '@/components/home/TiltCard'
import { isGhlConfigured } from '@/lib/ghl'
import { tracks } from '@/lib/tracks'
import '../home.css'

const title = 'Live Marketing Training: SEO, GoHighLevel, AI & Web'
const description = 'Live online training in SEO and AI search, GoHighLevel, websites, AI automation, social media, and digital marketing. Build real work, get feedback, join the list.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: { images: ogImages, title, description, url: 'https://usmankhizar.com/training', type: 'website' },
  alternates: { canonical: 'https://usmankhizar.com/training' },
}

const thoughts = [
  'I have watched a hundred tutorials. I still freeze when it is my own project.',
  'I do not know which skill to learn first, so I keep switching.',
  'My certificate says I finished. My portfolio is empty.',
  'I have nobody to ask when I get stuck.',
]

const steps = [
  { title: 'Watch it done on a real project', body: 'Live on screen, mistakes included. You see the decisions, not only the clicks.' },
  { title: 'Build your own version', body: 'You work on your own project between classes, so nothing stays theory.' },
  { title: 'Get told what to fix', body: 'You show the work. I point at what is weak and how to make it stronger.' },
  { title: 'Leave with something to show', body: 'Every track ends in a finished piece of work you can put in front of a client or employer.' },
]

const faqs = [
  { q: 'Do I need experience?', a: 'No. Each track starts from the basics. You need a laptop, a steady connection, and time to do the work between classes.' },
  { q: 'When does it start, and what does it cost?', a: 'Dates and fees are not set yet. People on the list get them first, by email, before they are published.' },
  { q: 'Is it recorded or live?', a: 'Live online first, so you can ask questions and get feedback. In-person classes come later.' },
  { q: 'Will this get me a job or clients?', a: 'Nobody can promise that, and you should be careful of anyone who does. What you will have is a skill you have practised and work you can show.' },
  { q: 'Which skill should I start with?', a: 'If you want to work with businesses, SEO or GoHighLevel are good first choices because the results are easy to show. If you like building, start with websites. Pick one and finish it.' },
  { q: 'I am a business owner. Is this for me?', a: 'If you want to do the work yourself, yes. If you want it done, see the services page instead.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const deckColors = ['#FFFFFF', '#FBF3E6', '#F6E8D3', '#F0DDBF']

export default function TrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar transparent={true} />
      <main>
        <section className="train-hero">
          <div className="home-wrap train-grid">
            <div>
              <h1>Stop collecting courses. Start finishing work.</h1>
              <p className="train-sub">
                Live online training in the marketing skills businesses pay for. You build something real, I tell you what to
                fix, and you leave with work you can show.
              </p>
              <div className="home-actions">
                <a href="#join" className="home-btn">Join the List</a>
                <a href="#tracks" className="home-btn home-btn-ghost">See the Six Tracks</a>
              </div>
            </div>
            <SkillDrum skills={tracks.map((t) => t.name)} />
          </div>
        </section>

        <section className="home-section">
          <div className="home-wrap">
            <h2>If you&apos;ve thought any of these, you&apos;re in the right place.</h2>
            <ul className="pain rise">
              {thoughts.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="home-lead">You&apos;re not lazy. You&apos;ve been handed information when what you needed was practice, and someone to say &ldquo;not yet, fix this part.&rdquo;</p>
          </div>
        </section>

        <section id="tracks" className="home-section home-tint">
          <div className="home-wrap">
            <h2>Pick one skill. Finish it.</h2>
            <p className="home-lead">Six tracks. Each one ends with a piece of work you made.</p>
            <div className="home-ways train-tracks rise">
              {tracks.map((t) => (
                <TiltCard key={t.slug}>
                  <h3>{t.name}</h3>
                  <p className="home-fit">{t.hook}</p>
                  <ul className="ticks">{t.learn.map((l) => <li key={l}>{l}</li>)}</ul>
                  <p className="train-build"><strong>You&apos;ll build:</strong> {t.build}.</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-wrap">
            <h2>How you go from watching to doing</h2>
            <ol className="deck">
              {steps.map((step, i) => (
                <li key={step.title} style={{ '--i': i, '--deck': deckColors[i] } as React.CSSProperties}>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="home-section home-tint">
          <div className="home-wrap home-about rise">
            <div className="home-about-photo">
              <Image src="/usman-khizar.jpg" alt="Usman Khizar" fill sizes="(max-width: 860px) 80vw, 360px" />
            </div>
            <div>
              <h2>You learn from someone who does this for clients</h2>
              <p>
                I&apos;m Usman Khizar, a marketing consultant and fractional marketer, Top Rated on Upwork. What I teach is what
                I use on client work: search, websites, CRM, automation, and content.
              </p>
              <p>
                <strong>This is not for you</strong> if you want a certificate without doing the work, or a shortcut to overnight
                income. It is for you if you&apos;re ready to make something, hear what&apos;s wrong with it, and make it better.
              </p>
            </div>
          </div>
        </section>

        <section id="join" className="home-section home-dark">
          <div className="home-wrap home-learn">
            <div>
              <h2>Get the dates before everyone else.</h2>
              <p className="home-lead">
                The first live group is being planned now. Tell me the skill you want. People on the list hear the dates and fee
                first, and your choice helps decide which track opens first.
              </p>
            </div>
            <WaitlistForm canSubscribe={isGhlConfigured()} />
          </div>
        </section>

        <section className="home-section">
          <div className="home-wrap">
            <h2>Before you join</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q} name="faq">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
