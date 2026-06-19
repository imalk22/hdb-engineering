import { CONTACT, FLAGSHIP } from '@/lib/constants'

export default function FinalOfferSection() {
  return (
    <section className="bg-ice py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
          {/* Section badge */}
          <div className="bg-navy text-white text-center py-3 px-4">
            <span className="text-xs font-bold tracking-widest uppercase">08 — විශේෂ ප්‍රී-ඕඩර් මිල</span>
          </div>

          <div className="p-6 sm:p-8 text-center">
            {/* Price */}
            <div className="mb-4">
              <p className="text-gray-400 text-sm line-through mb-1">
                LKR {FLAGSHIP.priceRegular.toLocaleString('en-LK')}
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-red-price leading-none">
                  🔥 LKR {FLAGSHIP.priceOffer.toLocaleString('en-LK')}
                </span>
              </div>
              <span className="inline-block mt-2 bg-whatsapp text-white text-sm font-bold px-4 py-1.5 rounded-full font-sinhala-body">
                රු. {FLAGSHIP.priceSaving.toLocaleString('en-LK')} ඉතිරි කරන්න
              </span>
            </div>

            {/* Checklist */}
            <div className="bg-ice rounded-xl p-4 mb-6 text-left space-y-2">
              {[
                'නිල නීතිමය ගිවිසුමක් (Legal Agreement) ලබා දේ',
                'Showroom හිදී සජීවී නිරූපණය (Demo) ලබාගත හැකිය',
                'Free Delivery Island-wide',
                'Free Installation & Setup',
                'Free Training for your team',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-gray-700 font-sinhala-body">
                  <span className="text-whatsapp font-bold flex-shrink-0 mt-0.5">✅</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-500 text-white font-bold py-4 px-6 rounded-2xl text-base transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                <span className="font-sinhala-body">WhatsApp හරහා Pre-Order කරන්න</span>
              </a>
              <a
                href={`tel:${CONTACT.phone2}`}
                className="flex-1 flex items-center justify-center gap-2 bg-orange hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-2xl text-base transition-colors"
              >
                📞 Call Now: {CONTACT.phone2Display}
              </a>
            </div>

            {/* Warnings */}
            <div className="mt-4 space-y-1">
              <p className="text-xs text-gray-400 font-sinhala-body">
                ⚠️ සීමිත Shipping Batch පමණක් සදහා සිදු කරනු ලැබේ.
              </p>
              <p className="text-xs text-gray-400 font-sinhala-body">
                ⚠️ සීමිත යන්ත්‍ර ප්‍රමාණයක් පමණක් Order කර ගත හැකිය.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
