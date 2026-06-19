import { formatPrice } from '@/lib/products'

export default function PriceTag({
  price,
  originalPrice,
  size = 'md',
}: {
  price: number | null
  originalPrice?: number
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeCls = { sm: 'text-lg', md: 'text-2xl', lg: 'text-4xl' }[size]

  if (price === null) {
    return (
      <span className="text-sm text-gray-500 italic">Contact for Price</span>
    )
  }

  return (
    <div className="flex flex-wrap items-baseline gap-3">
      {originalPrice && (
        <span className="text-gray-400 line-through text-base">
          LKR {originalPrice.toLocaleString('en-LK')}
        </span>
      )}
      <span className={`font-extrabold text-red-price ${sizeCls}`}>
        {formatPrice(price)}
      </span>
    </div>
  )
}
