export interface Testimonial {
  quote: string
  name: string
  /** Role and company, or the project type. */
  role: string
  /** Where a visitor can verify it, such as the Upwork review or LinkedIn recommendation. */
  sourceUrl?: string
  /** Optional screenshot in /public, such as /proof/upwork-review-1.jpg. Crop out private details. */
  image?: { src: string; width: number; height: number; alt: string }
}

/**
 * Real client words only, used with permission. The section on the home page shows these
 * as soon as the first one is added, and stays hidden while the list is empty.
 */
export const testimonials: Testimonial[] = []
