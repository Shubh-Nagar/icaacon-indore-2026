import { motion } from 'framer-motion'
import { Plane, Train, Bus, Car, MapPin, Clock, CheckCircle2, Navigation } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

const MODES = [
  {
    Icon: Plane,
    title: 'By Air',
    color: 'bg-teal/10 text-teal',
    iconBg: 'bg-teal',
    summary: 'Devi Ahilya Bai Holkar Airport (IDR) · 8 km from city centre',
  },
  {
    Icon: Train,
    title: 'By Train',
    color: 'bg-maroon/10 text-maroon',
    iconBg: 'bg-maroon',
    summary: 'Indore Junction (INDB) · Direct trains from major cities',
  },
  {
    Icon: Bus,
    title: 'By Road',
    color: 'bg-gold/20 text-amber-700',
    iconBg: 'bg-gold',
    summary: 'NH-52 & NH-47 · Luxury coaches, taxis & self-drive',
  },
  {
    Icon: Car,
    title: 'Local Transport',
    color: 'bg-ink/8 text-ink-soft',
    iconBg: 'bg-ink',
    summary: 'Cabs, auto-rickshaws, e-rickshaws & city buses',
  },
]

const DISTANCES = [
  { city: 'Bhopal', distance: '190 km', time: '~3 hrs', mode: 'Road / Rail' },
  { city: 'Ahmedabad', distance: '389 km', time: '~6 hrs', mode: 'Road / Rail' },
  { city: 'Jaipur', distance: '567 km', time: '~9 hrs', mode: 'Road / Rail' },
  { city: 'Mumbai', distance: '585 km', time: '~10–12 hrs', mode: 'Road / Rail / Air' },
  { city: 'Hyderabad', distance: '650 km', time: '~11 hrs', mode: 'Road / Air' },
  { city: 'New Delhi', distance: '675 km', time: '~10 hrs', mode: 'Rail / Air' },
  { city: 'Lucknow', distance: '685 km', time: '~11 hrs', mode: 'Rail / Air' },
  { city: 'Chennai', distance: '1,170 km', time: '~2 hrs (Air)', mode: 'Air' },
]

export default function HowToReachIndorePage() {
  return (
    <>
      <PageHeader
        current="How to Reach Indore"
        eyebrow="Host City · Travel Guide"
        title={
          <>
            Getting to{' '}
            <span className="italic text-gold-soft">Indore</span>
          </>
        }
        subtitle="Indore is well connected by air, rail and road. Here's everything you need to plan a smooth journey to the conference."
      />

      {/* Mode summary cards */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {MODES.map(({ Icon, title, color, iconBg, summary }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-card"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
                  <Icon size={22} className="text-ivory" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{title}</p>
                  <p className={`mt-1 text-xs font-semibold rounded-full w-fit px-2 py-0.5 ${color}`}>{title}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* By Air */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal">
                  <Plane size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">By Air</h2>
              </div>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                <strong className="text-ink">Devi Ahilya Bai Holkar International Airport (IDR)</strong> is
                located just 8 km from the city centre, making it one of the most convenient airports for
                conference delegates. Pre-paid taxis and app-based cabs are available right outside the
                terminal.
              </p>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted mb-3">Direct flight connections</p>
                {[
                  'New Delhi (DEL)',
                  'Mumbai (BOM)',
                  'Bengaluru (BLR)',
                  'Hyderabad (HYD)',
                  'Pune (PNQ)',
                  'Chennai (MAA)',
                  'Kolkata (CCU)',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="shrink-0 text-teal" />
                    <span className="text-sm text-ink-soft">{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-2xl bg-teal/8 px-4 py-3 text-sm text-ink-soft">
                <strong className="text-ink">International travellers:</strong> Connect via Delhi (DEL) or Mumbai (BOM) for onward flights to Indore.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-card border border-ink/10 min-h-[300px]">
              <iframe
                title="Devi Ahilya Bai Holkar Airport, Indore"
                src="https://www.google.com/maps?q=Devi+Ahilya+Bai+Holkar+Airport+Indore&output=embed"
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* By Train */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-card border border-ink/10">
              <iframe
                title="Indore Junction Railway Station"
                src="https://www.google.com/maps?q=Indore+Junction+Railway+Station&output=embed"
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-maroon">
                  <Train size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">By Train</h2>
              </div>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                <strong className="text-ink">Indore Junction (INDB)</strong> is a major railway hub on the
                Western Railway zone, with express and superfast trains running to most major Indian cities.
                The station is approximately 3 km from the city centre and well served by auto-rickshaws and cabs.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted mb-3">Key rail connections</p>
                {[
                  'New Delhi — Indore Express / Avantika Express',
                  'Mumbai — Avantika Express / Central Express',
                  'Jaipur — Intercity / Express trains',
                  'Ahmedabad — Intercity / Superfast trains',
                  'Hyderabad — Patalkot Express',
                  'Bengaluru — Weekly express trains',
                ].map((train) => (
                  <div key={train} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="shrink-0 text-maroon" />
                    <span className="text-sm text-ink-soft">{train}</span>
                  </div>
                ))}
              </div>
              <p className="rounded-2xl bg-maroon/8 px-4 py-3 text-sm text-ink-soft">
                <strong className="text-ink">Tip:</strong> Book train tickets early via the IRCTC portal — September is peak travel season in India.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* By Road */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold">
                  <Bus size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">By Road</h2>
              </div>
              <p className="max-w-2xl mx-auto text-base leading-relaxed text-ink-soft">
                Indore sits at the junction of <strong className="text-ink">NH-52</strong> and <strong className="text-ink">NH-47</strong>, making it easily reachable by road from across Madhya Pradesh and neighbouring states. Luxury Volvo coaches, sleeper buses, taxis and self-drive options are all available.
              </p>
            </motion.div>

            {/* Road options */}
            <motion.div variants={staggerContainer} className="grid gap-6 sm:grid-cols-3 mb-12">
              {[
                {
                  Icon: Bus,
                  title: 'Luxury Coaches',
                  desc: 'Volvo AC sleeper buses connect Indore to Bhopal, Ujjain, Mumbai, Ahmedabad, Pune and Jaipur — book via RedBus or state transport.',
                },
                {
                  Icon: Car,
                  title: 'Taxi & Cab Hire',
                  desc: 'Outstation taxis from Bhopal, Ujjain and nearby cities are affordable and comfortable for group travel.',
                },
                {
                  Icon: Navigation,
                  title: 'Self-Drive',
                  desc: 'Well-maintained national highways with fuel stations, food stops and rest areas make driving to Indore straightforward.',
                },
              ].map(({ Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="rounded-3xl bg-white p-6 shadow-card flex flex-col gap-3">
                  <Icon size={22} className="text-gold" />
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Distance matrix */}
            <motion.div variants={fadeUp} className="rounded-3xl bg-white shadow-card overflow-hidden">
              <div className="px-6 py-5 border-b border-ink/8 flex items-center gap-3">
                <MapPin size={18} className="text-teal" />
                <h3 className="font-display text-lg font-semibold text-ink">Key distances to Indore</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-ivory-deep">
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">City</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Distance</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Approx. Time</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Best Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {DISTANCES.map((row, i) => (
                      <tr key={row.city} className={i % 2 === 0 ? 'bg-white' : 'bg-ivory/40'}>
                        <td className="px-6 py-3.5 font-semibold text-ink">{row.city}</td>
                        <td className="px-6 py-3.5 text-ink-soft">{row.distance}</td>
                        <td className="px-6 py-3.5">
                          <span className="inline-flex items-center gap-1 text-ink-soft">
                            <Clock size={13} className="text-teal" />
                            {row.time}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-ink-soft">{row.mode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Local Transport */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink">
                  <Car size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">Getting Around Indore</h2>
              </div>
              <p className="max-w-xl mx-auto text-base text-ink-soft">
                Once in Indore, the city is compact and easy to navigate with multiple transport options available around the clock.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: '🚖',
                  title: 'App-based Cabs',
                  desc: 'Ola and Uber operate widely across Indore — the fastest and most reliable option for delegates.',
                },
                {
                  icon: '🛺',
                  title: 'Auto-rickshaws',
                  desc: 'Widely available and affordable for short hops within the city. Insist on the meter or agree on a fare first.',
                },
                {
                  icon: '⚡',
                  title: 'E-rickshaws',
                  desc: 'Eco-friendly electric rickshaws cover popular local routes and are a great way to explore the old city.',
                },
                {
                  icon: '🚌',
                  title: 'City Buses',
                  desc: 'Indore\'s iBus network covers major city routes affordably — useful for longer cross-city journeys.',
                },
              ].map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="rounded-3xl bg-white p-6 shadow-card flex flex-col gap-3 text-center items-center"
                >
                  <span className="text-4xl">{icon}</span>
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-12 text-center text-sm text-ink-muted"
            >
              The conference venue is approximately 8 km from the airport and 5 km from Indore Junction railway station.
            </motion.p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
