import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Registration from '@/components/sections/Registration'
import { REGISTRATION_TIERS, FOCUS_AREAS } from '@/data/content'
import { fadeUp, viewportOnce } from '@/lib/motion'

type FormState = {
  name: string
  email: string
  org: string
  tier: string
  track: string
}

const EMPTY: FormState = {
  name: '',
  email: '',
  org: '',
  tier: REGISTRATION_TIERS[0].name,
  track: FOCUS_AREAS[0].title,
}

/**
 * Register page.
 * The pricing tiers (reused from the home section) sit above a controlled,
 * client-side registration form. Submission is mocked with a fake async call —
 * wire `handleSubmit` to your real backend (e.g. Razorpay + Node/Express).
 *
 * NOTE: no native <form> submit is used; we drive everything with React state
 * and an onClick handler, which keeps behaviour predictable inside the SPA.
 */
export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address'
    if (!form.org.trim()) next.org = 'Please enter your institution'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setStatus('loading')
    // Replace this with your real API call / payment flow.
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('done')
  }

  // Shared input styling.
  const field =
    'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-teal'

  return (
    <>
      <PageHeader
        current="Register"
        eyebrow="Registration"
        title="Secure your place in Indore"
        subtitle="Pick a pass, complete the form, and our secretariat will confirm your registration with payment details."
      />

      <Registration />

      {/* Form */}
      <section className="bg-ivory py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Delegate details"
              title="Complete your registration"
              subtitle="We’ll email a confirmation and secure payment link to the address you provide."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="card mt-10 p-8"
            >
              {status === 'done' ? (
                // Success state
                <div className="flex flex-col items-center py-8 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal text-ivory">
                    <Check size={30} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    Registration received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft">
                    Thanks, {form.name.split(' ')[0]}. A confirmation and payment
                    link for the <strong>{form.tier}</strong> pass is on its way
                    to {form.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY)
                      setStatus('idle')
                    }}
                    className="btn-ghost mt-6"
                  >
                    Register another delegate
                  </button>
                </div>
              ) : (
                <div className="grid gap-5">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Dr. Your Name"
                      className={field}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-maroon">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@hospital.org"
                      className={field}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-maroon">{errors.email}</p>
                    )}
                  </div>

                  {/* Org */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink">
                      Institution / hospital
                    </label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => update('org', e.target.value)}
                      placeholder="Your institution"
                      className={field}
                    />
                    {errors.org && (
                      <p className="mt-1 text-xs text-maroon">{errors.org}</p>
                    )}
                  </div>

                  {/* Tier + track */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink">
                        Pass type
                      </label>
                      <select
                        value={form.tier}
                        onChange={(e) => update('tier', e.target.value)}
                        className={field}
                      >
                        {REGISTRATION_TIERS.map((t) => (
                          <option key={t.name} value={t.name}>
                            {t.name} — {t.price}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink">
                        Primary interest
                      </label>
                      <select
                        value={form.track}
                        onChange={(e) => update('track', e.target.value)}
                        className={field}
                      >
                        {FOCUS_AREAS.map((f) => (
                          <option key={f.title} value={f.title}>
                            {f.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="btn-accent mt-2 w-full disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      'Complete registration'
                    )}
                  </button>

                  <p className="text-center text-xs text-ink-muted">
                    This is a demo form. Connect it to your backend / Razorpay
                    flow to take live payments.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
