import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import { GALLERY } from '@/data/content'
import { scaleIn, staggerContainer, viewportOnce } from '@/lib/motion'

/**
 * Gallery — a bento/masonry grid mixing conference moments with Indore
 * landmarks. The first tile spans 2×2 to anchor the layout; others fill in.
 * Images zoom gently on hover.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="The ICAACON experience"
          subtitle="Science, conversation and the colour of Indore — a glimpse of what awaits."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {GALLERY.map((g) => (
            <motion.figure
              key={g.src}
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${g.span}`}
            >
              <Img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-ivory">{g.alt}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
