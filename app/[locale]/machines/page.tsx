import Link from 'next/link'
import type { Metadata } from 'next'
import { CATEGORIES } from '@/lib/products'

export const metadata: Metadata = {
  title: 'All Machines — HDB Engineering Lanka',
}

export default async function MachinesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const si = locale === 'si'

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 sm:pt-24 pb-12">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-navy mb-2 font-sinhala-display">
        {si ? 'සියලු යන්ත්‍ර වර්ග' : 'All Machine Categories'}
      </h1>
      <p className="text-gray-500 text-sm mb-8 font-sinhala-body">
        {si ? 'ඔබේ ව්‍යාපාරය සඳහා නිවැරදි යන්ත්‍රය සොයා ගන්න' : 'Find the right machine for your business'}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {CATEGORIES.map(cat => (
          <Link
            key={cat.slug}
            href={cat.slug === 'liquid-machine' ? `/${locale}/liquid-machine` : `/${locale}/machines/${cat.slug}`}
            className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 text-center shadow-sm hover:shadow-md border border-gray-100 hover:-translate-y-0.5 transition-all group"
          >
            <span className="text-4xl">{cat.icon}</span>
            <span className="font-bold text-navy text-sm font-sinhala-body group-hover:text-electric transition-colors">
              {si ? cat.nameSi : cat.nameEn}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
