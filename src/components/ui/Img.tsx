import { useState } from 'react'

/**
 * Image with a graceful fallback.
 * If a remote (Unsplash) photo fails to load, we swap to a tasteful
 * teal→gold gradient instead of showing a broken-image icon — so the layout
 * never looks unfinished. Lazy-loaded by default for performance.
 */
export default function Img({
  src,
  alt,
  className = '',
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-teal via-teal-deep to-gold/70 ${className}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
