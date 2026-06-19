'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Drop images into public/gallery/ and list them here ──
const IMAGES = [
  '/gallery/gallery-1.avif',
  '/gallery/gallery-2.avif',
  '/gallery/gallery-3.avif',
  '/gallery/gallery-4.avif',
]

export default function ImageGallery() {
  const [index, setIndex]       = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((next: number) => {
    const target = (next + IMAGES.length) % IMAGES.length
    setDirection(target > index ? 1 : -1)
    setIndex(target)
  }, [index])

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(index + 1), 5500)
    return () => clearInterval(t)
  }, [index, go])

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* ── Gallery container ── */}
        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl bg-black"
          style={{ aspectRatio: '1400/500' }}
        >
          {/* Slides */}
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, filter: 'blur(12px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(12px)' }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Ken Burns slow zoom on the image */}
              <motion.img
                key={`img-${index}`}
                src={IMAGES[index]}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.0 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: 6, ease: 'linear' }}
                draggable={false}
              />

              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* ── Left arrow ── */}
          <button
            onClick={() => go(index - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 border border-white/20 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* ── Right arrow ── */}
          <button
            onClick={() => go(index + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 border border-white/20 group"
          >
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* ── Counter ── */}
          <div className="absolute top-4 right-5 z-20 text-white/60 text-xs font-mono tracking-widest">
            {String(index + 1).padStart(2, '0')} / {String(IMAGES.length).padStart(2, '0')}
          </div>

          {/* ── Progress bar ── */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
            <motion.div
              key={index}
              className="h-full bg-white/60"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.5, ease: 'linear' }}
            />
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="group relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  width:  i === index ? 32 : 10,
                  height: 10,
                  backgroundColor: i === index ? '#0A2540' : '#CBD5E1',
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="rounded-full"
              />
            </button>
          ))}
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="flex gap-3 mt-4 justify-center">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`relative overflow-hidden rounded-xl transition-all duration-300 flex-shrink-0 ${
                i === index
                  ? 'ring-3 ring-navy scale-105 shadow-lg'
                  : 'opacity-60 hover:opacity-90 hover:scale-102'
              }`}
              style={{ width: 100, height: 36 }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
              {i === index && (
                <div className="absolute inset-0 bg-navy/20" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
