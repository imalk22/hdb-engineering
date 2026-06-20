'use client'

import { useInView } from '@/hooks/useInView'

const VIDEOS = [
  {
    id: 'MgbIAa46c9o',
    channel: 'Nilame',
    title: 'නිෂ්පාදන භාණ්ඩය රු.20යි – HDB Engineering Review',
  },
  {
    id: '8cdLOvE-dLw',
    channel: 'Charana TV',
    title: 'Director Mr.Hasitha Darshana & Mr.Chalanka Bandara | Buzi Katha',
  },
  {
    id: '-u8Q8GYShlo',
    channel: 'Dhanush Vlogs SL',
    title: 'හෙමෝටම ගේදර ඉඳන් සල්ලි – HDB Machine Review',
  },
]

export default function YoutubeInterviews({ locale }: { locale: string }) {
  const si = locale === 'si'
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView(0.1)

  return (
    <section className="py-8 sm:py-24 px-4 bg-navy relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(white 1px,transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-4 sm:mb-14 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-flex items-center gap-1 sm:gap-2 bg-orange/15 text-orange text-[8px] sm:text-sm font-bold px-2.5 sm:px-5 py-1 sm:py-2 rounded-full tracking-wide mb-2 sm:mb-5 font-sinhala-body">
            🔥 ප්‍රසිද්ධ YouTubers ලා අපේ ව්‍යාපාරය ගැන දක්වන අදහස්
          </span>
          <h2 className="text-sm sm:text-5xl font-extrabold text-white leading-tight font-sinhala-display">
            {si ? 'ඔවුන් කියන දේ' : "What They're Saying"}
          </h2>
          <p className="hidden sm:block text-blue-200/70 mt-4 text-base max-w-xl mx-auto font-sinhala-body">
            {si
              ? 'YouTubersලා සහ ව්‍යාපාරිකයන් අපගේ නිෂ්පාදන ගැන ඔවුන්ගේ අත්දැකීම් බලන්න'
              : 'Real reviews from YouTubers'}
          </p>
        </div>

        {/* Video grid */}
        <div ref={gridRef} className="grid grid-cols-3 gap-2 sm:gap-6">
          {VIDEOS.map((video, i) => (
            <div
              key={video.id}
              className={`group relative rounded-lg sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-lg sm:rounded-3xl border border-white/10 group-hover:border-orange/50 transition-colors duration-500 z-10 pointer-events-none" />
              {/* Orange top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* 16:9 iframe */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Channel label */}
              <div className="bg-navy/90 backdrop-blur-sm px-1.5 sm:px-4 py-1 sm:py-2 flex items-center gap-1 sm:gap-2">
                <span className="text-orange text-[7px] sm:text-xs font-bold uppercase tracking-wider">{video.channel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <p className={`text-center text-blue-300/50 text-[7px] sm:text-xs mt-4 sm:mt-10 tracking-widest uppercase transition-all duration-700 delay-500 ${gridInView ? 'opacity-100' : 'opacity-0'}`}>
          ⭐ HDB Engineering Lanka — Trusted by 500+ Businesses Island-Wide
        </p>
      </div>
    </section>
  )
}
