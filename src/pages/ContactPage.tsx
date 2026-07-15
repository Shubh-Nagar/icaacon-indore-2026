import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Check, Loader2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import { EVENT } from '@/data/content'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'

type ContactForm = { name: string; email: string; message: string }
type ContactErrors = Partial<Record<keyof ContactForm, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(msg: ContactForm): ContactErrors {
  const errors: ContactErrors = {}
  if (!msg.name.trim()) errors.name = 'Please enter your name.'
  else if (msg.name.trim().length < 2) errors.name = 'Name is too short.'

  if (!msg.email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(msg.email.trim())) errors.email = 'Enter a valid email address.'

  if (!msg.message.trim()) errors.message = 'Please enter a message.'
  else if (msg.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'

  return errors
}

/**
 * Contact page — secretariat details + a message form that validates
 * client-side, then hands the message to WhatsApp (click-to-chat) since
 * this is a static, backend-less site.
 */
export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<ContactForm>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<ContactErrors>({})

  const updateField = (key: keyof ContactForm, value: string) => {
    setMsg((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const send = async () => {
    const nextErrors = validate(msg)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)

    const whatsappText = [
      `New contact form message — ICAAICON 2026`,
      `Name: ${msg.name.trim()}`,
      `Email: ${msg.email.trim()}`,
      ``,
      msg.message.trim(),
    ].join('\n')

    const whatsappNumber = EVENT.contact.phone.replace(/\D/g, '')
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

    await new Promise((r) => setTimeout(r, 600))
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setLoading(false)
    setSent(true)
  }

  const fieldBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none'
  const fieldClass = (key: keyof ContactForm) =>
    `${fieldBase} ${errors[key] ? 'border-maroon focus:border-maroon' : 'border-ink/15 focus:border-teal'}`

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
        logos
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
                      Opened in WhatsApp
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      Send the pre-filled message from WhatsApp to reach us. Didn’t open?{' '}
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="font-semibold text-teal underline underline-offset-2"
                      >
                        Try again
                      </button>
                    </p>
                  </div>
                ) : (
                  <form
                    noValidate
                    onSubmit={(e) => {
                      e.preventDefault()
                      void send()
                    }}
                    className="grid gap-4"
                  >
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={msg.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        className={fieldClass('name')}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-maroon">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={msg.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        className={fieldClass('email')}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-maroon">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <textarea
                        placeholder="How can we help?"
                        rows={4}
                        value={msg.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        className={`${fieldClass('message')} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-maroon">{errors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Opening WhatsApp…
                        </>
                      ) : (
                        'Send via WhatsApp'
                      )}
                    </button>
                  </form>
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
