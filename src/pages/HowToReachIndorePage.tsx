import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plane, Train, Bus, Car, MapPin, Clock, CheckCircle2, Navigation, PlaneLanding, PlaneTakeoff } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/** Arrival flights into Indore (IDR), sorted by arrival time. Source: Arrival Flight Details - ICAAICON 2026. */
const ARRIVAL_FLIGHTS = [
  { dep: '01:10 AM', arr: '02:30 AM', flight: '6E119', from: 'Pune (PNQ)', airline: 'IndiGo' },
  { dep: '04:55 AM', arr: '06:15 AM', flight: '6E6490', from: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '05:20 AM', arr: '06:30 AM', flight: '6E284', from: 'Pune (PNQ)', airline: 'IndiGo' },
  { dep: '05:40 AM', arr: '07:15 AM', flight: 'AI1725', from: 'Delhi (DEL)', airline: 'Air India' },
  { dep: '06:55 AM', arr: '08:10 AM', flight: '6E7173', from: 'Ahmedabad (AMD)', airline: 'IndiGo' },
  { dep: '07:05 AM', arr: '08:30 AM', flight: '6E294', from: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '08:10 AM', arr: '09:55 AM', flight: 'IX1236', from: 'Pune (PNQ)', airline: 'Air India Express' },
  { dep: '09:20 AM', arr: '11:00 AM', flight: '6E7315', from: 'Jabalpur (JLR)', airline: 'IndiGo' },
  { dep: '10:25 AM', arr: '11:50 AM', flight: '6E5181', from: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '10:30 AM', arr: '12:00 PM', flight: '6E6219', from: 'Raipur (RPR)', airline: 'IndiGo' },
  { dep: '11:20 AM', arr: '12:50 PM', flight: '6E6488', from: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '01:10 PM', arr: '02:50 PM', flight: 'IX1090', from: 'Delhi (DEL)', airline: 'Air India Express' },
  { dep: '01:35 PM', arr: '03:20 PM', flight: '6E7364', from: 'Rewa (REW)', airline: 'IndiGo' },
  { dep: '02:12 PM', arr: '03:45 PM', flight: '6E6915', from: 'Hyderabad (HYD)', airline: 'IndiGo' },
  { dep: '02:16 PM', arr: '04:25 PM', flight: 'IX2014', from: 'Bengaluru (BLR)', airline: 'Air India Express' },
  { dep: '02:47 PM', arr: '04:35 PM', flight: '6E813', from: 'Goa (GOI)', airline: 'IndiGo' },
  { dep: '04:40 PM', arr: '06:15 PM', flight: 'IX1228', from: 'Delhi (DEL)', airline: 'Air India Express' },
  { dep: '04:50 PM', arr: '06:15 PM', flight: '6E6599', from: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '05:20 PM', arr: '06:45 PM', flight: '6E6829', from: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '04:40 PM', arr: '06:45 PM', flight: '6E7221', from: 'Lucknow (LKO)', airline: 'IndiGo' },
  { dep: '05:35 PM', arr: '07:10 PM', flight: 'AI2749', from: 'Mumbai (BOM)', airline: 'Air India' },
  { dep: '06:35 PM', arr: '07:25 PM', flight: 'IC6101', from: 'Jalgaon (JLG)', airline: 'Fly91' },
  { dep: '06:10 PM', arr: '07:35 PM', flight: '6E7744', from: 'Jaipur (JAI)', airline: 'IndiGo' },
  { dep: '06:00 PM', arr: '07:50 PM', flight: '6E747', from: 'Bengaluru (BLR)', airline: 'IndiGo' },
  { dep: '06:35 PM', arr: '08:00 PM', flight: '6E5273', from: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '06:40 PM', arr: '08:10 PM', flight: 'AI1716', from: 'Delhi (DEL)', airline: 'Air India' },
  { dep: '06:15 PM', arr: '08:30 PM', flight: '6E489', from: 'Chennai (MAA)', airline: 'IndiGo' },
  { dep: '07:40 PM', arr: '09:10 PM', flight: '6E2169', from: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '06:55 PM', arr: '09:20 PM', flight: '6E798', from: 'Kolkata (CCU)', airline: 'IndiGo' },
  { dep: '08:10 PM', arr: '09:30 PM', flight: '6E7187', from: 'Ahmedabad (AMD)', airline: 'IndiGo' },
  { dep: '08:25 PM', arr: '09:50 PM', flight: '6E621', from: 'Hyderabad (HYD)', airline: 'IndiGo' },
  { dep: '08:35 PM', arr: '10:00 PM', flight: '6E5164', from: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '09:15 PM', arr: '10:35 PM', flight: '6E5136', from: 'Navi Mumbai (NMI)', airline: 'IndiGo' },
  { dep: '08:50 PM', arr: '10:45 PM', flight: '6E6743', from: 'Bengaluru (BLR)', airline: 'IndiGo' },
]

/** Departure flights out of Indore (IDR), sorted by departure time. Source: Departure Flight Details - ICAAICON 2026. */
const DEPARTURE_FLIGHTS = [
  { dep: '03:20 AM', arr: '04:30 AM', flight: '6E120', to: 'Pune (PNQ)', airline: 'IndiGo' },
  { dep: '06:05 AM', arr: '07:30 AM', flight: '6E5122', to: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '06:55 AM', arr: '08:20 AM', flight: '6E6024', to: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '07:05 AM', arr: '08:20 AM', flight: '6E6184', to: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '07:20 AM', arr: '09:25 AM', flight: '6E701', to: 'Bengaluru (BLR)', airline: 'IndiGo' },
  { dep: '08:00 AM', arr: '09:35 AM', flight: 'AI1860', to: 'Delhi (DEL)', airline: 'Air India' },
  { dep: '08:45 AM', arr: '09:55 AM', flight: '6E7174', to: 'Ahmedabad (AMD)', airline: 'IndiGo' },
  { dep: '09:05 AM', arr: '10:15 AM', flight: '6E295', to: 'Navi Mumbai (NMI)', airline: 'IndiGo' },
  { dep: '10:35 AM', arr: '12:15 PM', flight: 'IX1236', to: 'Delhi (DEL)', airline: 'Air India Express' },
  { dep: '11:25 AM', arr: '01:15 PM', flight: '6E7363', to: 'Rewa (REW)', airline: 'IndiGo' },
  { dep: '12:20 PM', arr: '01:45 PM', flight: '6E511', to: 'Hyderabad (HYD)', airline: 'IndiGo' },
  { dep: '12:30 PM', arr: '02:05 PM', flight: '6E6219', to: 'Goa (GOI)', airline: 'IndiGo' },
  { dep: '01:20 PM', arr: '03:00 PM', flight: '6E5058', to: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '03:40 PM', arr: '05:10 PM', flight: '6E7316', to: 'Jabalpur (JLR)', airline: 'IndiGo' },
  { dep: '03:55 PM', arr: '05:35 PM', flight: 'IX1245', to: 'Pune (PNQ)', airline: 'Air India Express' },
  { dep: '04:15 PM', arr: '05:40 PM', flight: '6E2389', to: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '04:55 PM', arr: '07:05 PM', flight: 'IX1368', to: 'Bengaluru (BLR)', airline: 'Air India Express' },
  { dep: '05:10 PM', arr: '06:20 PM', flight: '6E813', to: 'Raipur (RPR)', airline: 'IndiGo' },
  { dep: '06:45 PM', arr: '08:15 PM', flight: '6E6916', to: 'Hyderabad (HYD)', airline: 'IndiGo' },
  { dep: '07:10 PM', arr: '09:15 PM', flight: '6E7422', to: 'Lucknow (LKO)', airline: 'IndiGo' },
  { dep: '07:25 PM', arr: '08:55 PM', flight: '6E5301', to: 'Delhi (DEL)', airline: 'IndiGo' },
  { dep: '07:45 PM', arr: '08:35 PM', flight: 'IC6102', to: 'Jalgaon (JLG)', airline: 'Fly91' },
  { dep: '07:50 PM', arr: '09:25 PM', flight: 'AI2750', to: 'Mumbai (BOM)', airline: 'Air India' },
  { dep: '07:50 PM', arr: '09:35 PM', flight: 'IX247', to: 'Abu Dhabi (AUH)', airline: 'Air India Express' },
  { dep: '07:55 PM', arr: '09:25 PM', flight: '6E7745', to: 'Jaipur (JAI)', airline: 'IndiGo' },
  { dep: '08:30 PM', arr: '10:40 PM', flight: '6E6566', to: 'Kolkata (CCU)', airline: 'IndiGo' },
  { dep: '08:40 PM', arr: '09:50 PM', flight: '6E552', to: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '09:00 PM', arr: '10:35 PM', flight: 'AI1865', to: 'Delhi (DEL)', airline: 'Air India' },
  { dep: '09:10 PM', arr: '11:10 PM', flight: '6E756', to: 'Chennai (MAA)', airline: 'IndiGo' },
  { dep: '09:40 PM', arr: '11:45 PM', flight: '6E6744', to: 'Bengaluru (BLR)', airline: 'IndiGo' },
  { dep: '09:50 PM', arr: '11:10 PM', flight: '6E7168', to: 'Ahmedabad (AMD)', airline: 'IndiGo' },
  { dep: '10:10 PM', arr: '11:15 PM', flight: '6E147', to: 'Pune (PNQ)', airline: 'IndiGo' },
  { dep: '10:20 PM', arr: '11:45 PM', flight: '6E6598', to: 'Mumbai (BOM)', airline: 'IndiGo' },
  { dep: '11:15 PM', arr: '12:45 AM', flight: '6E6972', to: 'Delhi (DEL)', airline: 'IndiGo' },
]

/** Trains arriving into Indore Jn (INDB) / Ambedkar Nagar (DADN). Source: Train Arrival Details - ICAAICON 2026. */
const ARRIVAL_TRAINS = [
  { no: '12961', name: 'Avantika Express', from: 'Mumbai Central (MMCT)', dep: '20:55', arr: '09:10', days: 'Daily' },
  { no: '22943', name: 'Daund - Indore SF Express', from: 'Daund Junction (DD)', dep: '14:00', arr: '08:25', days: 'Daily' },
  { no: '19311', name: 'Pune - Indore Express', from: 'Pune Junction (PUNE)', dep: '17:30', arr: '11:20', days: 'Wed, Sun' },
  { no: '20958', name: 'New Delhi - Indore SF', from: 'New Delhi (NDLS)', dep: '18:15', arr: '06:45', days: 'Mon, Thu, Sat' },
  { no: '12416', name: 'New Delhi - Indore Intercity SF', from: 'New Delhi (NDLS)', dep: '21:50', arr: '10:05', days: 'Daily' },
  { no: '19308', name: 'Indore Express', from: 'Chandigarh (CDG)', dep: '16:30', arr: '15:05', days: 'Fri, Sat' },
  { no: '19326', name: 'Amritsar - Indore Express', from: 'Amritsar (ASR)', dep: '01:50', arr: '00:55', days: 'Thu, Sun' },
  { no: '22912', name: 'Shipra Express', from: 'Howrah (HWH)', dep: '17:45', arr: '00:25', days: 'Mon, Thu, Sat' },
  { no: '19314', name: 'Patna - Indore Express', from: 'Patna Junction (PNBE)', dep: '11:25', arr: '14:40', days: 'Wed, Fri' },
  { no: '19322', name: 'Patna - Indore Express (via Ayodhya)', from: 'Patna Junction (PNBE)', dep: '11:25', arr: '14:40', days: 'Mon' },
  { no: '18234', name: 'Narmada Express', from: 'Bilaspur (BSP)', dep: '11:45', arr: '10:55', days: 'Daily' },
  { no: '19304', name: 'Bhopal - Indore Express', from: 'Bhopal (BPL)', dep: '23:10', arr: '04:55', days: 'Daily' },
  { no: '19306', name: 'Dr. Ambedkar Nagar Weekly Express', from: 'Kamakhya Junction', dep: '05:05', arr: '05:00', days: 'Sun–Tue' },
  { no: '12924', name: 'Nagpur - Dr. Ambedkar Nagar SF Express', from: 'Nagpur', dep: '19:00', arr: '05:05', days: 'Wednesday' },
  { no: '19302', name: 'Yesvantpur - Dr. Ambedkar Nagar Weekly Express', from: 'Yesvantpur', dep: '15:45', arr: '06:10', days: 'Tuesday' },
  { no: '11126', name: 'Gwalior - Ratlam Express', from: 'Gwalior', dep: '19:50', arr: '07:00', days: 'Mon, Tue, Thu, Fri' },
  { no: '21126', name: 'Bhind - Ratlam Express', from: 'Bhind', dep: '17:20', arr: '07:00', days: 'Wed, Sat, Sun' },
  { no: '14116', name: 'Prayagraj - Dr Ambedkar Nagar Express', from: 'Prayagraj', dep: '15:10', arr: '08:25', days: 'Daily' },
  { no: '79310', name: 'Ratlam - Dr. Ambedkar Nagar', from: 'Ratlam', dep: '06:35', arr: '09:10', days: 'Daily' },
  { no: '20156', name: 'New Delhi - Dr. Ambedkar Nagar SF', from: 'New Delhi', dep: '23:25', arr: '12:00', days: 'Daily' },
  { no: '79314', name: 'Ratlam - Dr. Ambedkar Nagar', from: 'Ratlam', dep: '10:05', arr: '12:40', days: 'Daily' },
  { no: '12920', name: 'Malwa SF Express', from: 'Shri Mata Vaishno Devi Katra', dep: '08:35', arr: '13:35', days: 'Daily' },
]

/** Trains departing from Indore Jn (INDB) / Ambedkar Nagar (DADN). Source: Train Departure Details - ICAAICON 2026. */
const DEPARTURE_TRAINS = [
  { no: '12962', name: 'Avantika Express', to: 'Mumbai Central (MMCT)', dep: '17:40', arr: '06:40', days: 'Daily' },
  { no: '22944', name: 'Indore - Daund SF Express', to: 'Daund Junction (DD)', dep: '16:30', arr: '10:30', days: 'Daily' },
  { no: '19312', name: 'Indore - Pune Express', to: 'Pune Junction (PUNE)', dep: '16:50', arr: '12:25', days: 'Tue, Sat' },
  { no: '20957', name: 'Indore - Hisar SF Express', to: 'New Delhi (NDLS)', dep: '16:45', arr: '09:20', days: 'Wed, Fri, Sun' },
  { no: '12415', name: 'Indore - New Delhi Intercity SF', to: 'New Delhi (NDLS)', dep: '17:10', arr: '06:35', days: 'Daily' },
  { no: '19307', name: 'Indore - Chandigarh Express', to: 'Chandigarh (CDG)', dep: '05:30', arr: '08:35', days: 'Thu, Fri' },
  { no: '19325', name: 'Indore - Amritsar Express', to: 'Amritsar (ASR)', dep: '20:15', arr: '22:05', days: 'Tue, Fri' },
  { no: '22911', name: 'Shipra Express', to: 'Howrah (HWH)', dep: '23:30', arr: '06:50', days: 'Tue, Thu, Sat' },
  { no: '19313', name: 'Indore - Patna Express', to: 'Patna Junction (PNBE)', dep: '13:55', arr: '15:00', days: 'Mon, Wed' },
  { no: '19321', name: 'Indore - Patna Express (via Ayodhya)', to: 'Patna Junction (PNBE)', dep: '13:55', arr: '15:45', days: 'Sat' },
  { no: '18233', name: 'Narmada Express', to: 'Bilaspur (BSP)', dep: '16:10', arr: '13:50', days: 'Daily' },
  { no: '19303', name: 'Indore - Bhopal Express', to: 'Bhopal (BPL)', dep: '23:15', arr: '05:10', days: 'Daily' },
  { no: '14802', name: 'Indore - Jodhpur Express', to: 'Jodhpur', dep: '04:20', arr: '19:30', days: 'Daily' },
  { no: '12465', name: 'Ranthambhore SF Express', to: 'Bhagat Ki Kothi', dep: '06:00', arr: '22:20', days: 'Daily' },
  { no: '20911', name: 'Indore - Nagpur Vande Bharat Express', to: 'Nagpur', dep: '06:10', arr: '14:35', days: 'Mon–Sat' },
  { no: '59388', name: 'Indore - Nagda Passenger', to: 'Nagda', dep: '08:00', arr: '12:55', days: 'Daily' },
  { no: '69212', name: 'Indore - Ujjain Passenger', to: 'Ujjain', dep: '08:10', arr: '09:45', days: 'Daily' },
  { no: '20414', name: 'Kashi Mahakal SF Express', to: 'Varanasi', dep: '10:15', arr: '05:45', days: 'Wed, Fri' },
  { no: '20416', name: 'Mahakal Superfast Express', to: 'Varanasi', dep: '10:15', arr: '03:40', days: 'Monday' },
  { no: '69214', name: 'Indore - Ujjain Passenger', to: 'Ujjain', dep: '10:35', arr: '12:20', days: 'Daily' },
  { no: '20916', name: 'Indore - Charlapalli Humsafar Express', to: 'Charlapalli', dep: '11:15', arr: '14:15', days: 'Saturday' },
  { no: '9324', name: 'Indore - Khadki', to: 'Khadki', dep: '11:15', arr: '02:50', days: 'Wednesday' },
  { no: '19343', name: 'Panchvalley Express', to: 'Nainpur', dep: '13:15', arr: '06:30', days: 'Daily' },
  { no: '19333', name: 'Bkn Mahamana Express', to: 'Bikaner', dep: '13:40', arr: '08:40', days: 'Saturday' },
  { no: '19305', name: 'Dr. Ambedkar Nagar - Kamakhya', to: 'Kamakhya', dep: '13:45', arr: '12:30', days: 'Thursday' },
  { no: '20917', name: 'Indore - Puri Humsafar Express', to: 'Puri', dep: '15:05', arr: '18:45', days: 'Tuesday' },
  { no: '22984', name: 'Indore - Kota InterCity SF Express', to: 'Kota', dep: '15:35', arr: '23:20', days: 'Daily' },
  { no: '20155', name: 'Dr. Ambedkar Nagar - New Delhi SF Express', to: 'New Delhi', dep: '15:50', arr: '04:25', days: 'Daily' },
  { no: '14319', name: 'Indore - Bareilly Weekly Express', to: 'Bareilly', dep: '16:45', arr: '15:20', days: 'Thursday' },
  { no: '22645', name: 'Ahilya Nagari SF Express', to: 'Kochuveli', dep: '16:45', arr: '15:40', days: 'Monday' },
  { no: '9309', name: 'Indore - Hazrat Nizamuddin Special', to: 'H Nizamuddin', dep: '17:00', arr: '05:00', days: 'Fri, Sun' },
  { no: '9080', name: 'Indore - Mumbai Central Special Fare', to: 'Mumbai', dep: '17:00', arr: '07:10', days: 'Mon, Wed' },
  { no: '12415', name: 'Indore - New Delhi Intercity SF', to: 'New Delhi', dep: '17:10', arr: '06:20', days: 'Daily' },
  { no: '12962', name: 'Avantika Superfast Express', to: 'Mumbai', dep: '17:45', arr: '06:40', days: 'Daily' },
  { no: '59307', name: 'Indore - Ujjain Passenger', to: 'Ujjain', dep: '18:00', arr: '19:55', days: 'Daily' },
]

const MODES = [
  {
    Icon: Plane,
    title: 'By Air',
    color: 'bg-teal/10 text-teal',
    iconBg: 'bg-teal',
    summary: 'Devi Ahilya Bai Holkar Airport (IDR) · 8 km from city centre',
  },
  {
    Icon: Train,
    title: 'By Train',
    color: 'bg-maroon/10 text-maroon',
    iconBg: 'bg-maroon',
    summary: 'Indore Junction (INDB) · Direct trains from major cities',
  },
  {
    Icon: Bus,
    title: 'By Road',
    color: 'bg-gold/20 text-amber-700',
    iconBg: 'bg-gold',
    summary: 'NH-52 & NH-47 · Luxury coaches, taxis & self-drive',
  },
  {
    Icon: Car,
    title: 'Local Transport',
    color: 'bg-ink/8 text-ink-soft',
    iconBg: 'bg-ink',
    summary: 'Cabs, auto-rickshaws, e-rickshaws & city buses',
  },
]

const DISTANCES = [
  { city: 'Bhopal', distance: '190 km', time: '~3 hrs', mode: 'Road / Rail' },
  { city: 'Ahmedabad', distance: '389 km', time: '~6 hrs', mode: 'Road / Rail' },
  { city: 'Jaipur', distance: '567 km', time: '~9 hrs', mode: 'Road / Rail' },
  { city: 'Mumbai', distance: '585 km', time: '~10–12 hrs', mode: 'Road / Rail / Air' },
  { city: 'Hyderabad', distance: '650 km', time: '~11 hrs', mode: 'Road / Air' },
  { city: 'New Delhi', distance: '675 km', time: '~10 hrs', mode: 'Rail / Air' },
  { city: 'Lucknow', distance: '685 km', time: '~11 hrs', mode: 'Rail / Air' },
  { city: 'Chennai', distance: '1,170 km', time: '~2 hrs (Air)', mode: 'Air' },
]

export default function HowToReachIndorePage() {
  const [flightTab, setFlightTab] = useState<'arrival' | 'departure'>('arrival')
  const flights = flightTab === 'arrival' ? ARRIVAL_FLIGHTS : DEPARTURE_FLIGHTS
  const [trainTab, setTrainTab] = useState<'arrival' | 'departure'>('arrival')
  const trains = trainTab === 'arrival' ? ARRIVAL_TRAINS : DEPARTURE_TRAINS

  return (
    <>
      <PageHeader
        current="How to Reach Indore"
        eyebrow="Host City · Travel Guide"
        title={
          <>
            Getting to{' '}
            <span className="italic text-gold-soft">Indore</span>
          </>
        }
        subtitle="Indore is well connected by air, rail and road. Here's everything you need to plan a smooth journey to the conference."
      />

      {/* Mode summary cards */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {MODES.map(({ Icon, title, color, iconBg, summary }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-card"
              >
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
                  <Icon size={22} className="text-ivory" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{title}</p>
                  <p className={`mt-1 text-xs font-semibold rounded-full w-fit px-2 py-0.5 ${color}`}>{title}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink-soft">{summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* By Air */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal">
                  <Plane size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">By Air</h2>
              </div>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                <strong className="text-ink">Devi Ahilya Bai Holkar International Airport (IDR)</strong> is
                located just 8 km from the city centre, making it one of the most convenient airports for
                conference delegates. Pre-paid taxis and app-based cabs are available right outside the
                terminal.
              </p>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted mb-3">Direct flight connections</p>
                {[
                  'New Delhi (DEL)',
                  'Mumbai (BOM)',
                  'Bengaluru (BLR)',
                  'Hyderabad (HYD)',
                  'Pune (PNQ)',
                  'Chennai (MAA)',
                  'Kolkata (CCU)',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="shrink-0 text-teal" />
                    <span className="text-sm text-ink-soft">{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-2xl bg-teal/8 px-4 py-3 text-sm text-ink-soft">
                <strong className="text-ink">International travellers:</strong> Connect via Delhi (DEL) or Mumbai (BOM) for onward flights to Indore.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-card border border-ink/10 min-h-[300px]">
              <iframe
                title="Devi Ahilya Bai Holkar Airport, Indore"
                src="https://www.google.com/maps?q=Devi+Ahilya+Bai+Holkar+Airport+Indore&output=embed"
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Flight Schedule */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal">
                  <Plane size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">Flight Schedule at Indore Airport</h2>
              </div>
              <p className="max-w-2xl mx-auto text-base leading-relaxed text-ink-soft">
                Daily arrival and departure flights to/from Devi Ahilya Bai Holkar Airport (IDR) — handy for
                planning your travel dates and airport pickup/drop.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl bg-white shadow-card overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-ink/8">
                <button
                  type="button"
                  onClick={() => setFlightTab('arrival')}
                  className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                    flightTab === 'arrival'
                      ? 'bg-teal/8 text-teal'
                      : 'text-ink-muted hover:bg-ivory-deep'
                  }`}
                >
                  <PlaneLanding size={16} />
                  Arrivals ({ARRIVAL_FLIGHTS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFlightTab('departure')}
                  className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                    flightTab === 'departure'
                      ? 'bg-maroon/8 text-maroon'
                      : 'text-ink-muted hover:bg-ivory-deep'
                  }`}
                >
                  <PlaneTakeoff size={16} />
                  Departures ({DEPARTURE_FLIGHTS.length})
                </button>
              </div>

              <div className="max-h-[560px] overflow-y-auto overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-ivory-deep">
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Flight No.</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">
                        {flightTab === 'arrival' ? 'From' : 'To'}
                      </th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Departure</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Arrival</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Airline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {flights.map((f, i) => (
                      <tr key={`${f.flight}-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-ivory/40'}>
                        <td className="px-6 py-3.5 font-semibold text-ink whitespace-nowrap">{f.flight}</td>
                        <td className="px-6 py-3.5 text-ink-soft whitespace-nowrap">
                          {'from' in f ? f.from : f.to}
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="inline-flex items-center gap-1 text-ink-soft whitespace-nowrap">
                            <Clock size={13} className="text-teal" />
                            {f.dep}
                          </span>
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="inline-flex items-center gap-1 text-ink-soft whitespace-nowrap">
                            <Clock size={13} className="text-maroon" />
                            {f.arr}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-ink-soft whitespace-nowrap">{f.airline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-center text-xs text-ink-muted">
              Schedules are indicative and subject to change by the airlines — please reconfirm timings before travel.{' '}
              <a
                href={flightTab === 'arrival' ? '/doc/Arrival Flight Details - ICAAICON 2026.pdf' : '/doc/Departure Flight Details -  ICAAICON 2026.pdf'}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-teal underline underline-offset-2"
              >
                Download full {flightTab === 'arrival' ? 'arrival' : 'departure'} schedule (PDF)
              </a>
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* By Train */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-card border border-ink/10">
              <iframe
                title="Indore Junction Railway Station"
                src="https://www.google.com/maps?q=Indore+Junction+Railway+Station&output=embed"
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-maroon">
                  <Train size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">By Train</h2>
              </div>
              <p className="text-base leading-relaxed text-ink-soft mb-6">
                <strong className="text-ink">Indore Junction (INDB)</strong> is a major railway hub on the
                Western Railway zone, with express and superfast trains running to most major Indian cities.
                The station is approximately 3 km from the city centre and well served by auto-rickshaws and cabs.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted mb-3">Key rail connections</p>
                {[
                  'New Delhi — Indore Express / Avantika Express',
                  'Mumbai — Avantika Express / Central Express',
                  'Jaipur — Intercity / Express trains',
                  'Ahmedabad — Intercity / Superfast trains',
                  'Hyderabad — Patalkot Express',
                  'Bengaluru — Weekly express trains',
                ].map((train) => (
                  <div key={train} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="shrink-0 text-maroon" />
                    <span className="text-sm text-ink-soft">{train}</span>
                  </div>
                ))}
              </div>
              <p className="rounded-2xl bg-maroon/8 px-4 py-3 text-sm text-ink-soft">
                <strong className="text-ink">Tip:</strong> Book train tickets early via the IRCTC portal — September is peak travel season in India.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Train Schedule */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-maroon">
                  <Train size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">Train Schedule at Indore Jn / Ambedkar Nagar</h2>
              </div>
              <p className="max-w-2xl mx-auto text-base leading-relaxed text-ink-soft">
                Key trains serving Indore Junction (INDB) and Ambedkar Nagar (DADN) — useful for planning your
                arrival and return journey by rail.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl bg-white shadow-card overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-ink/8">
                <button
                  type="button"
                  onClick={() => setTrainTab('arrival')}
                  className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                    trainTab === 'arrival'
                      ? 'bg-teal/8 text-teal'
                      : 'text-ink-muted hover:bg-ivory-deep'
                  }`}
                >
                  <PlaneLanding size={16} />
                  Arrivals ({ARRIVAL_TRAINS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setTrainTab('departure')}
                  className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${
                    trainTab === 'departure'
                      ? 'bg-maroon/8 text-maroon'
                      : 'text-ink-muted hover:bg-ivory-deep'
                  }`}
                >
                  <PlaneTakeoff size={16} />
                  Departures ({DEPARTURE_TRAINS.length})
                </button>
              </div>

              <div className="max-h-[560px] overflow-y-auto overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10">
                    <tr className="bg-ivory-deep">
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Train No.</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Train Name</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">
                        {trainTab === 'arrival' ? 'From' : 'To'}
                      </th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Departure</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Arrival</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Operating Days</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {trains.map((t, i) => (
                      <tr key={`${t.no}-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-ivory/40'}>
                        <td className="px-6 py-3.5 font-semibold text-ink whitespace-nowrap">{t.no}</td>
                        <td className="px-6 py-3.5 text-ink-soft whitespace-nowrap">{t.name}</td>
                        <td className="px-6 py-3.5 text-ink-soft whitespace-nowrap">
                          {'from' in t ? t.from : t.to}
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="inline-flex items-center gap-1 text-ink-soft whitespace-nowrap">
                            <Clock size={13} className="text-teal" />
                            {t.dep}
                          </span>
                        </td>
                        <td className="px-6 py-3.5">
                          <span className="inline-flex items-center gap-1 text-ink-soft whitespace-nowrap">
                            <Clock size={13} className="text-maroon" />
                            {t.arr}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-ink-soft whitespace-nowrap">{t.days}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-center text-xs text-ink-muted">
              Schedules are indicative and subject to change by Indian Railways — please reconfirm timings before travel.{' '}
              <a
                href={trainTab === 'arrival' ? '/doc/Train Arrival Details - ICAAICON 2026.pdf' : '/doc/Train Departure Details -  ICAAICON 2026.pdf'}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-maroon underline underline-offset-2"
              >
                Download full {trainTab === 'arrival' ? 'arrival' : 'departure'} schedule (PDF)
              </a>
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* By Road */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold">
                  <Bus size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">By Road</h2>
              </div>
              <p className="max-w-2xl mx-auto text-base leading-relaxed text-ink-soft">
                Indore sits at the junction of <strong className="text-ink">NH-52</strong> and <strong className="text-ink">NH-47</strong>, making it easily reachable by road from across Madhya Pradesh and neighbouring states. Luxury Volvo coaches, sleeper buses, taxis and self-drive options are all available.
              </p>
            </motion.div>

            {/* Road options */}
            <motion.div variants={staggerContainer} className="grid gap-6 sm:grid-cols-3 mb-12">
              {[
                {
                  Icon: Bus,
                  title: 'Luxury Coaches',
                  desc: 'Volvo AC sleeper buses connect Indore to Bhopal, Ujjain, Mumbai, Ahmedabad, Pune and Jaipur — book via RedBus or state transport.',
                },
                {
                  Icon: Car,
                  title: 'Taxi & Cab Hire',
                  desc: 'Outstation taxis from Bhopal, Ujjain and nearby cities are affordable and comfortable for group travel.',
                },
                {
                  Icon: Navigation,
                  title: 'Self-Drive',
                  desc: 'Well-maintained national highways with fuel stations, food stops and rest areas make driving to Indore straightforward.',
                },
              ].map(({ Icon, title, desc }) => (
                <motion.div key={title} variants={fadeUp} className="rounded-3xl bg-white p-6 shadow-card flex flex-col gap-3">
                  <Icon size={22} className="text-gold" />
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Distance matrix */}
            <motion.div variants={fadeUp} className="rounded-3xl bg-white shadow-card overflow-hidden">
              <div className="px-6 py-5 border-b border-ink/8 flex items-center gap-3">
                <MapPin size={18} className="text-teal" />
                <h3 className="font-display text-lg font-semibold text-ink">Key distances to Indore</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-ivory-deep">
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">City</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Distance</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Approx. Time</th>
                      <th className="text-left px-6 py-3 font-semibold text-ink-muted uppercase tracking-wide text-xs">Best Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/6">
                    {DISTANCES.map((row, i) => (
                      <tr key={row.city} className={i % 2 === 0 ? 'bg-white' : 'bg-ivory/40'}>
                        <td className="px-6 py-3.5 font-semibold text-ink">{row.city}</td>
                        <td className="px-6 py-3.5 text-ink-soft">{row.distance}</td>
                        <td className="px-6 py-3.5">
                          <span className="inline-flex items-center gap-1 text-ink-soft">
                            <Clock size={13} className="text-teal" />
                            {row.time}
                          </span>
                        </td>
                        <td className="px-6 py-3.5 text-ink-soft">{row.mode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Local Transport */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink">
                  <Car size={20} className="text-ivory" />
                </span>
                <h2 className="font-display text-2xl font-semibold text-ink">Getting Around Indore</h2>
              </div>
              <p className="max-w-xl mx-auto text-base text-ink-soft">
                Once in Indore, the city is compact and easy to navigate with multiple transport options available around the clock.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: '🚖',
                  title: 'App-based Cabs',
                  desc: 'Ola and Uber operate widely across Indore — the fastest and most reliable option for delegates.',
                },
                {
                  icon: '🛺',
                  title: 'Auto-rickshaws',
                  desc: 'Widely available and affordable for short hops within the city. Insist on the meter or agree on a fare first.',
                },
                {
                  icon: '⚡',
                  title: 'E-rickshaws',
                  desc: 'Eco-friendly electric rickshaws cover popular local routes and are a great way to explore the old city.',
                },
                {
                  icon: '🚌',
                  title: 'City Buses',
                  desc: 'Indore\'s iBus network covers major city routes affordably — useful for longer cross-city journeys.',
                },
              ].map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="rounded-3xl bg-white p-6 shadow-card flex flex-col gap-3 text-center items-center"
                >
                  <span className="text-4xl">{icon}</span>
                  <p className="font-display text-base font-semibold text-ink">{title}</p>
                  <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-12 text-center text-sm text-ink-muted"
            >
              The conference venue is approximately 8 km from the airport and 5 km from Indore Junction railway station.
            </motion.p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
