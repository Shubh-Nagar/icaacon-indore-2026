import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import TempleSkyline from '@/components/ui/TempleSkyline'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { EVENT } from '@/data/content'

/**
 * Closing call-to-action band.
 * A confident maroon band with the theme restated and both CTAs, framed by the
 * faint temple skyline — a last nod to Indore before the footer.
 */
export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-maroon py-20 text-ivory lg:py-24">
      <TempleSkyline
        color="rgba(247,244,237,0.12)"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full"
      />
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <p className="eyebrow text-gold-soft">
            <span className="rule-gold !w-8" />
            Join us in Indore
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Breathe Better. Live Better.
          </h2>
          <p className="mt-4 max-w-xl text-ivory/80">
            Be part of the 60th edition of {EVENT.shortName}. {EVENT.dates} at{' '}
            {EVENT.venue.name}, {EVENT.venue.city}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="btn-gold group"
            >
              Register Now
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/program"
              className="btn inline-flex border border-ivory/40 text-ivory hover:bg-ivory hover:text-maroon"
            >
              Explore the program
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
