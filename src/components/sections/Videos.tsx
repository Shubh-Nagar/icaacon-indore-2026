import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Youtube } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import { VIDEOS, VIDEO_PLAYLIST } from '@/data/content'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion'

const thumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

/**
 * "DFCA TV" video library — the Lung Care Foundation's YouTube playlist,
 * presented as a big featured player with a scrollable, clickable playlist
 * rail beside it (rather than an embedded YouTube widget) so it matches the
 * site's own look. Switching videos swaps the player's src directly instead
 * of resetting to a thumbnail, so the experience feels like one continuous
 * watch session.
 */
export default function Videos() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const active = VIDEOS[activeIndex]

  const playVideo = (index: number) => {
    setActiveIndex(index)
    setIsPlaying(true)
  }

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-32"
    >
      {/* ── Background image ─────────────────────────────────────────── */}
      <Img
        src="/lung-background.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay — keeps text and the video player legible over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink/90" />

      <div className="pointer-events-none absolute inset-0 grain opacity-[0.08]" />

      <Container className="relative z-10">
        <SectionHeading
          tone="ivory"
          eyebrow="Watch & learn"
          title={
            <>
              Stories from <span className="italic text-gold-soft">DFCA TV</span>
            </>
          }
          subtitle={`${VIDEOS.length} short films from ${VIDEO_PLAYLIST.channel} on the science, health impact and human stories behind air pollution.`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start"
        >
          {/* Featured player */}
          <motion.div
            variants={scaleIn}
            className="overflow-hidden rounded-3xl bg-black shadow-lift"
          >
            <div className="relative aspect-video w-full">
              {isPlaying ? (
                <iframe
                  key={active.id}
                  src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group absolute inset-0"
                  aria-label={`Play: ${active.title}`}
                >
                  <Img
                    src={thumbnail(active.id)}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-ink/30 transition-colors duration-300 group-hover:bg-ink/45" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-ivory shadow-lift transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </span>
                  </span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 bg-ink-soft/50 px-6 py-4">
              <div>
                <p className="font-display text-lg font-semibold leading-snug">
                  {active.title}
                </p>
                <p className="mt-0.5 text-sm text-ivory/60">
                  {VIDEO_PLAYLIST.channel} · {active.duration}
                </p>
              </div>
              <span className="eyebrow shrink-0 text-gold-soft">
                {String(activeIndex + 1).padStart(2, '0')} / {String(VIDEOS.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Playlist rail */}
          <motion.div
            variants={fadeUp}
            className="flex max-h-[320px] flex-col gap-1.5 overflow-y-auto rounded-3xl border border-ivory/10 bg-ivory/5 p-3 lg:max-h-[620px]"
          >
            {VIDEOS.map((video, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => playVideo(index)}
                  aria-current={isActive}
                  className={`group flex items-center gap-3 rounded-2xl p-2 text-left transition-colors ${
                    isActive ? 'bg-gold/15 ring-1 ring-gold/40' : 'hover:bg-ivory/10'
                  }`}
                >
                  <span className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg">
                    <Img
                      src={thumbnail(video.id)}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 rounded bg-ink/80 px-1 text-[10px] font-medium leading-tight text-ivory">
                      {video.duration}
                    </span>
                    {isActive && (
                      <span className="absolute inset-0 flex items-center justify-center bg-ink/40">
                        <Play size={14} fill="currentColor" className="text-gold-soft" />
                      </span>
                    )}
                  </span>
                  <span
                    className={`line-clamp-2 text-sm font-medium leading-snug ${
                      isActive ? 'text-gold-soft' : 'text-ivory/85 group-hover:text-ivory'
                    }`}
                  >
                    {video.title}
                  </span>
                </button>
              )
            })}
          </motion.div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href={VIDEO_PLAYLIST.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-ivory/25 text-ivory hover:border-gold hover:text-gold-soft"
          >
            <Youtube size={18} />
            Watch the full playlist on YouTube
          </a>
        </div>
      </Container>
    </section>
  )
}
