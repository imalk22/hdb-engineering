'use client'

import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  {
    gradient: 'from-navy via-blue-900 to-slate-900',
    accent: 'from-orange/30 to-transparent',
    badge: '🔥 Best Seller',
    title: 'Automatic Liquid Filling & Packing Machine',
    titleSi: 'ස්වයංක්‍රීය ද්‍රව ඇසුරුම් යන්ත්‍රය',
    stat: 'LKR 460,000',
    statLabel: 'Pre-Order Price',
    icon: '💧',
  },
  {
    gradient: 'from-emerald-900 via-teal-900 to-slate-900',
    accent: 'from-emerald-400/20 to-transparent',
    badge: '🌡️ Top Quality',
    title: 'Food & Vegetable Dehydrator Machines',
    titleSi: 'ආහාර සහ එළවළු සූකාරය',
    stat: '8–96 Trays',
    statLabel: 'Available Sizes',
    icon: '🍎',
  },
  {
    gradient: 'from-purple-900 via-indigo-900 to-slate-900',
    accent: 'from-purple-400/20 to-transparent',
    badge: '⚙️ Heavy Duty',
    title: 'Multi-Spice Grinding Mills',
    titleSi: 'කුළු ඇඹරීම් යන්ත්‍ර',
    stat: '10 Models',
    statLabel: 'To Choose From',
    icon: '🌿',
  },
  {
    gradient: 'from-rose-900 via-red-900 to-slate-900',
    accent: 'from-rose-400/20 to-transparent',
    badge: '🔒 Premium',
    title: 'Band & Vacuum Sealers',
    titleSi: 'බෑන්ඩ් සහ රික්ත සීල් යන්ත්‍ර',
    stat: '99.9%',
    statLabel: 'Seal Accuracy',
    icon: '🏷️',
  },
  {
    gradient: 'from-amber-900 via-orange-900 to-slate-900',
    accent: 'from-amber-400/20 to-transparent',
    badge: '🌾 Agricultural',
    title: 'Rice Mill Machines',
    titleSi: 'සහල් කෝල් යන්ත්‍ර',
    stat: '3 Brands',
    statLabel: 'Lokka · Saviya · Ransahal',
    icon: '🌾',
  },
]

export default function Gallery({ locale }: { locale: string }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = useCallback((next: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent((next + SLIDES.length) % SLIDES.length)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5000)
    return () => clearInterval(t)
  }, [current, go])

  const sl = SLIDES[current]

  return (
    <section className="relative py-20 px-4 bg-ice overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
          📸 Our Machines Gallery
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-navy font-sinhala-display">
          අපගේ යන්ත්‍ර එකතුව
        </h2>
        <p className="text-gray-500 mt-2">Swipe to explore — click for details</p>
      </div>

      {/* Main slide */}
      <div className="max-w-5xl mx-auto">
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          style={{ minHeight: '420px' }}
        >
          {/* Gradient bg */}
          <div className={`absolute inset-0 bg-gradient-to-br ${sl.gradient}`} />
          <div className={`absolute inset-0 bg-gradient-to-r ${sl.accent}`} />

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-80 h-80 border border-white/5 rounded-full" />
          <div className="absolute -right-10 -top-10 w-60 h-60 border border-white/5 rounded-full" />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-between" style={{ minHeight: '420px' }}>
            <div>
              <span className="inline-block bg-white/15 backdrop-blur text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                {sl.badge}
              </span>
              <div className="text-7xl sm:text-8xl mb-6 animate-float">{sl.icon}</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2">
                {sl.title}
              </h3>
              <p className="text-white/70 text-base font-sinhala-body">{sl.titleSi}</p>
            </div>

            <div className="flex items-end justify-between mt-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-4">
                <p className="text-white/60 text-xs uppercase tracking-widest">{sl.statLabel}</p>
                <p className="text-white font-extrabold text-2xl">{sl.stat}</p>
              </div>
              <a
                href={`/${locale}/machines`}
                className="flex items-center gap-2 bg-white text-navy font-bold px-5 py-3 rounded-2xl hover:bg-orange hover:text-white transition-all btn-press text-sm"
              >
                View All →
              </a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={() => go(current - 1)} className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-navy hover:text-white transition-all btn-press">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-3 bg-navy' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

          <button onClick={() => go(current + 1)} className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-navy hover:text-white transition-all btn-press">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-5 justify-center">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300 ${
                i === current
                  ? 'bg-navy text-white scale-105 shadow-lg'
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl">{s.icon}</span>
              <span className="text-[10px] font-medium w-14 text-center leading-tight line-clamp-1">{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
