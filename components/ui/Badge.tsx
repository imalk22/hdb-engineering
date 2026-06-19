import type { ReactNode } from 'react'

type Variant = 'navy' | 'green' | 'orange' | 'red' | 'amber' | 'outline'

const STYLES: Record<Variant, string> = {
  navy:    'bg-navy text-white',
  green:   'bg-whatsapp text-white',
  orange:  'bg-orange text-white',
  red:     'bg-red-price text-white',
  amber:   'bg-amber-400 text-gray-900',
  outline: 'border border-navy text-navy',
}

export default function Badge({
  children,
  variant = 'navy',
  className = '',
}: {
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${STYLES[variant]} ${className}`}>
      {children}
    </span>
  )
}
