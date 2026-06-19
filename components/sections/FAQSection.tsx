import AccordionItem from '@/components/ui/AccordionItem'
import { CONTACT } from '@/lib/constants'

export default function FAQSection() {
  return (
    <section className="bg-ice py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3">
            ❓ Doubt Killer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-sinhala-display leading-tight">
            නිතර අසන ප්‍රශ්ණ (FAQ)
          </h2>
        </div>

        <div className="space-y-3 mb-8">
          <AccordionItem index={1} question="ප්‍රී-ඕඩර් එකක් ස්ථිර කරන්නේ කොහොමද?">
            <div className="space-y-2 text-sm">
              <p>👉 අපගේ <strong>Showroom</strong> එකට පැමිණ Sample Machine එක බලා, <strong>රු. 100,000ක් Advance</strong> ගෙවා Machine Reserve කරගත හැකිය.</p>
              <p>📋 ඔබ ගෙවන Advance මුදලට ආයතනිය නිල <strong>නීතිමය ගිවිසුමක් (Legal Agreement)</strong> ලබා දෙනු ලැබේ.</p>
              <p>🏭 යන්ත්‍ර නිෂ්පාදනය සඳහා <strong>වැඩ කරන දින 10-15</strong> ත් කාලයක් ගෙවේ.</p>
              <p>🚢 සාමාන්‍යයෙන් <strong>10, 20 සහ 30</strong> යන දිනවල අපගේ Shipping Batch සමඟ ළඟා වේ.</p>
              <div className="mt-3 bg-whatsapp/10 border border-whatsapp/30 rounded-xl p-3">
                <p className="font-bold text-whatsapp text-sm font-sinhala-body">
                  🎁 විශේෂ දිමතවා: යන්ත්‍රය ගිය දින සිට පළමු 03 <strong>Free Service Visit 01ක්</strong> සම්පූර්ණයෙන් නොමිලේ!
                </p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem index={2} question="Warranty සහ After-Sales සේවාව ලබෙන්නේ කොහොමද?">
            <div className="space-y-2 text-sm">
              <p>🛡 වසරක් පුරා <strong>සම්පූර්ණ Warranty</strong> ලැබෙන අතර, ඕනෑම ගැටළුවකදී අපේ <strong>Island-Wide Service Team</strong> ඔබේ ස්ථානයටම පැමිණේ.</p>
              <p>⚡ විද්‍යුත් සහ යන්ත්‍ර සියල්ල cover වේ.</p>
              <div className="mt-3 bg-whatsapp/10 border border-whatsapp/30 rounded-xl p-3">
                <p className="font-bold text-whatsapp text-sm font-sinhala-body">
                  🎁 විශේෂ දිමතවා: යන්ත්‍රය ගිය දින සිට පළමු 03 <strong>Free Service Visit 01ක්</strong> සම්පූර්ණයෙන් නොමිලේ!
                </p>
              </div>
            </div>
          </AccordionItem>
        </div>

        {/* Trust icons strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            ['📋', 'Legal Agreement'],
            ['🏭', 'Showroom Demo'],
            ['🚚', 'Islandwide Delivery'],
            ['🔧', 'Technical Support'],
          ].map(([icon, label]) => (
            <div key={label} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs font-semibold text-navy">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-navy rounded-2xl p-6 text-center">
          <p className="text-white font-sinhala-body font-semibold mb-4">තවත් ප්‍රශ්ණ තිබෙනවාද?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              WhatsApp හරහා නොමිලේ උපදෙස් ලබාගන්න
            </a>
            <a
              href={`tel:${CONTACT.phone2}`}
              className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-colors"
            >
              📞 Call Now — {CONTACT.phone2Display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
