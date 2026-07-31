import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Container from '@/components/ui/Container'
import Img from '@/components/ui/Img'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion'
import { COMMITTEES } from '@/data/content'

/** Roster page for one of the four committees, keyed by :slug. */
export default function CommitteePage() {
  const { slug } = useParams()
  const committee = COMMITTEES.find((c) => c.slug === slug)

  if (!committee) return <Navigate to="/" replace />

  return (
    <>
      <PageHeader
        current={committee.label}
        eyebrow={committee.eyebrow}
        title={committee.label}
        subtitle={committee.description}
      />

      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {committee.members.map((member, i) => (
              <motion.div
                key={`${member.designation}-${i}`}
                variants={fadeUp}
                className="overflow-hidden rounded-3xl bg-white shadow-card"
              >
                {member.photo ? (
                  <Img
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    className="aspect-square w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-teal/10 text-teal">
                    <Users size={48} />
                  </div>
                )}
                <div className="min-w-0 p-6">
                  <p className="font-display text-base font-semibold text-ink">{member.name}</p>
                  <p className="text-sm text-ink-soft">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
