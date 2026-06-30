import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Category = 'All' | 'Heritage' | 'Spiritual' | 'Cultural' | 'Food'

const PLACES = [
  // Heritage & Historical
  {
    name: 'Rajwada Palace',
    category: 'Heritage' as Category,
    description: 'A seven-storey historical palace built by the Holkar dynasty, standing at the heart of old Indore for over two centuries.',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80&auto=format&fit=crop',
    tag: 'Heritage & Historical',
  },
  {
    name: 'Lal Bagh Palace',
    category: 'Heritage' as Category,
    description: 'A grand Holkar-era palace with stunning European-style interiors, Corinthian columns, and beautifully landscaped gardens.',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80&auto=format&fit=crop',
    tag: 'Heritage & Historical',
  },
  {
    name: 'Chhatri Bagh',
    category: 'Heritage' as Category,
    description: 'An ornate complex of royal cenotaphs dedicated to the Holkar rulers, showcasing intricate Maratha and Mughal architecture.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    tag: 'Heritage & Historical',
  },
  {
    name: 'Gandhi Hall',
    category: 'Heritage' as Category,
    description: 'An impressive Indo-Gothic colonial building built in 1904, used for cultural exhibitions, events and public gatherings.',
    img: 'https://images.unsplash.com/photo-1585468274952-66591eb14165?w=800&q=80&auto=format&fit=crop',
    tag: 'Heritage & Historical',
  },
  // Spiritual
  {
    name: 'Kanch Mandir',
    category: 'Spiritual' as Category,
    description: 'A breathtaking Jain temple adorned entirely with coloured glass, mirrors and intricate mosaic work — a visual masterpiece.',
    img: 'https://images.unsplash.com/photo-1609340261352-e62f2400e8d8?w=800&q=80&auto=format&fit=crop',
    tag: 'Spiritual',
  },
  {
    name: 'Khajrana Ganesh Temple',
    category: 'Spiritual' as Category,
    description: 'One of Indore\'s most revered temples, believed to fulfil wishes, drawing thousands of devotees every day.',
    img: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?w=800&q=80&auto=format&fit=crop',
    tag: 'Spiritual',
  },
  {
    name: 'Annapurna Temple',
    category: 'Spiritual' as Category,
    description: 'A South Indian-style temple dedicated to Goddess Annapurna, known for its serene atmosphere and vibrant architecture.',
    img: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?w=800&q=80&auto=format&fit=crop',
    tag: 'Spiritual',
  },
  {
    name: 'Pitra Parvat',
    category: 'Spiritual' as Category,
    description: 'A hilltop Hanuman temple offering panoramic views of the city, especially magical at sunrise and sunset.',
    img: 'https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?w=800&q=80&auto=format&fit=crop',
    tag: 'Spiritual',
  },
  // Cultural & Recreational
  {
    name: 'Central Museum',
    category: 'Cultural' as Category,
    description: 'A treasure trove of Holkar-era artifacts, ancient sculptures, paintings and archaeological finds from across Madhya Pradesh.',
    img: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800&q=80&auto=format&fit=crop',
    tag: 'Cultural & Recreational',
  },
  {
    name: 'Meghdoot Garden',
    category: 'Cultural' as Category,
    description: 'A lush, well-maintained public garden — perfect for leisurely morning walks, picnics and a breath of fresh air.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop',
    tag: 'Cultural & Recreational',
  },
  {
    name: 'Gulawat Lotus Valley',
    category: 'Cultural' as Category,
    description: 'A stunning seasonal wetland blanketed in pink and white lotus flowers, best visited during the monsoon and post-monsoon months.',
    img: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=80&auto=format&fit=crop',
    tag: 'Cultural & Recreational',
  },
  {
    name: 'Ralamandal Wildlife Sanctuary',
    category: 'Cultural' as Category,
    description: 'A compact forest sanctuary on the outskirts of Indore, home to deer, leopards and a rich variety of birdlife.',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop',
    tag: 'Cultural & Recreational',
  },
  // Food & Dining
  {
    name: 'Sarafa Night Food Market',
    category: 'Food' as Category,
    description: 'A world-famous jewellery bazaar by day that transforms into Indore\'s most iconic street food destination after dark — not to be missed.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop',
    tag: 'Food & Dining',
  },
  {
    name: 'Chhappan Dukan',
    category: 'Food' as Category,
    description: 'An organised strip of 56 shops serving Indore\'s best chaat, sweets, savouries and chai — the heartbeat of local food culture.',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format&fit=crop',
    tag: 'Food & Dining',
  },
  {
    name: 'Indore Zoo',
    category: 'Cultural' as Category,
    description: 'Kamla Nehru Prani Sangrahalaya — a popular city zoo housing lions, tigers, crocodiles and a wide variety of exotic birds.',
    img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?w=800&q=80&auto=format&fit=crop',
    tag: 'Cultural & Recreational',
  },
]

const CATEGORIES: Category[] = ['All', 'Heritage', 'Spiritual', 'Cultural', 'Food']

const CATEGORY_COLORS: Record<Category, string> = {
  All: 'bg-teal/10 text-teal',
  Heritage: 'bg-maroon/10 text-maroon',
  Spiritual: 'bg-gold/20 text-amber-700',
  Cultural: 'bg-teal/10 text-teal',
  Food: 'bg-ink/8 text-ink-soft',
}

export default function PlacesToVisitIndorePage() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? PLACES : PLACES.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        current="Places to Visit in Indore"
        eyebrow="Host City · Indore"
        title={
          <>
            Explore the soul of{' '}
            <span className="italic text-gold-soft">Incredible Indore</span>
          </>
        }
        subtitle="From Holkar-era palaces and glittering temples to legendary night food markets — Indore rewards every curious visitor."
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
                {cat === 'All' ? 'All Places' : cat === 'Cultural' ? 'Cultural & Recreational' : cat === 'Food' ? 'Food & Dining' : cat === 'Heritage' ? 'Heritage & Historical' : 'Spiritual'}
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
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${CATEGORY_COLORS[place.category]} bg-white/80`}>
                    {place.tag}
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
            All attractions are within easy reach of the conference venue in Indore.
          </motion.p>
        </Container>
      </section>
    </>
  )
}
