import VisitorCounter from '@/components/ui/VisitorCounter'
import { SOCIAL_LINKS, MARQUEE_NOTICES } from '@/data/content'

/**
 * Slim utility bar pinned above the Navbar — homepage only.
 * Left: scrolling conference notices. Right: visitor count, then socials.
 */
export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 border-b border-ivory/10 bg-ink text-ivory">
      <div className="container-x flex h-full items-center gap-4">
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...MARQUEE_NOTICES, ...MARQUEE_NOTICES].map((notice, i) => (
              <span
                key={i}
                className="mx-5 inline-flex items-center gap-2 text-xs font-medium text-ivory/80"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-gold-soft" aria-hidden="true" />
                {notice}
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <VisitorCounter />
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-ivory/70 transition-colors hover:text-gold-soft"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
