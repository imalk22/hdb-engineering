import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

type Variant = 'whatsapp' | 'call' | 'navy' | 'outline' | 'primary'

type ButtonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
  href?: string
  fullWidth?: boolean
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>)

const VARIANT_CLASSES: Record<Variant, string> = {
  whatsapp: 'bg-whatsapp hover:bg-emerald-500 text-white',
  call:     'bg-royal hover:bg-electric text-white',
  navy:     'bg-navy hover:bg-navy/80 text-white',
  outline:  'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  primary:  'bg-royal hover:bg-electric text-white',
}

export default function Button({
  variant = 'navy',
  children,
  className = '',
  href,
  fullWidth,
  ...rest
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-200 cursor-pointer ${VARIANT_CLASSES[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={base} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={base} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
