import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import TempleSkyline from '@/components/ui/TempleSkyline'

type Props = {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  current: string
}

/**
 * Compact hero banner used at the top of inner pages (About / Program / etc.).
 * Deep-teal, with a breadcrumb and the skyline motif for continuity.
 */
export default function PageHeader({ eyebrow, title, subtitle, current }: Props) {
  return (
    <header className="relative overflow-hidden bg-teal-deep pb-16 pt-32 text-ivory lg:pb-20 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.15]" />
      <TempleSkyline
        color="rgba(247,244,237,0.10)"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full"
      />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* breadcrumb */}
          <nav className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-ivory/60">
            <Link to="/" className="transition-colors hover:text-gold-soft">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-soft">{current}</span>
          </nav>

          <p className="eyebrow text-gold-soft">
            <span className="rule-gold !w-8" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/80">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </header>
  )
}
