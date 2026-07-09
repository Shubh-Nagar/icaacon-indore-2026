import { useEffect, useRef, useState } from 'react'
import { Users } from 'lucide-react'
import { getAndMaybeIncrementVisitorCount } from '@/lib/visitorCounter'

/** Low-key unique-visitor count for the footer. Renders nothing while
 *  loading or on failure — never breaks layout. */
export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const ranRef = useRef(false)

  useEffect(() => {
    // Footer is mounted once for the app's lifetime (outside <Routes> in
    // App.tsx), so this guard only needs to survive React 18 StrictMode's
    // dev-only double-invoke — no real unmount-before-resolve case exists
    // here, so there's no cancellation flag to race against it.
    if (ranRef.current) return
    ranRef.current = true
    getAndMaybeIncrementVisitorCount().then(setCount)
  }, [])

  if (count === null) return null

  return (
    <p className="flex items-center gap-1.5">
      <span className="hidden text-ivory/30 sm:inline" aria-hidden="true">
        ·
      </span>
      <Users size={14} className="text-gold-soft" aria-hidden="true" />
      {count.toLocaleString()} visitors
    </p>
  )
}
