interface IconProps {
  size?: number
}

export function LinkIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function ChartIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-4" />
    </svg>
  )
}

export function SearchIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export function PeopleIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
      <circle cx="18" cy="8" r="3" />
      <path d="M22 21v-1a3.5 3.5 0 0 0-2.5-3.36" />
    </svg>
  )
}

export function ChecklistIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6h11" />
      <path d="M9 12h11" />
      <path d="M9 18h11" />
      <path d="m3 6 1.5 1.5L7 5" />
      <path d="m3 12 1.5 1.5L7 11" />
      <path d="m3 18 1.5 1.5L7 17" />
    </svg>
  )
}

export function StarIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#C4533A" stroke="none" aria-hidden="true">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.27 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  )
}

export function QuestionIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-1.25 2-2 2.75-.4.4-.5.75-.5 1.25" />
      <line x1="12" y1="17" x2="12" y2="17.01" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C4533A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
