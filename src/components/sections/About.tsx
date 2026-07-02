import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { EVENT } from '@/data/content'

// Headline stats shown beside the about copy.
const STATS = [
  { value: '60', label: 'Years of legacy' },
  { value: '120+', label: 'Expert faculty' },
  { value: '1,500+', label: 'Delegates' },
  { value: '4', label: 'Days of science' },
]

/**
 * About the conference.
 * Two-column: editorial copy + stat grid on the left, layered medical/Indore
 * image collage on the right.
 */
export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: copy + stats */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About the conference"
              title={
                <>
                  Six decades of advancing{' '}
                  <span className="text-teal">respiratory & immune health</span>
                </>
              }
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft"
            >
              <motion.p variants={fadeUp}>
                {EVENT.shortName} returns for its diamond-jubilee edition,
                bringing together clinicians, researchers and innovators from
                across the world to confront the converging challenges of
                allergy, asthma and immunology in a changing climate.
              </motion.p>
              <motion.p variants={fadeUp}>
                Hosted in the heritage city of Indore — recognised as one of
                India’s cleanest cities — the {EVENT.dates} program pairs
                rigorous science with practical solutions, all oriented around a
                single promise:{' '}
                <span className="font-semibold text-ink">
                  Breathe Better, Live Better.
                </span>
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.dl
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <motion.div key={s.label} variants={fadeUp}>
                  <dt className="font-display text-4xl font-semibold text-teal">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* Right: image collage */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            {/* Main: lung health video */}
            <video
              src="/lung-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
            />
            {/* Floating accent: Indore heritage (Rajwada-style architecture) */}
            {/* <Img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&q=80&auto=format&fit=crop"
              alt="Heritage architecture of Indore"
              className="absolute -bottom-8 -left-8 hidden aspect-square w-44 rounded-2xl border-4 border-ivory object-cover shadow-lift sm:block"
            /> */}
            {/* Badge */}
            <div className="absolute -right-4 top-8 rounded-2xl bg-maroon px-5 py-4 text-center text-ivory shadow-lift">
              <p className="font-display text-2xl font-bold leading-none">60th</p>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-eyebrow text-ivory/80">
                Edition
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
