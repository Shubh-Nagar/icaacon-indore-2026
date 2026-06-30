import PageHeader from '@/components/ui/PageHeader'
import About from '@/components/sections/About'
import FocusAreas from '@/components/sections/FocusAreas'
import WhyAttend from '@/components/sections/WhyAttend'
import CtaBand from '@/components/sections/CtaBand'

/**
 * About page — a deeper read on the conference. Reuses the home sections so
 * copy stays in one place, framed by a dedicated page header.
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        current="About"
        eyebrow="About ICAAICON 2026"
        title={
          <>
            A diamond-jubilee gathering for{' '}
            <span className="italic text-gold-soft">healthier breathing</span>
          </>
        }
        subtitle="Sixty years of bringing science, clinicians and patients together — now in Indore, with a sharper focus on the environment we all share."
      />
      <About />
      <FocusAreas />
      <WhyAttend />
      <CtaBand />
    </>
  )
}
