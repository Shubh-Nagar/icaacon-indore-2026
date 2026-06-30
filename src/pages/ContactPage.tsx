import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Check, Loader2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import { EVENT } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

/**
 * Contact page — secretariat details + a simple message form (mocked submit)
 * and the venue map for orientation.
 */
export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState({ name: '', email: '', message: '' })

  const send = async () => {
    if (!msg.name || !msg.email || !msg.message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-teal'

  const DETAILS = [
    { Icon: Mail, label: 'Email', value: EVENT.contact.email, href: `mailto:${EVENT.contact.email}` },
    { Icon: Phone, label: 'Phone', value: EVENT.contact.phone, href: `tel:${EVENT.contact.phone.replace(/\s/g, '')}` },
    { Icon: MapPin, label: 'Venue', value: `${EVENT.venue.name}, ${EVENT.venue.city}`, href: undefined },
    { Icon: Instagram, label: 'Instagram', value: EVENT.contact.instagram, href: undefined },
  ]

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    EVENT.venue.mapsQuery,
  )}&output=embed`

  return (
    <>
      <PageHeader
        current="Contact"
        eyebrow="Get in touch"
        title="We’re here to help"
        subtitle="Questions about registration, abstracts, sponsorship or travel? Reach the ICAAICON 2026 secretariat."
      />

      <section className="bg-ivory py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Details + form */}
            <div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid gap-4 sm:grid-cols-2"
              >
                {DETAILS.map((d) => (
                  <motion.div key={d.label} variants={fadeUp} className="card p-5">
                    <d.Icon className="text-teal" size={22} />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="font-display text-base font-semibold text-ink hover:text-teal"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-display text-base font-semibold text-ink">
                        {d.value}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Message form */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="card mt-6 p-7"
              >
                {sent ? (
                  <div className="flex flex-col items-center py-6 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-ivory">
                      <Check size={26} />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                      Message sent
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      We’ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={msg.name}
                      onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                      className={field}
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      value={msg.email}
                      onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                      className={field}
                    />
                    <textarea
                      placeholder="How can we help?"
                      rows={4}
                      value={msg.message}
                      onChange={(e) =>
                        setMsg({ ...msg, message: e.target.value })
                      }
                      className={`${field} resize-none`}
                    />
                    <button
                      type="button"
                      onClick={send}
                      disabled={loading}
                      className="btn-primary w-full disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        'Send message'
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="overflow-hidden rounded-3xl border border-ink/10 shadow-card"
            >
              <iframe
                title={`Map to ${EVENT.venue.name}`}
                src={mapSrc}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
