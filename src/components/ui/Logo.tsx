import { Link } from 'react-router-dom'
import { EVENT } from '@/data/content'

type Props = {
  className?: string
  imgClassName?: string
  /** Use the alternate mark (logo-2) — e.g. once the navbar gains a solid background. */
  solid?: boolean
}

export default function Logo({
  className = '',
  imgClassName = 'h-10 w-auto object-contain sm:h-12',
  solid = false,
}: Props) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label={`${EVENT.shortName} ${EVENT.city} ${EVENT.year} — home`}
    >
      <img
        src={solid ? '/logo-2.png' : '/logo.png'}
        alt={`${EVENT.shortName} logo`}
        className={imgClassName}
      />
    </Link>
  )
}
