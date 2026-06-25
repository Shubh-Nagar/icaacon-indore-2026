import { motion } from 'framer-motion'

type Props = {
  className?: string
  /** stroke colour — defaults to currentColor so it inherits text colour */
  color?: string
  /** when true, the line "draws itself" on mount */
  animate?: boolean
}

/**
 * Signature element of the whole site.
 * A stylised silhouette of Indore's temple / heritage skyline — echoing the
 * line-art used in the official ICAAICON logo lock-up. It recurs as a hairline
 * motif across the hero, section dividers and footer to tie the medical
 * content back to the host city.
 *
 * Drawn as inline SVG so it stays razor-sharp at any size and can be tinted
 * with any palette colour via `color`.
 */
export default function TempleSkyline({
  className = '',
  color = 'currentColor',
  animate = false,
}: Props) {
  const pathProps = animate
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 2.4, ease: 'easeInOut' as const },
      }
    : {}

  return (
    <svg
      className={className}
      viewBox="0 0 1200 220"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* ground line */}
      <line x1="0" y1="205" x2="1200" y2="205" strokeWidth={1.5} opacity={0.6} />

      {/* Left clock-tower (Gandhi Hall style) */}
      <motion.path
        {...pathProps}
        d="M70 205V95h60v110M75 95l25-40 25 40M88 205v-34h24v34M92 118h16M92 140h16"
      />

      {/* Bilawali / shikhara temple cluster (centre-left) */}
      <motion.path
        {...pathProps}
        d="M260 205V120c0-30 25-55 55-55s55 25 55 55v85M300 65c0-12 6-22 15-22s15 10 15 22M315 30v13"
      />

      {/* Khajrana Ganesh dome */}
      <motion.path
        {...pathProps}
        d="M420 205v-60c0-26 21-47 47-47s47 21 47 47v60M467 80c0-10 5-18 0-28M467 52v-16"
      />

      {/* Central towering shikhara (tallest — focal point) */}
      <motion.path
        {...pathProps}
        d="M560 205V150c0-40 30-90 60-130 30 40 60 90 60 130v55M620 18v-8M600 205v-40a20 20 0 0140 0v40"
      />

      {/* Secondary spire */}
      <motion.path
        {...pathProps}
        d="M720 205v-50c0-30 22-66 44-92 22 26 44 62 44 92v50M764 55v-10"
      />

      {/* Lal Bagh palace wing (low, wide) */}
      <motion.path
        {...pathProps}
        d="M850 205v-70h150v70M850 135l75-35 75 35M880 205v-40h30v40M940 205v-40h30v40M905 150h12"
      />

      {/* Far-right small dome */}
      <motion.path
        {...pathProps}
        d="M1060 205v-40c0-18 14-32 32-32s32 14 32 32v40M1092 124v-10"
      />
    </svg>
  )
}
