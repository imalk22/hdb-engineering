const TRUST_CARDS = [
  { num: '01', icon: '🏛', titleSi: 'නිල ලියාපදිංචි ආයතනය',     descSi: 'නිත්‍යනුකුල ලියාපදිංචි ආයතනයකි.',        enTitle: 'Official Company Registration' },
  { num: '02', icon: '📋', titleSi: 'නිල නීතිමය ගිවිසුමක්',      descSi: 'Advance මුදලට නිල ගිවිසුමක් ලබා දේ.',     enTitle: 'Legal Agreement Issued' },
  { num: '03', icon: '🏭', titleSi: 'දඹුල්ල Showroom',            descSi: 'Dambulla Showroom හිදී Machine Live Demo.', enTitle: 'Physical Showroom — Dambulla' },
  { num: '04', icon: '🏦', titleSi: 'ආරක්ෂිත බැංකු ගෙවීම්',       descSi: 'ආරක්ෂිත බැංකු ගෙවීම් ක්‍රම.',              enTitle: 'Secure Bank Payments' },
  { num: '05', icon: '🛡', titleSi: 'මාස 12 වගකිම් කාලය',          descSi: 'යන්ත්‍රයේ බඳ සඳහා මාස 12ක පූර්ණ වගකිම.', enTitle: '12-Month Warranty Support' },
  { num: '06', icon: '👨‍🔧', titleSi: 'දිවයින පුරා සේවා කණ්ඩායම', descSi: 'දිවයින පුරා ක්ෂේත්‍ර සේවා කණ්ඩායමක් ඇත.',  enTitle: 'Island-wide Expert Service Team' },
]

export default function WhyHDBSection() {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-4xl font-extrabold text-white font-sinhala-display leading-tight mb-3">
            ඇයි HDB Engineering Lanka තෝරාගත යුත්තේ?
          </h2>
          <span className="inline-flex items-center gap-2 bg-white/10 text-white font-bold text-sm px-4 py-2 rounded-full font-sinhala-body border border-white/20">
            🔒 ඔබේ මුදල 100%ක් ආරක්ෂිතයි
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRUST_CARDS.map(card => (
            <div key={card.num}
              className="group bg-white/8 backdrop-blur-sm rounded-2xl p-5 border border-white/12 hover:bg-white/15 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-7 h-7 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                  {card.num}
                </div>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{card.icon}</span>
              </div>
              <h3 className="font-bold text-white text-sm font-sinhala-body font-semibold mb-1">{card.titleSi}</h3>
              <p className="text-xs text-blue-200 font-sinhala-body font-semibold leading-relaxed">{card.descSi}</p>
              <p className="text-xs text-blue-300/50 mt-1">{card.enTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
