import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Category = 'All' | 'Spiritual' | 'Heritage' | 'Nature'

const PLACES = [
  // Nature — closest first
  {
    name: 'Ralamandal Wildlife Sanctuary',
    distance: '20 km',
    category: 'Nature' as Category,
    tag: 'Nature & Wildlife',
    description:
      'A peaceful forest reserve on the outskirts of Indore offering shaded trails, a heritage hunting lodge, deer, leopards and sweeping panoramic viewpoints.',
    img: '/indore/ralamandal-sanctuary.jpg',
  },
  {
    name: 'Tincha Falls',
    distance: '25 km',
    category: 'Nature' as Category,
    tag: 'Nature & Wildlife',
    description:
      'One of the most popular cascades near Indore, tumbling through lush rock formations — especially spectacular during and just after the monsoon.',
    img: '/indore/tincha-falls.jpg',
  },
  // Heritage — close
  {
    name: 'Dr. B.R. Ambedkar Birthplace, Mhow',
    distance: '25 km',
    category: 'Heritage' as Category,
    tag: 'Heritage & History',
    description:
      'The birthplace of Dr. Bhimrao Ambedkar in the cantonment town of Mhow — a site of deep historical and constitutional significance for India.',
    img: '/indore/ambedkar-memorial-mhow.jpg',
  },
  {
    name: 'Gulawat Lotus Valley',
    distance: '30 km',
    category: 'Nature' as Category,
    tag: 'Nature & Wildlife',
    description:
      'A breathtaking seasonal wetland blanketed in thousands of pink and white lotus flowers — best experienced at sunrise in the post-monsoon months.',
    img: '/indore/lotus-valley.jpg',
  },
  {
    name: 'Patalpani Waterfall',
    distance: '35 km',
    category: 'Nature' as Category,
    tag: 'Nature & Wildlife',
    description:
      'A dramatic 300-ft cascade set amid dense hills and forest, with a scenic toy-train route from Indore making the journey part of the experience.',
    img: '/indore/patalpani-waterfall.jpg',
  },
  {
    name: 'Choral Dam',
    distance: '45 km',
    category: 'Nature' as Category,
    tag: 'Nature & Wildlife',
    description:
      'A tranquil reservoir cradled by the Vindhya hills — perfect for picnics, birdwatching and quiet evenings away from the city.',
    img: '/indore/choral-dam.jpg',
  },
  {
    name: 'Mahakaleshwar Jyotirlinga, Ujjain',
    distance: '55 km',
    category: 'Spiritual' as Category,
    tag: 'Spiritual',
    description:
      'One of the twelve sacred Jyotirlingas of Lord Shiva, housed in one of India\'s oldest living cities alongside ancient ghats, temples and an astronomical heritage.',
    img: '/indore/mahakaleshwar-ujjain.jpg',
  },
  {
    name: 'Omkareshwar Jyotirlinga',
    distance: '75 km',
    category: 'Spiritual' as Category,
    tag: 'Spiritual',
    description:
      'One of India\'s holiest pilgrimage sites — a Jyotirlinga temple perched on an Om-shaped island in the sacred Narmada River, serene and deeply spiritual.',
    img: '/indore/omkareshwar.jpg',
  },
  {
    name: 'Mandu (Mandav)',
    distance: '90 km',
    category: 'Heritage' as Category,
    tag: 'Heritage & History',
    description:
      'A ruined fort city set on a plateau, celebrated for its Afghan-Mughal palaces, the romance of Baz Bahadur and Roopmati, and misty monsoon landscapes.',
    img: '/indore/mandu-jahaz-mahal.jpg',
  },
  {
    name: 'Maheshwar',
    distance: '90 km',
    category: 'Heritage' as Category,
    tag: 'Heritage & History',
    description:
      'A serene Narmada-side town crowned by the magnificent Ahilya Fort of Queen Ahilyabai Holkar, and famed for the handwoven Maheshwari silk sarees.',
    img: '/indore/maheshwar-fort.jpg',
  },
  {
    name: 'Dhar Fort & Bhojshala',
    distance: '90 km',
    category: 'Heritage' as Category,
    tag: 'Heritage & History',
    description:
      'An ancient fort and the celebrated Bhojshala temple-mosque complex — a living testament to the Paramara dynasty and the scholarly reign of Raja Bhoj.',
    img: '/indore/dhar-fort-bhojshala.jpg',
  },
  {
    name: 'Hanuwantiya Tapu',
    distance: '140 km',
    category: 'Nature' as Category,
    tag: 'Nature & Wildlife',
    description:
      'A scenic island retreat on the vast Indira Sagar reservoir, offering boating, water sports, lakeside camping and golden sunsets over open water.',
    img: '/indore/hanuwantiya-tapu.jpg',
  },
]

const CATEGORIES: Category[] = ['All', 'Nature', 'Spiritual', 'Heritage']

const CATEGORY_COLORS: Record<string, string> = {
  'Nature & Wildlife': 'bg-teal/10 text-teal',
  Spiritual: 'bg-gold/20 text-amber-700',
  'Heritage & History': 'bg-maroon/10 text-maroon',
}

export default function PlacesNearIndorePage() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? PLACES : PLACES.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        current="Places to Visit near Indore"
        eyebrow="Host City · Day Trips"
        title={
          <>
            Beyond Indore —{' '}
            <span className="italic text-gold-soft">day trips worth the drive</span>
          </>
        }
        subtitle="Waterfalls, Jyotirlingas, Mughal fort cities and lotus valleys — all within a few hours of your conference hotel."
      />

      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-teal text-ivory shadow-md'
                    : 'bg-white text-ink-soft border border-ink/10 hover:border-teal hover:text-teal'
                }`}
              >
                {cat === 'All'
                  ? 'All Destinations'
                  : cat === 'Nature'
                  ? 'Nature & Wildlife'
                  : cat === 'Heritage'
                  ? 'Heritage & History'
                  : 'Spiritual'}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((place) => (
              <motion.div
                key={place.name}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-lift"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Img
                    src={place.img}
                    alt={place.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm bg-white/80 ${CATEGORY_COLORS[place.tag]}`}
                  >
                    {place.tag}
                  </span>
                  {/* Distance chip */}
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-teal-deep/90 px-3 py-1 text-xs font-bold text-ivory backdrop-blur-sm">
                    <Navigation size={11} />
                    {place.distance}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {place.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {place.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 text-center text-sm text-ink-muted"
          >
            Distances are approximate from the conference venue. Taxis and hired cars are readily available in Indore for all day trips.
          </motion.p>
        </Container>
      </section>
    </>
  )
}
