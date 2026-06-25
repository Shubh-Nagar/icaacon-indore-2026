import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FocusAreas from '@/components/sections/FocusAreas'
import ImportantDates from '@/components/sections/ImportantDates'
import Speakers from '@/components/sections/Speakers'
import Venue from '@/components/sections/Venue'
import WhyAttend from '@/components/sections/WhyAttend'
import Registration from '@/components/sections/Registration'
import Gallery from '@/components/sections/Gallery'
import Sponsors from '@/components/sections/Sponsors'
import CtaBand from '@/components/sections/CtaBand'

/**
 * Home — the single-page experience stacking every section in narrative order:
 * hook → context → themes → urgency → people → place → value → action → proof.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <ImportantDates />
      <Speakers />
      <Venue />
      <WhyAttend />
      <Registration />
      <Gallery />
      <Sponsors />
      <CtaBand />
    </>
  )
}
