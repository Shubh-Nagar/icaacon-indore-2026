import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'

import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProgramPage from '@/pages/ProgramPage'
import RegisterPage from '@/pages/RegisterPage'
import ContactPage from '@/pages/ContactPage'

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
          {/* Fallback: anything unknown returns home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
