import Link from 'next/link'
import type { Metadata } from 'next'
import { CATEGORIES, getProductsByCategory, formatPrice } from '@/lib/products'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const cat = CATEGORIES.find(c => c.slug === category)
  return {
    title: `${cat?.nameEn ?? 'Category'} — HDB Engineering Lanka`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>
}) {
  const { locale, category } = await params
  const si = locale === 'si'
  const cat = CATEGORIES.find(c => c.slug === category)
  if (!cat) notFound()

  const products = getProductsByCategory(category)

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 sm:pt-24 pb-12">
      <div className="flex items-center gap-2 mb-2">
        <Link href={`/${locale}/machines`} className="text-sm text-gray-400 hover:text-navy">
          {si ? 'යන්ත්‍ර' : 'Machines'}
        </Link>
        <span className="text-gray-300">›</span>
        <span className="text-sm text-navy font-medium">{si ? cat.nameSi : cat.nameEn}</span>
      </div>
      <h1 className="text-xl sm:text-3xl font-extrabold text-navy mb-6 sm:mb-8 font-sinhala-display">
        {cat.icon} {si ? cat.nameSi : cat.nameEn}
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500 font-sinhala-body">
          {si ? 'නිෂ්පාදන ඉක්මනින් ලැබේ...' : 'Products coming soon...'}
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <Link
              key={product.slug}
              href={`/${locale}/machines/${category}/${product.slug}`}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-gray-100 hover:-translate-y-0.5 transition-all group"
            >
              <div className="relative rounded-xl aspect-square mb-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-sky-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent" />
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={si ? product.nameSi : product.nameEn}
                      className="w-full h-full object-contain"
                      style={{ filter: 'drop-shadow(0 4px 12px rgba(1,31,100,0.15))' }}
                    />
                  ) : (
                    <span className="text-3xl">{cat.icon}</span>
                  )}
                </div>
              </div>
              <h2 className="font-semibold text-navy text-xs leading-snug mb-2 font-sinhala-body group-hover:text-electric transition-colors line-clamp-2">
                {si ? product.nameSi : product.nameEn}
              </h2>
              <p className={`font-bold text-sm ${product.price ? 'text-red-price' : 'text-gray-500 italic text-xs'}`}>
                {formatPrice(product.price)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
