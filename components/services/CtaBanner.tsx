import Link from 'next/link'

interface CtaBannerProps {
  headline: string
  subtext: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref: string
  secondaryLabel?: string
}

export default function CtaBanner({
  headline,
  subtext,
  primaryHref = '/contact',
  primaryLabel = 'Work With Me',
  secondaryHref,
  secondaryLabel = 'View on Upwork',
}: CtaBannerProps) {
  return (
    <div className="cta-banner">
      <p className="cta-banner-headline">{headline}</p>
      <p className="cta-banner-subtext">{subtext}</p>
      <div className="cta-banner-btns">
        <Link href={primaryHref} className="cta-btn-primary">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="cta-btn-secondary" target="_blank" rel="noopener noreferrer">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  )
}
