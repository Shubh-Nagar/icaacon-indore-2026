import { useEffect, useRef, useState } from 'react'
import { Users } from 'lucide-react'
import { getAndMaybeIncrementVisitorCount } from '@/lib/visitorCounter'

/** Low-key unique-visitor count for the navbar. Renders nothing while
 *  loading or on failure — never breaks layout.
 *  `solid` mirrors the navbar's scrolled state so it stays readable over
 *  both the transparent hero and the solid ivory bar. */
export default function VisitorCounter({ solid = false }: { solid?: boolean }) {
  const [count, setCount] = useState<number | null>(null)
  const ranRef = useRef(false)

  useEffect(() => {
    // Navbar is mounted once for the app's lifetime (outside <Routes> in
    // App.tsx), so this guard only needs to survive React 18 StrictMode's
    // dev-only double-invoke — no real unmount-before-resolve case exists
    // here, so there's no cancellation flag to race against it.
    if (ranRef.current) return
    ranRef.current = true
    getAndMaybeIncrementVisitorCount().then(setCount)
  }, [])

  if (count === null) return null

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
        solid
          ? 'border-ink/10 bg-ink/5 text-ink-muted'
          : 'border-ivory/20 bg-white/10 text-ivory'
      }`}
    >
      <Users size={14} className={solid ? 'text-teal' : 'text-gold-soft'} aria-hidden="true" />
      {count.toLocaleString()} visitors
    </span>
  )
}
