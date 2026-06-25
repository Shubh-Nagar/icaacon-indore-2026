import { Link } from 'react-router-dom'
import { EVENT } from '@/data/content'

type Props = {
  /** light = for dark backgrounds (footer), dark = for ivory (navbar) */
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = '' }: Props) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label={`${EVENT.shortName} ${EVENT.city} ${EVENT.year} — home`}
    >
      <img
        src="/logo.jpeg"
        alt={`${EVENT.shortName} logo`}
        className="h-10 w-auto object-contain sm:h-12"
      />
    </Link>
  )
}
