'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { CONTACT, FLAGSHIP } from '@/lib/constants'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const raw = useMotionValue(0)
  const smooth = useSpring(raw, { stiffness: 50, damping: 18 })
  const [display, setDisplay] = useState(0)
  useEffect(() => { if (inView) raw.set(to) }, [inView, to, raw])
  useEffect(() => smooth.on('change', v => setDisplay(Math.round(v))), [smooth])
  return <span ref={ref}>{display}{suffix}</span>
}

export default function HeroSection({ locale = 'en' }: { locale?: string }) {
  const si = locale === 'si'
  return (
    <section className="relative bg-navy overflow-hidden flex items-center sm:min-h-screen">

      {/* ── Background: mesh grid ── */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Background gradient orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-royal/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-royal/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-6 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="grid grid-cols-2 gap-2 sm:gap-12 lg:gap-20 items-center">

          {/* ═══ LEFT: Copy ═══ */}
          <div>
            {/* Trust badge */}
            <div className="animate-fade-up inline-flex items-center gap-1 sm:gap-2.5 bg-white/10 backdrop-blur border border-white/20 text-blue-200 text-[7px] sm:text-base font-bold px-1.5 py-1 sm:px-6 sm:py-3 rounded-full mb-2 sm:mb-8">
              <span className="flex gap-1">
                {[0,1,2,3,4].map(i => (
                  <motion.svg
                    key={i}
                    className="w-2 h-2 sm:w-6 sm:h-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </motion.svg>
                ))}
              </span>
              {si ? 'ශ්‍රී ලංකාවේ ව්‍යාපාරිකයින් 500+ක් විශ්වාසය' : 'Trusted by 500+ Businesses Across Sri Lanka'}
            </div>

            {/* H1 */}
            <h1 className={`animate-fade-up delay-100 font-extrabold text-white tracking-tight mb-1 sm:mb-6 font-sinhala-body ${si ? 'text-[13px] sm:text-[38px] lg:text-[46px] leading-[1.2] sm:leading-[1.1]' : 'text-[14px] sm:text-[42px] lg:text-[52px] leading-[1.2] sm:leading-[1.1]'}`}>
              {si
                ? <>ඉහළ කාර්යසාධනය සහිත <span className="text-orange">යන්ත්‍ර</span> නවීන ව්‍යාපාර සඳහා</>
                : <>High-Performance <span className="text-orange">Machines</span> for Modern Businesses</>
              }
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up delay-200 text-blue-200 text-lg leading-relaxed mb-10 max-w-lg font-sinhala-body hidden sm:block">
              {si
                ? 'ශ්‍රී ලංකාවේ වඩාත්ම විශ්වාසනීය කාර්මික යන්ත්‍ර සැපයුම්කරු. ද්‍රව පිරවීම, ආහාර විජලනය, ඇඹරීම් යන්ත්‍ර සහ තවත් — දිවයිනේ සෑම තැනකටම නොමිලේ ස්ථාපනය.'
                : 'Sri Lanka\'s most trusted industrial machinery supplier. Liquid filling, dehydrators, grinding mills and more — delivered and installed island-wide.'
              }
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-300 flex flex-row gap-1 sm:gap-4 mb-2 sm:mb-14">
              <Link
                href={`/${locale}/machines`}
                className="group flex items-center justify-center gap-1 sm:gap-2 bg-royal hover:bg-electric text-white font-bold px-2 py-1 sm:px-8 sm:py-4 rounded-md sm:rounded-2xl text-[8px] sm:text-base transition-all duration-300 shadow-lg shadow-royal/40 btn-press cursor-pointer font-sinhala-body"
              >
                {si ? 'යන්ත්‍ර බලන්න' : 'Browse Machines'}
                <svg className="w-2 h-2 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-2 py-1 sm:px-8 sm:py-4 rounded-md sm:rounded-2xl text-[8px] sm:text-base transition-all duration-300 cursor-pointer font-sinhala-body shadow-lg shadow-[#25D366]/30"
              >
                <svg className="w-2.5 h-2.5 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                {si ? 'WhatsApp මිල ගණන් ලබාගන්න' : 'Get Quote on WhatsApp'}
              </a>
            </div>

            {/* Stat chips */}
            <div className="grid grid-cols-3 gap-1 sm:gap-4">
              {[
                { to: 500, suffix: '+', display: null,  label: si ? 'සතුටු ගනුදෙනුකරුවන්' : 'Happy Clients' },
                { to: 12,  suffix: '+', display: null,  label: si ? 'යන්ත්‍ර වර්ග' : 'Machine Types' },
                { to: 1,   suffix: '',  display: '1yr', label: si ? 'වගකීම' : 'Warranty' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.65, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="text-center p-1 sm:p-4 bg-white/8 backdrop-blur border border-white/15 rounded-lg sm:rounded-2xl cursor-default"
                >
                  <p className="text-[10px] sm:text-2xl font-extrabold text-white">
                    {stat.display ?? <CountUp to={stat.to} suffix={stat.suffix} />}
                  </p>
                  <p className="text-blue-300 text-[7px] sm:text-xs font-medium mt-0.5 font-sinhala-body">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT: Product image ═══ */}
          <div className="animate-fade-right delay-300 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-electric/25 rounded-full blur-[80px]" />
            </div>

            <Link href={`/${locale}/liquid-machine`} className="block relative bg-white/8 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-3xl p-1.5 sm:p-6 shadow-2xl hover:border-white/40 hover:bg-white/12 transition-all duration-300 cursor-pointer">
              <span className="absolute top-1 left-1 sm:top-5 sm:left-5 z-10 bg-orange text-white text-[6px] sm:text-xs font-bold px-1 py-0.5 sm:px-3 sm:py-1.5 rounded-full font-sinhala-body">
                {si ? 'හොඳම විකිණෙන' : 'Best Seller'}
              </span>
              <Image
                src="/images/products/automatic-liquid-filling-packing-machine.png"
                alt="Automatic Liquid Filling Machine"
                width={600}
                height={520}
                className="w-full h-[130px] sm:h-[420px] object-contain drop-shadow-2xl animate-float"
                priority
              />
              <p className="text-center text-white font-bold text-[7px] sm:text-base mt-1 sm:mt-3 tracking-tight font-sinhala-body">
                {si ? 'ස්වයංක්‍රීය ද්‍රව පිරවීම් යන්ත්‍රය' : 'Automatic Liquid Filling & Packing Machine'}
              </p>
              {/* ── Price card ── */}
              <div className="mt-1 sm:mt-4 relative">
                {/* Floating discount pill */}
                <div className="absolute -top-3.5 left-4 z-10 hidden sm:flex items-center gap-1.5 bg-orange text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg shadow-orange/50">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/></svg>
                  20% OFF — Pre-Order Deal
                </div>

                <div className="bg-navy/80 backdrop-blur rounded-2xl border border-white/10 overflow-hidden">
                  {/* Gradient top accent */}
                  <div className="hidden sm:block h-[2px] bg-gradient-to-r from-orange via-whatsapp to-electric" />

                  <div className="px-1.5 pt-1.5 pb-1 sm:px-5 sm:pt-4 sm:pb-3">
                    {/* Original price + label */}
                    <div className="flex items-center justify-between mb-1">
                      <p className="hidden sm:block text-blue-300 text-[11px] font-medium font-sinhala-body">{si ? 'විශේෂ පූර්ව ඇණවුම් මිල' : 'Special Pre-Order Price'}</p>
                      <p className="text-white/50 text-[7px] sm:text-base font-bold line-through">LKR {FLAGSHIP.priceRegular.toLocaleString('en-LK')}</p>
                    </div>
                    {/* Offer price */}
                    <p className="text-white font-extrabold text-xs sm:text-3xl tracking-tight leading-none mb-1 sm:mb-3">
                      LKR {FLAGSHIP.priceOffer.toLocaleString('en-LK')}
                    </p>
                    {/* Full-width savings bar */}
                    <div className="hidden sm:flex items-center gap-2.5 bg-whatsapp/15 border border-whatsapp/40 rounded-xl px-4 py-2.5">
                      <svg className="w-5 h-5 text-whatsapp flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <p className="text-whatsapp font-extrabold text-xl leading-none tracking-tight">
                          LKR {FLAGSHIP.priceSaving.toLocaleString('en-LK')} Saved!
                        </p>
                        <p className="text-whatsapp/70 text-[10px] font-semibold mt-0.5 font-sinhala-body">{si ? 'ඔබ මෙම මුදල ඉතිරි කරගනු ලබයි' : 'You save this amount on pre-order'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl px-4 py-3 items-center gap-2.5 border border-gray-100">
              <div className="w-8 h-8 bg-whatsapp/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-whatsapp" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <p className="text-slate-dark text-xs font-bold font-sinhala-body">{si ? 'දිවයිනේ' : 'Island-wide'}</p>
                <p className="text-slate text-xs font-sinhala-body">{si ? 'නොමිලේ බෙදාහැරීම' : 'Free Delivery'}</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl px-4 py-3 items-center gap-2.5 border border-gray-100">
              <div className="w-8 h-8 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-royal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p className="text-slate-dark text-xs font-bold font-sinhala-body">{si ? '1 අවුරුද්දක්' : '1 Year'}</p>
                <p className="text-slate text-xs font-sinhala-body">{si ? 'වගකීම' : 'Warranty'}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
