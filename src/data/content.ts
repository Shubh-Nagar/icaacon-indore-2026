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
    name: 'Indore Marriott Hotel',
    city: 'Indore',
    region: 'Madhya Pradesh, India',
    address: 'H-2, Scheme No 54, Meghdoot Garden, Vijay Nagar, Indore, Madhya Pradesh 452010',
    mapsQuery: 'Indore Marriott Hotel, Vijay Nagar, Indore, Madhya Pradesh 452010',
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
  `Venue: ${EVENT.venue.name}`,
  'Early-bird registration ends 31 Aug 2026',
  'Abstract submission closes 31 Aug 2026',
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
      {
        name: 'Dr. Raj Kumar',
        designation: 'Vice President',
        photo: '/executive-committee/dr-raj-kumar.png',
      },
      {
        name: 'Dr. A.B. Singh',
        designation: 'Secretary',
        photo: '/executive-committee/dr-a-b-singh.png',
      },
      {
        name: 'Dr. Saibal Moitra',
        designation: 'Joint Secretary',
        photo: '/executive-committee/dr-saibal-moitra.png',
      },
      {
        name: 'Dr. Nitin Goel',
        designation: 'Treasurer',
        photo: '/executive-committee/dr-nitin-goel.png',
      },
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
      {
        name: 'Dr. A.K. Janmeja',
        designation: 'Council Member',
        photo: '/executive-committee/dr-a-k-janmeja.png',
      },
      {
        name: 'Dr. Mahesh Goyal',
        designation: 'Council Member',
        photo: '/executive-committee/dr-mahesh-goyal.jpeg',
      },
      {
        name: 'Dr. Naveen Arora',
        designation: 'Council Member',
        photo: '/executive-committee/prof-naveen-arora.jpg',
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
      {
        name: 'Dr. Digamber Behera',
        designation: 'Ex-Officio Member (Past President)',
        photo: '/executive-committee/dr-digamber-behera.png',
      },
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
  { date: '10 Sep 2026', label: 'Early-bird registration ends', status: 'closed' },
  { date: '31 Aug 2026', label: 'Abstract submission closes', status: 'closed' },
  { date: '15 Sep 2026', label: 'Acceptance notifications', status: 'closed' },
  { date: '24 Sep 2026', label: 'Conference begins', status: 'upcoming' },
] as const

/** Day-by-day scientific schedule, per the official ICAAICON program. */
export const PROGRAM_SCHEDULE = [
  {
    day: 'Day 1',
    date: '24 Sep',
    title: 'Workshop',
    time: '9:00 AM – 05:00 PM',
    venue: 'Amaltas University, Ujjain Dewas Road, Bangar',
    items: [
      'Allergy & Immunotherapy',
      'NIV & Sleep Breathing Disorders',
      'Pulmonary Function Test',
      'Smoking Cessation',
      'Pulmonary Rehabilitation',
    ],
  },
  {
    day: 'Day 2',
    date: '25 Sep',
    title: 'Scientific Sessions',
    items: ['Allergy', 'Immunotherapy', 'Asthma', 'Opening Ceremony'],
  },
  {
    day: 'Day 3',
    date: '26 Sep',
    title: 'Scientific Sessions',
    items: ['Allergy', 'Immunotherapy', 'Climate Change', 'Air Pollution', 'Occupational Disease'],
  },
  {
    day: 'Day 4',
    date: '27 Sep',
    title: 'Scientific Sessions',
    items: ['Allergy', 'Immunotherapy', 'Climate Change', 'Air Pollution', 'Occupational Disease'],
  },
] as const

/** Day 1 pre-conference workshops — full scientific-programme posters. */
export const DAY1_WORKSHOPS = [
  {
    title: 'Allergy and Immunotherapy',
    theme: 'Advancing Allergy Care: From Precision Diagnosis to Personalized Immunotherapy',
    time: '9:00 AM – 5:00 PM',
    coordinator: 'Dr. Raj Kumar',
    image: '/workshop/allergy-immunotherapy-workshop.jpeg',
  },
  {
    title: 'Smoking Cessation',
    theme: 'Empowering Healthcare Professionals for Effective Tobacco Cessation',
    time: '2:00 PM – 5:00 PM',
    coordinator: 'Dr. Raj Kumar',
    image: '/workshop/smoking-cessation-workshop.jpeg',
  },
  {
    title: 'Pulmonary Rehabilitation',
    theme: 'Pulmonary Rehabilitation: Assessment, Exercise Prescription & Practical Training',
    time: '9:00 AM – 1:00 PM',
    coordinator: 'Dr. Vishal Bansal, Dr. BK Menon',
    image: '/workshop/pulmonary-rehabilitation-workshop.jpeg',
  },
] as const

/** Downloadable scientific-programme PDF, as supplied by the organizing committee. */
export const SCIENTIFIC_PROGRAMME_PDF_URL = '/ICAAICON%202026%20-%20Scientific%20Programme-updated.pdf'

export type ProgrammeRow = { time: string; topic: string; speaker?: string }
export type ProgrammeBlock =
  | { kind: 'symposium'; time: string; title: string; rows: ProgrammeRow[] }
  | { kind: 'highlight'; time: string; title: string; speaker?: string }
export type ProgrammeHall = { hall: string; blocks: ProgrammeBlock[] }
export type ProgrammeDay = { day: string; date: string; halls: ProgrammeHall[] }

/**
 * Full scientific programme extracted from the official ICAAICON 2026
 * "Scientific Programme" PDF (Hotel Marriott, Indore, 25–27 Sep 2026).
 */
export const SCIENTIFIC_PROGRAMME: ProgrammeDay[] = [
  {
    day: 'Day 1',
    date: '25 September 2026 · Friday',
    halls: [
      {
        hall: 'Hall A',
        blocks: [
          {
            kind: 'symposium',
            time: '9:00 – 10:00',
            title: 'Symposium: Asthma – From Epidemiology to Endotypes',
            rows: [
              { time: '09:00–09:15', topic: 'Epidemiology & temporal trends', speaker: 'Dr. Sameer Vaidya' },
              { time: '09:15–09:30', topic: 'Asthma biology: phenotypes, endotypes & biomarkers', speaker: 'Dr. BNBM Prasad' },
              { time: '09:30–09:45', topic: 'Non allergic asthma', speaker: 'Dr. D Behera' },
              { time: '09:45–10:00', topic: 'Precision treatment of asthma', speaker: 'Dr. Nikhil Sarangdhar' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:00 – 11:00',
            title: 'Symposium: Modern Asthma Management',
            rows: [
              { time: '10:00–10:15', topic: 'GINA 2026 Update', speaker: 'Dr. Suresh Koolwal' },
              { time: '10:15–10:30', topic: 'Personalising asthma care', speaker: 'Dr. Abhijeet Khandelwal' },
              { time: '10:30–10:45', topic: 'Inhaler choice: doctor decision or patient comfort', speaker: 'Dr. Shubhra Jain' },
              { time: '10:45–11:00', topic: 'Yoga in Asthma', speaker: 'Dr. Ravikant Zala' },
            ],
          },
          {
            kind: 'symposium',
            time: '11:00 – 12:00',
            title: 'Symposium: Asthma Diagnosis – Beyond Spirometry',
            rows: [
              { time: '11:00–11:15', topic: 'Practical spirometry interpretation', speaker: 'Dr. Lokendra Dave' },
              { time: '11:15–11:30', topic: 'ATS/ERS spirometry update', speaker: 'Dr. Gaurav Gupta' },
              { time: '11:30–11:45', topic: 'FeNO in daily practice', speaker: 'Dr. Pradyumn Sharma' },
              { time: '11:45–12:00', topic: 'Lung oscillometry in asthma', speaker: 'Dr. Vikas Kumar Mishra' },
            ],
          },
          { kind: 'highlight', time: '12:00 – 12:30', title: 'Debate 1 — Spirometry vs FOT', speaker: 'Dr. Sameer Vaidya vs Dr. Vikas Kumar Mishra' },
          { kind: 'highlight', time: '12:30 – 01:00', title: 'Oration 1 — Dr. D N Shivpuri Oration: The post-COVID lung: when hypersensitivities outlive the virus', speaker: 'Dr. Narayan Mishra' },
          { kind: 'highlight', time: '01:00 – 01:30', title: 'Lunch' },
          {
            kind: 'symposium',
            time: '1:30 – 2:30',
            title: 'Symposium: Difficult-to-Treat & Severe Asthma',
            rows: [
              { time: '01:30–01:45', topic: 'Asthma mimics', speaker: 'Dr. Surya Kant' },
              { time: '01:45–02:00', topic: 'Management of uncontrolled asthma', speaker: 'Dr. B K Menon' },
              { time: '02:00–02:15', topic: 'Optimising severe asthma management', speaker: 'Dr. Shailesh Agrawal' },
              { time: '02:15–02:30', topic: 'LAMA beyond ICS/LABA', speaker: 'Dr. Ravi Dosi' },
            ],
          },
          { kind: 'highlight', time: '2:30 – 3:00', title: 'Oration 2 — House dust mite allergy / immunotherapy: past, present and future', speaker: 'Dr. P C Kathuria' },
          {
            kind: 'symposium',
            time: '3:00 – 4:00',
            title: 'Symposium: Asthma & Associated Airway Disease',
            rows: [
              { time: '03:00–03:15', topic: 'Asthma–bronchiectasis overlap', speaker: 'Dr. Lokendra Dave' },
              { time: '03:15–03:30', topic: 'Asthma–COPD overlap', speaker: 'Dr. Ved Prakash' },
              { time: '03:30–03:45', topic: 'Asthma & critical care', speaker: 'Dr. Vikas Maurya' },
              { time: '03:45–04:00', topic: 'When to do bronchoscopy in asthma', speaker: 'Dr. Pawan Gupta' },
            ],
          },
          {
            kind: 'symposium',
            time: '4:00 – 5:00',
            title: 'Symposium: Biologics in Severe Asthma',
            rows: [
              { time: '04:00–04:15', topic: 'Who should receive a biologic?', speaker: 'Dr. Ranganath Ganga' },
              { time: '04:15–04:30', topic: 'Biomarkers for biologic selection', speaker: 'Dr. M K Gupta' },
              { time: '04:30–04:45', topic: 'Monitoring, switching & stopping of biologicals', speaker: 'Dr. Sunita Chhapola' },
              { time: '04:45–05:00', topic: 'Biologics in India: real-world evidence & cost-effectiveness', speaker: 'Dr. Ajay Verma' },
            ],
          },
          { kind: 'highlight', time: '5:30 onwards', title: 'EC Meeting of ICAAI' },
          { kind: 'highlight', time: '7:00 – 8:00', title: 'Inauguration followed by cultural programme' },
        ],
      },
      {
        hall: 'Hall B',
        blocks: [
          {
            kind: 'symposium',
            time: '9:00 – 10:00',
            title: 'Symposium: Foundations of Allergy & Immunology',
            rows: [
              { time: '09:00–09:15', topic: 'Allergy & immunology in 2026', speaker: 'Dr. Suresh Koolwal' },
              { time: '09:15–09:30', topic: 'Allergy and hypersensitivity', speaker: 'Dr. Gautam Modi' },
              { time: '09:30–09:45', topic: 'Emerging mechanisms of allergy', speaker: 'Dr. Saibal Moitra' },
              { time: '09:45–10:00', topic: 'Beyond symptom control: microbiome-directed strategies in allergic disease', speaker: 'Dr. Nagendra Prasad K. V.' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:00 – 10:45',
            title: 'Symposium: How to Diagnose Allergy',
            rows: [
              { time: '10:00–10:15', topic: 'Approach to airborne allergy', speaker: 'Dr. Rajendra Mehta' },
              { time: '10:15–10:30', topic: 'In vivo diagnosis of allergy', speaker: 'Dr. Suresh Koolwal' },
              { time: '10:30–10:45', topic: 'In vitro diagnosis of allergy', speaker: 'Dr. Naveen Arora' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:45 – 11:30',
            title: 'Symposium: Precision Allergy Diagnostics',
            rows: [
              { time: '10:45–11:00', topic: 'CRD: hype or game changer?', speaker: 'Dr. P C Kathuria' },
              { time: '11:00–11:15', topic: 'Biomarkers beyond total IgE', speaker: 'Dr. Ranganath Ganga' },
              { time: '11:15–11:30', topic: 'Differentiation of allergy from crossreaction', speaker: 'Dr. Ashish Kumar Prakash Sinha' },
            ],
          },
          {
            kind: 'symposium',
            time: '11:30 – 12:30',
            title: 'Symposium: Personalizing Allergy Immunotherapy',
            rows: [
              { time: '11:30–11:35', topic: 'Welcome & introduction', speaker: 'Dr. Sujatha Ramesh' },
              { time: '11:35–11:55', topic: 'Hypoallergenic HDM allergoid SCIT – rationale and evidence', speaker: 'Dr. Raj Kumar' },
              {
                time: '11:55–12:30',
                topic: 'AIT in clinical practice – evidence, patient selection and real-world challenges',
                speaker: 'Moderator: Dr. Saibal Moitra · Panelists: Dr. Raj Kumar, Dr. S Z Jafrey, Dr. P C Kathuria, Dr. Arif Ahmed, Dr. Vijay Warad',
              },
            ],
          },
          { kind: 'highlight', time: '12:30 – 01:00', title: 'Oration 1 — Dr. D N Shivpuri Oration: The post-COVID lung: when hypersensitivities outlive the virus (in Hall A)', speaker: 'Dr. Narayan Mishra' },
          { kind: 'highlight', time: '01:00 – 01:30', title: 'Lunch' },
          {
            kind: 'symposium',
            time: '1:30 – 2:30',
            title: 'Symposium: Allergic Rhinitis & Unified Airway',
            rows: [
              {
                time: '01:30–02:15',
                topic: 'Panel discussion on latest in the management of allergic rhinitis (interactive session)',
                speaker: 'Moderator: Dr. Subir Jain · Panelist: Dr. Sunita Chhapola, Dr. Abhay Gupta, Dr. Yamini Gupta',
              },
              { time: '02:15–02:30', topic: 'Hereditary angioedema — pearls and pitfalls', speaker: 'Dr. Sujatha Ramesh' },
            ],
          },
          { kind: 'highlight', time: '02:30 – 03:00', title: 'Oration 2 — House dust mite allergy / immunotherapy: past, present and future (in Hall A)', speaker: 'Dr. P C Kathuria' },
          {
            kind: 'symposium',
            time: '3:00 – 4:00',
            title: 'Symposium: Immunotherapy – From Concept to Practice',
            rows: [
              { time: '03:00–03:15', topic: 'Probiotics in allergy practice: from biological plausibility to evidence-based clinical use', speaker: 'Dr. Ankit Agrawal' },
              { time: '03:15–03:30', topic: 'Patient selection for immunotherapy', speaker: 'Dr. Ajay Verma' },
              { time: '03:30–03:45', topic: 'Allergic gastrointestinal disorders', speaker: 'Dr. Sujatha Ramesh' },
              { time: '03:45–04:00', topic: 'How to select allergens for immunotherapy — practical tips', speaker: 'Dr. Saibal Moitra' },
            ],
          },
          {
            kind: 'symposium',
            time: '4:00 – 5:00',
            title: 'Symposium: Environmental Allergy',
            rows: [
              { time: '04:00–04:15', topic: 'Allergy cases from interiors of India', speaker: 'Dr. Bharat Anil Toshniwal' },
              { time: '04:15–04:30', topic: 'Standardization of allergens', speaker: 'Dr. Naveen Arora' },
              { time: '04:30–04:45', topic: 'House dust mite respiratory allergy', speaker: 'Dr. Prashant Prakash' },
              { time: '04:45–05:00', topic: 'Air pollution to airway inflammation — new insights into allergy and asthma', speaker: 'Dr. Ravi Dosi' },
            ],
          },
          { kind: 'highlight', time: '5:30 onwards', title: 'EC Meeting of ICAAI' },
          { kind: 'highlight', time: '7:00 – 8:00', title: 'Inauguration followed by cultural programme (in Hall A)' },
        ],
      },
    ],
  },
  {
    day: 'Day 2',
    date: '26 September 2026 · Saturday',
    halls: [
      {
        hall: 'Hall A',
        blocks: [
          {
            kind: 'symposium',
            time: '9:00 – 10:00',
            title: 'Symposium: Asthma, Allergy & Sleep',
            rows: [
              { time: '09:00–09:15', topic: 'Asthma and sleep', speaker: 'Dr. Shailesh Agrawal' },
              { time: '09:15–09:30', topic: 'Allergy and sleep medicine', speaker: 'Dr. Nishant Shrivastava' },
              { time: '09:30–09:45', topic: 'Beyond pharmacotherapy: the role of pulmonary rehabilitation in severe asthma', speaker: 'Dr. Ankit Sodani' },
              { time: '09:45–10:00', topic: 'Chronic cough in asthma/allergy', speaker: 'Dr. Ashwin Songara' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:00 – 11:00',
            title: 'Symposium: Immunotherapy – Newer Developments',
            rows: [
              { time: '10:00–10:15', topic: 'Newer developments in immunotherapy', speaker: 'Dr. Raj Bhagat' },
              { time: '10:15–10:30', topic: 'HDM SLIT', speaker: 'Dr. M J Gupta' },
              { time: '10:30–10:45', topic: 'Preparation of allergen vaccines', speaker: 'Dr. Naveen Arora' },
              { time: '10:45–11:00', topic: 'Changing course of management of asthma', speaker: 'Dr. Pradyumn Sharma' },
            ],
          },
          {
            kind: 'symposium',
            time: '11:00 – 12:00',
            title: 'Symposium: Respiratory Immunotherapy',
            rows: [
              { time: '11:00–11:15', topic: 'Role of immunotherapy in allergic asthma', speaker: 'Dr. Anil Kumar Jain' },
              { time: '11:15–11:30', topic: 'Immunotherapy for nasobronchial allergy', speaker: 'Dr. Subir Jain' },
              {
                time: '11:30–12:00',
                topic: 'Panel discussion: Immuno-Histaglobulin Complex in Chronic Allergic Conditions — real-world experiences',
                speaker: 'Moderator: Dr. Saswata Banerjee · Panelist: Dr. Gautam Modi, Dr. Hari Kishan, Dr. Raman Sharma, Dr. Surya Kant',
              },
            ],
          },
          { kind: 'highlight', time: '12:00 – 12:30', title: 'Debate 2 — SCIT vs SLIT', speaker: 'Dr. Raj Kumar vs Dr. Nagendra Prasad K V' },
          { kind: 'highlight', time: '12:30 – 01:00', title: 'Oration 3 — Dr. R K Modi Memorial Oration: AI in respiratory allergy', speaker: 'Dr. A K Janmeja' },
          { kind: 'highlight', time: '01:00 – 01:30', title: 'Lunch' },
          { kind: 'highlight', time: '01:30 – 02:00', title: 'Debate 3 — Monoallergen immunotherapy vs polyallergen immunotherapy', speaker: 'Dr. S Z Jafrey vs Dr. Subir Jain' },
          {
            kind: 'symposium',
            time: '2:00 – 3:00',
            title: 'Symposium: ABPA & Aspergillus-Related Airway Disease',
            rows: [
              { time: '02:00–02:15', topic: 'ABPA: the great mimicker', speaker: 'Dr. M K Gupta' },
              { time: '02:15–02:30', topic: 'Diagnostic approach to ABPA', speaker: 'Dr. Gajendra Vikram Singh' },
              { time: '02:30–02:45', topic: 'Surgical management of chronic rhinosinusitis', speaker: 'Dr. Govind Gourh' },
              { time: '02:45–03:00', topic: 'ABPA: evolving treatment & biologics', speaker: 'Dr. Shubhra Jain' },
            ],
          },
          {
            kind: 'symposium',
            time: '3:00 – 4:00',
            title: 'Symposium: Environment, Climate & Respiratory Allergy',
            rows: [
              { time: '03:00–03:15', topic: 'Dust mite control', speaker: 'Dr. Salil Bhargava' },
              { time: '03:15–03:30', topic: 'Charles Richet Prize 2026 lecture', speaker: 'Dr. Md. Kaleem Ullah' },
              { time: '03:30–03:45', topic: 'Prevention of asthma — how & when', speaker: 'Dr. V K Jain' },
              { time: '03:45–04:00', topic: 'Understanding asthma heterogenicity and aid to management', speaker: 'Dr. Sudhir Chaudhri' },
            ],
          },
          {
            kind: 'symposium',
            time: '4:00 – 5:00',
            title: 'Emerging Concepts in Asthma & Allergy',
            rows: [
              { time: '04:00–04:20', topic: 'AI in allergy practice', speaker: 'AI Expert' },
              { time: '04:20–04:40', topic: 'Microbiome in allergy & immunology', speaker: 'Dr. Arti Julka' },
              { time: '04:40–05:00', topic: 'Psychological triggers of allergic disease', speaker: 'Dr. Ravikant Zala' },
            ],
          },
          { kind: 'highlight', time: '5:30 onwards', title: 'General Body Meeting of ICAAI' },
          { kind: 'highlight', time: '7:00 onwards', title: 'Musical Evening — Swar Spandan, by the doctors for the doctors' },
        ],
      },
      {
        hall: 'Hall B',
        blocks: [
          {
            kind: 'symposium',
            time: '9:00 – 10:00',
            title: 'Symposium: Allergy – Indian & Early-Life Perspective',
            rows: [
              { time: '09:00–09:15', topic: 'Allergic diseases: Indian perspective', speaker: 'Dr. Pritica Mathur' },
              { time: '09:15–09:30', topic: 'Dermal allergies', speaker: 'Dr. Mahesh Goyal' },
              { time: '09:30–09:45', topic: 'The allergic march revisited: precision, prevention and intervention across lifespan', speaker: 'Dr. Nagendra Prasad K. V.' },
              { time: '09:45–10:00', topic: 'Irritant vs allergen', speaker: 'Dr. Parul Mrigpuri' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:00 – 11:00',
            title: 'Symposium: Paediatric Allergy',
            rows: [
              { time: '10:00–10:15', topic: 'Paediatric allergy', speaker: 'Dr. Shitanshu Srivastava' },
              { time: '10:15–10:30', topic: 'Ophthalmic allergy', speaker: 'Dr. Sharadini Vyas' },
              { time: '10:30–10:45', topic: 'Infant wheeze: diagnosis, monitoring & prognosis', speaker: 'Dr. Sarika Gupta' },
              { time: '10:45–11:00', topic: 'Food allergy in children', speaker: 'Dr. Hemant Jain' },
            ],
          },
          {
            kind: 'symposium',
            time: '11:00 – 12:00',
            title: 'Symposium: Allergy Across Specialties',
            rows: [
              { time: '11:00–11:15', topic: 'Atopic dermatitis', speaker: 'Dr. Rahul Nagar' },
              { time: '11:15–11:30', topic: 'Chronic urticaria & angioedema', speaker: 'Dr. Manan Jhanwar' },
              { time: '11:30–11:45', topic: 'Decoding the role of Claudin-1 in atopic dermatitis', speaker: 'Dr. Roohi Rasool' },
              { time: '11:45–12:00', topic: 'Food allergy', speaker: 'Dr. Raj Kumar' },
            ],
          },
          { kind: 'highlight', time: '12:00 – 12:30', title: 'Debate 3 — Allergy testing: in vivo vs in vitro', speaker: 'Vivo: Dr. V K Jain vs Vitro: Dr. Saibal Moitra' },
          { kind: 'highlight', time: '12:30 – 01:00', title: 'Oration 3 — Dr. R K Modi Memorial Oration: AI in respiratory allergy', speaker: 'Dr. A K Janmeja' },
          { kind: 'highlight', time: '01:00 – 01:30', title: 'Lunch' },
          { kind: 'highlight', time: '01:30 – 02:00', title: 'Panel discussion on immunotherapy', speaker: 'Moderator: Dr. Raj Kumar · Panelist: Dr. Raj Bhagat, Dr. Rajendra Mehta' },
          {
            kind: 'symposium',
            time: '2:00 – 3:00',
            title: 'Symposium: Allergy Emergencies',
            rows: [
              { time: '02:00–02:15', topic: 'Diagnosis of anaphylaxis', speaker: 'Dr. Sonam Spalgais' },
              { time: '02:15–02:30', topic: 'Management of anaphylaxis (case-based)', speaker: 'Dr. Sonali Agrawal' },
              { time: '02:30–02:45', topic: 'Drug allergy', speaker: 'Dr. Ravikant Zala' },
              { time: '02:45–03:00', topic: 'Venom allergy', speaker: 'Dr. Vivek Joshi' },
            ],
          },
          {
            kind: 'symposium',
            time: '3:00 – 4:00',
            title: 'Symposium: Indian Guidelines & Allergy Practice',
            rows: [
              { time: '03:00–03:15', topic: 'Indian guidelines for diagnosis of allergy', speaker: 'Dr. Raj Kumar' },
              { time: '03:15–03:30', topic: 'Indian guidelines for immunotherapy', speaker: 'Dr. Sonam Spalgais' },
              { time: '03:30–03:45', topic: 'Indian guidelines on nebulization', speaker: 'Dr. Raj Bhagat' },
              { time: '03:45–04:00', topic: 'Indian guidelines for spirometry', speaker: 'Dr. Prashant Prakash' },
            ],
          },
          {
            kind: 'symposium',
            time: '4:00 – 5:00',
            title: 'Interactive Case Session: Allergy in the Real World',
            rows: [
              { time: '04:00–04:15', topic: 'Tuberculosis and respiratory allergy — the missing link', speaker: 'Dr. Nikhil Sarangdhar' },
              { time: '04:15–04:30', topic: 'Allergies in dermatology', speaker: 'Dr. Akshat Verma' },
              { time: '04:30–04:45', topic: 'Sublingual immunotherapy', speaker: 'Dr. Gautam Modi' },
              { time: '04:45–05:00', topic: 'History-focused diagnostic cases', speaker: 'Dr. V P Jerath' },
            ],
          },
          { kind: 'highlight', time: '5:30 – 6:30', title: 'Public awareness programme on allergy' },
          { kind: 'highlight', time: '7:00 onwards', title: 'Musical Evening — Swar Spandan, by the doctors for the doctors (in Hall A)' },
        ],
      },
    ],
  },
  {
    day: 'Day 3',
    date: '27 September 2026 · Sunday',
    halls: [
      {
        hall: 'Hall A',
        blocks: [
          {
            kind: 'symposium',
            time: '9:00 – 10:00',
            title: 'Symposium: Asthma in Special Situations',
            rows: [
              { time: '09:00–09:15', topic: 'Aspirin-induced asthma', speaker: 'Dr. Mahesh Mishra' },
              { time: '09:15–09:30', topic: 'Exercise & atypical triggers induced bronchoconstriction', speaker: 'Dr. Tariq Mahmood' },
              { time: '09:30–09:45', topic: 'Asthma in ICU', speaker: 'Dr. Varun Deshmukh' },
              { time: '09:45–10:00', topic: 'Asthma in pregnancy', speaker: 'Dr. Neha Mandowara' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:00 – 11:00',
            title: 'Symposium: Allergic & Eosinophilic Lung Disease',
            rows: [
              { time: '10:00–10:15', topic: 'Tropical pulmonary eosinophilia', speaker: 'Dr. H J Singh' },
              { time: '10:15–10:30', topic: 'Hypersensitivity pneumonitis', speaker: 'Dr. Deepak Bansal' },
              { time: '10:30–10:45', topic: 'Pulmonary rehabilitation: a useful but underutilized tool', speaker: 'Dr. Arvind Kumar' },
              { time: '10:45–11:00', topic: 'Eosinophilic lung disease: clinical spectrum', speaker: 'Dr. Anil Kumar Jain' },
            ],
          },
          {
            kind: 'symposium',
            time: '11:00 – 12:00',
            title: 'Symposium: Allergy, Infection & Immunology',
            rows: [
              { time: '11:00–11:15', topic: 'Air pollution, climate change and asthma: an Indian perspective', speaker: 'Dr. Abhinav Choubey' },
              { time: '11:15–11:30', topic: 'Asthma mesotype: missing link', speaker: 'Dr. Manoj Goel' },
              { time: '11:30–11:45', topic: 'Infection–allergy interactions', speaker: 'Dr. Shalini Tyagi' },
              { time: '11:45–12:00', topic: 'Immunological perspectives in respiratory disease', speaker: 'Dr. Zaheer Abbas Shah' },
            ],
          },
          {
            kind: 'symposium',
            time: '12:00 – 01:00',
            title: 'Symposium: Emerging Frontiers in Asthma & Allergy',
            rows: [
              { time: '12:00–12:15', topic: 'Nasal filters and allergic covers', speaker: 'Dr. Abhay Gupta' },
              { time: '12:15–12:30', topic: 'Immunoglobulin injections', speaker: 'Dr. Avinash Jain' },
              { time: '12:30–12:45', topic: 'Novel drug-delivery systems', speaker: 'Dr. Kamal Jobhani' },
              { time: '12:45–01:00', topic: 'Towards asthma remission', speaker: 'Dr. A K Janmeja' },
            ],
          },
          { kind: 'highlight', time: '1:00 onwards', title: 'Conference Concludes / Lunch' },
        ],
      },
      {
        hall: 'Hall B',
        blocks: [
          {
            kind: 'symposium',
            time: '9:00 – 10:00',
            title: 'Symposium: Occupational Allergy – Foundations',
            rows: [
              { time: '09:00–09:20', topic: 'Occupational allergy: epidemiology & screening', speaker: 'Dr. Pritica Mathur' },
              { time: '09:20–09:40', topic: 'Occupational asthma: causes & diagnosis', speaker: 'Dr. Shailesh Agrawal' },
              { time: '09:40–10:00', topic: 'Allergic fungal rhino sinusitis', speaker: 'Dr. Praveen Surana' },
            ],
          },
          {
            kind: 'symposium',
            time: '10:00 – 11:00',
            title: 'Symposium: Occupational Lung Diseases',
            rows: [
              { time: '10:00–10:15', topic: 'Silicosis beyond mining', speaker: 'Dr. Tanay Joshi' },
              { time: '10:15–10:30', topic: 'Pneumoconiosis', speaker: 'Dr. Suraj Verma' },
              { time: '10:30–10:45', topic: 'Indian traditional treatment for respiratory disorders', speaker: 'Mr. Vijay Rawal' },
              { time: '10:45–11:00', topic: 'Occupational ILD', speaker: 'Dr. Pooja Aneja' },
            ],
          },
          {
            kind: 'symposium',
            time: '11:00 – 12:00',
            title: 'Symposium: Occupational Allergy – Prevention & Management',
            rows: [
              { time: '11:00–11:20', topic: 'Avoidance and prevention strategies', speaker: 'Dr. Arti Julka' },
              { time: '11:20–11:40', topic: 'Adult vaccination', speaker: 'Dr. Abhijeet Khandelwal' },
              { time: '11:40–12:00', topic: 'Role of surgery in allergic rhinitis', speaker: 'Dr. Satya Prakash Dubey' },
            ],
          },
          {
            kind: 'symposium',
            time: '12:00 – 1:00',
            title: 'Symposium: Technology in Occupational & Environmental Health',
            rows: [
              { time: '12:00–12:15', topic: 'Impact of air pollution and climate change on health', speaker: 'Dr. Arvind Kumar' },
              { time: '12:15–12:30', topic: 'AI in respiratory practice', speaker: 'Dr. Salil Bhargava' },
              { time: '12:30–12:45', topic: 'Generative AI to enhance your practice', speaker: 'AI experts' },
              { time: '12:45–01:00', topic: 'Emerging technologies in respiratory health', speaker: 'Dr. Pradyumn Sharma' },
            ],
          },
          { kind: 'highlight', time: '1:00 onwards', title: 'Conference Concludes / Lunch' },
        ],
      },
    ],
  },
]

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

/** Registration tiers (INR). `onSpotPrice`/`onSpotWindow` are optional — a
 *  tier without them simply omits the on-spot line on its card. */
export type RegistrationTier = {
  name: string
  price: string
  window: string
  onSpotPrice?: string
  onSpotWindow?: string
  featured: boolean
  perks: string[]
}

export const REGISTRATION_TIERS: RegistrationTier[] = [
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
  {
    // Accompanying persons get the full delegate experience except the
    // e-certificate of participation, which is not issued for this tier.
    name: 'Accompanying Person',
    price: '₹ 5,500',
    window: 'Regular: 01 Jun – 10 Sep 2026',
    featured: false,
    perks: ['Full 4-day access', 'Conference kit & badge', 'Lunch & networking breaks'],
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

/** Featured video playlist — "DFCA TV" by Lung Care Foundation (YouTube). */
export const VIDEO_PLAYLIST = {
  title: 'DFCA TV',
  channel: 'Lung Care Foundation',
  playlistId: 'PL_CWrSkzkT5C5nLiSIT37HhKALFhYrvf3',
  url: 'https://www.youtube.com/playlist?list=PL_CWrSkzkT5C5nLiSIT37HhKALFhYrvf3',
}

export type PlaylistVideo = {
  id: string
  title: string
  duration: string
}

/** Playlist videos in their original order (id = YouTube video id). */
export const VIDEOS: PlaylistVideo[] = [
  { id: 'KcK0SiE1k4w', title: 'Why Air Pollution is Slowly Destroying Our Lungs', duration: '2:23' },
  { id: 'w-z1gNFWUA8', title: 'How Polluted Air Affects Your Eyesight? Eye-Specialist Breaks It Down', duration: '3:03' },
  { id: 'z4bls6UH9T8', title: "28% of Heart Deaths Linked to Air Pollution! You WON'T Believe This!", duration: '3:31' },
  { id: 'fobAPMmXO4U', title: 'How To Survive Toxic Air: Your Ultimate Guide To Air Quality Index (AQI)', duration: '4:27' },
  { id: 'xcrJX3rd6X0', title: 'Why Doctors Must Lead The Fight For Clean Air?', duration: '4:54' },
  { id: 'QeqjqRN5S0Q', title: 'Doctor Explains: Why Air Pollution is a Bigger Threat Than You Think!', duration: '4:32' },
  { id: 'Z7rcawnsbXg', title: 'How Air Pollution is Increasing the Risk of Diabetes? Medic Explains...', duration: '3:41' },
  { id: '1VDDW9K9PsA', title: 'Health Impacts of Air Pollution on Brain - Dr. Vinay Goyal', duration: '1:27' },
  { id: 'qdd0HX9IlLo', title: 'Health Impacts of Air Pollution on Heart - Dr. Naresh Trehan', duration: '1:40' },
  { id: '9ycGfTgvmpo', title: 'Health Impacts of Air Pollution on Children', duration: '3:12' },
  { id: '86YLjVwf7Lk', title: 'DFCA tv #Ep. 1 - Asthma and Covid: Uncovering Misconceptions', duration: '22:30' },
  { id: '9_bsFzVBU1k', title: 'DFCA tv #Ep. 2 - Covid-19, Tuberculosis & Air Pollution', duration: '16:26' },
  { id: 'HrYaOoKxDY4', title: 'DFCA tv #Ep. 3 - Link Between Air Pollution and Obesity, Asthma and Allergic Diseases', duration: '40:49' },
  { id: 'BozHe_iVU1E', title: 'Economic Impact of Air Pollution in India', duration: '3:10' },
  { id: '76FbetVqEGY', title: 'Global Warming - Risks & Adaptation', duration: '1:44' },
  { id: 'LNp7QWrkhrM', title: 'वायु प्रदूषण का प्रहार:- स्वास्थ्य पर पड़ता प्रभाव', duration: '3:43' },
  { id: '2sxKsFKwZFU', title: 'Doctors for Clean Air & Climate Action | Our Story', duration: '6:00' },
  { id: '0odu79Sui60', title: 'How One Doctor Is Cutting Fossil Fuels to Protect Health | Air Pollution', duration: '6:45' },
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
