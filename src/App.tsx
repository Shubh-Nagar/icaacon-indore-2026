import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProgramPage from '@/pages/ProgramPage'
import RegisterPage from '@/pages/RegisterPage'
import ContactPage from '@/pages/ContactPage'
import PlacesToVisitIndorePage from '@/pages/PlacesToVisitIndorePage'
import PlacesNearIndorePage from '@/pages/PlacesNearIndorePage'
import HowToReachIndorePage from '@/pages/HowToReachIndorePage'
import FoodAndCulturePage from '@/pages/FoodAndCulturePage'
import HotelAccommodationPage from '@/pages/HotelAccommodationPage'
import AboutIndorePage from '@/pages/AboutIndorePage'

/**
 * Root application shell.
 * - Navbar + Footer persist across every route.
 * - ScrollToTop resets scroll position on navigation.
 * - The homepage stacks all section components for a single-page feel,
 *   while the other routes give the site genuine multi-page depth.
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/host-city/places-to-visit" element={<PlacesToVisitIndorePage />} />
          <Route path="/host-city/places-near-indore" element={<PlacesNearIndorePage />} />
          <Route path="/host-city/how-to-reach" element={<HowToReachIndorePage />} />
          <Route path="/host-city/food-and-culture" element={<FoodAndCulturePage />} />
          <Route path="/host-city/hotel-accommodation" element={<HotelAccommodationPage />} />
          <Route path="/host-city/about-indore" element={<AboutIndorePage />} />
          {/* Fallback: anything unknown returns home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
