import { motion } from 'framer-motion'
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell, CheckCircle2, Phone, Mail } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Tier = 'Official' | 'Luxury' | 'Mid-Range' | 'Budget'

const HOTELS = [
  {
    tier: 'Official' as Tier,
    name: 'Vivanta Indore',
    brand: 'Vivanta Hotels',
    stars: 5,
    tag: 'Official Conference Hotel',
    distance: 'Conference Venue',
    distanceKm: '0 km',
    price: '₹8,000 – ₹14,000',
    priceNote: 'per night (approx.)',
    description:
      'The official host hotel of ICAAICON 2026 — a sophisticated five-star property combining contemporary design with warm hospitality. Delegates staying here enjoy direct access to all conference halls, seamless networking opportunities and priority check-in.',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80&auto=format&fit=crop',
    amenities: ['Conference halls on-site', 'Swimming pool & spa', 'Multi-cuisine restaurants', 'Business centre', 'Airport transfer', 'Free Wi-Fi'],
    highlight: true,
  },
  {
    tier: 'Luxury' as Tier,
    name: 'Radisson Blu Hotel Indore',
    brand: 'Radisson Hotels',
    stars: 5,
    tag: 'Luxury',
    distance: '2.5 km from venue',
    distanceKm: '2.5 km',
    price: '₹6,500 – ₹11,000',
    priceNote: 'per night (approx.)',
    description:
      'A striking five-star property in the heart of Indore\'s commercial district, offering spacious rooms, a rooftop pool and multiple dining outlets — an excellent alternative for delegates seeking luxury close to the venue.',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&auto=format&fit=crop',
    amenities: ['Rooftop infinity pool', 'Spa & wellness centre', 'Fine dining restaurant', 'Fitness centre', 'Valet parking', 'Free Wi-Fi'],
    highlight: false,
  },
  {
    tier: 'Luxury' as Tier,
    name: 'Sayaji Hotel Indore',
    brand: 'Sayaji Hotels',
    stars: 5,
    tag: 'Luxury',
    distance: '3 km from venue',
    distanceKm: '3 km',
    price: '₹5,500 – ₹9,000',
    priceNote: 'per night (approx.)',
    description:
      'One of Indore\'s most established luxury properties, Sayaji is known for its expansive banquet spaces, excellent regional cuisine and reliable service — a popular choice for conference delegates.',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&auto=format&fit=crop',
    amenities: ['Multiple restaurants', 'Banquet facilities', 'Swimming pool', 'Ayurvedic spa', 'Business centre', 'Free Wi-Fi'],
    highlight: false,
  },
  {
    tier: 'Mid-Range' as Tier,
    name: 'Lemon Tree Premier Indore',
    brand: 'Lemon Tree Hotels',
    stars: 4,
    tag: 'Mid-Range',
    distance: '4 km from venue',
    distanceKm: '4 km',
    price: '₹3,500 – ₹6,000',
    priceNote: 'per night (approx.)',
    description:
      'A smart four-star hotel with well-appointed rooms, a refreshing pool and consistent service — ideal for delegates who want comfortable, professionally managed accommodation without the full five-star price tag.',
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80&auto=format&fit=crop',
    amenities: ['Swimming pool', 'All-day dining', 'Meeting rooms', 'Fitness centre', 'Paid parking', 'Free Wi-Fi'],
    highlight: false,
  },
  {
    tier: 'Mid-Range' as Tier,
    name: 'WOW! Hotel Indore',
    brand: 'WOW Hotels',
    stars: 4,
    tag: 'Mid-Range',
    distance: '3.5 km from venue',
    distanceKm: '3.5 km',
    price: '₹2,800 – ₹5,500',
    priceNote: 'per night (approx.)',
    description:
      'A contemporary four-star hotel offering modern rooms, friendly service and a great location — well suited for delegates seeking good value with a professional standard of stay.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&auto=format&fit=crop',
    amenities: ['Modern rooms', 'Restaurant & bar', 'Conference facility', 'Gym', 'Parking', 'Free Wi-Fi'],
    highlight: false,
  },
  {
    tier: 'Budget' as Tier,
    name: 'Hotel Amar Vilas',
    brand: 'Independent',
    stars: 3,
    tag: 'Budget-Friendly',
    distance: '5 km from venue',
    distanceKm: '5 km',
    price: '₹1,200 – ₹2,500',
    priceNote: 'per night (approx.)',
    description:
      'A clean, comfortable three-star property offering reliable no-frills accommodation at an affordable price — a practical option for postgraduate delegates and those on a tighter budget.',
    img: 'https://images.unsplash.com/photo-1596701062351-8ac031a0a713?w=800&q=80&auto=format&fit=crop',
    amenities: ['Air-conditioned rooms', 'Restaurant', 'Room service', '24-hr reception', 'Parking', 'Free Wi-Fi'],
    highlight: false,
  },
]

const TIER_COLORS: Record<Tier, string> = {
  Official: 'bg-gold/20 text-amber-700',
  Luxury: 'bg-teal/10 text-teal',
  'Mid-Range': 'bg-ink/8 text-ink-soft',
  Budget: 'bg-maroon/10 text-maroon',
}

const TIPS = [
  {
    icon: '📅',
    title: 'Book Early',
    desc: 'September is peak conference season in Indore. We strongly recommend booking your accommodation at least 2–3 months in advance to secure the best rates.',
  },
  {
    icon: '🏷️',
    title: 'Delegate Rates',
    desc: 'The official hotel (Vivanta) offers special negotiated rates for ICAAICON 2026 delegates. Quote "ICAAICON 2026" when booking to avail the discount.',
  },
  {
    icon: '🚖',
    title: 'Transport',
    desc: 'All listed hotels are within 5 km of the conference venue. Ola/Uber cabs are readily available and affordable for the daily commute.',
  },
  {
    icon: '💳',
    title: 'Payment',
    desc: 'All hotels accept major credit/debit cards and UPI. Carry some cash for auto-rickshaws and street food markets.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-gold text-gold" />
      ))}
    </div>
  )
}

export default function HotelAccommodationPage() {
  return (
    <>
      <PageHeader
        current="Hotel & Accommodation"
        eyebrow="Host City · Stay"
        title={
          <>
            Where to stay in{' '}
            <span className="italic text-gold-soft">Indore</span>
          </>
        }
        subtitle="From the official conference hotel to comfortable mid-range options — find the right stay for your visit to ICAAICON 2026."
      />

      {/* Featured: Official hotel */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          {HOTELS.filter((h) => h.highlight).map((hotel) => (
            <motion.div
              key={hotel.name}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="overflow-hidden rounded-3xl bg-white shadow-lift ring-2 ring-gold/40"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <motion.div variants={fadeUp} className="relative overflow-hidden">
                  <Img
                    src={hotel.img}
                    alt={hotel.name}
                    className="h-full min-h-[320px] w-full object-cover"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-ivory shadow">
                    ★ Official Conference Hotel
                  </span>
                </motion.div>

                {/* Info */}
                <motion.div variants={fadeUp} className="flex flex-col gap-5 p-8 lg:p-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal">{hotel.brand}</p>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">{hotel.name}</h2>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <StarRating count={hotel.stars} />
                      <span className="flex items-center gap-1 text-xs text-ink-muted">
                        <MapPin size={12} className="text-teal" />{hotel.distance}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-soft">{hotel.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {hotel.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-sm text-ink-soft">
                        <CheckCircle2 size={14} className="shrink-0 text-teal" />
                        {a}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4 border-t border-ink/8 pt-5">
                    <div>
                      <p className="text-xs text-ink-muted">Starting from</p>
                      <p className="font-display text-2xl font-bold text-ink">{hotel.price}</p>
                      <p className="text-xs text-ink-muted">{hotel.priceNote}</p>
                    </div>
                    <a
                      href="mailto:icaaicon2026@gmail.com"
                      className="btn-accent"
                    >
                      Request Delegate Rate
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* Other hotels */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />More Options</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Other recommended hotels
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink-soft">
              Indore offers excellent accommodation across all budgets within easy reach of the venue.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {HOTELS.filter((h) => !h.highlight).map((hotel) => (
              <motion.div
                key={hotel.name}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-lift transition-shadow"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Img
                    src={hotel.img}
                    alt={hotel.name}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm bg-white/85 ${TIER_COLORS[hotel.tier]}`}>
                    {hotel.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal">{hotel.brand}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">{hotel.name}</h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-3">
                      <StarRating count={hotel.stars} />
                      <span className="flex items-center gap-1 text-xs text-ink-muted">
                        <MapPin size={12} className="text-teal" />{hotel.distance}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-soft flex-1">{hotel.description}</p>

                  {/* Amenity icons */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'Wi-Fi', Icon: Wifi },
                      { key: 'Parking', Icon: Car },
                      { key: 'Dining', Icon: Utensils },
                      { key: 'Gym', Icon: Dumbbell },
                    ].map(({ key, Icon }) => (
                      <span key={key} className="inline-flex items-center gap-1 rounded-full bg-ivory-deep px-2.5 py-1 text-xs text-ink-soft">
                        <Icon size={11} className="text-teal" />{key}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-ink/8 pt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-ink-muted">From</p>
                      <p className="font-display text-xl font-bold text-ink">{hotel.price}</p>
                      <p className="text-xs text-ink-muted">{hotel.priceNote}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Booking tips */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-10 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />Booking Advice</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Tips for delegates</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {TIPS.map((tip) => (
              <motion.div
                key={tip.title}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-card text-center items-center"
              >
                <span className="text-4xl">{tip.icon}</span>
                <p className="font-display text-base font-semibold text-ink">{tip.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{tip.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Contact for accommodation */}
      <section className="bg-teal-deep py-14">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col items-center gap-6 text-center"
          >
            <h2 className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
              Need help with accommodation?
            </h2>
            <p className="max-w-xl text-base text-ivory/75">
              Contact the ICAAICON 2026 secretariat for assistance with group bookings, delegate rates at the official hotel, or any accommodation queries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:icaaicon2026@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-deep shadow hover:bg-ivory transition-colors"
              >
                <Mail size={16} />
                icaaicon2026@gmail.com
              </a>
              <a
                href="tel:+918818940404"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-6 py-3 text-sm font-semibold text-ivory hover:bg-white/25 transition-colors"
              >
                <Phone size={16} />
                +91 88189 40404
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
