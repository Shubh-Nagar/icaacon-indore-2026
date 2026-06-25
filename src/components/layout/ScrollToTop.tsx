import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll to the top whenever the route changes, so navigating between
 * pages always starts at the hero rather than mid-page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}
