import { CONTACT } from '@/lib/constants'

export default function PreOrderCTA() {
  return (
    <section className="relative bg-gradient-to-r from-navy via-blue-900 to-navy py-6 sm:py-10 px-4 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute left-1/4 bottom-0 w-80 h-40 bg-whatsapp/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-80 h-40 bg-orange/20 rounded-full blur-3xl pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(white 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.25em] mb-2 sm:mb-4">
          Ready to Order?
        </p>
        <h2 className="text-xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
          Start Your <span className="text-orange">Pre-Order</span> Today
        </h2>

        <div className="flex flex-row gap-2 sm:gap-5 justify-center">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-extrabold text-sm sm:text-lg px-4 sm:px-10 py-2.5 sm:py-5 rounded-xl sm:rounded-2xl transition-all btn-press shadow-2xl shadow-whatsapp/40"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            <span className="whitespace-nowrap">WhatsApp Pre-Order</span>
          </a>
          <a
            href={`tel:${CONTACT.phone2}`}
            className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-500 text-white font-extrabold text-sm sm:text-lg px-4 sm:px-10 py-2.5 sm:py-5 rounded-xl sm:rounded-2xl transition-all btn-press shadow-2xl shadow-orange/40"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {CONTACT.phone2Display}
          </a>
        </div>
      </div>
    </section>
  )
}
