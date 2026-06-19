'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { PRODUCTS, formatPrice } from '@/lib/products'

const BEST_SELLERS = [
  'automatic-liquid-filling-packing-machine',
  'y-200s-liquid-packing-machine',
  '24-tray-dryer',
  '40-tray-dryer',
  '96-tray-dryer',
  'km20-grinder-full-ss',
]

const CATEGORY_ICONS: Record<string, string> = {
  'liquid-machine': '💧',
  'dehydrators': '🌡️',
  'grinding-mills': '⚙️',
}

export default function BestSellersStrip({ locale }: { locale: string }) {
  const si = locale === 'si'
  const [ref, inView] = useInView()
  const products = BEST_SELLERS.map(slug => PRODUCTS.find(p => p.slug === slug)).filter(Boolean) as typeof PRODUCTS

  return (
    <section className="py-20 px-4 bg-ice" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <span className="inline-block bg-orange/10 text-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              ⭐ Popular Picks
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy font-sinhala-display">
              {si ? 'වැඩිම ජනප්‍රිය යන්ත්‍ර' : 'Best Sellers'}
            </h2>
          </div>
          <Link href={`/${locale}/machines`} className="text-navy font-bold text-sm border-2 border-navy px-5 py-2.5 rounded-full hover:bg-navy hover:text-white transition-all btn-press flex-shrink-0">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, i) => (
            <Link
              key={product.slug}
              href={product.isFlagship ? `/${locale}/liquid-machine` : `/${locale}/machines/${product.category}/${product.slug}`}
              className={`group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Product image */}
              <div className="relative bg-ice h-36 flex items-center justify-center overflow-hidden p-3">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.nameEn}
                    width={300}
                    height={220}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-500">
                    {CATEGORY_ICONS[product.category] ?? '🏭'}
                  </span>
                )}
                {product.isFlagship && (
                  <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">🔥 Hot</span>
                )}
              </div>

              <div className="p-3">
                <h3 className="font-bold text-navy text-xs leading-snug mb-1 group-hover:text-electric transition-colors line-clamp-2">
                  {si ? product.nameSi : product.nameEn}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className={`font-extrabold text-sm ${product.price ? 'text-red-price' : 'text-gray-400 text-xs italic'}`}>
                    {formatPrice(product.price)}
                  </span>
                  <span className="w-6 h-6 bg-navy/8 group-hover:bg-orange rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                    <svg className="w-3 h-3 text-navy group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
