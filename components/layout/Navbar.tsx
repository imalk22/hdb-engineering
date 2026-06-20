'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { CONTACT } from '@/lib/constants'
import { CATEGORIES } from '@/lib/products'

export default function Navbar({ locale }: { locale: string }) {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [machinesOpen, setMachinesOpen] = useState(false)
  const base = `/${locale}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-24 flex items-center justify-between gap-4 sm:gap-6">

        {/* ── Logo ── */}
        <Link href={base} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <Image
            src="/logo.png"
            alt="HDB Engineering Lanka"
            width={280}
            height={90}
            className="h-[56px] sm:h-[90px] w-auto object-contain"
            priority
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {[
            ['Home',         base],
            ['About Us',     `${base}/about`],
            ['Our Clients',  `${base}/clients`],
            ['Contact Us',   `${base}/contact`],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[15px] font-semibold px-4 py-2 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-100 transition-all duration-200"
            >
              {label}
            </Link>
          ))}

          {/* Machines dropdown */}
          <div className="relative" onMouseEnter={() => setMachinesOpen(true)} onMouseLeave={() => setMachinesOpen(false)}>
            <button className="flex items-center gap-1 text-[15px] font-semibold px-4 py-2 rounded-lg text-gray-700 hover:text-navy hover:bg-gray-100 transition-all duration-200">
              Machines
              <svg className={`w-4 h-4 transition-transform duration-200 ${machinesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {machinesOpen && (
              <div className="absolute top-full left-0 pt-2 w-60 z-50">
                <div className="bg-white rounded-2xl shadow-2xl py-2 border border-gray-100 animate-scale-in max-h-[70vh] overflow-y-auto">
                  <Link href={`${base}/liquid-machine`} className="flex items-center justify-between gap-2 px-4 py-3 text-royal hover:bg-royal/5 text-sm font-bold border-b border-gray-100">
                    <span className="whitespace-nowrap">💧 Liquid Machine</span>
                    <span className="flex-shrink-0 bg-royal/10 text-royal text-xs px-2 py-0.5 rounded-full">🔥 Hot</span>
                  </Link>
                  {CATEGORIES.slice(1).filter(cat => !cat.hidden).map(cat => (
                    <Link key={cat.slug} href={`${base}/machines/${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-navy text-sm transition-colors">
                      <span className="text-lg">{cat.icon}</span>{cat.nameEn}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ── Right CTA ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link href={locale === 'si' ? '/en' : '/si'}
            className="text-sm font-semibold border border-gray-300 text-gray-600 rounded-full px-3 py-1.5 hover:border-navy hover:text-navy transition-all">
            {locale === 'si' ? 'EN' : 'සිං'}
          </Link>
          <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold px-4 py-2.5 rounded-full bg-navy text-white hover:bg-navy/90 transition-all btn-press">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Visit Our Showroom — Dambulla
          </a>
        </div>

        {/* Mobile language toggle */}
        <div className="lg:hidden flex items-center border border-gray-200 rounded-lg overflow-hidden text-[11px] font-bold flex-shrink-0">
          <Link href="/en" className={`px-2.5 py-1.5 transition-colors ${locale === 'en' ? 'bg-navy text-white' : 'text-gray-400 hover:text-navy'}`}>ENG</Link>
          <div className="w-px h-3.5 bg-gray-200" />
          <Link href="/si" className={`px-2.5 py-1.5 transition-colors ${locale === 'si' ? 'bg-navy text-white' : 'text-gray-400 hover:text-navy'}`}>SIN</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-lg text-navy transition-colors hover:bg-gray-100" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {[['Home',base],['Liquid Machine 🔥',`${base}/liquid-machine`],['All Machines',`${base}/machines`],['About',`${base}/about`],['Our Clients',`${base}/clients`],['Contact',`/${locale}/contact`]].map(([label,href])=>(
              <Link key={label} href={href} onClick={()=>setMenuOpen(false)}
                className="text-gray-700 text-base font-medium py-3 border-b border-gray-100 last:border-0 hover:text-navy transition-colors">
                {label}
              </Link>
            ))}
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl text-sm transition-colors">
              💬 WhatsApp Us
            </a>
            <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-navy text-white font-bold py-3 rounded-xl text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Visit Our Showroom — Dambulla
            </a>
            <Link href={locale === 'si' ? '/en' : '/si'}
              className="flex items-center justify-center gap-2 border-2 border-navy text-navy font-bold py-3 rounded-xl text-sm hover:bg-navy hover:text-white transition-colors">
              {locale === 'si' ? '🇬🇧 Switch to English' : '🇱🇰 සිංහලෙන් බලන්න'}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
