'use client'

import { useState, useEffect, useRef } from 'react'

const TESTIMONIALS = [
  {
    id: '01',
    name: 'වාමර',
    location: 'ගම්පහ',
    industry: 'Ice Pop Manufacturing',
    quote: '"Manual Packing නාවකාලා Production එක දෙගුණ වුණා."',
    stars: 5,
  },
  {
    id: '02',
    name: 'නිලූකා',
    location: 'කුරුණෑගල',
    industry: 'Juices & Cordials',
    quote: '"Machine එක ගත්තට පස්සේ Labour Cost එක ගොඩක් අඩු වුණා."',
    stars: 5,
  },
  {
    id: '03',
    name: 'සමාන්',
    location: 'මාතර',
    industry: 'Coconut Oil Packing',
    quote: '"Packing Quality එක නිසා අපේ Brand Value එක වැඩි වුණා."',
    stars: 5,
  },
]

function AnimatedCounter({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.floor(eased * target))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}</span>
}

function VideoCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl overflow-hidden flex-shrink-0 w-80 sm:w-auto hover:bg-white/14 hover:scale-[1.02] transition-all duration-300">
      {/* Video placeholder */}
      <div className="relative bg-navy/60 aspect-video flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-navy/80" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center shadow cursor-pointer hover:scale-110 hover:bg-white/30 transition-all duration-300 border border-white/30">
            <span className="text-white text-lg ml-1">▶</span>
          </div>
          <span className="text-white text-xs bg-black/40 backdrop-blur px-2 py-0.5 rounded font-sinhala-body font-semibold">සම්පූර්ණ වීඩියෝ බලන්න</span>
        </div>
        <span className="absolute top-2 left-2 bg-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
          📹 Customer Story #{t.id}
        </span>
      </div>

      {/* Card content */}
      <div className="p-4">
        <p className="font-bold text-white font-sinhala-body font-semibold">{t.name} – {t.location}</p>
        <p className="text-xs text-blue-300 mb-2 font-semibold">({t.industry})</p>
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: t.stars }).map((_, i) => (
            <span key={i} className="text-amber-400 text-sm">★</span>
          ))}
        </div>
        <p className="text-blue-100 text-sm font-sinhala-body font-semibold leading-relaxed">{t.quote}</p>
      </div>
    </div>
  )
}

const STATS = [
  { icon: '🏭', num: true,  label: 'Machines Installed', big: false },
  { icon: '🚚', num: false, label: 'Islandwide Delivery', big: false },
  { icon: '🔧', num: false, label: 'Spare Parts Available', big: false },
  { icon: '👨‍🔧', num: false, label: 'Technical Support Team', big: false },
  { icon: '🏆', num: false, label: 'HDB Engineering Lanka', big: true },
]

export default function SocialProofSection() {
  return (
    <section className="bg-gradient-to-b from-navy to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 border border-white/20">
            💬 What They&apos;re Saying
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sinhala-display leading-tight mb-2">
            HDB යන්ත්‍රෝපකරණ භාවිතයෙන් සාර්ථක වූණු<br className="hidden sm:block" /> ශ්‍රී ලාංකික ව්‍යාපාරිකයින්
          </h2>
          <p className="text-blue-200 text-sm font-sinhala-body font-semibold max-w-xl mx-auto">
            අපගේ පාරිභෝගිකයින්ගේ කර්මාන්තශාලා වලින් ලබාගත් අදහස්
          </p>
        </div>

        {/* Cards */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory lg:overflow-visible">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="snap-start">
              <VideoCard t={t} />
            </div>
          ))}
        </div>

        {/* Trust strip — big animated */}
        <div className="mt-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange/5 via-transparent to-orange/5 rounded-3xl" />
          <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl px-6 py-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            {STATS.map(({ icon, num, label, big }) => (
              <div key={label} className="group flex flex-col items-center gap-1.5">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">{icon}</span>
                {num && (
                  <div className="font-extrabold text-orange text-3xl sm:text-4xl leading-none drop-shadow">
                    <AnimatedCounter target={500} />+
                  </div>
                )}
                <div className={`text-blue-100 font-semibold leading-tight ${big ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
