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
  Facebook,
  Instagram,
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
  auspices: 'Organized under the auspices of the Indian College of Allergy, Asthma and Applied Immunology and Amaltas University',
  // ISO start used by the countdown timer
  startISO: '2026-09-24T09:00:00+05:30',
  venue: {
    name: 'Vivanta Indore Amaltas',
    city: 'Indore',
    region: 'Madhya Pradesh, India',
    address: 'MR 10 Old Toll Naka Near Shree Ram and Enclave Apt, Indore, Indore, India, 453555',
    mapsQuery: 'Vivanta+Indore+Amaltas',
  },
  contact: {
    address: 'Surabhi 76 Dhar Kothi, Residency Area, Indore',
    email: 'icaaicon2026@gmail.com',
    phone: '9424540909',
    instagram: '@icaaicon2026',
  },
}

/** Google Form used for registration/payment — no backend, so this is the
 *  single external link every "register" CTA on the site points to. */
export const GOOGLE_FORM_URL = 'https://forms.gle/gP2GqLJZwsfwaN3y7'

/** Social media links for the homepage top utility bar. Replace the "#"
 *  placeholders once the real handles/pages go live. */
export const SOCIAL_LINKS: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/icaaicon2026', icon: Instagram },
]

/** Scrolling marquee notices shown in the homepage top bar. */
export const MARQUEE_NOTICES = [
  `Theme: "${EVENT.theme}"`,
  `Venue: ${EVENT.venue.name}, ${EVENT.venue.city}`,
  'Early-bird registration ends 30 Jul 2026',
  'Abstract submission closes 30 Jul 2026',
]

/** Navigation links shared by the navbar and footer. */
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Program', to: '/program' },
  { label: 'Sponsorship', to: '/sponsorship' },
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

/** A single committee's roster page — member names are placeholders until confirmed. */
export type Committee = {
  slug: string
  label: string
  to: string
  eyebrow: string
  description: string
  members: { name: string; designation: string; photo?: string }[]
}

export const COMMITTEES: Committee[] = [
  {
    slug: 'executive-committee',
    label: 'Executive Committee',
    to: '/committee/executive-committee',
    eyebrow: 'Committee · Executive',
    description:
      'The Executive Committee comprises the office bearers and council members of the Indian College of Allergy, Asthma & Applied Immunology (ICAAI), who steer the overall direction and governance of ICAAICON Indore 2026.',
    members: [
      {
        name: 'Dr. Suresh Koolwal',
        designation: 'President',
        photo: '/executive-committee/dr-suresh-koolwal.jpeg',
      },
      { name: 'Dr. Raj Kumar', designation: 'Vice President' },
      { name: 'Dr. A.B. Singh', designation: 'Secretary' },
      { name: 'Dr. Saibal Moitra', designation: 'Joint Secretary' },
      { name: 'Dr. Nitin Goel', designation: 'Treasurer' },
      {
        name: 'Dr. Surya Kant',
        designation: 'Editor',
        photo: '/executive-committee/dr-surya-kant.jpeg',
      },
      {
        name: 'Dr. Ajay Kumar Verma',
        designation: 'Council Member',
        photo: '/executive-committee/dr-ajay-kumar-verma.jpeg',
      },
      { name: 'Dr. A.K. Janmeja', designation: 'Council Member' },
      {
        name: 'Dr. Mahesh Goyal',
        designation: 'Council Member',
        photo: '/executive-committee/dr-mahesh-goyal.jpeg',
      },
      {
        name: 'Dr. Naveen Arora',
        designation: 'Council Member',
        photo: '/executive-committee/prof-naveen-arora.jpeg',
      },
      {
        name: 'Dr. Anil Kumar Jain',
        designation: 'Council Member',
        photo: '/executive-committee/prof-anil-kumar-jain.jpeg',
      },
      {
        name: 'Dr. Mahesh Kumar Mishra',
        designation: 'Council Member',
        photo: '/executive-committee/dr-mahesh-mishra.jpeg',
      },
      { name: 'Dr. Digamber Behera', designation: 'Ex-Officio Member (Past President)' },
      {
        name: 'Dr. Rajendra Prasad',
        designation: 'Convenor, North Zone',
        photo: '/executive-committee/dr-rajendra-prasad.jpeg',
      },
      {
        name: 'Dr. K.V. Nagendra Prasad',
        designation: 'Convenor, South Zone',
        photo: '/executive-committee/dr-nagendra-prasad-kv.jpeg',
      },
      {
        name: 'Dr. Gautam Modi',
        designation: 'Convenor, East Zone',
        photo: '/executive-committee/dr-gautam-modi.jpeg',
      },
      {
        name: 'Dr. V.K. Jain',
        designation: 'Convenor, West Zone',
        photo: '/executive-committee/dr-vikram-kumar-jain.jpeg',
      },
    ],
  },
  {
    slug: 'central-scientific-committee',
    label: 'Central Scientific Committee',
    to: '/committee/central-scientific-committee',
    eyebrow: 'Committee · Central Scientific',
    description:
      'The Central Scientific Committee curates the national scientific vision and academic standards for the conference. Names and designations will be announced shortly.',
    members: [
      { name: 'Prof. Raj Kumar', designation: 'Member' },
      { name: 'Dr. A.B. Singh', designation: 'Member' },
      { name: 'Dr. Naveen Arora', designation: 'Member' },
      { name: 'Dr. Saibal Moitra', designation: 'Member' },
      { name: 'Dr. Suresh Koolwal', designation: 'Member' },
      { name: 'Dr. Nitin Goel', designation: 'Member' },
    ],
  },
  {
    slug: 'organizing-committee',
    label: 'Organizing Committee',
    to: '/committee/organizing-committee',
    eyebrow: 'Committee · Organizing',
    description:
      'The Organizing Committee manages logistics, hospitality and on-ground execution for the conference in Indore.',
    members: [
      { name: 'Mr Surendra Singh Bhadoria', designation: 'Chief Patrons' },
      { name: 'Mr Mayankraj Singh Bhadoria', designation: 'Chief Patrons' },
      { name: 'Dr Ashok Bajpai', designation: 'Chief Patrons' },
      { name: 'Dr Yashwant Maru', designation: 'Chief Patrons' },
      { name: 'Dr Sharad Thora', designation: 'Chief Patrons' },
      { name: 'Dr H.K. Narang', designation: 'Chief Patrons' },
      { name: 'Dr Vallabh Mundra', designation: 'Patrons' },
      { name: 'Dr Anil Dashore', designation: 'Patrons' },
      { name: 'Dr Salil Bhargava', designation: 'Organizing Chairman' },
      { name: 'Dr Abhay Gupta', designation: 'Organizing Secretary' },
      { name: 'Dr Rajendra Mehta', designation: 'Treasurer' },
      { name: 'Dr Sanjay Avashia', designation: 'Vice Chairman' },
      { name: 'Dr SZ Zaffery', designation: 'Vice Chairman' },
      { name: 'Dr. Subir Jain', designation: 'Vice Chairman' },
      { name: 'Dr Deepak Bansal', designation: 'Joint Organizing Secretary' },
      { name: 'Dr Ravi Dosi', designation: 'Joint Organizing Secretary' },
      { name: 'Dr. Milind Baldi', designation: 'Scientific Committee' },
      { name: 'Dr Lokendra Dave', designation: 'Scientific Committee' },
      { name: 'Dr Shailesh Agrawal', designation: 'Scientific Committee' },
      { name: 'Dr Sumit Nawani', designation: 'Scientific Committee' },
    ],
  },
  {
    slug: 'scientific-committee',
    label: 'Scientific Committee',
    to: '/committee/scientific-committee',
    eyebrow: 'Committee · Scientific',
    description:
      'The Scientific Committee reviews abstracts and shapes the academic program tracks for the conference. Names and designations will be announced shortly.',
    members: [
      { name: 'To be announced', designation: 'Chairperson' },
      { name: 'To be announced', designation: 'Co-Chairperson' },
      { name: 'To be announced', designation: 'Convener' },
      { name: 'To be announced', designation: 'Member' },
      { name: 'To be announced', designation: 'Member' },
      { name: 'To be announced', designation: 'Member' },
    ],
  },
]

/** Sub-links under the "Committee" dropdown. */
export const COMMITTEE_LINKS = COMMITTEES.map((c) => ({ label: c.label, to: c.to }))

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
  { date: '30 Jul 2026', label: 'Abstract submission closes', status: 'upcoming' },
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

/** Registration tiers (INR). */
export const REGISTRATION_TIERS = [
  {
    name: 'ICAAI Member',
    price: '₹ 6,500',
    onSpotPrice: '₹ 9,500',
    window: 'Regular: 01 Jun – 10 Sep 2026',
    onSpotWindow: 'On spot: 11 Sep 2026 onwards',
    featured: true,
    perks: [
      'Full 4-day access',
      'Conference kit & badge',
      'Lunch & networking breaks',
      'E-certificate of participation',
    ],
  },
  {
    name: 'Non-ICAAI Member',
    price: '₹ 7,500',
    onSpotPrice: '₹ 11,500',
    window: 'Regular: 01 Jun – 10 Sep 2026',
    onSpotWindow: 'On spot: 11 Sep 2026 onwards',
    featured: false,
    perks: [
      'Full 4-day access',
      'Conference kit & badge',
      'Lunch & networking breaks',
      'E-certificate of participation',
    ],
  },
  {
    name: 'PG Student',
    price: '₹ 5,500',
    onSpotPrice: '₹ 7,500',
    window: 'Regular: 01 Jun – 10 Sep 2026',
    onSpotWindow: 'On spot: 11 Sep 2026 onwards',
    featured: false,
    perks: [
      'Full 4-day access',
      'Conference kit & badge',
      'E-poster eligibility',
      'E-certificate of participation',
    ],
  },
]

/** Sponsorship tiers (from "ICAAICON 2026 - Sponsorship Benefits"). GST @ 18% extra on all categories. */
export const SPONSORSHIP_TIERS = [
  {
    name: 'Platinum Sponsor',
    price: '₹ 10,00,000',
    tier: 'platinum',
    featured: true,
    perks: [
      'Premium exhibition stall',
      'Exclusive Platinum Sponsorship status (first-come, first-served)',
      'Prominent branding across all promotional materials and the official conference website',
      'Logo and company profile featured under the Platinum Sponsor category on the official Sponsor Panel',
      'Inclusion of promotional materials in the Delegate Kit',
      'Branding on participant badges',
    ],
  },
  {
    name: 'Diamond Sponsor',
    price: '₹ 8,00,000',
    tier: 'diamond',
    featured: false,
    perks: [
      'Premium exhibition stall',
      'High-visibility branding opportunities',
      'Logo and company profile featured under the Diamond Sponsor category on the Sponsor Panel',
      'Inclusion of promotional materials in the Delegate Kit',
    ],
  },
  {
    name: 'Gold Sponsor',
    price: '₹ 6,00,000',
    tier: 'gold',
    featured: false,
    perks: [
      'Exhibition stall',
      'Recognition as a Gold Sponsor on the conference website',
      'Logo and company profile featured under the Gold Sponsor category on the Sponsor Panel',
      'Inclusion of promotional materials in the Delegate Kit',
    ],
  },
  {
    name: 'Silver Sponsor',
    price: '₹ 4,00,000',
    tier: 'silver',
    featured: false,
    perks: [
      'Exhibition stall',
      'Recognition as a Silver Sponsor on the conference website',
      'Logo and company profile featured under the Silver Sponsor category on the Sponsor Panel',
    ],
  },
  {
    name: 'Regular Stall',
    price: '₹ 2,00,000',
    tier: 'regular',
    featured: false,
    perks: ['Standard exhibition stall'],
  },
]

/** Why sponsor — from the ICAAICON 2026 sponsorship invitation letter. */
export const SPONSORSHIP_BENEFITS = [
  'High-visibility brand presence among relevant specialists',
  'Direct interaction with clinicians actively managing asthma and allergy patients',
  'Opportunity to showcase products, devices, and innovations through exhibition and scientific engagement',
  "Association with a credible academic forum, reinforcing your company's commitment to education and patient care",
]

/** Sponsorship enquiries contact (from the invitation letter). */
export const SPONSORSHIP_CONTACT = {
  name: 'Dr. Salil Bhargava',
  role: 'Chairman, Organizing Committee',
  phone: '+919424540909',
  email: 'drsalilbhargava@gmail.com',
}

/** Downloadable sponsorship documents, uploaded to public/doc/. */
export const SPONSORSHIP_DOCS = [
  { label: 'Sponsorship Benefits (PDF/DOC)', href: '/doc/ICAAICON 2026 - Sponsorship Benefits (Update).pdf' },
  { label: 'Sponsorship Invitation Letter', href: '/doc/ICAAICON 2026 - Sponsorship Letter.pdf' },
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

/** Sponsor / partner list. */
export const SPONSORS = [
  { name: 'Malwanchal University', logo: '/partners/malwanchal-university.png' },
  { name: 'National College of Chest Physicians', logo: '/partners/nccp-india.png' },
  { name: 'Lung Care Foundation', logo: '/partners/lung-care-foundation.png' },
  { name: 'Doctor for Clean Air', logo: '/partners/doctors-for-clean-air.png' },
  { name: 'Indore Chest Society', logo: '' },
  { name: 'Association of Physicians of India', logo: '/partners/API.jpg' },
  { name: 'CETI - Collaboration to Eliminate Tuberculosis among Indians', logo: '/partners/CETI-TBfree-logo.png' },
  { name: 'Gyanpushp', logo: '/partners/Logo_Gyanpushp.jpeg' },
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
