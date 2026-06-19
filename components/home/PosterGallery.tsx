'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const POSTERS = [
  {
    bg: 'bg-[#0A2540]',
    overlay: 'bg-gradient-to-br from-blue-900/80 via-[#0A2540] to-slate-900',
    accent: '#FF6B00',
    label: '🔥 Best Seller',
    heading: 'Automatic Liquid\nFilling & Packing\nMachine',
    headingSi: 'ස්වයංක්‍රීය ද්‍රව ඇසුරුම් යන්ත්‍රය',
    stat: 'LKR 460,000',
    statLabel: 'Pre-Order Special Price',
    cta: 'Order Now',
    ctaHref: '/si/liquid-machine',
    icon: '💧',
    pattern: 'radial',
  },
  {
    bg: 'bg-emerald-950',
    overlay: 'bg-gradient-to-tl from-emerald-900/70 via-teal-950 to-slate-900',
    accent: '#25D366',
    label: '🌡️ Premium Quality',
    heading: 'Food & Vegetable\nDehydrator\nMachines',
    headingSi: 'ආහාර සහ එළවළු\nවිජලනය යන්ත්‍ර',
    stat: '8 – 96 Trays',
    statLabel: 'Choose your size',
    cta: 'Explore Range',
    ctaHref: '/si/machines/dehydrators',
    icon: '🍎',
    pattern: 'dots',
  },
  {
    bg: 'bg-purple-950',
    overlay: 'bg-gradient-to-br from-purple-900/70 via-indigo-950 to-slate-900',
    accent: '#a855f7',
    label: '⚙️ Heavy Duty',
    heading: 'Multi-Spice\nGrinding Mill\nMachines',
    headingSi: 'කුළු ඇඹරීම් යන්ත්‍ර\nඋසස් ශ්‍රේණිය',
    stat: '10+ Models',
    statLabel: 'SS & Industrial Grade',
    cta: 'View Mills',
    ctaHref: '/si/machines/grinding-mills',
    icon: '🌿',
    pattern: 'grid',
  },
  {
    bg: 'bg-rose-950',
    overlay: 'bg-gradient-to-bl from-rose-900/60 via-red-950 to-slate-900',
    accent: '#f43f5e',
    label: '🔒 Airtight Seal',
    heading: 'Band & Vacuum\nSealing\nMachines',
    headingSi: 'බෑන්ඩ් සහ රික්ත\nසීල් යන්ත්‍ර',
    stat: '99.9%',
    statLabel: 'Seal Accuracy',
    cta: 'See Sealers',
    ctaHref: '/si/machines/band-sealers',
    icon: '🏷️',
    pattern: 'lines',
  },
  {
    bg: 'bg-amber-950',
    overlay: 'bg-gradient-to-tr from-amber-900/70 via-orange-950 to-slate-900',
    accent: '#f97316',
    label: '🌾 Agricultural',
    heading: 'Rice Mill\nMachines\nSri Lanka',
    headingSi: 'ලෝකා · සවිය ·\nරන්සහල් · වෙළෙඳ\nශ්‍රේණි',
    stat: '3 Trusted Brands',
    statLabel: 'Lokka · Saviya · Ransahal',
    cta: 'View Rice Mills',
    ctaHref: '/si/machines/rice-mills',
    icon: '🌾',
    pattern: 'radial',
  },
]

type Poster = typeof POSTERS[0]

function PatternOverlay({ type }: { type: string }) {
  if (type === 'dots') return (
    <div className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: 'radial-gradient(white 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
  )
  if (type === 'grid') return (
    <div className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
  )
  if (type === 'lines') return (
    <div className="absolute inset-0 opacity-[0.04]"
      style={{ backgroundImage: 'repeating-linear-gradient(45deg,white,white 1px,transparent 1px,transparent 20px)' }} />
  )
  return (
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: 'radial-gradient(circle at 50% 50%,white 0%,transparent 60%)', backgroundSize: '600px 600px' }} />
  )
}

export default function PosterGallery({ locale }: { locale: string }) {
  const [current, setCurrent] = useState(0)
  const [entering, setEntering] = useState(-1)
  const [dir, setDir] = useState<'next' | 'prev'>('next')

  const go = useCallback((idx: number, direction: 'next' | 'prev' = 'next') => {
    const target = (idx + POSTERS.length) % POSTERS.length
    setDir(direction)
    setEntering(target)
    setTimeout(() => {
      setCurrent(target)
      setEntering(-1)
    }, 750)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go(current + 1, 'next'), 5000)
    return () => clearInterval(t)
  }, [current, go])

  const slide = POSTERS[current]
  const enterSlide = entering >= 0 ? POSTERS[entering] : null

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '92vh', minHeight: '560px' }}>

      {/* ── Current slide ── */}
      <PosterSlide poster={slide} locale={locale} />

      {/* ── Entering slide (wipe over the top) ── */}
      {enterSlide && (
        <div
          key={entering}
          className="absolute inset-0"
          style={{
            animation: `wipe${dir === 'next' ? 'FromRight' : 'FromLeft'} 0.75s cubic-bezier(.77,0,.175,1) forwards`,
          }}
        >
          <PosterSlide poster={enterSlide} locale={locale} />
        </div>
      )}

      {/* ── Controls — dots centred at bottom, arrows on the side edges ── */}
      {/* Prev arrow — left edge, vertically centred */}
      <button
        onClick={() => go(current - 1, 'prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white flex items-center justify-center transition-all border border-white/30"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Next arrow — right edge, vertically centred */}
      <button
        onClick={() => go(current + 1, 'next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 text-white flex items-center justify-center transition-all border border-white/30"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      {/* Dots — centred at bottom, no arrows here so no overlap with CTA */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {POSTERS.map((_, i) => (
          <button key={i} onClick={() => go(i, i > current ? 'next' : 'prev')}
            className={`rounded-full transition-all duration-400 ${
              i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`} />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute top-6 right-6 z-20 text-white/50 text-sm font-mono">
        {String(current + 1).padStart(2,'0')} / {String(POSTERS.length).padStart(2,'0')}
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div key={current} className="h-full bg-white/60" style={{ animation: 'progressBar 5s linear forwards' }} />
      </div>

      {/* Wipe keyframes injected inline */}
      <style>{`
        @keyframes wipeFromRight {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        @keyframes wipeFromLeft {
          from { clip-path: inset(0 0 0 100%); }
          to   { clip-path: inset(0 0 0 0%); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}

function PosterSlide({ poster: p, locale }: { poster: Poster; locale: string }) {
  return (
    <div className={`absolute inset-0 ${p.bg}`}>
      <PatternOverlay type={p.pattern} />
      <div className={`absolute inset-0 ${p.overlay}`} />

      {/* Large decorative icon */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 text-[180px] sm:text-[240px] opacity-[0.12] select-none pointer-events-none leading-none">
        {p.icon}
      </div>

      {/* Decorative ring */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-white/5 rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 w-full pt-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-white/80 text-sm font-bold mb-6 border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full">
            {p.label}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-[80px] font-extrabold text-white leading-[1.0] tracking-tight mb-4 max-w-2xl" style={{ whiteSpace: 'pre-line' }}>
            {p.heading}
          </h1>

          {/* Sinhala */}
          <p className="font-sinhala-body text-white/60 text-lg mb-8 max-w-md" style={{ whiteSpace: 'pre-line' }}>
            {p.headingSi}
          </p>

          {/* Stat + CTA row */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Stat pill */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-3">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{p.statLabel}</p>
              <p className="text-white font-extrabold text-2xl">{p.stat}</p>
            </div>

            {/* CTA */}
            <Link href={`/${locale}${p.ctaHref.replace('/si','')}`}
              className="flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all btn-press"
              style={{ backgroundColor: p.accent }}>
              {p.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </div>
  )
}
