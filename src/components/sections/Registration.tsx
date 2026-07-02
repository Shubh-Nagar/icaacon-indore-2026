import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Star } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { REGISTRATION_TIERS } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/**
 * Registration tiers.
 * Three cards; the "ICAAI Member" tier is visually elevated as the
 * recommended option. Pricing (INR) lives in content.ts.
 */
export default function Registration() {
  return (
    <section id="register" className="bg-teal-deep py-24 text-ivory lg:py-32">
      <Container>
        <SectionHeading
          tone="ivory"
          eyebrow="Registration"
          title="Choose your pass"
          subtitle="Transparent, all-inclusive pricing. Postgraduate rates available with a valid student ID."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {REGISTRATION_TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={`relative flex flex-col rounded-3xl p-8 ${
                tier.featured
                  ? 'bg-ivory text-ink shadow-lift lg:-translate-y-4'
                  : 'border border-ivory/15 bg-teal/40 text-ivory backdrop-blur-sm'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                  <Star size={12} fill="currentColor" />
                  Most popular
                </span>
              )}

              <h3
                className={`font-display text-xl font-semibold ${
                  tier.featured ? 'text-teal' : 'text-ivory'
                }`}
              >
                {tier.name}
              </h3>
              <p className="mt-3 font-display text-4xl font-bold">
                {tier.price}
              </p>
              <p
                className={`mt-1 text-sm ${
                  tier.featured ? 'text-ink-muted' : 'text-ivory/70'
                }`}
              >
                {tier.window}
              </p>

              <p
                className={`mt-4 text-lg font-semibold ${
                  tier.featured ? 'text-teal' : 'text-ivory'
                }`}
              >
                {tier.onSpotPrice}
              </p>
              <p
                className={`mt-0.5 text-sm ${
                  tier.featured ? 'text-ink-muted' : 'text-ivory/70'
                }`}
              >
                {tier.onSpotWindow}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        tier.featured ? 'text-teal' : 'text-gold-soft'
                      }`}
                    />
                    <span className={tier.featured ? 'text-ink-soft' : 'text-ivory/85'}>
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                className={`mt-8 w-full ${
                  tier.featured ? 'btn-accent' : 'btn-gold'
                }`}
              >
                Select {tier.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-ivory/60">
          Group and accompanying-person rates available — contact the
          secretariat for details.
        </p>
      </Container>
    </section>
  )
}
