// =========================================================================
// content.ts — single source of truth for all site copy & data.
// Edit values here to update the whole site. Everything below comes from the
// Save-the-Date poster for ICAAICON Indore 2026.
// =========================================================================
import {
  Factory,
  Globe2,
  Wind,
  Flower2,
  Syringe,
  type LucideIcon,
} from 'lucide-react'

/** Core event facts (from the poster). */
export const EVENT = {
  edition: '60th',
  shortName: 'ICAAICON',
  longName: 'International Conference on Allergy, Asthma & Immunology',
  city: 'Indore',
  year: '2026',
  theme: 'Breathe Better, Live Better',
  tagline: 'Focusing on a Healthier Tomorrow',
  pillars: ['Science', 'Solutions', 'Sustainability'],
  dates: '24–27 September 2026',
  datesShort: '24–27 Sep 2026',
  // ISO start used by the countdown timer
  startISO: '2026-09-24T09:00:00+05:30',
  venue: {
    name: 'Vivanta Hotel',
    city: 'Indore',
    region: 'Madhya Pradesh, India',
    address: 'Vivanta by Taj, Indore, Madhya Pradesh 452010',
    mapsQuery: 'Vivanta+Indore',
  },
  contact: {
    address: 'Surbhi 76 Dhar Kothi, Residency Area, Indore',
    email: 'icaaicon2026@gmail.com',
    phone: '8818940404',
    instagram: '@icaacon2026',
  },
}

/** Navigation links shared by the navbar and footer. */
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Program', to: '/program' },
  { label: 'Contact', to: '/contact' },
]

/** Sub-links under the "Host City" dropdown. */
export const HOST_CITY_LINKS = [
  { label: 'About Indore', to: '/host-city/about-indore' },
  { label: 'Places to Visit in Indore', to: '/host-city/places-to-visit' },
  { label: 'Places to Visit near Indore', to: '/host-city/places-near-indore' },
  { label: 'How to Reach Indore', to: '/host-city/how-to-reach' },
  { label: 'Food and Culture', to: '/host-city/food-and-culture' },
  { label: 'Hotel & Accommodation', to: '/host-city/hotel-accommodation' },
]

/** The five focus areas + their poster icons. */
export type FocusArea = {
  icon: LucideIcon
  title: string
  blurb: string
  /** A tailwind-friendly accent key, mapped in the component. */
  accent: 'maroon' | 'teal' | 'ink' | 'gold' | 'tealSoft'
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    icon: Flower2,
    title: 'Allergy',
    blurb: 'Identifying, preventing and managing allergic disease more precisely.',
    accent: 'gold',
  },
  {
    icon: Wind,
    title: 'Asthma',
    blurb: 'Better understanding for better breathing across every age group.',
    accent: 'ink',
  },
  {
    icon: Syringe,
    title: 'Immunotherapy',
    blurb: 'Innovative, evidence-based solutions for lasting clinical relief.',
    accent: 'tealSoft',
  },
  {
    icon: Factory,
    title: 'Air Pollution',
    blurb: 'Reducing the impact of degrading air quality on respiratory health.',
    accent: 'maroon',
  },
  {
    icon: Globe2,
    title: 'Climate Change',
    blurb: 'Addressing the global threat that reshapes how and what we breathe.',
    accent: 'teal',
  },
]

/** Key milestone dates (placeholder values — customise freely). */
export const IMPORTANT_DATES = [
  { date: '15 Mar 2026', label: 'Abstract submission opens', status: 'open' },
  { date: '30 Jul 2026', label: 'Early-bird registration ends', status: 'soon' },
  { date: '31 Jul 2026', label: 'Abstract submission closes', status: 'upcoming' },
  { date: '20 Aug 2026', label: 'Acceptance notifications', status: 'upcoming' },
  { date: '24 Sep 2026', label: 'Conference begins', status: 'upcoming' },
] as const

/** Dummy speaker roster. Replace photos & names with the real faculty. */
export const SPEAKERS = [
  {
    name: 'Dr. Aarav Mehta',
    role: 'Chair, Clinical Immunology',
    org: 'AIIMS, New Delhi',
    // Photo: senior Indian male physician, clinical portrait, neutral backdrop
    photo:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Prof. Sara Khanna',
    role: 'Head, Pulmonary Medicine',
    org: 'PGIMER, Chandigarh',
    // Photo: female doctor in white coat, warm professional portrait
    photo:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Rohan Iyer',
    role: 'Director, Allergy Research',
    org: 'CMC Vellore',
    // Photo: mid-career male clinician, confident headshot
    photo:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Meera Nair',
    role: 'Lead, Paediatric Asthma',
    org: 'KEM Hospital, Mumbai',
    // Photo: female paediatric specialist, friendly portrait
    photo:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Prof. James Whitford',
    role: 'Climate & Respiratory Health',
    org: 'Imperial College, London',
    // Photo: international senior researcher, academic setting
    photo:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Ananya Bose',
    role: 'Immunotherapy Innovation',
    org: 'Tata Memorial, Mumbai',
    // Photo: young female scientist, lab-adjacent portrait
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop',
  },
]

/** Why-attend value propositions. */
export const BENEFITS = [
  {
    title: '60 years of scientific legacy',
    body: 'Join the diamond-jubilee edition of India’s flagship allergy & immunology forum.',
  },
  {
    title: '120+ global faculty',
    body: 'Learn from leading clinicians and researchers across five continents.',
  },
  {
    title: 'CME-accredited sessions',
    body: 'Earn recognised continuing-medical-education credits across four days.',
  },
  {
    title: 'Hands-on workshops',
    body: 'Practical, skills-first masterclasses in diagnosis and immunotherapy.',
  },
  {
    title: 'Research showcase',
    body: 'Present your work to peers through oral and e-poster sessions.',
  },
  {
    title: 'Network in Indore',
    body: 'Connect over the heritage, food and warmth of India’s cleanest city.',
  },
]

/** Registration tiers (placeholder pricing in INR). */
export const REGISTRATION_TIERS = [
  {
    name: 'Early Bird',
    price: '₹ 6,500',
    window: 'Until 30 Jul 2026',
    featured: false,
    perks: [
      'Full 4-day access',
      'Conference kit & badge',
      'Lunch & networking breaks',
      'E-certificate of participation',
    ],
  },
  {
    name: 'Standard',
    price: '₹ 11,000',
    window: '01 Jul – 31 Aug 2026',
    featured: true,
    perks: [
      'Everything in Early Bird',
      'Priority workshop seating',
      'Printed abstract book',
      'Gala dinner invitation',
    ],
  },
  {
    name: 'Postgraduate',
    price: '₹ 5,500',
    window: 'Valid student ID required',
    featured: false,
    perks: [
      'Full 4-day access',
      'Conference kit & badge',
      'E-poster eligibility',
      'E-certificate of participation',
    ],
  },
]

/** Gallery imagery — described per the brief. */
export const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop',
    alt: 'Conference auditorium with delegates seated for a keynote',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&q=80&auto=format&fit=crop',
    alt: 'Speaker presenting on stage with large screen',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop',
    alt: 'Clinicians reviewing respiratory diagnostics',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80&auto=format&fit=crop',
    alt: 'Rajwada palace, a heritage landmark of Indore',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&q=80&auto=format&fit=crop',
    alt: 'Networking session between conference delegates',
    span: '',
  },
]

/** Sponsor / partner placeholders. */
export const SPONSORS = [
  'MediCore Labs',
  'Aeris Pharma',
  'PulmoTech',
  'ImmunoVantage',
  'BreatheWell',
  'Sanjeevani Health',
  'NovaCare',
  'Indore MedTrust',
]

/** Program / abstract FAQs. */
export const FAQS = [
  {
    q: 'Who should attend ICAAICON 2026?',
    a: 'Allergologist, immunologists, pulmonologists, paediatricians, ENT specialists, general physicians, dermatologist, researchers and postgraduate students working in respiratory skin, eye, naso bronchial and allergic disease.',
  },
  {
    q: 'How do I submit an abstract?',
    a: 'Abstracts open on 15 March 2026 through the online portal. Submit under one of the five focus tracks; word limit and formatting guidelines are provided in the author kit.',
  },
  {
    q: 'Are CME credits provided?',
    a: 'Yes. Sessions are accredited for continuing-medical-education credits, and a credit certificate is issued after the conference.',
  },
  {
    q: 'What are the presentation formats?',
    a: 'Accepted work is presented as either a moderated oral session or a curated e-poster. Authors are notified of their format on 20 August 2026.',
  },
]
