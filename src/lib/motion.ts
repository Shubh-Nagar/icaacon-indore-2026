import type { Variants } from 'framer-motion'

// =========================================================================
// Shared Framer Motion variants.
// Centralising these keeps animation timing consistent across the site and
// makes it trivial to tune the whole feel from one place.
// =========================================================================

/** Container that staggers its children's reveal. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

/** Standard "rise & fade" used by most elements as they scroll into view. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Gentler fade for headings / large text. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

/** Scale-in for cards & imagery. */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Shared viewport config — reveal once, when ~20% is visible. */
export const viewportOnce = { once: true, amount: 0.2 } as const
