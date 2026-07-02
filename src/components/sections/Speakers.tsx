import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
// import Img from '@/components/ui/Img'
// import { SPEAKERS } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
// import { scaleIn } from '@/lib/motion'

/**
 * Featured speakers / faculty.
 * Photo-led cards with a teal gradient that deepens on hover, lifting the name
 * + role into focus. Placeholder portraits described in content.ts.
 */
export default function Speakers() {
  return (
    <section id="speakers" className="bg-ivory py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Distinguished faculty"
            title="Voices shaping the field"
            subtitle="A preview of the global experts leading keynotes, panels and masterclasses. Full faculty announced soon."
          />
        </div>

        {/* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SPEAKERS.map((sp) => (
            <motion.article
              key={sp.name}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-3xl shadow-card"
            >
              <Img
                src={sp.photo}
                alt={`Portrait of ${sp.name}`}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <h3 className="font-display text-xl font-semibold">
                  {sp.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-soft">
                  {sp.role}
                </p>
                <p className="text-sm text-ivory/75">{sp.org}</p>
              </div>
            </motion.article>
          ))}
        </motion.div> */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex flex-col items-center gap-3 rounded-3xl border border-dashed border-ink/15 bg-ivory-deep py-16 text-center"
        >
          <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-eyebrow text-gold">
            Upcoming
          </span>
          <p className="max-w-md text-ink-soft">
            Speaker list to be announced soon. Check back for updates on our
            distinguished faculty.
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link to="/program" className="btn-ghost group">
            View the scientific program
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  )
}
