'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function LanguagePopup() {
  const [visible, setVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const chosen = localStorage.getItem('hdb-lang-chosen')
    if (!chosen) {
      // Show after IntroLoader finishes (3s + 0.7s fade = 3.8s)
      const t = setTimeout(() => setVisible(true), 3800)
      return () => clearTimeout(t)
    }
  }, [])

  function choose(lang: 'en' | 'si') {
    localStorage.setItem('hdb-lang-chosen', lang)
    setVisible(false)
    router.push(`/${lang}`)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden fixed bottom-[76px] left-4 right-4 z-[10000]"
        >
          <div className="bg-navy/75 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
            <p className="text-white/60 text-[11px] font-bold text-center uppercase tracking-widest mb-3">
              Choose Language · භාෂාව තෝරන්න
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => choose('en')}
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-3.5 rounded-xl text-sm transition-colors active:scale-95 flex items-center justify-center gap-2"
              >
                <span className="text-lg">🇬🇧</span> English
              </button>
              <button
                onClick={() => choose('si')}
                className="flex-1 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-3.5 rounded-xl text-sm transition-colors active:scale-95 flex items-center justify-center gap-2 font-sinhala-body"
              >
                <span className="text-lg">🇱🇰</span> සිංහල
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
