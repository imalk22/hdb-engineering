'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function IntroLoader() {
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('hdb_intro')
    if (!seen) {
      setShow(true)
      sessionStorage.setItem('hdb_intro', '1')
      const t = setTimeout(() => setExit(true), 3000)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={exit ? { opacity: 0, scale: 1.04 } : { opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          onAnimationComplete={() => { if (exit) setShow(false) }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy overflow-hidden"
        >
          {/* Mesh grid */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Glowing orbs */}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-royal/25 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-electric/20 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/8 rounded-full blur-[100px] pointer-events-none"
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-8">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Glow behind logo */}
                <div className="absolute inset-0 blur-2xl bg-electric/30 scale-75 rounded-full" />
                <Image
                  src="/logo.png"
                  alt="HDB Engineering Lanka"
                  width={320}
                  height={100}
                  className="relative h-24 w-auto object-contain drop-shadow-2xl brightness-0 invert"
                  priority
                />
              </div>
            </motion.div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-64 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-center"
            />

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-white/50 text-xs font-bold uppercase tracking-[0.3em] mb-2">
                HDB Engineering Lanka
              </p>
              <p className="text-white text-xl sm:text-2xl font-bold tracking-wide">
                Trust Us To{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-orange to-whatsapp">
                  Build Your Future
                </span>
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2, delay: 1, ease: [0.4, 0, 0.2, 1] }}
                className="h-full w-full bg-gradient-to-r from-electric via-orange to-whatsapp rounded-full"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
