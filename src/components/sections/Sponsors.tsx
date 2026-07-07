import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import { SPONSORS } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/**
 * Sponsors & partners.
 * Renders each partner's logo when available in content.ts; falls back to
 * a wordmark tile otherwise.
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
          {SPONSORS.map(({ name, logo }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-ink/10 bg-white/60 px-4 py-3 text-center transition-all duration-300 hover:border-teal/40 hover:shadow-card"
            >
              {logo && (
                <Img
                  src={logo}
                  alt={name}
                  className="max-h-12 max-w-full object-contain"
                />
              )}
              <span className="font-display text-sm font-semibold leading-tight text-ink-soft">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
