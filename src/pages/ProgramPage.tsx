import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, FileText, Upload, Calendar, Download } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import {
  DAY1_WORKSHOPS,
  FAQS,
  FOCUS_AREAS,
  IMPORTANT_DATES,
  // PROGRAM_SCHEDULE, // used by the commented-out "Day-by-day outline" section
  SCIENTIFIC_PROGRAMME,
  SCIENTIFIC_PROGRAMME_PDF_URL,
} from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/**
 * Appends AM/PM to every "H:MM" time found in a range string. The scientific
 * programme only ever runs 09:00–20:00, so hour 12 and hours 1–8 are always
 * PM while hours 9–11 are always AM. When every time in the range shares the
 * same period, only the final one is labelled (e.g. "09:00 – 09:15 AM")
 * instead of repeating it on both ends.
 */
function withMeridiem(range: string): string {
  const matches = Array.from(range.matchAll(/(\d{1,2}):(\d{2})/g))
  if (matches.length === 0) return range

  const periods = matches.map((m) => {
    const hour = parseInt(m[1], 10)
    return hour === 12 || hour < 9 ? 'PM' : 'AM'
  })
  const allSame = periods.every((p) => p === periods[0])

  let result = ''
  let cursor = 0
  matches.forEach((m, idx) => {
    const end = (m.index ?? 0) + m[0].length
    result += range.slice(cursor, end)
    if (!allSame || idx === matches.length - 1) {
      result += ` ${periods[idx]}`
    }
    cursor = end
  })
  result += range.slice(cursor)

  return result.replace(/–/g, ' – ').replace(/\s+/g, ' ').trim()
}

/** Day + hall tabbed table view of the full scientific programme. */
function ScientificProgrammeExplorer() {
  const [dayIdx, setDayIdx] = useState(0)
  const [hallIdx, setHallIdx] = useState(0)

  const day = SCIENTIFIC_PROGRAMME[dayIdx]
  const hall = day.halls[Math.min(hallIdx, day.halls.length - 1)]

  return (
    <div>
      {/* Day tabs */}
      <div className="flex flex-wrap gap-2">
        {SCIENTIFIC_PROGRAMME.map((d, i) => (
          <button
            key={d.day}
            type="button"
            onClick={() => {
              setDayIdx(i)
              setHallIdx(0)
            }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              i === dayIdx
                ? 'bg-teal text-ivory'
                : 'bg-ivory text-ink-soft hover:bg-teal/10'
            }`}
          >
            {d.day} <span className="opacity-70">· {d.date.split(' · ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Hall tabs */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {day.date}
        </span>
        <div className="flex gap-2">
          {day.halls.map((h, i) => (
            <button
              key={h.hall}
              type="button"
              onClick={() => setHallIdx(i)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                i === hallIdx
                  ? 'border-gold bg-gold/15 text-gold-deep'
                  : 'border-ink/10 text-ink-muted hover:border-gold/50'
              }`}
            >
              {h.hall}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule table */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/10">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-ink text-ivory">
              <th className="w-40 px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                Time
              </th>
              <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                Topic
              </th>
              <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
                Speaker
              </th>
            </tr>
          </thead>
          <tbody>
            {hall.blocks.map((block) =>
              block.kind === 'symposium' ? (
                <Fragment key={block.title}>
                  <tr className="bg-teal/10">
                    <td colSpan={3} className="px-4 py-2 font-display text-sm font-semibold text-teal">
                      {block.title}{' '}
                      <span className="font-sans text-xs font-normal text-ink-muted">
                        &middot; {withMeridiem(block.time)}
                      </span>
                    </td>
                  </tr>
                  {block.rows.map((row) => (
                    <tr key={row.time + row.topic} className="border-b border-ink/10 last:border-0">
                      <td className="whitespace-nowrap px-4 py-2.5 align-top text-xs font-semibold text-ink-muted">
                        {withMeridiem(row.time)}
                      </td>
                      <td className="px-4 py-2.5 align-top text-ink-soft">{row.topic}</td>
                      <td className="px-4 py-2.5 align-top text-xs text-ink-muted">
                        {row.speaker ?? '—'}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ) : (
                <tr key={block.title} className="border-b border-ink/10 bg-gold/10 last:border-0">
                  <td className="whitespace-nowrap px-4 py-2.5 align-top text-xs font-semibold text-gold-deep">
                    {withMeridiem(block.time)}
                  </td>
                  <td colSpan={block.speaker ? 1 : 2} className="px-4 py-2.5 align-top font-semibold text-ink">
                    {block.title}
                  </td>
                  {block.speaker && (
                    <td className="px-4 py-2.5 align-top text-xs text-ink-muted">{block.speaker}</td>
                  )}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

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
        logos
        eyebrow="Scientific program"
        title="Four days of science, solutions & exchange"
        subtitle="Keynotes, masterclasses, oral sessions and e-posters across the five focus tracks. The full agenda is released closer to the event."
      />

      {/* Schedule outline — temporarily hidden
      <section className="bg-ivory py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="At a glance"
            title="Day-by-day outline"
            subtitle="The official scientific schedule across the workshop and three days of sessions."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {PROGRAM_SCHEDULE.map((d) => (
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
                {'time' in d && (
                  <p className="mt-1 text-xs font-semibold text-gold-deep">{d.time}</p>
                )}
                {'venue' in d && (
                  <p className="mt-1 text-xs text-ink-muted">{d.venue}</p>
                )}
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
      */}

      {/* Day 1 workshop details */}
      <section className="bg-ivory-deep py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Day 1 · 24 September"
            title="Pre-conference workshop programme"
            subtitle="Full scientific programme for the Day 1 workshops at Amaltas University, Dewas."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid gap-8 md:grid-cols-3"
          >
            {DAY1_WORKSHOPS.map((w) => (
              <motion.figure
                key={w.title}
                variants={fadeUp}
                className="card overflow-hidden p-0"
              >
                <a href={w.image} target="_blank" rel="noopener noreferrer">
                  <Img
                    src={w.image}
                    alt={`Workshop on ${w.title} — scientific programme`}
                    className="w-full object-contain"
                  />
                </a>
                <figcaption className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Workshop on {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">{w.theme}</p>
                  <p className="mt-2 text-xs font-semibold text-gold-deep">
                    {w.time} &middot; Coordinator: {w.coordinator}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Full scientific programme (from the official PDF) */}
      <section className="bg-ivory py-24 lg:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Session by session"
              title="Full scientific programme"
              subtitle="Every symposium, oration, debate and panel across Hall A & Hall B, as released in the official programme booklet."
            />
            <a
              href={SCIENTIFIC_PROGRAMME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-primary shrink-0"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
          <div className="mt-14">
            <ScientificProgrammeExplorer />
          </div>
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
              <a
                href="https://forms.gle/J9DLDrp1hYsKo6D36"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Start a submission
              </a>
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
