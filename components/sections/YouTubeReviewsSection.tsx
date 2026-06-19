const VIDEOS = [
  {
    id: 'D37sz6eqMp8',
    titleEn: 'HDB Engineering Lanka — Company Profile',
    titleSi: 'HDB ඉංජිනේරු ලංකා — සමාගම් හැඳින්වීම',
    tag: '🏭 Company Profile',
  },
  {
    id: 'T4W0rVptVmQ',
    titleEn: 'Job Creation Mantra — Self Employment',
    titleSi: 'රැකියා මවන මන්ත්‍රේ — ස්වයං රැකියා',
    tag: '💼 Entrepreneurship',
  },
  {
    id: 'esi64GYQxmU',
    titleEn: 'Profitable Machine — Trusted Delivery',
    titleSi: 'ලාභදායීම යන්ත්‍රයක්. විශ්වාසය වගකීමෙන්.',
    tag: '⭐ Customer Trust',
  },
  {
    id: 'vwXDH2Hp__k',
    titleEn: 'Grinding Mills — World Leaders in Lanka',
    titleSi: 'ඇඹරුම් යන්ත්‍ර ලොවේ ප්‍රමුඛයෝ',
    tag: '⚙️ Grinding Mills',
  },
  {
    id: 'gKeo8wA6X0c',
    titleEn: 'Farming with HDB — Sustainable Agriculture',
    titleSi: 'HDB සමඟ ගොවිතැන — තිරසාර කෘෂිකර්මය',
    tag: '🌾 Agriculture',
  },
  {
    id: 'XGFeLxXLfME',
    titleEn: 'HDB Engineering Lanka — Our Story',
    titleSi: 'HDB ඉංජිනේරු ලංකා — අපගේ කතාව',
    tag: '📖 Our Story',
  },
]

export default function YouTubeReviewsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight mb-3">
            See HDB Machines in Action
          </h2>
          <p className="text-slate text-base max-w-xl mx-auto font-sinhala-body">
            අපගේ YouTube නාලිකාවේ යන්ත්‍ර නිරූපණ, ගාහකයින්ගේ අත්දැකීම් සහ තවත් බොහෝ දේ නරඹන්න
          </p>
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map(video => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Embed */}
              <div className="relative aspect-video bg-black flex-shrink-0">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <span className="inline-block text-xs font-bold text-royal bg-royal/8 px-3 py-1 rounded-full mb-3 w-fit">
                  {video.tag}
                </span>
                <p className="font-bold text-slate-dark text-sm leading-snug mb-1">{video.titleEn}</p>
                <p className="text-slate text-xs font-sinhala-body leading-snug">{video.titleSi}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@Hdb_Engineering_Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl text-base transition-colors shadow-lg shadow-red-600/30 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to HDB TV on YouTube
          </a>
        </div>

      </div>
    </section>
  )
}
