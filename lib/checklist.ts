/** The lead magnet. Shown in full on /growth-checklist. */
export const checklist = [
  {
    area: 'Brand and offer',
    items: [
      'A stranger can say what you do and who it is for after five seconds on your homepage.',
      'You can name the one customer problem you solve better than the alternatives.',
      'Your offer has a clear next step, and a price or starting point people can find.',
      'Your website, LinkedIn, and social profiles describe you the same way.',
    ],
  },
  {
    area: 'Website',
    items: [
      'Every important page has one main action, visible without scrolling on a phone.',
      'Your contact form asks only for what you need to reply.',
      'You have submitted your own form this month and received the message.',
      'Pages load quickly on mobile data, not just office Wi-Fi.',
    ],
  },
  {
    area: 'Search and AI visibility',
    items: [
      'Google Search Console is set up, and someone looks at it each month.',
      'Each service has its own page that answers the questions buyers ask.',
      'Key pages open with a direct answer before the detail.',
      'You have asked ChatGPT and Perplexity about your category and noted who they mention.',
    ],
  },
  {
    area: 'CRM and follow-up',
    items: [
      'Every enquiry lands in one place, whichever channel it came from.',
      'New leads get a reply within minutes during working hours.',
      'Leads who do not reply get at least three follow-ups.',
      'You can see how many leads are at each stage today.',
    ],
  },
  {
    area: 'Automation',
    items: [
      'Booking a call does not need back-and-forth messages.',
      'Reminders go out before every call or class.',
      'Happy customers are asked for a review automatically.',
      'A person checks anything AI writes before a customer sees it.',
    ],
  },
  {
    area: 'Social and content',
    items: [
      'You know the two platforms your buyers use, and you focus on those.',
      'You publish on a schedule you can keep for three months.',
      'Most posts teach, show proof, or answer a buyer question.',
      'Each month you check which content led to real enquiries.',
    ],
  },
]

export const checkCount = checklist.reduce((n, group) => n + group.items.length, 0)
