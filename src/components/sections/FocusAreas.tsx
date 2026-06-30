import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FOCUS_AREAS } from '@/data/content'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion'

// Map the data's accent key → concrete tailwind classes.
// Keeping this here (rather than in data) avoids dynamic class strings that
// Tailwind's JIT can't see at build time.
const ACCENT: Record<
  string,
  { ring: string; icon: string; bg: string; bar: string }
> = {
  maroon: { ring: 'ring-maroon/20', icon: 'text-maroon', bg: 'bg-maroon/5', bar: 'bg-maroon' },
  teal: { ring: 'ring-teal/20', icon: 'text-teal', bg: 'bg-teal/5', bar: 'bg-teal' },
  ink: { ring: 'ring-ink/20', icon: 'text-ink', bg: 'bg-ink/5', bar: 'bg-ink' },
  gold: { ring: 'ring-gold/30', icon: 'text-gold-deep', bg: 'bg-gold/10', bar: 'bg-gold' },
  tealSoft: { ring: 'ring-teal-soft/25', icon: 'text-teal-soft', bg: 'bg-teal-soft/5', bar: 'bg-teal-soft' },
}

/**
 * Theme & focus areas.
 * The five tracks lifted directly from the poster (Allergy → Climate Change),
 * each with its own accent colour and Lucide icon. Cards lift on hover.
 */
export default function FocusAreas() {
  return (
    <section
      id="focus"
      className="relative bg-teal-deep py-24 text-ivory lg:py-32"
    >
      {/* faint dotted texture */}
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.15]" />

      <Container className="relative z-10">
        <SectionHeading
          tone="ivory"
          eyebrow="Theme & focus areas"
          title={
            <>
              Five fronts, one mission:{' '}
              <span className="italic text-gold-soft">healthier breathing</span>
            </>
          }
          subtitle="The scientific program is built around the five interconnected challenges shaping respiratory and immune health today."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {FOCUS_AREAS.map((area, i) => {
            const a = ACCENT[area.accent]
            const Icon = area.icon
            return (
              <motion.article
                key={area.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl bg-ivory p-6 text-ink shadow-card"
              >
                {/* track number */}
                <span className="absolute right-4 top-3 font-display text-3xl font-semibold text-ink/5">
                  0{i + 1}
                </span>

                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full ring-1 ${a.ring} ${a.bg}`}
                >
                  <Icon className={a.icon} size={26} strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-tight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {area.blurb}
                </p>

                {/* hover bar */}
                <span
                  className={`mt-5 block h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${a.bar}`}
                />
              </motion.article>
            )
          })}
        </motion.div>

        {/* pillars strip */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 text-center font-display text-xl italic text-gold-soft"
        >
          Science · Solutions · Sustainability
        </motion.p>
      </Container>
    </section>
  )
}
