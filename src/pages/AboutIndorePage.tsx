import { motion } from 'framer-motion'
import { Award, Landmark, TrendingUp, Leaf, Users, MapPin } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

const STATS = [
  { value: '3.5M+', label: 'Population', sub: 'Largest city in MP' },
  { value: '7×', label: 'Cleanest City Award', sub: 'Swachh Survekshan' },
  { value: '530+', label: 'Years of History', sub: 'Founded c. 1741' },
  { value: '8 km', label: 'Airport Distance', sub: 'From city centre' },
]

const TIMELINE = [
  {
    year: 'c. 1741',
    title: 'Founded by the Holkars',
    desc: 'Indore was founded as a trading post on the banks of the Saraswati and Khan rivers. Under Malhar Rao Holkar, it grew into the capital of the Holkar dynasty — one of the most powerful Maratha states.',
  },
  {
    year: '18th–19th Century',
    title: 'Holkar Dynasty & Golden Era',
    desc: 'Queen Ahilyabai Holkar (1725–1795) elevated Indore and nearby Maheshwar to centres of culture, commerce and religious patronage. Her reign is remembered as the golden age of the region, marked by temple construction and justice across the subcontinent.',
  },
  {
    year: '1818',
    title: 'British Residency',
    desc: 'After the Third Anglo-Maratha War, Indore became a princely state under British suzerainty. The city modernised rapidly — railways, schools and grand civic buildings like Gandhi Hall were established during this era.',
  },
  {
    year: '1947 – Present',
    title: 'Independence & Modern Growth',
    desc: 'Post-independence, Indore emerged as the commercial and industrial capital of Madhya Pradesh. Today it is one of India\'s fastest-growing cities and a hub for education, business, healthcare and technology.',
  },
]

const HIGHLIGHTS = [
  {
    Icon: Award,
    title: 'India\'s Cleanest City — 7 Times',
    desc: 'Indore has won the Swachh Survekshan award for cleanest city in India for seven consecutive years — a record unmatched by any other Indian city, driven by remarkable civic participation and community ownership.',
    color: 'bg-gold/15 text-amber-700',
    iconBg: 'bg-gold',
  },
  {
    Icon: TrendingUp,
    title: 'Commercial Capital of MP',
    desc: 'The financial and commercial engine of Madhya Pradesh, Indore hosts major industries in textiles, pharmaceuticals, IT and manufacturing. The city is home to IIM Indore, one of India\'s premier business schools.',
    color: 'bg-teal/10 text-teal',
    iconBg: 'bg-teal',
  },
  {
    Icon: Landmark,
    title: 'Heritage & Architecture',
    desc: 'Rajwada Palace, Lal Bagh Palace and the colonial-era Gandhi Hall stand alongside thriving bazaars and temple complexes — making Indore a living museum of Maratha, Mughal and colonial architectural traditions.',
    color: 'bg-maroon/10 text-maroon',
    iconBg: 'bg-maroon',
  },
  {
    Icon: Users,
    title: 'Education & Healthcare Hub',
    desc: 'Home to IIM Indore, IIT Indore, DAVV University and dozens of leading medical colleges and hospitals, the city has built a reputation as one of India\'s foremost centres for education and advanced healthcare.',
    color: 'bg-ink/8 text-ink-soft',
    iconBg: 'bg-ink',
  },
  {
    Icon: Leaf,
    title: 'Green & Sustainable City',
    desc: 'Beyond cleanliness, Indore has invested heavily in green infrastructure — tree-lined boulevards, solar energy adoption and efficient solid waste management that has become a model for cities across South Asia.',
    color: 'bg-teal/10 text-teal',
    iconBg: 'bg-teal',
  },
  {
    Icon: MapPin,
    title: 'Strategic Location',
    desc: 'Situated in the heart of India on the Malwa plateau, Indore is well connected by air, rail and road to every major Indian city — making it an ideal host for a national and international conference.',
    color: 'bg-gold/15 text-amber-700',
    iconBg: 'bg-gold',
  },
]

const QUICK_FACTS = [
  { label: 'State', value: 'Madhya Pradesh, India' },
  { label: 'Founded', value: 'c. 1741 AD' },
  { label: 'Area', value: '530 sq km' },
  { label: 'Language', value: 'Hindi, Nimadi, Malwi' },
  { label: 'Altitude', value: '553 m above sea level' },
  { label: 'Nearest Airport', value: 'Devi Ahilya Bai Holkar (IDR)' },
  { label: 'Climate (September)', value: 'Post-monsoon, 22–32°C' },
  { label: 'Time Zone', value: 'IST (UTC +5:30)' },
]

export default function AboutIndorePage() {
  return (
    <>
      <PageHeader
        current="About Indore"
        eyebrow="Host City · Indore"
        title={
          <>
            Indore —{' '}
            <span className="italic text-gold-soft">the heart of India</span>
          </>
        }
        subtitle="A city where centuries of Holkar heritage meet modern ambition, world-class education, legendary cuisine and an extraordinary civic pride."
      />

      {/* Key stats */}
      <section className="bg-teal-deep py-12">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-center gap-1 text-center">
                <span className="font-display text-4xl font-bold text-gold-soft">{s.value}</span>
                <span className="text-sm font-semibold text-ivory">{s.label}</span>
                <span className="text-xs text-ivory/55">{s.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* City intro */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <motion.div variants={fadeUp}>
              <p className="eyebrow text-teal"><span className="rule-gold !w-8" />City Overview</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                A city that surprises every visitor
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Indore is the largest city in Madhya Pradesh and the commercial, industrial and educational capital of central India. Set on the fertile Malwa plateau at an altitude of 553 metres, the city enjoys a pleasant climate and sits at the crossroads of some of India's most storied historical and cultural landscapes.
                </p>
                <p>
                  Founded in the early 18th century by the Holkar dynasty, Indore flourished under the enlightened rule of Queen Ahilyabai Holkar — whose legacy of justice, architecture and patronage is still celebrated today. The city grew further during the British colonial era and has since emerged as one of India's most dynamic urban centres.
                </p>
                <p>
                  What sets Indore apart is the rare combination of <strong className="text-ink">historical depth</strong>, <strong className="text-ink">modern ambition</strong> and <strong className="text-ink">civic pride</strong> — a city that takes care of itself, celebrates its food, and welcomes its guests with extraordinary warmth.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <Img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80&auto=format&fit=crop"
                alt="Rajwada Palace, the iconic landmark of Indore"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border-4 border-ivory bg-gold px-6 py-5 shadow-lift sm:block">
                <p className="font-display text-3xl font-bold leading-none text-ivory">7×</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ivory/85">India's Cleanest City</p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* History timeline */}
      <section className="bg-ivory-deep py-16 lg:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />History</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Centuries in the making
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink-soft">
              From a small trading post to the commercial capital of central India — Indore's story is one of remarkable continuity and reinvention.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            {/* vertical line */}
            <span className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gold/30 sm:block" />

            <div className="flex flex-col gap-10">
              {TIMELINE.map((item) => (
                <motion.div key={item.year} variants={fadeUp} className="flex gap-6 sm:pl-8">
                  <span className="relative mt-1.5 hidden h-4 w-4 shrink-0 rounded-full border-2 border-gold bg-ivory sm:block" />
                  <div className="flex-1 rounded-3xl bg-white p-7 shadow-card">
                    <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-amber-700">
                      {item.year}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* What makes Indore special */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />Why Indore</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              What makes this city special
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {HIGHLIGHTS.map(({ Icon, title, desc, iconBg }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-card"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
                  <Icon size={22} className="text-ivory" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Photo gallery strip */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />A Glimpse of Indore</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">See the city</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {[
              {
                src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80&auto=format&fit=crop',
                alt: 'Lal Bagh Palace, Indore',
                label: 'Lal Bagh Palace',
                span: 'lg:col-span-2 lg:row-span-2',
              },
              {
                src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop',
                alt: 'Sarafa Night Food Market',
                label: 'Sarafa Bazaar',
                span: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1609340261352-e62f2400e8d8?w=600&q=80&auto=format&fit=crop',
                alt: 'Khajrana Ganesh Temple',
                label: 'Khajrana Temple',
                span: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80&auto=format&fit=crop',
                alt: 'Gulawat Lotus Valley near Indore',
                label: 'Gulawat Lotus Valley',
                span: '',
              },
              {
                src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop',
                alt: 'Indore street food',
                label: 'Iconic Street Food',
                span: '',
              },
            ].map((img) => (
              <motion.div
                key={img.label}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              >
                <Img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-xs font-semibold text-ivory">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Quick facts table */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-2xl"
          >
            <motion.div variants={fadeUp} className="mb-10 text-center">
              <p className="eyebrow text-teal"><span className="rule-gold !w-8" />At a Glance</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Quick facts</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl bg-white shadow-card">
              {QUICK_FACTS.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex items-center justify-between px-7 py-4 ${
                    i !== QUICK_FACTS.length - 1 ? 'border-b border-ink/6' : ''
                  } ${i % 2 === 0 ? 'bg-white' : 'bg-ivory/50'}`}
                >
                  <span className="text-sm font-semibold text-ink-muted">{fact.label}</span>
                  <span className="text-sm font-semibold text-ink text-right">{fact.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
