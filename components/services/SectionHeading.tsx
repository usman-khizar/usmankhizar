export default function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      {icon}
      <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)' }}>
        {children}
      </h2>
    </div>
  )
}
