import { motion } from 'framer-motion'
import { MapPin, Plane, Hotel, Users } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import { EVENT } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

// Quick venue facts, as published by the Indore Marriott Hotel.
const FACTS = [
  { Icon: Hotel, label: '216 rooms & suites', sub: 'Deluxe rooms to the Presidential suite' },
  { Icon: Plane, label: '16 km from airport', sub: 'Railway station just 6 km away' },
  { Icon: Users, label: '650-guest ballroom', sub: 'Grand Ballroom on-site' },
]

/**
 * Venue section.
 * Left: a photo of the host hotel + quick logistics facts. Right: an embedded
 * Google Maps iframe (no API key needed — uses the public query embed).
 */
export default function Venue() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    EVENT.venue.mapsQuery,
  )}&output=embed`

  // "Indore Marriott Hotel" → ink "Indore" + teal "Marriott Hotel".
  const [venueLead, ...venueRest] = EVENT.venue.name.split(' ')

  return (
    <section id="venue" className="bg-ivory-deep py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="The venue"
          title={
            <>
              {venueLead} <span className="text-teal">{venueRest.join(' ')}</span>
            </>
          }
          subtitle={`${EVENT.venue.address}. Four days of science in the heart of one of India’s cleanest, most welcoming cities.`}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left: photo + facts */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <Img
                src="/marriott/exterior.jpg"
                alt={`The entrance forecourt at the ${EVENT.venue.name}`}
                className="aspect-[16/10] w-full rounded-3xl object-cover shadow-card"
              />
            </motion.div>

            <motion.ul variants={staggerContainer} className="grid gap-4 sm:grid-cols-3">
              {FACTS.map((f) => (
                <motion.li
                  key={f.label}
                  variants={fadeUp}
                  className="card flex flex-col gap-2 p-5"
                >
                  <f.Icon className="text-teal" size={22} />
                  <p className="font-display text-base font-semibold text-ink">
                    {f.label}
                  </p>
                  <p className="text-xs text-ink-muted">{f.sub}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: map embed */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl border border-ink/10 shadow-card"
          >
            <iframe
              title={`Map to ${EVENT.venue.name}`}
              src={mapSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* address chip overlay */}
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ivory/95 px-4 py-2 text-sm font-semibold text-ink shadow-card backdrop-blur">
              <MapPin size={15} className="text-maroon" />
              {EVENT.venue.name}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
