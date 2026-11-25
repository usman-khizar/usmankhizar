export const tracks = [
  {
    slug: 'seo-ai-search',
    name: 'SEO and AI search',
    hook: 'Get pages found on Google and quoted by ChatGPT.',
    learn: ['Keyword and topic research', 'On-page and technical checks', 'Writing pages AI tools can quote', 'Reading Search Console'],
    build: 'A full audit and an optimised page for a real site',
  },
  {
    slug: 'gohighlevel',
    name: 'GoHighLevel',
    hook: 'Build the system that answers every lead.',
    learn: ['Pipelines and contacts', 'Forms and booking calendars', 'Follow-up workflows', 'Reporting'],
    build: 'A working lead-to-booking system',
  },
  {
    slug: 'websites',
    name: 'Website design and development',
    hook: 'Go from blank screen to a live site.',
    learn: ['Page structure and copy', 'Layout and responsive design', 'Building with AI-assisted code', 'Publishing and domains'],
    build: 'A live landing page with a working form',
  },
  {
    slug: 'ai-automation',
    name: 'AI automation',
    hook: 'Hand the boring work to a workflow.',
    learn: ['Prompting that holds up', 'Connecting apps', 'Lead routing and replies', 'Checking AI output'],
    build: 'An automation that saves real hours',
  },
  {
    slug: 'social-media',
    name: 'Social media marketing',
    hook: 'Post with a plan, and know what worked.',
    learn: ['Choosing platforms', 'Hooks and content formats', 'A schedule you can keep', 'Measuring enquiries'],
    build: 'A 30-day content plan with finished posts',
  },
  {
    slug: 'digital-marketing',
    name: 'Digital marketing',
    hook: 'See how every channel fits together.',
    learn: ['Positioning and offers', 'Channels and funnels', 'Landing pages and follow-up', 'Reading the numbers'],
    build: 'A complete marketing plan for one business',
  },
]

export const trackSlugs = new Set(tracks.map((t) => t.slug))
