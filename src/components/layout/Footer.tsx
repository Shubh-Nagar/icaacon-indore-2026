import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import TempleSkyline from '@/components/ui/TempleSkyline'
import { EVENT, NAV_LINKS, FOCUS_AREAS } from '@/data/content'

/**
 * Site footer.
 * Deep-teal band closed off by the signature temple skyline running along the
 * very bottom edge — the motif that opened the hero now closes the page.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-teal-deep text-ivory">
      <div className="container-x relative z-10 grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand + theme */}
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
            {EVENT.edition} {EVENT.longName}. A diamond-jubilee gathering for a
            healthier tomorrow.
          </p>
          <p className="mt-4 font-display text-lg italic text-gold-soft">
            “{EVENT.theme}”
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-gold-soft">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {[...NAV_LINKS, { label: 'Register', to: '/register' }].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-ivory/75 transition-colors hover:text-gold-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Focus tracks */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-gold-soft">
            Focus tracks
          </h3>
          <ul className="mt-5 space-y-3">
            {FOCUS_AREAS.map((f) => (
              <li key={f.title} className="text-sm text-ivory/75">
                {f.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-gold-soft">
            Secretariat
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-ivory/75">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-soft" />
              <span>
                {EVENT.venue.name}, {EVENT.venue.city}
                <br />
                {EVENT.venue.region}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold-soft" />
              <a
                href={`mailto:${EVENT.contact.email}`}
                className="transition-colors hover:text-gold-soft"
              >
                {EVENT.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold-soft" />
              <a
                href={`tel:${EVENT.contact.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-gold-soft"
              >
                {EVENT.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={16} className="shrink-0 text-gold-soft" />
              <span>{EVENT.contact.instagram}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-x relative z-10 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 py-6 text-xs text-ivory/55 sm:flex-row">
        <p>
          © {year} {EVENT.shortName} {EVENT.city} {EVENT.year}. All rights
          reserved.
        </p>
        <p>
          {EVENT.dates} · {EVENT.venue.name}, {EVENT.venue.city}
        </p>
      </div>

      {/* Signature skyline motif along the very bottom */}
      <TempleSkyline
        color="rgba(247,244,237,0.12)"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full"
      />
    </footer>
  )
}
