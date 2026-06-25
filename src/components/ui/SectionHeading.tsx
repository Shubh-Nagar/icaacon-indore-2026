import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '@/lib/motion'

type Props = {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  /** colour theme for the eyebrow + rule */
  tone?: 'teal' | 'ivory'
}

/**
 * Consistent section header: a letter-spaced eyebrow, a hairline gold rule,
 * a display-serif title and an optional subtitle. Reused by every section so
 * the typographic rhythm stays identical site-wide.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'teal',
}: Props) {
  const isCenter = align === 'center'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <span
        className={`eyebrow ${tone === 'ivory' ? 'text-gold-soft' : 'text-teal'}`}
      >
        <span className="rule-gold !w-8" />
        {eyebrow}
      </span>

      <h2
        className={`max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          tone === 'ivory' ? 'text-ivory' : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            tone === 'ivory' ? 'text-ivory/80' : 'text-ink-soft'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
