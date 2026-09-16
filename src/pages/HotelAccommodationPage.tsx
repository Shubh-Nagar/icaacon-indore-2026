import { motion } from 'framer-motion'
import {
  Star,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  Plane,
  TrainFront,
  BedDouble,
  IndianRupee,
  Users,
  UtensilsCrossed,
  Waves,
} from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/** The official conference hotel. Figures, room categories, banquet
 *  capacities, dining outlets and photography are as published by the
 *  Indore Marriott Hotel (marriott.com — property code IDRMH). */
const MARRIOTT = {
  name: 'Indore Marriott Hotel',
  brand: 'Marriott Hotels · Marriott Bonvoy',
  stars: 5,
  distance: 'Conference Venue',
  price: '₹8,000 – ₹14,000',
  priceNote: 'per night (approx.)',
  overview:
    "Indore is one of India's fastest-growing commercial hubs, and the Indore Marriott Hotel sits at the heart of it in Vijay Nagar. Floor-to-ceiling windows, Italian marble bathrooms and a landscaped forecourt set the tone, while a 4,845 sq ft Grand Ballroom, adjoining salons and a sweeping lawn give ICAAICON 2026 every session, workshop and banquet under one roof.",
  location:
    'On Scheme No 54 beside Meghdoot Garden in Vijay Nagar — Indore’s business and retail district — with easy access to the airport, the railway station and the city’s landmarks.',
  hero: '/marriott/lobby.jpg',
  stats: [
    { icon: BedDouble, value: '216', label: 'Rooms & suites' },
    { icon: Plane, value: '16 km', label: 'From airport' },
    { icon: TrainFront, value: '6 km', label: 'From railway station' },
    { icon: Users, value: '650', label: 'Ballroom capacity' },
  ],
  /** ACCOMMODATION — 216 rooms and suites. */
  rooms: {
    img: '/marriott/guest-room.jpg',
    total: 216,
    categories: [
      'Deluxe room, king or twin',
      'Deluxe room with garden view',
      'Executive room with lounge access',
      'Executive suite',
      'Presidential suite',
    ],
  },
  /** MEETINGS & BANQUETS — venue capacities as published by the hotel. */
  banquets: {
    img: '/marriott/ballroom.jpg',
    venues: [
      { name: 'Marriott Lawn', capacity: 1500 },
      { name: 'Grand Ballroom', capacity: 650 },
      { name: 'Zodiac 1 & 2', capacity: 300 },
      { name: 'Salon 2', capacity: 175 },
      { name: 'Zodiac 1', capacity: 150 },
      { name: 'Salon 1', capacity: 150 },
      { name: 'Zodiac 2', capacity: 80 },
    ],
    extra:
      'Nine event rooms with dedicated pre-function areas, AV and video conferencing, and valet parking for 400 cars',
  },
  dining: {
    img: '/marriott/dining.jpg',
    outlets: [
      { name: 'Indore Kitchen', desc: 'All-day dining with live kitchens and buffet spreads' },
      { name: 'One Asia', desc: 'Pan-Asian restaurant and bar' },
      { name: 'Indore Baking Company', desc: 'Café, confectionery and deli' },
      { name: 'In-room dining', desc: 'Available around the clock' },
    ],
  },
  facilities: {
    img: '/marriott/pool.jpg',
    items: [
      '24-hour fitness centre',
      'Outdoor swimming pool with a poolside deck',
      'Qalm Spa for massages and treatments',
      'Business centre and complimentary Wi-Fi throughout',
    ],
  },
  contactPerson: {
    name: 'Mr. Gajendra Singh',
    title: 'Sales Manager',
    phone: '9826901244',
    email: 'gajendra.vaskale@marriott.com',
  },
  reservations: {
    phone: '+91 731 477 7777',
    website: 'https://www.marriott.com/en-us/hotels/idrmh-indore-marriott-hotel/overview/',
  },
}

/** Empanelled accommodation list for delegates, from the official
 *  "Accommodation List - ICAAICON 2026" sheet, minus the Indore Marriott —
 *  it is now the conference hotel and is featured above. Rates/rooms are
 *  approximate and provided by each hotel directly. */
const ACCOMMODATION_LIST = [
  {
    name: 'Wow Crest',
    address: 'PU-3 Commercial, Plot No. 106, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010',
    phones: ['0731-6711111'],
    rooms: 125,
    rate: 7000,
    distanceVenue: '13 km',
    distanceAirport: '17 km',
    distanceRailway: '5 km',
    img: 'https://ak-d.tripcdn.com/images/0224j12000cfirig42C8D_R_960_660_R5_D.jpg',
  },
  {
    name: 'Sayaji Indore',
    address: 'H/1, Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['0731-4006666'],
    rooms: 213,
    rate: 6000,
    distanceVenue: '8 km',
    distanceAirport: '16.8 km',
    distanceRailway: '5 km',
    img: 'https://ak-d.tripcdn.com/images/0586212000dsx1zkj07FF_R_960_660_R5_D.jpg',
  },
  {
    name: 'Radisson Blu',
    address: '12, Ring Rd, Scheme No 171, Indore, Madhya Pradesh 452010',
    phones: ['0731-6738888'],
    rooms: 200,
    rate: 7000,
    distanceVenue: '14 km',
    distanceAirport: '18.4 km',
    distanceRailway: '6.3 km',
    img: 'https://ak-d.tripcdn.com/images/220i18000001464k0C56D_R_960_660_R5_D.jpg',
  },
  {
    name: 'Effottel',
    address: 'Plot No. 10, C/CA, Scheme No. 94, Sector C, Scheme 94 Sector CA, Indore, Madhya Pradesh 452010',
    phones: ['7898001990'],
    rooms: 181,
    rate: 6000,
    distanceVenue: '14 km',
    distanceAirport: '18.2 km',
    distanceRailway: '7 km',
    img: 'https://ak-d.tripcdn.com/images/0225o12000b3rugo75ED3_R_960_660_R5_D.jpg',
  },
  {
    name: 'Best Western Plus',
    address: '306 B, PU4, Scheme 54, AB Rd, near Rasoma Lab Square Road, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['0731-4266666'],
    rooms: 71,
    rate: 4500,
    distanceVenue: '8 km',
    distanceAirport: '12 km',
    distanceRailway: '5.2 km',
    img: 'https://ak-d.tripcdn.com/images/0222f12000cjqjrs3B975_R_960_660_R5_D.jpg',
  },
  {
    name: 'Infinity',
    address: '1C/CA, Ring Rd, Opp. Prestige College, Near Bombay Hospital, Scheme No 94 Sector EB, Indore, Madhya Pradesh 452010',
    phones: ['9981777778'],
    rooms: 49,
    rate: 5000,
    distanceVenue: '13 km',
    distanceAirport: '18 km',
    distanceRailway: '6.3 km',
    img: 'https://assets.simplotel.com/simplotel/image/upload/x_0,y_70,w_1920,h_689,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/hotel-infiniti/Infiniti-Hotel_6ae29eb7',
  },
  {
    name: 'Alba Inn',
    address: 'Plot No. 60, 61, 62, Scheme No. 53, Ratanlok Colony, Medanta Hospital Road, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['91110-05423', '91099-74973'],
    rooms: 43,
    rate: 5000,
    distanceVenue: '3.4 km',
    distanceAirport: '18 km',
    distanceRailway: '5.7 km',
    img: 'https://ak-d.tripcdn.com/images/0222i12000qn6tbviA93A_R_960_660_R5_D.jpg',
  },
  {
    name: 'Hotel Carry Inn',
    address: 'CG-06, Scheme No. 136, opposite VIBGYOR School, near Brilliant Convention Centre, Vijay Nagar, Indore, Madhya Pradesh',
    phones: ['09981-160603'],
    rooms: 38,
    rate: 3000,
    distanceVenue: '1.1 km',
    distanceAirport: '15.8 km',
    distanceRailway: '7.1 km',
    img: 'https://carryhotels.com/images/uploads/s_3975/Carry_Facade_Night_View_3_5056.png',
  },
  {
    name: 'Treebo Musk',
    address: '3C S/1, Scheme No 78-III, Sector D, Slice 1, Aranya Nagar, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['09322-800100'],
    rooms: 23,
    rate: 1500,
    distanceVenue: '5.5 km',
    distanceAirport: '17.5 km',
    distanceRailway: '7 km',
    img: 'https://cs-images.treebo.com/Treebo_Musk/OAK/Oak_1_.jpg?auto=compress',
  },
  {
    name: 'Hotel Om Stay Well',
    address: '33/2 Chhoti Gwaltoli, near Sardar Patel Bridge and Sarwate Bus Stand, Indore, Madhya Pradesh',
    phones: ['09826-067661'],
    rooms: 21,
    rate: 2000,
    distanceVenue: '3.4 km',
    distanceAirport: '8.4 km',
    distanceRailway: '300 m',
    img: 'https://ak-d.tripcdn.com/images/0584712000sxi8m9dC52C_R_960_660_R5_D.jpg',
  },
  {
    name: 'Hotel The Bellevue',
    address: 'EC 39, Scheme 94, Sector C, Pushp Vihar Colony, Indore, Madhya Pradesh',
    phones: ['8460562382', '9009929213'],
    rooms: 13,
    rate: 2200,
    distanceVenue: '4.2 km',
    distanceAirport: '18.4 km',
    distanceRailway: '6.4 km',
    img: 'https://ak-d.tripcdn.com/images/0226o12000othosh6D6F3_R_960_660_R5_D.jpg',
  },
  {
    name: 'Omni Residency',
    address: '7-8 Ring Road, Scheme No. 94, near Bombay Hospital, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['8818866166'],
    rooms: 36,
    rate: 3500,
    distanceVenue: '4.4 km',
    distanceAirport: '19 km',
    distanceRailway: '6.9 km',
    img: 'https://ak-d.tripcdn.com/images/0225i12000kyrm5eiC055_R_960_660_R5_D.jpg',
  },
  {
    name: 'Aceotel Inn Flamingo',
    address: 'Plot No. 193, Vasant Vihar, Sector C, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['09752-895362'],
    rooms: 16,
    rate: 1500,
    distanceVenue: '6 km',
    distanceAirport: '18 km',
    distanceRailway: '6.9 km',
    img: 'https://cdn3.shopvii.com/1307/1047/IMG_20240311_WA0007.jpg',
  },
  {
    name: 'Treebo Trend Holiday',
    address: 'Plot No. 57, PU-4, Scheme No. 54, behind C21 Mall on AB Road, LIG Colony, Indore, Madhya Pradesh',
    phones: ['9322800100'],
    rooms: 32,
    rate: 2500,
    distanceVenue: '8 km',
    distanceAirport: '14 km',
    distanceRailway: '5.5 km',
    img: 'https://ak-d.tripcdn.com/images/0225r12000aphgqqd9CF6_R_960_660_R5_D.jpg',
  },
]

const TIPS = [
  {
    icon: '📅',
    title: 'Book Early',
    desc: 'September is peak conference season in Indore. We strongly recommend booking your accommodation at least 2–3 months in advance to secure the best rates.',
  },
  {
    icon: '🏷️',
    title: 'Delegate Rates',
    desc: 'The official hotel (Indore Marriott) offers special negotiated rates for ICAAICON 2026 delegates. Quote "ICAAICON 2026" when booking to avail the discount.',
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="overflow-hidden rounded-3xl bg-white shadow-lift ring-2 ring-gold/40"
          >
            {/* Hero: hotel lobby */}
            <motion.div variants={fadeUp} className="relative overflow-hidden">
              <Img
                src={MARRIOTT.hero}
                alt={`The reception lobby at the ${MARRIOTT.name}`}
                className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-ivory shadow">
                ★ Official Conference Hotel
              </span>
            </motion.div>

            <div className="p-8 lg:p-10">
              {/* Identity + overview */}
              <motion.div variants={fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal">{MARRIOTT.brand}</p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">{MARRIOTT.name}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <StarRating count={MARRIOTT.stars} />
                  <span className="flex items-center gap-1 text-xs text-ink-muted">
                    <MapPin size={12} className="text-teal" />
                    {MARRIOTT.distance}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">{MARRIOTT.overview}</p>
              </motion.div>

              {/* Key figures */}
              <motion.div
                variants={fadeUp}
                className="mt-8 grid grid-cols-2 gap-3 rounded-2xl bg-ivory-deep p-4 sm:grid-cols-4"
              >
                {MARRIOTT.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon size={16} className="mx-auto text-teal" />
                    <p className="mt-1.5 font-display text-xl font-bold text-ink">{stat.value}</p>
                    <p className="text-[11px] leading-tight text-ink-muted">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Accommodation */}
              <motion.div variants={fadeUp} className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
                <Img
                  src={MARRIOTT.rooms.img}
                  alt={`A guest room at the ${MARRIOTT.name}`}
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">Accommodation</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    {MARRIOTT.rooms.total} well-appointed rooms across five categories:
                  </p>
                  <ul className="mt-4 space-y-2">
                    {MARRIOTT.rooms.categories.map((room) => (
                      <li key={room} className="flex items-start gap-2 text-sm text-ink-soft">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-teal" />
                        {room}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Meetings & banquets */}
              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center"
              >
                <Img
                  src={MARRIOTT.banquets.img}
                  alt={`The Grand Ballroom at the ${MARRIOTT.name}`}
                  className="aspect-[4/3] w-full rounded-2xl object-cover lg:order-2"
                />
                <div className="lg:order-1">
                  <h3 className="font-display text-lg font-semibold text-ink">Meetings &amp; Banquets</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    The city's grandest conferencing spaces — every ICAAICON session, workshop and banquet
                    happens here.
                  </p>
                  <ul className="mt-4 divide-y divide-ink/8 border-y border-ink/8">
                    {MARRIOTT.banquets.venues.map((venue) => (
                      <li key={venue.name} className="flex items-baseline justify-between gap-3 py-2">
                        <span className="text-sm text-ink-soft">{venue.name}</span>
                        <span className="shrink-0 text-xs font-semibold text-teal">
                          {venue.capacity} pax
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-teal" />
                    {MARRIOTT.banquets.extra}
                  </p>
                </div>
              </motion.div>

              {/* Dining & facilities */}
              <motion.div variants={fadeUp} className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl bg-ivory-deep">
                  <Img
                    src={MARRIOTT.dining.img}
                    alt={`One Asia, the pan-Asian restaurant and bar at the ${MARRIOTT.name}`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                      <UtensilsCrossed size={16} className="text-teal" />
                      Dining
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {MARRIOTT.dining.outlets.map((outlet) => (
                        <li key={outlet.name} className="text-sm text-ink-soft">
                          <span className="font-semibold text-ink">{outlet.name}</span> — {outlet.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-ivory-deep">
                  <Img
                    src={MARRIOTT.facilities.img}
                    alt={`The outdoor swimming pool at the ${MARRIOTT.name}`}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                      <Waves size={16} className="text-teal" />
                      Facilities
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {MARRIOTT.facilities.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Location note */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex items-start gap-3 rounded-2xl bg-teal/8 px-5 py-4"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Location:</span> {MARRIOTT.location}
                </p>
              </motion.div>

              {/* Delegate rates — single point of contact at the hotel. */}
              <motion.div
                variants={fadeUp}
                className="mt-4 flex items-start gap-3 rounded-2xl bg-gold/10 px-5 py-4"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-amber-700" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Discounted delegate rates:</span> For all
                  room bookings at the {MARRIOTT.name}, the single point of contact is{' '}
                  <span className="font-semibold text-ink">{MARRIOTT.contactPerson.name}</span>,{' '}
                  {MARRIOTT.contactPerson.title}, at{' '}
                  <a
                    href={`tel:+91${MARRIOTT.contactPerson.phone}`}
                    className="font-semibold text-amber-700 underline underline-offset-2"
                  >
                    +91 {MARRIOTT.contactPerson.phone.slice(0, 5)} {MARRIOTT.contactPerson.phone.slice(5)}
                  </a>{' '}
                  or{' '}
                  <a
                    href={`mailto:${MARRIOTT.contactPerson.email}`}
                    className="font-semibold text-amber-700 underline underline-offset-2"
                  >
                    {MARRIOTT.contactPerson.email}
                  </a>
                  {/* . For direct hotel reservations, call{' '}
                  <a
                    href={`tel:${MARRIOTT.reservations.phone.replace(/\s/g, '')}`}
                    className="font-semibold text-amber-700 underline underline-offset-2"
                  >
                    {MARRIOTT.reservations.phone}
                  </a>{' '}
                  or book on the{' '}
                  <a
                    href={MARRIOTT.reservations.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-amber-700 underline underline-offset-2"
                  >
                    hotel's Marriott page
                  </a> */}
                  .
                </p>
              </motion.div>

              {/* Rate + CTA */}
              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-ink/8 pt-6"
              >
                <div>
                  <p className="text-xs text-ink-muted">Starting from</p>
                  <p className="font-display text-2xl font-bold text-ink">{MARRIOTT.price}</p>
                  <p className="text-xs text-ink-muted">{MARRIOTT.priceNote}</p>
                </div>
                <a href="mailto:icaaicon2026@gmail.com" className="btn-accent">
                  Request Delegate Rate
                </a>
              </motion.div>
            </div>
          </motion.div>
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
              An empanelled list of hotels across Indore, all within easy reach of the venue, airport and railway station.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ACCOMMODATION_LIST.map((hotel) => (
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
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-teal backdrop-blur-sm">
                    <MapPin size={12} />{hotel.distanceVenue} from venue
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{hotel.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{hotel.address}</p>
                  </div>

                  {/* Distance & room stats */}
                  <div className="grid grid-cols-3 gap-2 rounded-2xl bg-ivory-deep px-3 py-3 text-center">
                    <div>
                      <Plane size={13} className="mx-auto text-teal" />
                      <p className="mt-1 text-xs font-semibold text-ink">{hotel.distanceAirport}</p>
                      <p className="text-[10px] text-ink-muted">Airport</p>
                    </div>
                    <div>
                      <TrainFront size={13} className="mx-auto text-teal" />
                      <p className="mt-1 text-xs font-semibold text-ink">{hotel.distanceRailway}</p>
                      <p className="text-[10px] text-ink-muted">Railway</p>
                    </div>
                    <div>
                      <BedDouble size={13} className="mx-auto text-teal" />
                      <p className="mt-1 text-xs font-semibold text-ink">{hotel.rooms}</p>
                      <p className="text-[10px] text-ink-muted">Rooms</p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-ink/8 pt-4">
                    <div>
                      <p className="text-xs text-ink-muted">Approx. rate</p>
                      <p className="flex items-center font-display text-xl font-bold text-ink">
                        <IndianRupee size={16} className="mr-0.5" />{hotel.rate.toLocaleString('en-IN')}
                        <span className="ml-1 text-xs font-normal text-ink-muted">/night</span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {hotel.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:+91${p.replace(/\D/g, '').slice(-10)}`}
                          className="inline-flex items-center gap-1.5 rounded-full bg-teal/8 px-3 py-1.5 text-xs font-semibold text-teal hover:bg-teal/15 transition-colors"
                        >
                          <Phone size={12} />{p}
                        </a>
                      ))}
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
                href="tel:+919424540909"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-6 py-3 text-sm font-semibold text-ivory hover:bg-white/25 transition-colors"
              >
                <Phone size={16} />
                +91 94245 40909
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
