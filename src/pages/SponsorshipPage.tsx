import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Star, Eye, Users, PackageSearch, Award, Medal, Mail, Phone, FileDown } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import {
  EVENT,
  SPONSORSHIP_TIERS,
  SPONSORSHIP_BENEFITS,
  SPONSORSHIP_CONTACT,
  SPONSORSHIP_DOCS,
} from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

const BENEFIT_ICONS = [Eye, Users, PackageSearch, Award]

/**
 * Per-tier accent — a soft tinted wash + matching border carries the metal's
 * color across the whole card, instead of a stripe/badge stacked at the top.
 */
const TIER_STYLES: Record<
  string,
  { wash: string; border: string; gradient: string; text: string; glow: string; button: string }
> = {
  platinum: {
    wash: 'from-slate-100 to-white',
    border: 'border-slate-300/70',
    gradient: 'from-slate-400 to-slate-600',
    text: 'text-slate-600',
    glow: 'shadow-[0_20px_45px_-18px_rgba(71,85,105,0.45)]',
    button: 'btn-accent',
  },
  diamond: {
    wash: 'from-sky-50 to-white',
    border: 'border-sky-300/70',
    gradient: 'from-cyan-400 to-sky-600',
    text: 'text-sky-600',
    glow: 'shadow-[0_20px_45px_-18px_rgba(2,132,199,0.4)]',
    button: 'btn-primary',
  },
  gold: {
    wash: 'from-white to-white',
    border: 'border-gold/50',
    gradient: 'from-gold-soft to-gold-deep',
    text: 'text-gold-deep',
    glow: 'shadow-[0_20px_45px_-18px_rgba(166,134,58,0.45)]',
    button: 'btn-primary',
  },
  silver: {
    wash: 'from-gray-100 to-white',
    border: 'border-gray-300/70',
    gradient: 'from-gray-300 to-gray-500',
    text: 'text-gray-600',
    glow: 'shadow-[0_20px_45px_-18px_rgba(107,114,128,0.35)]',
    button: 'btn-primary',
  },
  regular: {
    wash: 'from-teal-tint to-white',
    border: 'border-teal/25',
    gradient: 'from-teal-soft to-teal-deep',
    text: 'text-teal-deep',
    glow: 'shadow-[0_20px_45px_-18px_rgba(11,80,80,0.3)]',
    button: 'btn-primary',
  },
}

/**
 * Sponsorship page — content sourced from the ICAAICON 2026 sponsorship
 * invitation letter and benefits sheet (public/doc/).
 */
export default function SponsorshipPage() {
  return (
    <>
      <PageHeader
        current="Sponsorship"
        logos
        eyebrow="Partner with us"
        title={
          <>
            Sponsor <span className="italic text-gold-soft">ICAAICON 2026</span>
          </>
        }
        subtitle="Partner with the Organizing Committee and connect with pulmonologists, allergy specialists and leading clinicians at a high-impact scientific platform in Indore."
      />

      {/* Invitation */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="lg:col-span-2"
            >
              <p className="eyebrow text-teal">
                <span className="rule-gold !w-8" />
                Invitation
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Dear Sir / Madam,
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
                <p>
                  Warm greetings from the Organizing Committee. We are delighted to
                  invite your esteemed organization to partner with us as a sponsor
                  and participant in the upcoming National Conference{' '}
                  <strong className="text-ink">ICAAICON 2026</strong> on Asthma,
                  Allergy, Immunotherapy, Occupational disorders and Climate
                  change — a focused academic event bringing together leading
                  pulmonologists, physicians, pediatricians, otolaryngologists,
                  allergy specialists and experts involved in occupational
                  disorders.
                </p>
                <p>
                  All these disorders are among the fastest-growing chronic
                  conditions worldwide, with significant unmet needs in diagnosis,
                  long-term management, and patient education. This conference is
                  designed as a high-impact scientific platform to discuss recent
                  advances, real-world challenges, and emerging therapies in their
                  care.
                </p>
                <p>
                  Your organization's sponsorship will provide a unique
                  opportunity for meaningful engagement with a targeted audience of
                  decision-making clinicians and key opinion leaders. We believe
                  that collaboration between the medical fraternity and the
                  healthcare industry is essential for improving patient outcomes,
                  and your participation would add substantial value to the
                  conference.
                </p>
                <p>
                  We would be pleased to share customized sponsorship packages,
                  including exhibition opportunities and branding options, based
                  on your organization's objectives. We sincerely hope you will
                  consider partnering with us for this academically enriching and
                  professionally rewarding event.
                </p>
              </div>
            </motion.div>

            {/* Conference details + brochure downloads */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="card h-fit p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Conference details
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Title</dt>
                  <dd className="text-right font-semibold text-ink">{EVENT.shortName} {EVENT.year}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Date</dt>
                  <dd className="text-right font-semibold text-ink">{EVENT.dates}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-muted">Venue</dt>
                  <dd className="text-right font-semibold text-ink">{EVENT.venue.city}</dd>
                </div>
              </dl>

              <div className="mt-6 space-y-2.5 border-t border-ink/8 pt-6">
                {SPONSORSHIP_DOCS.map((doc) => (
                  <a
                    key={doc.href}
                    href={encodeURI(doc.href)}
                    download
                    className="flex items-center gap-2.5 rounded-xl border border-ink/10 px-4 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-teal hover:text-teal"
                  >
                    <FileDown size={16} className="shrink-0 text-teal" />
                    {doc.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why sponsor */}
      <section className="bg-ivory-deep py-16 lg:py-20">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <p className="eyebrow text-teal justify-center">
              <span className="rule-gold !w-8" />
              Why sponsor
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Sponsorship benefits
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SPONSORSHIP_BENEFITS.map((benefit, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length]
              return (
                <motion.div
                  key={benefit}
                  variants={fadeUp}
                  className="flex flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-tint text-teal">
                    <Icon size={22} />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">{benefit}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* Sponsorship tiers */}
      <section id="tiers" className="bg-teal-deep py-24 text-ivory lg:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-4 text-center"
          >
            <p className="eyebrow justify-center text-gold-soft">
              <span className="rule-gold !w-8" />
              Packages
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Sponsorship tiers
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ivory/75">
              Choose the tier that fits your organization's goals — every
              package includes exhibition space and brand recognition.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {SPONSORSHIP_TIERS.map((tier) => {
              const style = TIER_STYLES[tier.tier] ?? TIER_STYLES.regular
              return (
                <motion.div
                  key={tier.name}
                  variants={fadeUp}
                  className={`relative flex flex-col rounded-3xl border bg-gradient-to-b p-8 text-ink shadow-card transition-transform duration-300 hover:-translate-y-1 ${style.wash} ${style.border} ${style.glow} ${
                    tier.featured ? 'lg:-translate-y-4' : ''
                  }`}
                >
                  {tier.featured && (
                    <span
                      className={`absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${style.gradient}`}
                    >
                      <Star size={11} fill="currentColor" />
                      Top tier
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white ${style.gradient}`}
                    >
                      <Medal size={18} />
                    </span>
                    <h3 className={`font-display text-lg font-semibold ${style.text}`}>
                      {tier.name}
                    </h3>
                  </div>

                  <p className="mt-6 font-display text-2xl font-bold text-ink">{tier.price}</p>
                  <p className="mt-1 text-xs text-ink-muted">+ 18% GST</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-xs leading-relaxed">
                        <Check size={14} className={`mt-0.5 shrink-0 ${style.text}`} />
                        <span className="text-ink-soft">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className={`mt-7 w-full ${style.button}`}>
                    Enquire
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <p className="mt-8 text-center text-sm text-ivory/60">
            GST @ 18% is applicable on all sponsorship and exhibition
            categories. Packages are allocated on a first-come, first-served
            basis.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-ivory py-16 lg:py-20">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col items-center gap-6 rounded-3xl bg-ivory-deep px-8 py-14 text-center"
          >
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Let's discuss a partnership
            </h2>
            <p className="max-w-xl text-base text-ink-soft">
              For customized sponsorship packages and exhibition opportunities,
              reach out to the Organizing Committee.
            </p>
            <div>
              <p className="font-display text-lg font-semibold text-ink">
                {SPONSORSHIP_CONTACT.name}
              </p>
              <p className="text-sm text-ink-muted">{SPONSORSHIP_CONTACT.role}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${SPONSORSHIP_CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-ivory shadow hover:bg-teal-deep transition-colors"
              >
                <Mail size={16} />
                {SPONSORSHIP_CONTACT.email}
              </a>
              <a
                href={`tel:${SPONSORSHIP_CONTACT.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
              >
                <Phone size={16} />
                {SPONSORSHIP_CONTACT.phone}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
