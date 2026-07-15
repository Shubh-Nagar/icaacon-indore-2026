import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Registration from '@/components/sections/Registration'
import { GOOGLE_FORM_URL } from '@/data/content'
import { fadeUp, viewportOnce } from '@/lib/motion'

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        current="Register"
        logos
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
              className="card mt-10 flex flex-col items-center gap-5 p-8 text-center"
            >
              <p className="max-w-sm text-sm text-ink-soft">
                Registration and payment are handled through our Google Form.
                Fill it in and our secretariat will confirm your registration.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                Open registration form
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
