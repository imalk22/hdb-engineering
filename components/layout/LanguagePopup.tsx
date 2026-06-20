'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LanguagePopup() {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const chosen = localStorage.getItem('hdb-lang-chosen')
    if (!chosen) setVisible(true)
  }, [])

  function choose(lang: 'en' | 'si') {
    localStorage.setItem('hdb-lang-chosen', lang)
    setVisible(false)
    router.push(`/${lang}`)
  }

  if (!visible) return null

  return (
    <div className="lg:hidden fixed inset-0 z-[300] bg-navy flex flex-col items-center justify-center px-6"
      style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }}>

      {/* Blue glow orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-royal/30 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-electric/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative flex flex-col items-center w-full max-w-xs">
        {/* Logo */}
        <Image src="/logo.png" alt="HDB Engineering Lanka" width={220} height={70}
          className="h-16 w-auto mb-8 drop-shadow-xl" priority />

        {/* Welcome text */}
        <p className="text-orange text-xs font-bold uppercase tracking-widest mb-3">Welcome · ආයුබෝවන්</p>
        <h2 className="text-white text-2xl font-extrabold text-center leading-tight mb-1">
          Choose Your Language
        </h2>
        <p className="text-blue-200 text-base font-sinhala-body text-center mb-10">
          ඔබේ භාෂාව තෝරන්න
        </p>

        {/* Language buttons */}
        <div className="flex flex-col gap-4 w-full">
          <button onClick={() => choose('en')}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-navy font-extrabold text-lg py-4 rounded-2xl shadow-2xl active:scale-95 transition-transform">
            <span className="text-2xl">🇬🇧</span>
            English
          </button>
          <button onClick={() => choose('si')}
            className="w-full flex items-center justify-center gap-3 bg-orange hover:bg-orange/90 text-white font-extrabold text-lg py-4 rounded-2xl shadow-2xl active:scale-95 transition-transform font-sinhala-body">
            <span className="text-2xl">🇱🇰</span>
            සිංහල
          </button>
        </div>

        {/* HDB tagline */}
        <p className="text-blue-300/60 text-xs text-center mt-8 font-sinhala-body leading-relaxed">
          HDB Engineering Lanka<br/>Trust Us to Build Your Future
        </p>
      </div>
    </div>
  )
}
