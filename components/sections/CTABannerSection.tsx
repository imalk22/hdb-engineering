import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

export default function CTABannerSection({ locale }: { locale: string }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-navy rounded-3xl overflow-hidden px-8 py-16 sm:px-14 sm:py-20 text-center">

          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-royal/30 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-electric/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Eyebrow */}
            <span className="inline-block bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              Start Your Journey Today
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Ready to Scale Your<br className="hidden sm:block" /> Business with the Right Machine?
            </h2>

            {/* Subtext */}
            <p className="text-blue-200 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Visit our Dambulla showroom, chat with our team on WhatsApp, or browse our full catalogue online. Free delivery and installation included island-wide.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/machines`}
                className="group flex items-center justify-center gap-2 bg-royal hover:bg-electric text-white font-bold px-9 py-4 rounded-2xl text-base transition-all duration-300 shadow-lg shadow-royal/50 btn-press cursor-pointer"
              >
                Browse All Machines
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-emerald-500 text-white font-bold px-9 py-4 rounded-2xl text-base transition-all duration-300 shadow-lg shadow-whatsapp/40 btn-press cursor-pointer"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Get Free Quote on WhatsApp
              </a>
            </div>

            {/* Trust micro-copy */}
            <p className="mt-8 text-blue-300 text-sm">
              No commitment required &mdash; Free consultation &mdash; Legal agreement provided
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
