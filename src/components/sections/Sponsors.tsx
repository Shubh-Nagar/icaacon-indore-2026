import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { SPONSORS } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/**
 * Sponsors & partners.
 * Placeholder wordmark tiles in a responsive grid. Swap the strings in
 * content.ts for real logos (use an <Img> tile when logo art is available).
 */
export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-ivory-deep py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Partners & sponsors"
          title="Powered by leaders in respiratory care"
          subtitle="Our partners make the science possible. Sponsorship and exhibitor packages are open."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SPONSORS.map((name) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="flex h-24 items-center justify-center rounded-2xl border border-ink/10 bg-white/60 px-4 text-center transition-all duration-300 hover:border-teal/40 hover:shadow-card"
            >
              <span className="font-display text-lg font-semibold text-ink-soft">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
