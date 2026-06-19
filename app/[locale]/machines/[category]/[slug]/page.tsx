import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CATEGORIES, getProductBySlug, formatPrice } from '@/lib/products'
import { CONTACT } from '@/lib/constants'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  return {
    title: `${product?.nameEn ?? 'Product'} — HDB Engineering Lanka`,
    description: product?.descEn,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>
}) {
  const { locale, category, slug } = await params
  const si = locale === 'si'
  const product = getProductBySlug(slug)
  const cat = CATEGORIES.find(c => c.slug === category)
  if (!product) notFound()

  const whatsappText = encodeURIComponent(
    `Hi HDB Engineering Lanka, I'm interested in the ${product.nameEn}. Please provide more details and pricing.`
  )

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden pt-28 pb-20 px-4">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-blue-300/60 mb-8 flex-wrap font-medium">
            <Link href={`/${locale}/machines`} className="hover:text-white transition-colors">
              {si ? 'යන්ත්‍ර' : 'Machines'}
            </Link>
            <span className="text-blue-300/40">›</span>
            <Link href={`/${locale}/machines/${category}`} className="hover:text-white transition-colors">
              {si ? cat?.nameSi : cat?.nameEn}
            </Link>
            <span className="text-blue-300/40">›</span>
            <span className="text-blue-200">{product.nameEn}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ── Left: Product Info ── */}
            <div>
              <span className="inline-flex items-center gap-2 bg-orange/15 text-orange text-xs font-bold px-4 py-2 rounded-full border border-orange/20 mb-5">
                <span>{cat?.icon}</span>
                {si ? cat?.nameSi : cat?.nameEn}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                {product.nameEn}
              </h1>
              <p className="text-blue-300 font-sinhala-body text-base mb-6 leading-relaxed">{product.nameSi}</p>

              {/* Price */}
              <div className="mb-7">
                {product.priceRegular && product.price && product.priceRegular !== product.price && (
                  <p className="text-blue-300/50 text-sm line-through mb-1">
                    LKR {product.priceRegular.toLocaleString('en-LK')}
                  </p>
                )}
                {product.price ? (
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-4xl sm:text-5xl font-extrabold text-orange leading-none">
                      {formatPrice(product.price)}
                    </span>
                    {product.priceRegular && product.price && product.priceRegular !== product.price && (
                      <span className="bg-green-500/20 text-green-300 text-sm font-bold px-3 py-1 rounded-full border border-green-500/30">
                        SAVE LKR {(product.priceRegular - product.price).toLocaleString('en-LK')}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="text-white font-bold text-base">Contact for Price</p>
                      <p className="text-blue-200 text-xs">Quick reply via WhatsApp</p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={`${CONTACT.whatsappUrl}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold py-4 px-6 rounded-2xl transition-colors shadow-lg shadow-green-900/30"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp {si ? 'විමසන්න' : 'Enquire Now'}
                </a>
                <a
                  href={`tel:${CONTACT.phone1}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-6 rounded-2xl transition-colors"
                >
                  📞 {CONTACT.phone1Display}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  '🚚 Free Island-wide Delivery',
                  '🔧 Free Installation',
                  '🛡 ' + (product.warranty ?? '12-Month Warranty'),
                  '📋 Legal Agreement',
                  '👨‍🔧 After-Sales Support',
                ].map(badge => (
                  <span key={badge} className="bg-white/8 border border-white/12 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: Product Image + Quick Stats ── */}
            <div className="flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[280px]">
                {/* Gradient background — white centre fading to light blue */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-sky-100" />
                {/* Top-left shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent pointer-events-none" />
                {/* Bottom reflection strip */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-100/80 to-transparent pointer-events-none" />
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/60 pointer-events-none" />
                <div className="relative flex items-center justify-center p-8">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.nameEn}
                      className="w-full max-h-80 object-contain drop-shadow-2xl"
                      style={{ filter: 'drop-shadow(0 20px 40px rgba(1,31,100,0.18))' }}
                    />
                  ) : (
                    <span className="text-[90px] leading-none select-none py-8">{cat?.icon ?? '🏭'}</span>
                  )}
                </div>
              </div>

              {product.highlights && product.highlights.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.highlights.map(h => (
                    <div key={h.label} className="bg-white/8 border border-white/10 rounded-2xl p-4 text-center">
                      <p className="text-2xl mb-1">{h.icon}</p>
                      <p className="text-orange font-extrabold text-sm leading-tight">{h.value}</p>
                      <p className="text-blue-300/70 text-xs mt-1.5 leading-tight">{h.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </section>

      {/* ── SPECS + FEATURES ─────────────────────────────────── */}
      {(product.specs?.length || product.features?.length) ? (
        <section className="py-16 px-4 bg-[#f7f9ff]">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-start">

              {product.specs && product.specs.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-navy flex items-center justify-center shadow-md shadow-blue-900/25">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-extrabold text-navy">Technical Specifications</h2>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((s, i) => (
                          <tr key={s.label} className={`${i % 2 === 0 ? 'bg-[#f7f9ff]' : 'bg-white'} hover:bg-blue-50/60 transition-colors`}>
                            <td className="px-5 py-3.5 text-gray-500 font-semibold text-xs w-[42%] border-r border-gray-100 uppercase tracking-wide">{s.label}</td>
                            <td className="px-5 py-3.5 text-navy font-bold text-sm">{s.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {product.features && product.features.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md shadow-green-900/25">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <h2 className="text-2xl font-extrabold text-navy">Key Features</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((f, i) => (
                      <div key={f} className="group flex items-start gap-3 bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-[0_4px_20px_rgba(16,185,129,0.1)] rounded-xl px-4 py-3.5 transition-all duration-200">
                        <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-sm shadow-green-700/15 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm font-medium leading-relaxed">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── APPLICATIONS ─────────────────────────────────────── */}
      {product.applications && product.applications.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-orange/10 text-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3 border border-orange/15">Applications</span>
              <h2 className="text-3xl font-extrabold text-navy">What Can You Make?</h2>
              <p className="text-gray-400 font-sinhala-body mt-2 text-sm">මෙම යන්ත්‍රය භාවිත කළ හැකි ක්ෂේත්‍ර</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.applications.map((app, i) => (
                <div key={i} className="group relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-orange/25 hover:shadow-[0_8px_28px_rgba(249,115,22,0.1)] transition-all duration-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-orange via-amber-400 to-transparent group-hover:w-1 transition-all duration-200 rounded-l-2xl"/>
                  <div className="flex items-center gap-3 pl-2">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange/10 rounded-xl flex items-center justify-center group-hover:bg-orange transition-colors duration-200">
                      <span className="text-orange group-hover:text-white font-extrabold text-[11px] transition-colors duration-200 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-sinhala-body font-medium">{app}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT'S INCLUDED ──────────────────────────────────── */}
      {product.includes && product.includes.length > 0 && (
        <section className="py-14 px-4 bg-[#f7f9ff]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange to-amber-500 flex items-center justify-center shadow-md shadow-orange/25">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-navy">What&apos;s Included</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.includes.map(item => (
                <div key={item} className="group flex items-center gap-3 bg-white border border-orange/15 hover:border-orange/35 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] rounded-xl px-4 py-3.5 transition-all duration-200">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center group-hover:bg-orange transition-colors duration-200">
                    <svg className="w-3.5 h-3.5 text-orange group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY HDB ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sinhala-body">ඇයි HDB Engineering Lanka?</h2>
            <p className="text-blue-300/70 mt-2 font-sinhala-body">Why thousands of Sri Lankan businesses trust us</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: '🚚', title: 'Free Island-Wide Delivery', si: 'නොමිලේ ගෙදරට' },
              { icon: '🔧', title: 'Free Installation & Training', si: 'නොමිලේ ස්ථාපනය' },
              { icon: '🛡', title: product.warranty ?? '12-Month Warranty', si: 'වගකිම් කාලය' },
              { icon: '📋', title: 'Legal Agreement Issued', si: 'නිල ගිවිසුම' },
              { icon: '👨‍🔧', title: 'Island-Wide Service Team', si: 'දිවයිනේ පුරා සේවා' },
              { icon: '🏭', title: 'Physical Showroom', si: 'Live Demo — Dambulla' },
            ].map(item => (
              <div key={item.title} className="bg-white/8 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/12 transition-colors">
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="font-bold text-sm text-white leading-snug">{item.title}</p>
                <p className="text-blue-300/60 text-xs font-sinhala-body mt-1">{item.si}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gradient-to-r from-navy via-blue-900 to-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(white 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest font-bold mb-3">Get yours today</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            {product.nameEn}
          </h2>
          {product.price && (
            <p className="text-orange font-extrabold text-3xl mb-7">{formatPrice(product.price)}</p>
          )}
          {!product.price && (
            <p className="text-blue-200 font-sinhala-body text-lg mb-7">WhatsApp කර මිල දත ගන්න</p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${CONTACT.whatsappUrl}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg"
            >
              💬 WhatsApp Now
            </a>
            <a
              href={`tel:${CONTACT.phone2}`}
              className="flex-1 flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-2xl transition-colors shadow-lg"
            >
              📞 {CONTACT.phone2Display}
            </a>
          </div>
          <p className="text-blue-300/50 text-xs mt-5 font-sinhala-body">
            ✅ නොමිලේ Delivery · ✅ Installation · ✅ Legal Agreement · ✅ {product.warranty ?? '12-Month Warranty'}
          </p>
        </div>
      </section>

    </div>
  )
}
