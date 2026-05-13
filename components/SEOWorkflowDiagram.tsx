'use client'

import { useState } from 'react'
import {
  Search, FileSearch, MapPin, GitBranch, Code2, Gauge, BarChart2, Network,
  FileText, Tags, Brain, LayoutTemplate, Link2, AlignLeft, TrendingUp, Braces,
  Star, CheckSquare, MessageSquare, ClipboardCheck, Map, CalendarDays, Globe,
  BarChart3, Type, Send, ExternalLink, PieChart, LineChart, Users,
  ChevronDown, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface WorkflowNode {
  id: string
  label: string
  icon: LucideIcon
  tooltip: string
}

interface WorkflowColumn {
  id: string
  title: string
  sprintLabel: string
  sprintFilter: string
  rootIcon: LucideIcon
  rootTooltip: string
  nodes: WorkflowNode[]
}

interface AITool {
  id: string
  label: string
  icon: LucideIcon
  dot: string
  tooltip: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const COLUMNS: WorkflowColumn[] = [
  {
    id: 'col1',
    title: 'Entity & Technical Audit',
    sprintLabel: 'Sprint 1–2',
    sprintFilter: 'Sprint 1–2',
    rootIcon: Search,
    rootTooltip: 'Full site and GBP audit to establish the entity baseline before any content or link work begins.',
    nodes: [
      { id: 'website-quality', label: 'Website Quality Audit', icon: FileSearch, tooltip: 'Screaming Frog crawl to flag indexability issues, broken links, redirect chains, and missing schema.' },
      { id: 'gbp-depth', label: 'GBP Depth Audit', icon: MapPin, tooltip: 'Primary and secondary categories, services, and Q&A reviewed against top map pack competitors.' },
      { id: 'entity-gap', label: 'Entity Gap Analysis', icon: GitBranch, tooltip: 'Every GBP service is mapped to a dedicated page URL. Every gap is a ranking opportunity.' },
      { id: 'schema-audit', label: 'Schema Audit', icon: Code2, tooltip: 'LocalBusiness, Service, and FAQ JSON-LD validated for errors in Google Rich Results Test.' },
      { id: 'core-web-vitals', label: 'Core Web Vitals', icon: Gauge, tooltip: 'LCP, INP, and CLS reviewed via PageSpeed Insights. Anything below passing threshold is flagged.' },
      { id: 'gsc-setup', label: 'GSC Setup + Baseline', icon: BarChart2, tooltip: 'Search Console connected, sitemap verified, 90-day baseline pulled for impressions and clicks.' },
      { id: 'sitemap-crawl', label: 'Sitemap + Crawl Fix', icon: Network, tooltip: 'Sitemap errors, noindex issues on tag URLs, and crawl depth problems resolved before content work.' },
    ],
  },
  {
    id: 'col2',
    title: 'Content & On-Page Engine',
    sprintLabel: 'Sprint 3–4',
    sprintFilter: 'Sprint 3–4',
    rootIcon: FileText,
    rootTooltip: 'Keyword clustering and entity page builds that match the GBP service architecture exactly.',
    nodes: [
      { id: 'keyword-clustering', label: 'Keyword Clustering', icon: Tags, tooltip: 'Ahrefs keyword explorer used to group keywords by entity, intent, and city modifier.' },
      { id: 'nlp-term', label: 'NLP Term Mapping', icon: Brain, tooltip: 'NeuronWriter validates term frequency targets for each page before writing begins.' },
      { id: 'entity-pages', label: 'Entity Page Builds', icon: LayoutTemplate, tooltip: 'One dedicated page per distinct service entity — matched to GBP service descriptions.' },
      { id: 'internal-link', label: 'Internal Link Architecture', icon: Link2, tooltip: 'Hub-and-spoke structure with exact-match keyword anchors from hubs to service pages.' },
      { id: 'title-meta', label: 'Title + Meta Optimization', icon: AlignLeft, tooltip: 'Title tags front-loaded with primary entity and city. Metas written to lift CTR.' },
      { id: 'gsc-quick-win', label: 'GSC Quick Win Optimization', icon: TrendingUp, tooltip: 'Pages in positions 4–15 with 50+ impressions receive targeted on-page fixes first.' },
      { id: 'schema-deploy', label: 'Schema Deployment', icon: Braces, tooltip: 'LocalBusiness and Service JSON-LD added to every entity page. Zero rich results errors.' },
    ],
  },
  {
    id: 'col3',
    title: 'Local SEO & GBP',
    sprintLabel: 'Sprint 3',
    sprintFilter: 'Sprint 3',
    rootIcon: MapPin,
    rootTooltip: 'GBP depth, review signals, and local rank tracking to dominate the map pack.',
    nodes: [
      { id: 'gbp-opt', label: 'GBP Optimization', icon: Star, tooltip: '20–30 individual services built out with descriptions. Business description rewritten for AI search.' },
      { id: 'category-align', label: 'Category Alignment', icon: CheckSquare, tooltip: 'Entity test run for each service — two-tab SERP comparison to confirm distinct map pack results.' },
      { id: 'review-strategy', label: 'Review Strategy', icon: MessageSquare, tooltip: 'Clients briefed on attribute-specific review prompts — service name, outcome, and response time language.' },
      { id: 'citation-audit', label: 'Citation Audit', icon: ClipboardCheck, tooltip: 'NAP consistency verified across top 50 directories. Duplicates removed, mismatches corrected.' },
      { id: 'local-falcon', label: 'Local Falcon Rank Mapping', icon: Map, tooltip: 'Grid maps pulled for primary keyword and city combos. Weak zones identified for geo content.' },
      { id: 'gbp-post', label: 'GBP Post Cadence', icon: CalendarDays, tooltip: 'Weekly posts targeting specific service attributes and seasonal demand signals.' },
      { id: 'ask-maps', label: 'Ask Maps / GEO Visibility', icon: Globe, tooltip: 'Business description and Q&A optimised for AI-layer recommendation systems like Ask Maps.' },
    ],
  },
  {
    id: 'col4',
    title: 'Link Building & Reporting',
    sprintLabel: 'Sprint 5–6',
    sprintFilter: 'Sprint 5–6',
    rootIcon: BarChart3,
    rootTooltip: 'Local-first link acquisition with exact-match anchors and monthly business-metric reporting.',
    nodes: [
      { id: 'link-prospect', label: 'Link Prospecting', icon: Search, tooltip: 'Ahrefs and Loganix publisher network used to identify relevant, real-traffic link placements.' },
      { id: 'anchor-text', label: 'Anchor Text Strategy', icon: Type, tooltip: 'Exact-match local keyword anchors pointing to service pages — mapped by silo before outreach.' },
      { id: 'outreach', label: 'Outreach + Placement', icon: Send, tooltip: 'Guest post and niche edit outreach with honest dofollow disclosure.' },
      { id: 'local-citation', label: 'Local Citation Links', icon: ExternalLink, tooltip: 'Chamber of Commerce, city directories, and local news links prioritised for geo-relevance.' },
      { id: 'monthly-report', label: 'Monthly Report Build', icon: PieChart, tooltip: 'Wins-first executive summary. GBP calls, organic leads, and map pack position as primary metrics.' },
      { id: 'gsc-gbp-review', label: 'GSC + GBP Metrics Review', icon: LineChart, tooltip: 'CTR by page, impressions trend, and GBP call volume reviewed before ranking positions.' },
      { id: 'client-comms', label: 'Client Communication', icon: Users, tooltip: 'Monthly meeting with branded slides. Conclusion-first titles. Business language, not SEO jargon.' },
    ],
  },
]

const AI_TOOLS: AITool[] = [
  { id: 'claude', label: 'Claude', icon: Brain, dot: '#7C3AED', tooltip: 'Research synthesis, content briefs, NLP scoring, and on-page copy produced via Claude.' },
  { id: 'ahrefs', label: 'Ahrefs MCP', icon: BarChart2, dot: '#2563EB', tooltip: 'Live keyword data, SERP analysis, and backlink metrics pulled via MCP integration.' },
  { id: 'neuron', label: 'NeuronWriter', icon: Zap, dot: '#16A34A', tooltip: 'NLP term frequency validated for every entity page before and after writing.' },
  { id: 'clickup', label: 'ClickUp AI', icon: CheckSquare, dot: '#DB2777', tooltip: 'Sprint task management, deadline tracking, and deliverable organisation.' },
  { id: 'gsc-api', label: 'GSC API', icon: TrendingUp, dot: '#C4522A', tooltip: 'Automated data pulls for quick-win keyword segmentation and CTR trend analysis.' },
  { id: 'agency', label: 'Agency Analytics', icon: PieChart, dot: '#0D9488', tooltip: 'Client-facing monthly reporting dashboard with white-label branded exports.' },
]

const FILTER_OPTIONS = ['All Sprints', 'Sprint 1–2', 'Sprint 3–4', 'Sprint 3', 'Sprint 5–6']

// ─── Sub-components ───────────────────────────────────────────────────────────

function Connector() {
  return (
    <div
      style={{ width: '1.5px', minHeight: '20px', background: '#D9CFC4', margin: '0 auto' }}
      aria-hidden="true"
    />
  )
}

interface TooltipProps {
  text: string
  alignRight?: boolean
}

function Tooltip({ text, alignRight }: TooltipProps) {
  return (
    <div
      className={`absolute z-50 top-full mt-2 ${alignRight ? 'right-0' : 'left-0'} pointer-events-none`}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E5DDD0',
        borderRadius: '8px',
        padding: '10px 12px',
        fontSize: '13px',
        color: '#1A1A1A',
        maxWidth: '220px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        width: 'max-content',
        lineHeight: '1.5',
      }}
    >
      {text}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SEOWorkflowDiagram() {
  const [activeFilter, setActiveFilter] = useState('All Sprints')
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [collapsedCols, setCollapsedCols] = useState<Record<string, boolean>>({})
  const [showAI, setShowAI] = useState(true)

  function toggleCollapse(colId: string) {
    setCollapsedCols((prev) => ({ ...prev, [colId]: !prev[colId] }))
  }

  function isColDimmed(col: WorkflowColumn) {
    if (activeFilter === 'All Sprints') return false
    return col.sprintFilter !== activeFilter
  }

  return (
    <section style={{ background: '#F5F0E8' }} className="py-16 px-4 md:px-8">
      {/* ── Page header ── */}
      <div className="max-w-5xl mx-auto mb-10">
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#C4522A',
            color: '#FFFFFF',
            borderRadius: '100px',
            padding: '4px 14px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          How I Work
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-archivo-black, inherit)',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: '#1A1A1A',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}
        >
          SEO Workflow + AI Automation
        </h2>

        <p style={{ color: '#6B6560', fontSize: '1rem', lineHeight: '1.65', maxWidth: '560px' }}>
          Blueprint sprint methodology — layered with AI tools for faster execution and better client outcomes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* ── Sprint filter ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_OPTIONS.map((opt) => {
            const active = activeFilter === opt
            return (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: active ? 'none' : '1px solid #E5DDD0',
                  background: active ? '#C4522A' : '#FFFFFF',
                  color: active ? '#FFFFFF' : '#6B6560',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    ;(e.currentTarget as HTMLButtonElement).style.background = '#FAF0EB'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#C4522A'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#C4522A'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    ;(e.currentTarget as HTMLButtonElement).style.background = '#FFFFFF'
                    ;(e.currentTarget as HTMLButtonElement).style.borderColor = '#E5DDD0'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#6B6560'
                  }
                }}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {COLUMNS.map((col, colIdx) => {
            const dimmed = isColDimmed(col)
            const collapsed = !!collapsedCols[col.id]
            const alignRight = colIdx >= 2
            const RootIcon = col.rootIcon

            return (
              <div
                key={col.id}
                style={{
                  opacity: dimmed ? 0.35 : 1,
                  pointerEvents: dimmed ? 'none' : undefined,
                  transition: 'opacity 0.3s',
                }}
              >
                {/* Root node */}
                <div className="relative" onMouseLeave={() => setHoveredNode(null)}>
                  <div
                    style={{
                      background: '#C4522A',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '8px',
                      cursor: 'default',
                      position: 'relative',
                    }}
                    onMouseEnter={() => setHoveredNode(`root-${col.id}`)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                      <RootIcon size={16} color="#FFFFFF" style={{ flexShrink: 0 }} />
                      <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '13px', lineHeight: '1.3' }}>
                        {col.title}
                      </span>
                    </div>
                    {/* Collapse chevron */}
                    <button
                      onClick={() => toggleCollapse(col.id)}
                      aria-label={collapsed ? 'Expand column' : 'Collapse column'}
                      style={{
                        background: 'rgba(255,255,255,0.15)',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '3px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        flexShrink: 0,
                        transition: 'background 0.15s',
                      }}
                    >
                      <ChevronDown
                        size={14}
                        color="#FFFFFF"
                        style={{
                          transition: 'transform 0.25s',
                          transform: collapsed ? 'rotate(-180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {hoveredNode === `root-${col.id}` && (
                      <Tooltip text={col.rootTooltip} alignRight={alignRight} />
                    )}
                  </div>

                  {/* Sprint badge */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                    <span
                      style={{
                        background: '#FAF0EB',
                        color: '#C4522A',
                        border: '1px solid #E8C4B0',
                        borderRadius: '20px',
                        padding: '2px 10px',
                        fontSize: '11px',
                        fontWeight: 600,
                      }}
                    >
                      {col.sprintLabel}
                    </span>
                  </div>
                </div>

                {/* Connector from root to first child */}
                <Connector />

                {/* Child nodes — collapsible */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: collapsed ? '0px' : '800px',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  {col.nodes.map((node, nodeIdx) => {
                    const NodeIcon = node.icon
                    const nodeKey = `${col.id}-${node.id}`

                    return (
                      <div key={node.id}>
                        {/* Child card */}
                        <div className="relative" onMouseLeave={() => setHoveredNode(null)}>
                          <div
                            style={{
                              background: hoveredNode === nodeKey ? '#FAF0EB' : '#FFFFFF',
                              border: hoveredNode === nodeKey ? '1px solid #C4522A' : '1px solid #E5DDD0',
                              borderRadius: '12px',
                              padding: '10px 14px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              cursor: 'default',
                              boxShadow: hoveredNode === nodeKey ? '0 2px 12px rgba(196,82,42,0.12)' : 'none',
                              transition: 'all 0.15s',
                            }}
                            onMouseEnter={() => setHoveredNode(nodeKey)}
                          >
                            <NodeIcon size={15} color="#C4522A" style={{ flexShrink: 0 }} />
                            <span style={{ color: '#1A1A1A', fontSize: '12.5px', fontWeight: 500, lineHeight: '1.3' }}>
                              {node.label}
                            </span>
                          </div>

                          {hoveredNode === nodeKey && (
                            <Tooltip text={node.tooltip} alignRight={alignRight} />
                          )}
                        </div>

                        {/* Connector between children (not after last) */}
                        {nodeIdx < col.nodes.length - 1 && <Connector />}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── AI Layer toggle button ── */}
        <div className="flex justify-center mt-10 mb-4">
          <button
            onClick={() => setShowAI((v) => !v)}
            style={{
              padding: '9px 22px',
              borderRadius: '8px',
              border: '1.5px solid #C4522A',
              background: '#FFFFFF',
              color: '#C4522A',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.background = '#FAF0EB'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.background = '#FFFFFF'
            }}
          >
            {showAI ? 'Hide AI Layer' : 'Show AI Layer'}
          </button>
        </div>

        {/* ── AI Layer ── */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: showAI ? '400px' : '0px',
            transition: 'max-height 0.4s ease',
          }}
        >
          <div
            style={{
              background: '#1A1A1A',
              borderRadius: '16px',
              padding: '24px',
              marginTop: '8px',
            }}
          >
            <p
              style={{
                color: '#C4522A',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              AI Tools + Automation Layer
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {AI_TOOLS.map((tool) => {
                const ToolIcon = tool.icon
                const aiKey = `ai-${tool.id}`

                return (
                  <div
                    key={tool.id}
                    className="relative"
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      style={{
                        background: hoveredNode === aiKey ? '#2E2E2E' : '#2A2A2A',
                        border: '1px solid #E5DDD0',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'default',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={() => setHoveredNode(aiKey)}
                    >
                      {/* Colored dot indicator */}
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: tool.dot,
                          flexShrink: 0,
                          display: 'inline-block',
                        }}
                      />
                      <ToolIcon size={14} color="#E5DDD0" style={{ flexShrink: 0 }} />
                      <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 500 }}>
                        {tool.label}
                      </span>
                    </div>

                    {hoveredNode === aiKey && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 'calc(100% + 8px)',
                          left: '0',
                          zIndex: 50,
                          background: '#FFFFFF',
                          border: '1px solid #E5DDD0',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          fontSize: '13px',
                          color: '#1A1A1A',
                          maxWidth: '220px',
                          width: 'max-content',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                          lineHeight: '1.5',
                          pointerEvents: 'none',
                        }}
                      >
                        {tool.tooltip}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}