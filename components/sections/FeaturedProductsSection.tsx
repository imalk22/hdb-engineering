import Image from 'next/image'
import Link from 'next/link'
import { CONTACT } from '@/lib/constants'

const FEATURED = [
  {
    slug: 'automatic-liquid-filling-packing-machine',
    category: 'liquid-machine',
    name: 'Automatic Liquid Filling & Packing Machine',
    desc: 'Food-grade SS. Fills 3–200ml. Speed 10–18 bags/min. Includes date coder.',
    price: 460000,
    priceRegular: 575000,
    image: '/images/products/automatic-liquid-filling-packing-machine.png',
    badge: 'Best Seller',
    badgeColor: 'bg-orange text-white',
  },
  {
    slug: 'sy25a-roaster',
    category: 'roaster-machine',
    name: 'SY 25A Roaster 304 SS Electric',
    desc: '304 stainless steel drum roaster. 10–35 kg/h capacity. Uniform temp distribution.',
    price: 595000,
    priceRegular: null,
    image: '/images/products/sy25a-roaster.jpeg',
    badge: 'Popular',
    badgeColor: 'bg-royal text-white',
  },
  {
    slug: '24-tray-dryer',
    category: 'dehydrators',
    name: '24-Tray Commercial Dehydrator',
    desc: 'Adjustable 35–75°C temp. Uniform air circulation. Food-grade stainless trays.',
    price: null,
    priceRegular: null,
    image: '/images/products/24-tray-dryer.png',
    badge: 'In Stock',
    badgeColor: 'bg-whatsapp text-white',
  },
  {
    slug: '9fc-grinding-mill',
    category: 'grinding-mills',
    name: '9FC Hammer Grinding Mill',
    desc: 'High-efficiency grinding mill for spices, grains and dried food processing.',
    price: null,
    priceRegular: null,
    image: '/images/products/9fc-grinding-mill.png',
    badge: 'New',
    badgeColor: 'bg-electric text-white',
  },
]

export default function FeaturedProductsSection({ locale }: { locale: string }) {
  return (
    <section className="py-24 bg-ice">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block bg-royal/8 text-royal text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Featured Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-dark tracking-tight">
              Our Most Popular Machines
            </h2>
            <p className="text-slate text-base mt-3 max-w-md">
              Hand-picked best sellers — high quality, competitively priced, ready to transform your business.
            </p>
          </div>
          <Link
            href={`/${locale}/machines`}
            className="group flex-shrink-0 flex items-center gap-2 text-royal font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            View all machines
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Product cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED.map((product) => (
            <div
              key={product.slug}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative bg-ice overflow-hidden h-52 flex items-center justify-center p-4">
                <span className={`absolute top-3 left-3 z-10 text-[11px] font-bold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-44 w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-slate-dark text-base leading-snug mb-2 group-hover:text-royal transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-4 flex-1">
                  {product.desc}
                </p>

                {/* Price */}
                <div className="mb-4">
                  {product.price ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-slate-dark">
                        LKR {product.price.toLocaleString('en-LK')}
                      </span>
                      {product.priceRegular && (
                        <span className="text-sm text-slate line-through">
                          {product.priceRegular.toLocaleString('en-LK')}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-slate">Contact for pricing</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={`/${locale}/machines/${product.category}/${product.slug}`}
                    className="flex-1 text-center bg-navy hover:bg-royal text-white text-sm font-bold py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    View Details
                  </Link>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-whatsapp/10 hover:bg-whatsapp text-whatsapp hover:text-white rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer flex-shrink-0"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
