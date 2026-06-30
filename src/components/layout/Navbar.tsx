import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, CalendarDays, ChevronDown } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { NAV_LINKS, HOST_CITY_LINKS, EVENT } from '@/data/content'

/**
 * Sticky navigation bar.
 * - Transparent while sitting over the hero, then gains an ivory/blur
 *   background + shadow once the user scrolls.
 * - Collapses to a full-screen drawer on mobile.
 * - "Host City" has a dropdown on desktop and an accordion on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [cityOpen, setCityOpen] = useState(false)
  const [mobileCity, setMobileCity] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setCityOpen(false); setMobileCity(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCityOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const solid = scrolled || open
  const linkBase = solid ? 'text-ink-soft hover:text-teal' : 'text-ivory/85 hover:text-ivory'
  const activeColor = solid ? 'text-teal' : 'text-gold-soft'

  const isCityActive = HOST_CITY_LINKS.some((l) => pathname.startsWith(l.to))

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
          {NAV_LINKS.filter((l) => l.to !== '/contact').map((link) => {
            const active = pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative font-sans text-sm font-semibold transition-colors ${
                    active ? activeColor : linkBase
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

          {/* Host City dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setCityOpen((v) => !v)}
              className={`inline-flex items-center gap-1 font-sans text-sm font-semibold transition-colors ${
                isCityActive ? activeColor : linkBase
              }`}
            >
              Host City
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${cityOpen ? 'rotate-180' : ''}`}
              />
              {isCityActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold"
                />
              )}
            </button>

            <AnimatePresence>
              {cityOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-ink/10 bg-ivory py-2 shadow-lift"
                >
                  {HOST_CITY_LINKS.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-ivory-deep hover:text-teal ${
                          pathname === link.to ? 'text-teal' : 'text-ink-soft'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Contact — after Host City */}
          {NAV_LINKS.filter((l) => l.to === '/contact').map((link) => {
            const active = pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative font-sans text-sm font-semibold transition-colors ${
                    active ? activeColor : linkBase
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
              {NAV_LINKS.filter((l) => l.to !== '/contact').map((link) => (
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

              {/* Host City accordion */}
              <button
                type="button"
                onClick={() => setMobileCity((v) => !v)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-lg ${
                  isCityActive ? 'bg-teal-tint text-teal' : 'text-ink hover:bg-ivory-deep'
                }`}
              >
                Host City
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${mobileCity ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {mobileCity && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-0.5 pl-4">
                      {HOST_CITY_LINKS.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`rounded-xl px-4 py-2.5 text-base font-medium ${
                            pathname === link.to
                              ? 'text-teal'
                              : 'text-ink-soft hover:bg-ivory-deep'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact — after Host City */}
              {NAV_LINKS.filter((l) => l.to === '/contact').map((link) => (
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

              <Link to="/register" className="btn-accent mt-3 w-full">
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
