// Shared by the enquiry form (browser) and the server, so no secrets here.

export const interests = [
  'Fractional marketing (ongoing)',
  'Brand and positioning',
  'SEO and AI search',
  'Website or landing page',
  'GoHighLevel or CRM setup',
  'AI automation',
  'Training or mentoring',
  'Something else',
]

export const budgets = ['Under $1,000', '$1,000 to $3,000', '$3,000 to $10,000', '$10,000+', 'Not sure yet']

export const statuses = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'call-booked', label: 'Call booked' },
  { value: 'proposal', label: 'Proposal sent' },
  { value: 'client', label: 'Client' },
  { value: 'student', label: 'Student' },
  { value: 'nurture', label: 'Not now' },
  { value: 'lost', label: 'Lost' },
] as const

export const statusValues = new Set<string>(statuses.map((s) => s.value))

export const forms: Record<string, string> = {
  enquiry: 'Enquiry form',
  'growth-checklist': 'Growth checklist',
  training: 'Training waitlist',
  newsletter: 'Newsletter',
}
