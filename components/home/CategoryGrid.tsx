'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { useInView } from '@/hooks/useInView'
import { CATEGORIES } from '@/lib/products'
import type { FC } from 'react'

// ─── Professional SVG Icons ────────────────────────────────────────────────

const ThermometerIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
  </svg>
)

const GearIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M20 7H9"/><path d="M14 17H3"/>
    <circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>
  </svg>
)

const ShieldSealIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const WindIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
  </svg>
)

const WheatIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M2 22 16 8"/>
    <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/>
    <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/>
    <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/>
    <path d="M20 2H22V4a4 4 0 0 1-4 4h-2V8a4 4 0 0 1 4-4z"/>
  </svg>
)

const ScissorsIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
)

const LeafIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const TreePineIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="m17 14 3 3.1a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3A1 1 0 0 1 15.2 9H15l3 3.3a1 1 0 0 1-.7 1.7H17z"/>
    <path d="M9 21v-4a3 3 0 0 1 6 0v4"/>
  </svg>
)

const PelletIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <ellipse cx="12" cy="5.5" rx="3" ry="1.8"/>
    <ellipse cx="12" cy="12" rx="3" ry="1.8"/>
    <ellipse cx="12" cy="18.5" rx="3" ry="1.8"/>
    <line x1="9" y1="5.5" x2="9" y2="18.5"/>
    <line x1="15" y1="5.5" x2="15" y2="18.5"/>
  </svg>
)

const PackageIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M16.5 9.4 7.55 4.24"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.29 7 12 12 20.71 7"/>
    <line x1="12" y1="22" x2="12" y2="12"/>
  </svg>
)

// ─── Category Style Config ─────────────────────────────────────────────────

type CatStyle = {
  Icon: FC
  iconColor: string
  glassGradient: string
  glassBorder: string
  glowColor: string
}

const CAT_STYLES: Record<string, CatStyle> = {
  'dehydrators': {
    Icon: ThermometerIcon,
    iconColor: 'text-orange-400',
    glassGradient: 'from-orange-500/30 to-orange-700/20',
    glassBorder: 'border-orange-300/40',
    glowColor: 'rgba(249,115,22,0.28)',
  },
  'grinding-mills': {
    Icon: GearIcon,
    iconColor: 'text-violet-400',
    glassGradient: 'from-violet-500/30 to-violet-700/20',
    glassBorder: 'border-violet-300/40',
    glowColor: 'rgba(124,58,237,0.28)',
  },
  'band-sealers': {
    Icon: ShieldSealIcon,
    iconColor: 'text-emerald-400',
    glassGradient: 'from-emerald-500/30 to-emerald-700/20',
    glassBorder: 'border-emerald-300/40',
    glowColor: 'rgba(16,185,129,0.28)',
  },
  'vacuum-sealers': {
    Icon: WindIcon,
    iconColor: 'text-cyan-400',
    glassGradient: 'from-cyan-500/30 to-cyan-700/20',
    glassBorder: 'border-cyan-300/40',
    glowColor: 'rgba(6,182,212,0.28)',
  },
  'rice-mills': {
    Icon: WheatIcon,
    iconColor: 'text-amber-400',
    glassGradient: 'from-amber-500/30 to-amber-700/20',
    glassBorder: 'border-amber-300/40',
    glowColor: 'rgba(245,158,11,0.28)',
  },
  'slicers': {
    Icon: ScissorsIcon,
    iconColor: 'text-rose-400',
    glassGradient: 'from-rose-500/30 to-rose-700/20',
    glassBorder: 'border-rose-300/40',
    glowColor: 'rgba(244,63,94,0.28)',
  },
  'chuff-cutters': {
    Icon: LeafIcon,
    iconColor: 'text-green-400',
    glassGradient: 'from-green-500/30 to-green-700/20',
    glassBorder: 'border-green-300/40',
    glowColor: 'rgba(34,197,94,0.28)',
  },
  'wood-chippers': {
    Icon: TreePineIcon,
    iconColor: 'text-lime-500',
    glassGradient: 'from-lime-500/30 to-lime-700/20',
    glassBorder: 'border-lime-300/40',
    glowColor: 'rgba(101,163,13,0.28)',
  },
  'feed-pellet': {
    Icon: PelletIcon,
    iconColor: 'text-yellow-500',
    glassGradient: 'from-yellow-500/30 to-yellow-700/20',
    glassBorder: 'border-yellow-300/40',
    glowColor: 'rgba(202,138,4,0.28)',
  },
  'budget-packs': {
    Icon: PackageIcon,
    iconColor: 'text-blue-400',
    glassGradient: 'from-blue-500/30 to-blue-700/20',
    glassBorder: 'border-blue-300/40',
    glowColor: 'rgba(59,130,246,0.28)',
  },
}

const DEFAULT_STYLE: CatStyle = {
  Icon: GearIcon,
  iconColor: 'text-gray-400',
  glassGradient: 'from-gray-500/25 to-gray-700/15',
  glassBorder: 'border-gray-300/35',
  glowColor: 'rgba(100,100,100,0.22)',
}

// ─── Animation Variants ────────────────────────────────────────────────────

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

// ─── Component ────────────────────────────────────────────────────────────

export default function CategoryGrid({ locale }: { locale: string }) {
  const si = locale === 'si'
  const [ref, inView] = useInView()

  return (
    <section className="py-20 px-4 bg-[#f0f4ff]" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-navy/8 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-navy/10">
            All Categories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy font-sinhala-display">
            {si ? 'අපගේ යන්ත්‍ර වර්ග' : 'Our Machine Categories'}
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto font-sinhala-body">
            {si ? 'ඔබේ ව්‍යාපාරය සඳහා නිවැරදි යන්ත්‍රය සොයා ගන්න' : 'Find the perfect machine for your business'}
          </p>
        </div>

        {/* Flagship card */}
        <div className={`mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href={`/${locale}/liquid-machine`}
            className="group relative block bg-gradient-to-r from-navy to-blue-800 rounded-3xl p-8 sm:p-10 overflow-hidden card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-transparent" />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[100px] sm:text-[120px] opacity-20 group-hover:opacity-30 transition-opacity select-none">💧</div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <span className="inline-block bg-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-3">🔥 Best Seller</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Liquid Filling &amp; Packing Machine</h3>
                <p className="text-blue-200 font-sinhala-body text-base">ද්‍රව නිෂ්පාදන ස්වයංක්‍රීයව ඇසුරුම් කරන #1 යන්ත්‍රය</p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-4">
                <div className="text-center">
                  <p className="text-blue-300 text-xs">Pre-Order Price</p>
                  <p className="text-white font-extrabold text-2xl">LKR 460,000</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-orange transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Category grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          variants={gridVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {CATEGORIES.slice(1).filter(cat => !cat.hidden).map((cat) => {
            const style = CAT_STYLES[cat.slug] ?? DEFAULT_STYLE
            const { Icon } = style
            return (
              <motion.div
                key={cat.slug}
                className="group rounded-2xl cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: '0 20px 48px rgba(0,0,0,0.4)',
                }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                <Link
                  href={`/${locale}/machines/${cat.slug}`}
                  className="relative block rounded-2xl p-5 flex flex-col items-center gap-3 text-center overflow-hidden bg-[#0d1f3c]/75 hover:bg-[#0d1f3c]/85 backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(13,31,60,0.15)] transition-all duration-200"
                >
                  {/* Glass shine */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-2xl"/>

                  {/* Icon container */}
                  <div className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 border border-white/20 transition-all duration-300 group-hover:scale-110 ${style.iconColor}`}>
                    <Icon />
                  </div>

                  {/* Category name */}
                  <span className="relative z-10 font-bold text-white text-sm leading-snug font-sinhala-body">
                    {si ? cat.nameSi : cat.nameEn}
                  </span>

                  {/* View All */}
                  <span className="relative z-10 flex items-center gap-1 text-xs text-blue-300/70 group-hover:text-blue-300 transition-colors duration-200">
                    View All
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}