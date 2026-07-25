import { motion } from 'framer-motion'
import { Star, MapPin, CheckCircle2, Phone, Mail, Plane, TrainFront, BedDouble, IndianRupee } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Tier = 'Official' | 'Luxury' | 'Mid-Range' | 'Budget'

const HOTELS = [
  {
    tier: 'Official' as Tier,
    name: 'Vivanta Indore Amaltas',
    brand: 'Vivanta Hotels',
    stars: 5,
    tag: 'Official Conference Hotel',
    distance: 'Conference Venue',
    distanceKm: '0 km',
    price: '₹8,000 – ₹14,000',
    priceNote: 'per night (approx.)',
    description:
      'The official host hotel of ICAAICON 2026 — a sophisticated five-star property combining contemporary design with warm hospitality. Delegates staying here enjoy direct access to all conference halls, seamless networking opportunities and priority check-in.',
    // Placeholder: Vivanta Indore Amaltas is a pre-opening property (2026) with no public photography available yet.
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80&auto=format&fit=crop',
    amenities: ['Conference halls on-site', 'Swimming pool & spa', 'Multi-cuisine restaurants', 'Business centre', 'Airport transfer', 'Free Wi-Fi'],
    highlight: true,
    contactPerson: { name: 'Piyush Rathore', phone: '9009090439' },
  },
]

/** Empanelled accommodation list for delegates, from the official
 *  "Accommodation List - ICAAICON 2026" sheet. Rates/rooms are approximate
 *  and provided by each hotel directly. */
const ACCOMMODATION_LIST = [
  {
    name: 'Indore Marriott',
    address: 'H-2 Scheme No 54, Meghdoot Garden, Vijay Nagar, Indore, Madhya Pradesh 452010',
    phones: ['0731-4777777'],
    rooms: 216,
    rate: 10000,
    distanceVenue: '4.6 km',
    distanceAirport: '16.1 km',
    distanceRailway: '6.1 km',
    img: 'https://ak-d.tripcdn.com/images/0226512000i398nkf5D34_R_960_660_R5_D.jpg',
  },
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

                  {hotel.contactPerson && (
                    <div className="flex items-center gap-3 rounded-2xl bg-gold/10 px-4 py-3">
                      <Phone size={16} className="shrink-0 text-amber-700" />
                      <p className="text-sm text-ink-soft">
                        <span className="font-semibold text-ink">Discounted rates:</span> Contact{' '}
                        <span className="font-semibold text-ink">{hotel.contactPerson.name}</span> at{' '}
                        <a
                          href={`tel:+91${hotel.contactPerson.phone}`}
                          className="font-semibold text-amber-700 underline underline-offset-2"
                        >
                          +91 {hotel.contactPerson.phone.slice(0, 5)} {hotel.contactPerson.phone.slice(5)}
                        </a>
                      </p>
                    </div>
                  )}

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
