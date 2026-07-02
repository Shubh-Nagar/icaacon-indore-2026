import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
// import TempleSkyline from '@/components/ui/TempleSkyline' // used in previous static background
import Countdown from '@/components/sections/Countdown'
import { EVENT } from '@/data/content'

/**
 * Hero section — video background with text overlay.
 * The intro video plays silently in a full-cover loop behind the content.
 * A dark gradient overlay keeps all foreground text clearly legible.
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-20"
    >
      {/* ── Video background ─────────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/into-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — keeps text readable over any video frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/75" />

      {/* ── Previous static background (commented out) ──────────────── */}
      {/*
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-maroon/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      <motion.div
        style={{ y: skylineY }}
        className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center"
      >
        <TempleSkyline
          animate
          color="rgba(30,42,58,0.10)"
          className="h-64 w-[120%] max-w-none sm:h-80"
        />
      </motion.div>
      */}

      <Container className="relative z-10">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Edition eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-gold-soft"
          >
            <span className="rule-gold !w-10" />
            {EVENT.edition} · {EVENT.tagline}
            <span className="rule-gold !w-10" />
          </motion.div>

          {/* Wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-wordmark text-6xl font-bold leading-none tracking-tight text-ivory sm:text-7xl lg:text-8xl"
          >
            {EVENT.shortName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2 font-wordmark text-xl font-semibold uppercase tracking-[0.3em] text-gold-soft sm:text-2xl"
          >
            {EVENT.city} {EVENT.year}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-3 max-w-xl text-sm font-medium text-ivory/70 sm:text-base"
          >
            {EVENT.auspices}
          </motion.p>

          {/* Organizing bodies */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="inline-flex items-center rounded-xl bg-white/95 px-4 py-2 shadow-sm">
              <img
                src="/icaai%20logo.png"
                alt="Indian College of Allergy, Asthma & Applied Immunology"
                className="h-8 w-auto sm:h-9"
              />
            </span>
            <span className="inline-flex items-center rounded-xl bg-white/95 px-4 py-2 shadow-sm">
              <img
                src="/Amaltas-University-Logo.jpg"
                alt="Amaltas University"
                className="h-8 w-auto sm:h-9"
              />
            </span>
          </motion.div>

          {/* Theme */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-2xl font-display text-2xl italic leading-snug text-ivory sm:text-3xl"
          >
            Breathe Better,{' '}
            <span className="text-teal-soft">Live Better</span>
          </motion.p>

          {/* Science · Solutions · Sustainability — commented out for now
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-sm font-medium uppercase tracking-eyebrow text-ivory/60"
          >
            {EVENT.pillars.join(' · ')}
          </motion.p>
          */}

          {/* Date + venue chips */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory backdrop-blur-sm">
              <CalendarDays size={16} className="text-gold-soft" />
              {EVENT.dates}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-white/10 px-4 py-2 text-sm font-semibold text-ivory backdrop-blur-sm">
              <MapPin size={16} className="text-gold-soft" />
              {EVENT.venue.name}, {EVENT.venue.city}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link to="/register" className="btn-accent group">
              Register Now
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/about"
              className="btn inline-flex border border-ivory/40 text-ivory hover:bg-ivory hover:text-ink"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-12 border-t border-ivory/15 pt-7"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-eyebrow text-ivory/55">
              Counting down to Indore
            </p>
            <Countdown tone="light" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
