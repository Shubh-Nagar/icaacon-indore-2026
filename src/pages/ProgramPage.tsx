import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, FileText, Upload, Calendar } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { FAQS, FOCUS_AREAS, IMPORTANT_DATES } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

// Placeholder day-by-day outline.
const SCHEDULE = [
  {
    day: 'Day 1',
    date: '24 Sep',
    title: 'Opening & Air Quality',
    items: ['Inaugural keynote', 'Air pollution & lungs', 'Welcome reception'],
  },
  {
    day: 'Day 2',
    date: '25 Sep',
    title: 'Climate & Asthma',
    items: ['Climate–respiratory panel', 'Asthma masterclass', 'E-poster session I'],
  },
  {
    day: 'Day 3',
    date: '26 Sep',
    title: 'Allergy & Diagnostics',
    items: ['Allergy diagnostics workshop', 'Oral presentations', 'Gala dinner'],
  },
  {
    day: 'Day 4',
    date: '27 Sep',
    title: 'Immunotherapy & Close',
    items: ['Immunotherapy frontiers', 'Award ceremony', 'Closing address'],
  },
]

/** Accordion row for the FAQ. */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-semibold text-ink">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-teal transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * Program page — scientific schedule, abstract submission tracks + steps,
 * key dates recap and an FAQ accordion.
 */
export default function ProgramPage() {
  return (
    <>
      <PageHeader
        current="Program"
        eyebrow="Scientific program"
        title="Four days of science, solutions & exchange"
        subtitle="Keynotes, masterclasses, oral sessions and e-posters across the five focus tracks. The full agenda is released closer to the event."
      />

      {/* Schedule outline */}
      <section className="bg-ivory py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="At a glance"
            title="Day-by-day outline"
            subtitle="A provisional shape of the program. Sessions and timings are subject to confirmation."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {SCHEDULE.map((d) => (
              <motion.article
                key={d.day}
                variants={fadeUp}
                className="card flex flex-col p-6"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xl font-bold text-teal">
                    {d.day}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-muted">
                    <Calendar size={12} />
                    {d.date}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-ink">
                  {d.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Abstract submission */}
      <section className="bg-ivory-deep py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Call for abstracts"
                title="Present your research"
                subtitle="Submit original work under one of the five focus tracks for oral or e-poster presentation."
              />
              <motion.ol
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-8 space-y-5"
              >
                {[
                  { Icon: FileText, t: 'Prepare your abstract', s: 'Structured, ≤300 words, within a single focus track.' },
                  { Icon: Upload, t: 'Submit via the portal', s: 'Online submission opens 15 March 2026.' },
                  { Icon: Calendar, t: 'Await notification', s: 'Acceptance and format confirmed by 20 August 2026.' },
                ].map((step, i) => (
                  <motion.li key={step.t} variants={fadeUp} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-ivory">
                      <step.Icon size={18} />
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-ink">
                        {i + 1}. {step.t}
                      </p>
                      <p className="text-sm text-ink-soft">{step.s}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
              <Link to="/register" className="btn-primary mt-8">
                Start a submission
              </Link>
            </div>

            {/* Tracks */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="card p-8"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                Submission tracks
              </h3>
              <ul className="mt-6 space-y-4">
                {FOCUS_AREAS.map((f) => (
                  <li
                    key={f.title}
                    className="flex items-center gap-4 rounded-xl bg-ivory p-4"
                  >
                    <f.icon className="shrink-0 text-teal" size={22} />
                    <div>
                      <p className="font-semibold text-ink">{f.title}</p>
                      <p className="text-xs text-ink-muted">{f.blurb}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Key dates recap + FAQ */}
      <section className="bg-ivory py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* dates */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="Submission timeline"
                title="Dates to remember"
              />
              <ul className="mt-8 space-y-4">
                {IMPORTANT_DATES.map((d) => (
                  <li
                    key={d.label}
                    className="flex items-center justify-between border-b border-ink/10 pb-4"
                  >
                    <span className="text-sm font-medium text-ink-soft">
                      {d.label}
                    </span>
                    <span className="font-display font-semibold text-teal">
                      {d.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <SectionHeading
                align="left"
                eyebrow="Good to know"
                title="Frequently asked"
              />
              <div className="mt-6">
                {FAQS.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
