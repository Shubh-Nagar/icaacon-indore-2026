import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CalendarDays } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { NAV_LINKS, EVENT } from '@/data/content'

/**
 * Sticky navigation bar.
 * - Transparent while sitting over the hero, then gains an ivory/blur
 *   background + shadow once the user scrolls (tracked with a scroll listener).
 * - Collapses to a full-screen drawer on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Track scroll to toggle the solid background.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-ink/10 bg-ivory/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative font-sans text-sm font-semibold transition-colors ${
                    active
                      ? solid ? 'text-teal' : 'text-gold-soft'
                      : solid ? 'text-ink-soft hover:text-teal' : 'text-ivory/85 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className={`hidden items-center gap-1.5 text-xs font-semibold xl:flex ${solid ? 'text-ink-muted' : 'text-ivory/60'}`}>
            <CalendarDays size={14} className={solid ? 'text-teal' : 'text-gold-soft'} />
            {EVENT.datesShort}
          </span>
          <Link to="/register" className="btn-accent !py-2.5 !px-6">
            Register Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${solid ? 'text-ink' : 'text-ivory'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-xl px-4 py-3 font-display text-lg ${
                    pathname === link.to
                      ? 'bg-teal-tint text-teal'
                      : 'text-ink hover:bg-ivory-deep'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/register"
                className="btn-accent mt-3 w-full"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
