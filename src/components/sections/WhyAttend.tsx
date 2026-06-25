import { motion } from 'framer-motion'
import {
  Award,
  Users,
  GraduationCap,
  Wrench,
  Presentation,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { BENEFITS } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

// Icons matched to each benefit (kept in component, not data).
const ICONS: LucideIcon[] = [
  Award,
  Users,
  GraduationCap,
  Wrench,
  Presentation,
  Sparkles,
]

/**
 * Why attend — a six-up benefits grid. Each card has an icon, a bold
 * value prop and a one-line explainer. Subtle hover lift + gold underline.
 */
export default function WhyAttend() {
  return (
    <section id="why" className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why attend"
          title="Four days that move your practice forward"
          subtitle="From CME credits to hands-on workshops and a research stage of your own — here’s what your registration unlocks."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.article
                key={b.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group card flex flex-col gap-4 p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-tint text-teal transition-colors group-hover:bg-teal group-hover:text-ivory">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{b.body}</p>
                <span className="mt-auto block h-0.5 w-8 rounded-full bg-gold transition-all duration-300 group-hover:w-16" />
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
