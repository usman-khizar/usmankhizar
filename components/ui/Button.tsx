import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({ children, href, variant = 'primary', onClick, type = 'button', className = '' }: ButtonProps) {
  const cls = variant === 'primary' ? `btn-primary ${className}` : `btn-secondary ${className}`

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}