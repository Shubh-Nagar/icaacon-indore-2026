import type { ReactNode } from 'react'

/** Thin wrapper that applies the shared max-width + horizontal padding. */
export default function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`container-x ${className}`}>{children}</div>
}
