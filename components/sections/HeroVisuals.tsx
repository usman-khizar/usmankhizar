export function AboutVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Animated gradient */}
      <defs>
        <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="aboutGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8917A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C4533A" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Background circles */}
      <circle cx="320" cy="150" r="120" fill="url(#aboutGrad)" />
      <circle cx="200" cy="300" r="100" fill="url(#aboutGrad2)" />

      {/* Growth chart lines */}
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M80 280 Q150 220 220 180 T360 120"
          stroke="#C4533A"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M80 300 Q150 250 220 220 T360 160"
          stroke="#D4622A"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </g>

      {/* Data points */}
      <circle cx="80" cy="280" r="5" fill="#C4533A" />
      <circle cx="150" cy="220" r="5" fill="#C4533A" />
      <circle cx="220" cy="180" r="5" fill="#C4533A" />
      <circle cx="290" cy="140" r="5" fill="#C4533A" />
      <circle cx="360" cy="120" r="5" fill="#C4533A" />

      {/* Stats boxes */}
      <rect x="40" y="320" width="80" height="60" rx="8" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.5" />
      <text x="80" y="350" textAnchor="middle" fill="#C4533A" fontSize="20" fontWeight="bold">
        5+
      </text>
      <text x="80" y="370" textAnchor="middle" fill="#C4533A" fontSize="10">
        Years
      </text>

      <rect x="140" y="320" width="80" height="60" rx="8" fill="none" stroke="#D4622A" strokeWidth="2" opacity="0.5" />
      <text x="180" y="350" textAnchor="middle" fill="#D4622A" fontSize="20" fontWeight="bold">
        100+
      </text>
      <text x="180" y="370" textAnchor="middle" fill="#D4622A" fontSize="10">
        Projects
      </text>

      <rect x="240" y="320" width="80" height="60" rx="8" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.5" />
      <text x="280" y="350" textAnchor="middle" fill="#C4533A" fontSize="20" fontWeight="bold">
        10x
      </text>
      <text x="280" y="370" textAnchor="middle" fill="#C4533A" fontSize="10">
        Growth
      </text>
    </svg>
  )
}

export function ServicesVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="servicesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Center circle */}
      <circle cx="200" cy="200" r="40" fill="url(#servicesGrad)" />
      <text x="200" y="210" textAnchor="middle" fill="#F5F0E8" fontSize="20" fontWeight="bold">
        SEO
      </text>

      {/* Connected nodes */}
      {[
        { cx: 100, cy: 100, label: 'GEO' },
        { cx: 300, cy: 100, label: 'AEO' },
        { cx: 100, cy: 300, label: 'Content' },
        { cx: 300, cy: 300, label: 'Links' },
        { cx: 200, cy: 50, label: 'Tech' },
      ].map((node, idx) => (
        <g key={idx}>
          {/* Connection lines */}
          <line
            x1="200"
            y1="200"
            x2={node.cx}
            y2={node.cy}
            stroke="#C4533A"
            strokeWidth="2"
            opacity="0.4"
          />
          {/* Nodes */}
          <circle cx={node.cx} cy={node.cy} r="28" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.6" />
          <text
            x={node.cx}
            y={node.cy + 6}
            textAnchor="middle"
            fill="#C4533A"
            fontSize="12"
            fontWeight="600"
            opacity="0.8"
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Animated dots */}
      <circle cx="150" cy="150" r="3" fill="#C4533A" opacity="0.6" />
      <circle cx="250" cy="150" r="3" fill="#D4622A" opacity="0.6" />
      <circle cx="150" cy="250" r="3" fill="#C4533A" opacity="0.6" />
      <circle cx="250" cy="250" r="3" fill="#D4622A" opacity="0.6" />
      <circle cx="200" cy="120" r="3" fill="#C4533A" opacity="0.6" />
    </svg>
  )
}

export function BlogVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="blogGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Document icon */}
      <g>
        {/* Main document */}
        <rect x="100" y="60" width="200" height="280" rx="12" fill="none" stroke="#C4533A" strokeWidth="3" opacity="0.8" />

        {/* Header bar */}
        <rect x="100" y="60" width="200" height="50" rx="12" fill="url(#blogGrad)" opacity="0.4" />

        {/* Text lines */}
        <line x1="120" y1="130" x2="260" y2="130" stroke="#C4533A" strokeWidth="2" opacity="0.6" />
        <line x1="120" y1="155" x2="280" y2="155" stroke="#C4533A" strokeWidth="1.5" opacity="0.5" />
        <line x1="120" y1="175" x2="280" y2="175" stroke="#C4533A" strokeWidth="1.5" opacity="0.5" />
        <line x1="120" y1="195" x2="260" y2="195" stroke="#C4533A" strokeWidth="1.5" opacity="0.5" />

        {/* More text lines */}
        <line x1="120" y1="225" x2="280" y2="225" stroke="#D4622A" strokeWidth="1.5" opacity="0.4" />
        <line x1="120" y1="245" x2="280" y2="245" stroke="#D4622A" strokeWidth="1.5" opacity="0.4" />
        <line x1="120" y1="265" x2="260" y2="265" stroke="#D4622A" strokeWidth="1.5" opacity="0.4" />

        {/* Corner accent */}
        <circle cx="300" cy="80" r="15" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.6" />
        <text x="300" y="87" textAnchor="middle" fill="#C4533A" fontSize="16" fontWeight="bold">
          ✓
        </text>
      </g>
    </svg>
  )
}

export function ContactVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Message bubbles */}
      <g>
        {/* First bubble */}
        <rect x="50" y="80" width="150" height="80" rx="16" fill="url(#contactGrad)" opacity="0.5" />
        <text x="125" y="130" textAnchor="middle" fill="#F5F0E8" fontSize="14">
          Hello!
        </text>

        {/* Second bubble */}
        <rect x="200" y="160" width="150" height="80" rx="16" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.5" />
        <text x="275" y="210" textAnchor="middle" fill="#C4533A" fontSize="14">
          Let's talk
        </text>

        {/* Third bubble */}
        <rect x="80" y="250" width="150" height="80" rx="16" fill="url(#contactGrad)" opacity="0.4" />
        <text x="155" y="295" textAnchor="middle" fill="#F5F0E8" fontSize="12">
          Growing search
        </text>
      </g>

      {/* Connection lines */}
      <line x1="200" y1="160" x2="125" y2="160" stroke="#C4533A" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5" />
      <line x1="155" y1="250" x2="200" y2="240" stroke="#C4533A" strokeWidth="1.5" opacity="0.3" strokeDasharray="5,5" />

      {/* Envelope icon in background */}
      <g opacity="0.2">
        <rect x="100" y="100" width="200" height="140" rx="8" fill="none" stroke="#C4533A" strokeWidth="2" />
        <line x1="100" y1="100" x2="200" y2="170" stroke="#C4533A" strokeWidth="2" />
        <line x1="300" y1="100" x2="200" y2="170" stroke="#C4533A" strokeWidth="2" />
      </g>
    </svg>
  )
}

export function ToolsVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="toolsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Wrench icon */}
      <g>
        <path
          d="M200 100 L250 50 L280 80 L230 130"
          stroke="#C4533A"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="220" cy="150" r="25" fill="url(#toolsGrad)" opacity="0.6" />
      </g>

      {/* Screwdriver icon */}
      <g>
        <line x1="100" y1="200" x2="140" y2="240" stroke="#D4622A" strokeWidth="6" opacity="0.5" strokeLinecap="round" />
        <rect x="130" y="250" width="20" height="60" rx="10" fill="#D4622A" opacity="0.4" />
      </g>

      {/* Hammer icon */}
      <g>
        <rect x="250" y="180" width="50" height="40" rx="8" fill="none" stroke="#C4533A" strokeWidth="3" opacity="0.5" />
        <line x1="275" y1="220" x2="275" y2="280" stroke="#C4533A" strokeWidth="4" opacity="0.5" />
      </g>

      {/* Gauge/meter */}
      <g>
        <circle cx="200" cy="320" r="35" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.5" />
        <path
          d="M165 320 A35 35 0 0 1 235 320"
          fill="none"
          stroke="#D4622A"
          strokeWidth="3"
          opacity="0.6"
        />
        <line x1="200" y1="320" x2="200" y2="290" stroke="#C4533A" strokeWidth="2" opacity="0.7" />
      </g>
    </svg>
  )
}

export function SEOVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Search icon */}
      <g>
        <circle cx="150" cy="150" r="60" fill="none" stroke="#C4533A" strokeWidth="3" opacity="0.7" />
        <line x1="200" y1="200" x2="280" y2="280" stroke="#C4533A" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      </g>

      {/* Ranking bars */}
      <g>
        {[1, 2, 3, 4].map((idx) => (
          <g key={idx}>
            <rect
              x="250"
              y={80 + idx * 60}
              width={20 + idx * 15}
              height="40"
              rx="4"
              fill="url(#seoGrad)"
              opacity={0.7 - idx * 0.1}
            />
            <text
              x="240"
              y={107 + idx * 60}
              fill="#C4533A"
              fontSize="14"
              fontWeight="bold"
              opacity="0.6"
            >
              #{idx}
            </text>
          </g>
        ))}
      </g>

      {/* Trend arrow */}
      <path
        d="M100 300 Q150 250 200 200"
        fill="none"
        stroke="#D4622A"
        strokeWidth="3"
        opacity="0.5"
        strokeLinecap="round"
      />
      <polygon points="200,200 220,180 190,175" fill="#D4622A" opacity="0.5" />
    </svg>
  )
}

export function GEOVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Globe */}
      <g>
        <circle cx="150" cy="150" r="70" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.6" />
        <circle cx="150" cy="150" r="70" fill="url(#geoGrad)" opacity="0.1" />
        {/* Latitude lines */}
        <ellipse cx="150" cy="130" rx="70" ry="15" fill="none" stroke="#C4533A" strokeWidth="1" opacity="0.4" />
        <ellipse cx="150" cy="150" rx="70" ry="20" fill="none" stroke="#C4533A" strokeWidth="1" opacity="0.4" />
        <ellipse cx="150" cy="170" rx="70" ry="15" fill="none" stroke="#C4533A" strokeWidth="1" opacity="0.4" />
      </g>

      {/* AI Nodes around it */}
      {[
        { cx: 300, cy: 100, label: 'ChatGPT' },
        { cx: 320, cy: 150, label: 'Perplexity' },
        { cx: 280, cy: 220, label: 'AI Overviews' },
      ].map((node, idx) => (
        <g key={idx}>
          <line x1="220" y1="150" x2={node.cx - 30} y2={node.cy} stroke="#D4622A" strokeWidth="1.5" opacity="0.3" />
          <circle cx={node.cx} cy={node.cy} r="20" fill="none" stroke="#D4622A" strokeWidth="2" opacity="0.5" />
          <text
            x={node.cx}
            y={node.cy + 5}
            textAnchor="middle"
            fill="#D4622A"
            fontSize="9"
            fontWeight="600"
            opacity="0.7"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function AEOVisual() {
  return (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ maxWidth: '500px', opacity: 0.8 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="aeoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4533A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4622A" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Brain/AI icon */}
      <g>
        <circle cx="200" cy="150" r="50" fill="url(#aeoGrad)" opacity="0.3" />
        <circle cx="200" cy="150" r="50" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.6" />

        {/* Neural connections */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI * 2) / 4 - Math.PI / 2;
          const x = 200 + Math.cos(angle) * 70;
          const y = 150 + Math.sin(angle) * 70;
          return (
            <g key={i}>
              <line x1="200" y1="150" x2={x} y2={y} stroke="#D4622A" strokeWidth="2" opacity="0.4" />
              <circle cx={x} cy={y} r="8" fill="#D4622A" opacity="0.5" />
            </g>
          );
        })}
      </g>

      {/* Question marks */}
      <g>
        <text x="100" y="280" fontSize="24" fill="#C4533A" opacity="0.5">
          ?
        </text>
        <text x="280" y="300" fontSize="24" fill="#D4622A" opacity="0.5">
          ?
        </text>
      </g>

      {/* Answer boxes */}
      <rect x="150" y="300" width="100" height="60" rx="8" fill="none" stroke="#C4533A" strokeWidth="2" opacity="0.4" />
      <text x="200" y="335" textAnchor="middle" fill="#C4533A" fontSize="12" fontWeight="600" opacity="0.6">
        Direct Answers
      </text>
    </svg>
  )
}
