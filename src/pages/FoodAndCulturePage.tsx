import { motion } from 'framer-motion'
import { Utensils, Music, Sparkles, Star } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

const DISHES = [
  {
    name: 'Poha & Jalebi',
    emoji: '🍽️',
    description:
      'The quintessential Indore breakfast — light, fluffy poha seasoned with mustard, curry leaves and spices, garnished with sev and lemon, paired with hot crisp jalebis. A combination that has defined mornings in this city for generations.',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&q=80&auto=format&fit=crop',
    tag: 'Breakfast Classic',
  },
  {
    name: 'Dal Bafla',
    emoji: '🫕',
    description:
      'Madhya Pradesh\'s answer to the Rajasthani dal-baati — baked wheat dumplings dunked in ghee, served with rich lentil dal, tangy chutneys and kadhi. A wholesome, soul-satisfying meal rooted in Malwa tradition.',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=80&auto=format&fit=crop',
    tag: 'Regional Specialty',
  },
  {
    name: 'Bhutte Ka Kees',
    emoji: '🌽',
    description:
      'Grated fresh corn cooked with milk, ghee and spices into a warm, creamy savoury dish — an Indore monsoon staple that has crossed seasons to become a year-round favourite at street stalls across the city.',
    img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=700&q=80&auto=format&fit=crop',
    tag: 'Street Favourite',
  },
  {
    name: 'Garadu',
    emoji: '🥔',
    description:
      'Crispy fried yam (kand) seasoned with chaat masala and lemon — a beloved winter street snack of Indore, unique to this city and impossible to find elsewhere quite like this.',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=700&q=80&auto=format&fit=crop',
    tag: 'Only in Indore',
  },
  {
    name: 'Shahi Shikanji',
    emoji: '🍹',
    description:
      'A rich, saffron-laced chilled milk drink — Indore\'s own spin on the shikanji tradition. Served cold and fragrant, it is the go-to refreshment after a walk through the city\'s bustling bazaars.',
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=700&q=80&auto=format&fit=crop',
    tag: 'Indore Original',
  },
  {
    name: 'Sabudana Khichdi & Chai',
    emoji: '☕',
    description:
      'A light, pearl-sago stir-fry cooked with peanuts, green chillies and cumin — paired with masala chai at any hour. The everyday comfort food that defines tea-time across Indore\'s homes and dhabas alike.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
    tag: 'Comfort Food',
  },
]

const FOOD_SPOTS = [
  {
    name: 'Sarafa Bazaar',
    subtitle: 'Night Food Market',
    description:
      'A jewellery market by day, Sarafa transforms after 9 pm into one of India\'s most legendary night food streets. The entire stretch fills with vendors serving dahi falli, garadu, malpua, rabdi, and dozens of chaat varieties under twinkling lights. No visit to Indore is complete without this experience.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop',
    timing: 'Open: 9 PM – 2 AM',
    highlight: 'Night only',
  },
  {
    name: 'Chhappan Dukan',
    subtitle: '56 Shops Food Street',
    description:
      'Named for its 56 eateries packed side by side, Chhappan Dukan is Indore\'s most beloved organised food street — active from morning to midnight. From hot jalebis and kachori at dawn to chaat, sandwiches and ice creams at night, this strip captures the full breadth of Indore\'s food culture in one vibrant stretch.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
    timing: 'Open: 7 AM – 12 AM',
    highlight: 'All day',
  },
]

const FESTIVALS = [
  {
    name: 'Rang Panchami',
    icon: '🎨',
    description: 'Indore\'s grandest festival — celebrated five days after Holi with a massive city-wide colour procession unique to this region.',
  },
  {
    name: 'Navratri',
    icon: '💃',
    description: 'Nine nights of garba, dandiya and devotional music — celebrated with extraordinary energy across the city\'s neighbourhoods and grounds.',
  },
  {
    name: 'Diwali',
    icon: '🪔',
    description: 'The festival of lights transforms Indore into a sea of diyas, fireworks and sweets, with Sarafa Bazaar especially magical during this week.',
  },
  {
    name: 'Holi',
    icon: '🌈',
    description: 'Celebrated with abandon — streets overflow with colour, music and gujiya. The prelude to the unique Rang Panchami procession the week after.',
  },
]

const CULTURE_PILLARS = [
  {
    Icon: Music,
    title: 'Malwa Folk Traditions',
    description:
      'Indore is the heart of the Malwa plateau — a culture expressed in folk music (Maand, Lavani), Nimadi dialects, vibrant turbans and sarees, and an unmatched tradition of warm hospitality that makes every guest feel at home.',
  },
  {
    Icon: Sparkles,
    title: 'Arts & Handicrafts',
    description:
      'Rangoli art, handloom Maheshwari and Chanderi textiles, brasswork and tribal Gond paintings are integral to the region\'s artistic identity — widely available at Rajwada and the city\'s craft bazaars.',
  },
  {
    Icon: Star,
    title: 'India\'s Cleanest City',
    description:
      'Indore has won the Swachh Survekshan award as India\'s cleanest city seven consecutive years — a testament to strong civic pride, community participation, and a quality of life that makes it one of the country\'s most liveable urban centres.',
  },
  {
    Icon: Utensils,
    title: 'A City that Lives to Eat',
    description:
      'Food is not just nourishment in Indore — it is identity, community and art. The city consistently ranks among India\'s top street-food destinations, with a culinary culture so rich it has its own dedicated food tourism circuit.',
  },
]

export default function FoodAndCulturePage() {
  return (
    <>
      <PageHeader
        current="Food and Culture"
        eyebrow="Host City · Indore"
        title={
          <>
            The flavours & soul of{' '}
            <span className="italic text-gold-soft">Indore</span>
          </>
        }
        subtitle="India's food capital meets a city steeped in Malwa heritage — Indore promises an experience that goes far beyond the conference hall."
      />

      {/* Intro strip */}
      <section className="bg-teal-deep py-12">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 text-center sm:grid-cols-3"
          >
            {[
              { stat: '#1', label: 'Cleanest city in India', sub: '7 consecutive years' },
              { stat: '400+', label: 'Street food varieties', sub: 'A city that lives to eat' },
              { stat: '2,000+', label: 'Years of heritage', sub: 'Holkar dynasty & beyond' },
            ].map((item) => (
              <motion.div key={item.stat} variants={fadeUp} className="flex flex-col items-center gap-1">
                <span className="font-display text-4xl font-bold text-gold-soft">{item.stat}</span>
                <span className="text-sm font-semibold text-ivory">{item.label}</span>
                <span className="text-xs text-ivory/60">{item.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Must-try dishes */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />Street Food & Cuisine</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Must-try dishes in Indore
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink-soft">
              Indore's food scene is legendary across India — here are the dishes you simply cannot leave without trying.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {DISHES.map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card hover:shadow-lift transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <Img
                    src={dish.img}
                    alt={dish.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-teal backdrop-blur-sm">
                    {dish.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{dish.emoji}</span>
                    <h3 className="font-display text-lg font-semibold text-ink">{dish.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Famous food spots */}
      <section className="bg-ivory-deep py-16 lg:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />Famous Destinations</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Where to eat in Indore
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-10"
          >
            {FOOD_SPOTS.map((spot, i) => (
              <motion.div
                key={spot.name}
                variants={fadeUp}
                className={`grid items-center gap-8 overflow-hidden rounded-3xl bg-white shadow-card lg:grid-cols-2`}
              >
                <div className={`relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Img
                    src={spot.img}
                    alt={spot.name}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-teal px-3 py-1 text-xs font-bold text-ivory">
                    {spot.highlight}
                  </span>
                </div>
                <div className={`flex flex-col gap-4 p-8 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal">{spot.subtitle}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{spot.name}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-ink-soft">{spot.description}</p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-ivory-deep px-4 py-2 text-sm font-semibold text-ink w-fit">
                    <Utensils size={14} className="text-teal" />
                    {spot.timing}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Festivals */}
      <section className="bg-maroon py-16 lg:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-gold-soft"><span className="rule-gold !w-8" />Festivals & Celebrations</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ivory sm:text-4xl">
              A city that loves to celebrate
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ivory/75">
              Indore's calendar is rich with festivals celebrated with music, colour, food and community spirit unlike anywhere else.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {FESTIVALS.map((fest) => (
              <motion.div
                key={fest.name}
                variants={fadeUp}
                className="flex flex-col items-center gap-4 rounded-3xl bg-white/10 p-6 text-center backdrop-blur-sm border border-white/10"
              >
                <span className="text-5xl">{fest.icon}</span>
                <h3 className="font-display text-lg font-semibold text-ivory">{fest.name}</h3>
                <p className="text-sm leading-relaxed text-ivory/70">{fest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Culture pillars */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-12 text-center">
            <p className="eyebrow text-teal"><span className="rule-gold !w-8" />Culture & Identity</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              The spirit of Indore
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink-soft">
              Beyond the food, Indore is a city of art, heritage and civic pride — a place that leaves every visitor wanting to return.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2"
          >
            {CULTURE_PILLARS.map(({ Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex gap-5 rounded-3xl bg-white p-7 shadow-card"
              >
                <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal/10">
                  <Icon size={22} className="text-teal" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
