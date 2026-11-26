export interface Faq {
  q: string
  a: string
}

/** FAQPage structured data. Only use it for questions that are also shown on the page. */
export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}

interface FaqBlockProps {
  items: Faq[]
  heading?: string
  intro?: string
  /** Set false when the page already outputs FAQPage data for these questions. */
  schema?: boolean
}

/**
 * Visible questions and answers, plus matching FAQPage data for Google and AI search.
 * Answers stay in the HTML even when collapsed, so search engines and AI tools can read them.
 */
export default function FaqBlock({ items, heading = 'Frequently asked questions', intro, schema = true }: FaqBlockProps) {
  if (!items.length) return null
  return (
    <section className="faq-block" aria-labelledby="faq-heading">
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(items)) }} />}
      <div className="faq-block-wrap">
        <h2 id="faq-heading">{heading}</h2>
        {intro && <p className="faq-block-intro">{intro}</p>}
        <div className="faq-block-list">
          {items.map((f) => (
            <details key={f.q}>
              <summary><h3>{f.q}</h3></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
