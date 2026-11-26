import type { Faq } from '@/components/sections/FaqBlock'

// Extra questions for pages that already had a few. Each answer opens with the direct answer.

/** Keyed by the page path under /services. */
export const extraFaqs: Record<string, Faq[]> = {
  'seo-consulting': [
    { q: 'What is the difference between an SEO consultant and an SEO agency?', a: 'An SEO consultant is one specialist who sets the strategy and often does the work directly. An agency spreads the work across a team. With a consultant, you deal with the person making the decisions, not an account manager.' },
    { q: 'What do I need to give you to get started with SEO?', a: 'Access to Google Search Console and Google Analytics, your website login or a developer contact, and a list of the services or products that matter most to your business.' },
    { q: 'Can you help my business show up in AI search as well as Google?', a: 'Yes. The same work that helps you rank, like clear answers, structured content, and authority, also helps ChatGPT, Perplexity, and Google AI Overviews cite you. Both are built into the plan.' },
  ],
  'seo-consulting/technical-seo': [
    { q: 'What are the most common technical SEO problems?', a: 'Slow pages, broken links and redirect chains, pages blocked from indexing, duplicate content without canonical tags, missing or broken sitemaps, and poor mobile layouts.' },
    { q: 'Do Core Web Vitals affect rankings?', a: 'Yes, as one of many signals. Speed alone rarely wins rankings, but slow pages lose visitors before they read anything, which hurts leads as well as rankings.' },
    { q: 'Can technical SEO be fixed without rebuilding my website?', a: 'Usually, yes. Most fixes are changes to settings, redirects, templates, and page speed. A rebuild is only worth it when the platform itself blocks good SEO.' },
  ],
  'seo-consulting/on-page-seo': [
    { q: 'What does on-page SEO include?', a: 'Title tags, meta descriptions, headings, content that matches search intent, internal links, image alt text, URL structure, and structured data.' },
    { q: 'How do I find the right keyword for each page?', a: 'Give each page one main search topic, based on what your buyers search for and what already ranks. Two pages chasing the same keyword compete with each other.' },
    { q: 'Do title tags and meta descriptions still matter?', a: "Yes. The title tag is still a strong ranking signal, and both decide whether people click your result instead of a competitor's." },
  ],
  'seo-consulting/content-strategy': [
    { q: 'How often should I publish content for SEO?', a: 'As often as you can publish genuinely useful pages. A few strong, well-linked pages a month usually beat many thin ones.' },
    { q: 'What is a topic cluster?', a: 'A topic cluster is one main page on a broad subject, linked to several supporting pages that each answer a specific question. It shows search engines and AI tools that you cover the topic in depth.' },
    { q: 'Should I update old content or write new pages?', a: 'Often update first. Pages already ranking on page two or three can move up faster with a refresh than a new page can rank from scratch.' },
  ],
  'seo-consulting/authority-building': [
    { q: 'What is domain authority?', a: "Domain authority is a score from tools like Moz or Ahrefs that estimates how strong a site's backlinks are. Google does not use it directly, but it is a useful way to compare sites." },
    { q: 'How long does it take to build authority?', a: 'Months, not weeks. Authority grows as you earn links, mentions, and coverage over time, which is why it is worth starting early.' },
    { q: 'Do brand mentions without links help?', a: 'Yes, especially for AI search. Mentions on trusted sites help search engines and AI tools connect your brand with your topic, even without a link.' },
  ],
  'geo-consulting': [
    { q: 'Which AI tools does GEO target?', a: 'ChatGPT, Perplexity, Google AI Overviews and AI Mode, Gemini, Claude, and Microsoft Copilot. They work differently, but all favour clear, specific, well-sourced content.' },
    { q: 'How do I know if AI tools mention my business?', a: 'Ask them the questions your buyers ask and note who gets cited, or use an AI visibility tracker to monitor it over time. A GEO audit includes this check.' },
    { q: 'What does a GEO consultant do?', a: 'A GEO consultant audits how AI tools see your brand, restructures key pages so they are easy to quote, strengthens the signals that tell AI who you are, and tracks citations over time.' },
  ],
  'geo-consulting/geo-readiness-audit': [
    { q: 'Who needs a GEO readiness audit?', a: 'Businesses whose buyers research with AI tools before choosing, such as software, professional services, finance, and health, and any business that ranks on Google but rarely appears in AI answers.' },
    { q: 'What do I get at the end of a GEO audit?', a: 'A prioritised list of fixes: which pages to restructure, which entity and schema signals are missing, and where competitors are cited instead of you.' },
    { q: 'Do I need a GEO audit if my SEO is already good?', a: 'Often, yes. Good rankings help, but AI tools also look for direct answers, specific facts, and clear entity signals that many well-ranked pages lack.' },
    { q: 'Can I run a basic GEO check myself?', a: 'Yes. The free GEO Readiness Checker on this site checks nine structural signals on any page in seconds.' },
  ],
  'geo-consulting/content-restructuring': [
    { q: 'What does GEO-ready content look like?', a: 'It answers the main question in the first few sentences, uses question-style headings, includes specific facts and figures, uses lists or tables, and names the author.' },
    { q: 'Which pages should be restructured first?', a: 'Pages that already rank or get traffic, and pages that answer the questions your buyers ask AI tools. They gain the most from small changes.' },
    { q: 'Will restructuring for AI hurt my Google rankings?', a: 'No. The same changes, like clearer answers, better structure, and specific facts, usually help Google rankings too.' },
    { q: 'How long does content restructuring take?', a: 'It depends on how many pages need work. A handful of key pages can be done quickly; larger sites are done in batches, most important pages first.' },
  ],
  'geo-consulting/entity-building': [
    { q: 'What is an entity in SEO and AI search?', a: 'An entity is a clearly identified thing, like a person, company, product, or place, that search engines and AI tools can recognise and connect to facts about it.' },
    { q: 'How do AI tools understand who my business is?', a: 'From consistent information across your website, schema markup, business listings, social profiles, and mentions on other trusted sites. The more consistent it is, the more confidently they describe you.' },
    { q: 'Does schema markup help entity building?', a: 'Yes. Organization and Person schema with sameAs links to your official profiles tell search engines and AI tools exactly who you are and which profiles are yours.' },
    { q: 'Do I need a Wikipedia page for entity building?', a: 'No. It can help, but most businesses build strong entity signals through their own site, schema, profiles, listings, and press mentions.' },
  ],
  'geo-consulting/citation-monitoring': [
    { q: 'What is an AI citation?', a: 'An AI citation is when ChatGPT, Perplexity, Google AI Overviews, or a similar tool names or links to your website as a source in its answer.' },
    { q: 'Which AI tools should I monitor?', a: 'The ones your buyers use. For most businesses that means ChatGPT, Google AI Overviews, Perplexity, and Gemini, with Copilot and Claude also worth checking.' },
    { q: 'Why do AI answers change from day to day?', a: 'AI tools generate each answer fresh and their sources change, so results vary between runs. Monitoring looks at trends across many questions, not single answers.' },
    { q: 'What should I do if a competitor is cited instead of me?', a: 'Study the page that gets cited, make your page answer the same question more directly with more specific facts and clearer structure, and earn mentions on the sources AI tools trust.' },
  ],
  'aeo-consulting': [
    { q: 'Who needs answer engine optimisation?', a: 'Any business whose customers search with questions, such as how, what, which, or how much. That covers most service businesses, software companies, and online shops.' },
    { q: 'What are answer engines?', a: 'Answer engines are search features and tools that give a direct answer instead of a list of links: Google featured snippets, People Also Ask, AI Overviews, voice assistants, ChatGPT, and Perplexity.' },
    { q: 'How do I measure AEO results?', a: 'Track featured snippets and People Also Ask placements in your SEO tools, impressions for question searches in Google Search Console, and how often AI tools cite your pages.' },
  ],
  'aeo-consulting/featured-snippet-optimisation': [
    { q: 'How long should a featured snippet answer be?', a: 'Around 40 to 60 words for a paragraph answer, placed right under a heading that matches the question. Lists and tables work best for steps and comparisons.' },
  ],
  'aeo-consulting/schema-markup': [
    { q: 'Is JSON-LD the best format for schema markup?', a: 'Yes. Google recommends JSON-LD because it sits in one script block, separate from your page layout, which makes it easier to add and maintain.' },
    { q: 'Can schema markup hurt my SEO?', a: 'Only if it is wrong or misleading, such as marking up content that is not on the page. Accurate schema that matches visible content is safe.' },
    { q: 'How do I add schema to my website?', a: "Paste JSON-LD into your page code, use your SEO plugin or website builder, or create it with the free Schema Markup Generator on this site, then test it with Google's Rich Results Test." },
  ],
  'aeo-consulting/question-based-content': [
    { q: 'How do I find the questions my customers ask?', a: 'Look at People Also Ask boxes, Google autocomplete, Search Console queries, sales and support emails, Reddit and forums, and the questions you hear on calls.' },
    { q: 'Should every heading be a question?', a: 'No. Use question headings where a reader is actually asking something. Mixing questions with clear descriptive headings reads more naturally.' },
    { q: 'How long should each answer be?', a: 'Start with a direct answer of one or two sentences, then add detail below it. That gives answer engines a clean snippet and readers the full picture.' },
  ],
  'aeo-consulting/voice-and-conversational-search': [
    { q: 'How are voice searches different from typed searches?', a: 'Voice searches are longer and phrased as full questions, like "who can fix my boiler today?", and often have local or urgent intent.' },
    { q: 'How do I optimise for voice search?', a: 'Answer common questions in short, natural sentences, keep your Google Business Profile complete, make pages fast on mobile, and use FAQ sections with matching schema.' },
    { q: 'Does voice search matter for local businesses?', a: 'Yes. Many voice searches look for nearby services, so a complete Google Business Profile and clear local pages matter most.' },
  ],
  'seo-backlink-expert': [
    { q: 'Are paid backlinks safe?', a: "Buying links that pass ranking value breaks Google's guidelines and can lead to penalties. Safe link building earns placements on relevant, real sites through content, outreach, and relationships." },
    { q: 'What makes a backlink high quality?', a: 'A relevant site with real traffic, a link placed naturally inside useful content, and an audience that matches yours. One strong, relevant link is worth more than many weak ones.' },
  ],
  'link-building': [
    { q: 'What makes a backlink high quality?', a: 'A relevant site with real traffic, a link placed naturally inside useful content, and an audience that matches yours. One strong, relevant link is worth more than many weak ones.' },
  ],
}

/** Extra questions for blog posts, added after each post's existing FAQs. */
export const postExtraFaqs: Record<string, Faq[]> = {
  'what-is-generative-engine-optimization': [
    { q: 'Which AI tools does GEO apply to?', a: 'ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, and Microsoft Copilot. Each picks sources differently, but all favour clear, specific, well-structured content from credible sites.' },
    { q: 'Can a small business do GEO?', a: 'Yes. Start by making your key pages answer customer questions directly, adding specific facts and FAQs, and keeping your business details consistent across the web.' },
  ],
  'answer-engine-optimisation': [
    { q: 'What schema helps with answer engine optimisation?', a: 'FAQPage for question-and-answer content, HowTo for step-by-step guides, Article for posts, and Person or Organization to show who is behind the content.' },
    { q: 'Does AEO still matter if people click less?', a: 'Yes. Being the answer builds recognition and trust even without a click, and the people who do click are usually closer to buying.' },
  ],
  'geo-vs-seo': [
    { q: 'Does GEO replace SEO?', a: 'No. GEO builds on SEO. AI tools often draw on pages that already rank and have authority, so you need both.' },
    { q: 'How do I measure GEO results?', a: 'Track how often AI tools like ChatGPT and Perplexity mention or link to your site for your key questions, alongside your usual SEO numbers.' },
  ],
  'parasite-seo-7-platforms': [
    { q: 'Is parasite SEO against Google guidelines?', a: 'Publishing genuinely useful content on platforms like LinkedIn or Medium is fine. Google penalises site reputation abuse, where low-quality third-party content is placed on a trusted site only to exploit its rankings.' },
    { q: 'How fast does parasite SEO work?', a: 'Posts on high-authority platforms can be indexed and rank within days, much faster than a new page on a young website.' },
  ],
  'how-to-optimise-linkedin-profile': [
    { q: 'Do LinkedIn profiles show up in Google?', a: 'Yes. Public LinkedIn profiles are indexed by Google, so a keyword-rich headline and About section help you appear for searches on your name and services.' },
    { q: 'How long should a LinkedIn headline be?', a: 'LinkedIn allows up to 220 characters. Put the most important words first, because headlines are often cut short in search results and comments.' },
  ],
}

/** Extra questions for the hub pages. */
export const toolsExtraFaqs: Faq[] = [
  { q: 'Do I need an account to use the tools?', a: 'No. Open a tool, paste your content, and get results straight away.' },
  { q: 'Who made these tools?', a: 'Usman Khizar, a marketing consultant and fractional marketer, built them from the checks used on client work.' },
]

export const blogExtraFaqs: Faq[] = [
  { q: 'Are the articles up to date?', a: 'Each article shows its publish date. Search and AI tools change fast, so check the date and test any advice on your own site before relying on it.' },
  { q: 'Can I suggest a topic?', a: 'Yes. Send it through the contact page. Questions from readers often become the next article.' },
]
