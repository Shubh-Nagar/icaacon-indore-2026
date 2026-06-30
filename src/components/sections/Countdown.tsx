import { useEffect, useState } from 'react'
import { EVENT } from '@/data/content'

/** Returns the time remaining until the target ISO date, in d/h/m/s. */
function getRemaining(targetISO: string) {
  const diff = Math.max(0, new Date(targetISO).getTime() - Date.now())
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)
  return { days, hours, minutes, seconds }
}

type Tone = 'light' | 'dark'

/**
 * A compact countdown to the opening day. Updates every second.
 * `tone` switches the colour scheme for use over light or dark backgrounds.
 * `compact` switches to a 2×2 grid layout for narrow containers.
 */
export default function Countdown({ tone = 'light', compact = false }: { tone?: Tone; compact?: boolean }) {
  const [t, setT] = useState(() => getRemaining(EVENT.startISO))

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining(EVENT.startISO)), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: t.days },
    { label: 'Hours', value: t.hours },
    { label: 'Minutes', value: t.minutes },
    { label: 'Seconds', value: t.seconds },
  ]

  const numColor = tone === 'light' ? 'text-ivory' : 'text-ink'
  const labelColor = tone === 'light' ? 'text-ivory/65' : 'text-ink-muted'
  const divider = tone === 'light' ? 'bg-ivory/20' : 'bg-ink/15'

  if (compact) {
    return (
      <div
        className="flex w-full items-center justify-center gap-2"
        role="timer"
        aria-label="Time remaining until the conference"
      >
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span
                className={`font-display text-2xl font-semibold tabular-nums ${numColor}`}
              >
                {String(u.value).padStart(2, '0')}
              </span>
              <span
                className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-eyebrow ${labelColor}`}
              >
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className={`h-7 w-px ${divider}`} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="inline-flex items-center gap-4 sm:gap-6"
      role="timer"
      aria-label="Time remaining until the conference"
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <span
              className={`font-display text-3xl font-semibold tabular-nums sm:text-4xl ${numColor}`}
            >
              {String(u.value).padStart(2, '0')}
            </span>
            <span
              className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-eyebrow ${labelColor}`}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className={`h-8 w-px ${divider}`} aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}
