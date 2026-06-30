import { motion } from 'framer-motion'
import { Check, Clock, CalendarDays } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Countdown from '@/components/sections/Countdown'
import { IMPORTANT_DATES, EVENT } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

// Status → visual treatment.
const STATUS = {
  open: { label: 'Open now', cls: 'bg-teal/10 text-teal', Icon: Check },
  soon: { label: 'Closing soon', cls: 'bg-maroon/10 text-maroon', Icon: Clock },
  upcoming: { label: 'Upcoming', cls: 'bg-ink/5 text-ink-muted', Icon: CalendarDays },
} as const

/**
 * Important dates — a clean vertical timeline of milestones with a live
 * countdown card pinned to the side.
 */
export default function ImportantDates() {
  return (
    <section id="dates" className="bg-ivory-deep py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Mark your calendar"
          title="Important dates"
          subtitle="Key milestones on the road to Indore. Set reminders early — early-bird pricing and abstract windows close fast."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-14">
          {/* Timeline */}
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative lg:col-span-2"
          >
            {/* vertical guide line */}
            <span className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink/10" />

            {IMPORTANT_DATES.map((d) => {
              const s = STATUS[d.status]
              return (
                <motion.li
                  key={d.label}
                  variants={fadeUp}
                  className="relative flex items-start gap-5 pb-8 pl-8 last:pb-0"
                >
                  {/* node */}
                  <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-ivory" />
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold text-ink">
                        {d.label}
                      </p>
                      <p className="text-sm font-medium text-ink-muted">
                        {d.date}
                      </p>
                    </div>
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${s.cls}`}
                    >
                      <s.Icon size={13} />
                      {s.label}
                    </span>
                  </div>
                </motion.li>
              )
            })}
          </motion.ol>

          {/* Countdown card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex h-fit flex-col items-center gap-6 rounded-3xl bg-teal-deep p-8 text-center text-ivory shadow-lift"
          >
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-gold-soft">
              Conference begins in
            </p>
            <Countdown tone="light" compact />
            <p className="text-sm text-ivory/70">{EVENT.dates}</p>
            <p className="text-sm font-semibold text-ivory">
              {EVENT.venue.name}, {EVENT.venue.city}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
