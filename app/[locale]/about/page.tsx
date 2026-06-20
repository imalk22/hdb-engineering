'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT, COMPANY } from '@/lib/constants'

/* ── helpers ─────────────────────────────────────────────── */
const fadeUp    = { hidden:{opacity:0,y:40},    visible:{opacity:1,y:0} }
const fadeLeft  = { hidden:{opacity:0,x:-50},   visible:{opacity:1,x:0} }
const fadeRight = { hidden:{opacity:0,x:50},    visible:{opacity:1,x:0} }
const scaleIn   = { hidden:{opacity:0,scale:.88},visible:{opacity:1,scale:1} }

function Reveal({ children, className='', delay=0, variants=fadeUp }:{
  children:React.ReactNode; className?:string; delay?:number; variants?:any
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })
  return (
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView?'visible':'hidden'}
      transition={{ duration:.75, delay, ease:[.22,1,.36,1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

/* ── animated counter ────────────────────────────────────── */
function Counter({ to, suffix='' }:{ to:number; suffix?:string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true })
  const raw = useMotionValue(0)
  const smooth = useSpring(raw, { stiffness:60, damping:20 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) raw.set(to)
  }, [inView, to, raw])

  useEffect(() => smooth.on('change', v => setDisplay(Math.round(v))), [smooth])

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>
}

/* ── data ────────────────────────────────────────────────── */
const STATS = [
  {
    num:500, suffix:'+', label:'Machines Installed', labelSi:'යන්ත්‍ර ස්ථාපිත',
    gradient:'from-blue-500/25 to-blue-700/15', accent:'text-blue-200',
    icon:(
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="20" width="40" height="24" rx="2"/>
        <rect x="10" y="28" width="6" height="8" rx="1" fill="currentColor" opacity=".3"/>
        <rect x="21" y="28" width="6" height="8" rx="1" fill="currentColor" opacity=".3"/>
        <rect x="32" y="28" width="6" height="8" rx="1" fill="currentColor" opacity=".3"/>
        <path d="M12 20V10a2 2 0 012-2h8v12M26 20V12h8a2 2 0 012 2v6"/>
        <path d="M8 20V15l4-7M40 20V15l-4-7" strokeWidth={1.3}/>
      </svg>
    ),
  },
  {
    num:25, suffix:'+', label:'Districts Covered', labelSi:'දිස්ත්‍රික්ක',
    gradient:'from-emerald-500/25 to-teal-700/15', accent:'text-emerald-200',
    icon:(
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4C15.16 4 8 11.16 8 20c0 12 16 28 16 28s16-16 16-28C40 11.16 32.84 4 24 4z"/>
        <circle cx="24" cy="20" r="5" fill="currentColor" opacity=".3"/>
        <path d="M15 38l-9 5M33 38l9 5" strokeWidth={1.3} opacity=".6"/>
      </svg>
    ),
  },
  {
    num:10, suffix:'+', label:'Machine Categories', labelSi:'යන්ත්‍ර වර්ග',
    gradient:'from-orange/25 to-amber-700/15', accent:'text-orange',
    icon:(
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="8"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity=".4"/>
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6"/>
        <path d="M9.37 9.37l4.24 4.24M34.39 34.39l4.24 4.24M9.37 38.63l4.24-4.24M34.39 13.61l4.24-4.24"/>
        <circle cx="24" cy="24" r="14" strokeDasharray="4 3" strokeWidth={1} opacity=".35"/>
      </svg>
    ),
  },
  {
    num:3, suffix:'', label:'Years of Excellence', labelSi:'විශිෂ්ටතාවය',
    gradient:'from-amber-500/25 to-yellow-700/15', accent:'text-amber-300',
    icon:(
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5l4.12 8.35L38 14.82l-7 6.82 1.65 9.63L24 26.5l-8.65 4.77L17 21.64 10 14.82l9.88-1.47L24 5z" fill="currentColor" opacity=".2"/>
        <path d="M24 5l4.12 8.35L38 14.82l-7 6.82 1.65 9.63L24 26.5l-8.65 4.77L17 21.64 10 14.82l9.88-1.47L24 5z"/>
        <line x1="24" y1="32" x2="24" y2="41" strokeWidth={2}/>
        <path d="M17 41h14" strokeWidth={2}/>
      </svg>
    ),
  },
]

const VALUES = [
  { icon:'🎯', title:'Our Mission',    titleSi:'අපගේ මෙහෙවර',
    desc:'Empowering Sri Lankan entrepreneurs with premium industrial machinery through honest sales and island-wide support.',
    si: 'ශ්‍රී ලාංකික ව්‍යාපාරිකයින් ශ්‍රේෂ්ඨ කාර්මික යන්ත්‍ර හරහා ශක්තිමත් කිරීම.' },
  { icon:'👁️', title:'Our Vision',     titleSi:'අපගේ දර්ශනය',
    desc:'To be Sri Lanka\'s most trusted industrial machinery brand — known for quality, service, and reliability.',
    si: 'ශ්‍රී ලංකාවේ වඩාත්ම විශ්වාසනීය කාර්මික යන්ත්‍ර සන්නාමය බවට පත් වීම.' },
  { icon:'💎', title:'Our Values',     titleSi:'අපගේ වටිනාකම්',
    desc:'Honesty, quality-first products, legal agreements, showroom transparency, and lifetime after-sales commitment.',
    si: 'අවංකභාවය,ගුණාත්මකභාවය,ගිවිස්සුම්,අලවියෙන් පසු සේවා' },
]

const SERVICES = [
  { icon:'💧', cat:'Liquid Filling',    si:'ද්‍රව ඇසුරුම් යන්ත්‍ර', desc:'Ice pop, juice, oil, milk — automated liquid packing at 25 packs/min' },
  { icon:'🌡️', cat:'Dehydrators',       si:'ආහාර විජලනය යන්ත්‍ර',  desc:'8 to 96 tray commercial dehydrators for fruits, vegetables & herbs' },
  { icon:'⚙️', cat:'Grinding Mills',    si:'ඇඹරීම් යන්ත්‍ර',      desc:'Multi-spice, disc & ultrafine mills for all powder-type products' },
  { icon:'🔒', cat:'Band Sealers',      si:'සීල් යන්ත්‍ර',          desc:'Continuous sealing for bags, pouches and flexible packaging' },
  { icon:'🌀', cat:'Vacuum Sealers',    si:'වැකුම් සීල් යන්ත්‍ර',  desc:'Extend shelf life with airtight vacuum packaging technology' },
  { icon:'🌾', cat:'Rice Mills',        si:'සහල් යන්ත්‍ර',          desc:'Lokka, Saviya & Ransahal branded rice mills for home & commercial use' },
  { icon:'🔪', cat:'Slicers',           si:'කැබලි කපන යන්ත්‍ර',    desc:'Precision food slicers for fruits, vegetables and bread' },
  { icon:'🌿', cat:'Chuff Cutters',     si:'චෆ් කටර්ස් යන්ත්‍ර',   desc:'Agricultural chuff cutters for animal feed preparation' },
]

const GALLERY_IMGS = [
  '/about/about-1.jpg',
  '/about/about-2.jpg',
  '/about/about-3.jpg',
  '/about/about-4.jpg',
]

const TIMELINE = [
  { year:'2020', title:'Founded in Dambulla', desc:'HDB Engineering Lanka started operations at No.218 Kurunegala Road, Dambulla with a vision to serve Sri Lankan entrepreneurs.' },
  { year:'2021', title:'First 100 Machines', desc:'Reached 100 machines installed across Sri Lanka within the first year — dehydrators and grinding mills led the way.' },
  { year:'2022', title:'Island-Wide Service Network', desc:'Established a dedicated island-wide after-sales service and support network, ensuring every customer across Sri Lanka receives fast, reliable assistance.' },
  { year:'2023', title:'Dambulla Showroom', desc:'Opened a dedicated physical showroom in Dambulla with live machine demos and a dedicated sales team.' },
  { year:'2024', title:'500+ Happy Customers', desc:'Crossed 500 machines installed island-wide with a full island-wide service network and legal agreement system.' },
]

/* ══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden pt-24 pb-36 sm:pt-36 sm:pb-52 px-4">
        <motion.div animate={{x:[0,40,0],y:[0,-30,0]}} transition={{duration:10,repeat:Infinity,ease:'easeInOut'}}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-orange/10 rounded-full blur-3xl pointer-events-none"/>
        <motion.div animate={{x:[0,-30,0],y:[0,20,0]}} transition={{duration:12,repeat:Infinity,ease:'easeInOut'}}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"/>
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{backgroundImage:'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)',backgroundSize:'60px 60px'}}/>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <span className="inline-block bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              🏭 About HDB Engineering Lanka
            </span>
          </motion.div>

          <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.1}}
            className="text-2xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Built for <span className="text-orange">Sri Lankan</span> Entrepreneurs
          </motion.h1>

          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.25}}
            className="text-blue-200 text-base sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Supplying premium industrial machinery to empower small and medium businesses across Sri Lanka since 2020.
          </motion.p>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.35}}
            className="text-blue-300 text-base font-sinhala-body max-w-xl mx-auto mb-10">
            2020 සිට ශ්‍රී ලාංකික ව්‍යාපාරිකයින්ට ශ්‍රේෂ්ඨ කාර්මික යන්ත්‍ර සපයමින් ඔවුන්ගේ ව්‍යාපාර ශක්තිමත් කරයි.
          </motion.p>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.45}}
            className="flex flex-row gap-2 sm:gap-4 justify-center">
            <Link href="/si/liquid-machine"
              className="flex items-center justify-center gap-2 bg-orange text-white font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base btn-press shadow-xl shadow-orange/30">
              🔥 Our Best Seller
            </Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base btn-press shadow-lg shadow-[#25D366]/30 transition-colors">
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>

      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 -mt-20 sm:-mt-36 pb-16">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {STATS.map((s,i) => (
            <motion.div
              key={s.label}
              initial={{ opacity:0, y:40, scale:.92 }}
              animate={{ opacity:1, y:0, scale:1 }}
              transition={{ duration:.65, delay:.15 + i*.1, ease:[.22,1,.36,1] }}
              whileHover={{ y:-6, scale:1.03 }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-1.5 sm:p-6 text-center border border-white/20 bg-gradient-to-br ${s.gradient} backdrop-blur-xl`}
            >
              {/* inner glow top */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-2xl sm:rounded-3xl"/>
              <div className={`hidden sm:inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-4 ${s.accent}`}>
                {s.icon}
              </div>
              <div className="text-base sm:text-4xl font-extrabold text-white mb-0.5 sm:mb-1 leading-none tracking-tight"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55), 0 0 24px rgba(0,0,0,0.35)' }}>
                <Counter to={s.num} suffix={s.suffix}/>
              </div>
              <p className="text-white/90 text-[9px] sm:text-sm font-semibold leading-snug"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)' }}>{s.label}</p>
              <p className={`hidden sm:block text-xs font-sinhala-body mt-1 ${s.accent} opacity-80`}
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>{s.labelSi}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-ice">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variants={fadeLeft}>
            <span className="inline-block bg-navy/8 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy leading-tight mb-6">
              From Dambulla to <span className="text-orange">Island-wide</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', system-ui, sans-serif" }}>
              HDB Engineering Lanka started with one simple belief: Sri Lankan small business owners deserve access to the same quality industrial machinery that large factories use — at fair prices, with honest service, and real after-sales support.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 font-sinhala-body">
              අපේ ව්‍යාපාරය ආරම්භ කළේ ශ්‍රී ලාංකික කුඩා ව්‍යාපාරිකයින්ට ගුණාත්මක යන්ත්‍ර ලබා දෙන සිහිනයකින්. අද අපි ශ්‍රී ලංකාව පුරා 500+ ක් ව්‍යාපාරිකයින්ට සේවය සපුරා ඇත.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, operating from our showroom in Dambulla, we serve 500+ businesses across every province — with a dedicated island-wide service team and legal agreement system that protects every customer.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Dambulla Showroom','Island-wide Service','Legal Agreements','500+ Customers'].map(tag=>(
                <span key={tag} className="bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          </Reveal>

          {/* Gallery grid */}
          <Reveal variants={fadeRight}>
            <div className="grid grid-cols-2 gap-3">
              {/* First image spans full width */}
              <motion.div whileHover={{scale:1.02}} transition={{type:'spring',stiffness:300,damping:20}}
                className="col-span-2 relative overflow-hidden rounded-2xl shadow-lg" style={{aspectRatio:'16/7'}}>
                <Image src={GALLERY_IMGS[0]} alt="HDB Engineering Lanka" fill className="object-cover" sizes="700px" quality={90}/>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"/>
              </motion.div>
              {/* Remaining 3 in a row */}
              {GALLERY_IMGS.slice(1).map((src,i) => (
                <motion.div key={i} whileHover={{scale:1.04}} transition={{type:'spring',stiffness:300,damping:20}}
                  className="relative overflow-hidden rounded-2xl shadow-lg" style={{aspectRatio:'4/3'}}>
                  <Image src={src} alt="HDB Engineering Lanka" fill className="object-cover" sizes="350px" quality={90}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent"/>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="inline-block bg-orange/10 text-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Our Journey</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy">Growing Every Year</h2>
          </Reveal>

          <div className="relative">
            {/* Mobile left line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange via-navy to-blue-300 lg:hidden"/>
            {/* Desktop center line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange via-navy to-blue-300 hidden lg:block"/>

            <div className="flex flex-col gap-8">
              {TIMELINE.map((item,i) => (
                <Reveal key={item.year} delay={i*.1}>
                  {/* Mobile: left-aligned with bubble on the line */}
                  <div className="flex items-start gap-3 lg:hidden">
                    <div className="flex-shrink-0 w-14 h-14 bg-navy rounded-full flex items-center justify-center shadow-xl z-10 border-4 border-white relative">
                      <span className="text-white font-extrabold text-xs text-center leading-tight">{item.year}</span>
                    </div>
                    <div className="bg-ice rounded-2xl p-4 border border-gray-100 shadow-sm flex-1 relative z-10">
                      <h3 className="font-extrabold text-navy text-base mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Desktop: alternating */}
                  <div className={`hidden lg:flex items-center gap-6 ${i%2===0?'flex-row':'flex-row-reverse'}`}>
                    <div className={`flex-1 ${i%2===0?'text-right':''}`}>
                      <div className={`bg-ice rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${i%2===0?'ml-auto':''} max-w-sm`}>
                        <h3 className="font-extrabold text-navy text-lg mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-full flex items-center justify-center shadow-xl z-10 border-4 border-white">
                      <span className="text-white font-extrabold text-xs text-center leading-tight">{item.year}</span>
                    </div>
                    <div className="flex-1"/>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ─────────────────────── */}
      <section className="py-20 px-4 bg-navy">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="inline-block bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">What Drives Us</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Our Core Principles</h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            {VALUES.map((v,i) => (
              <Reveal key={v.title} delay={i*.1} variants={scaleIn}>
                <motion.div whileHover={{y:-8}} transition={{type:'spring',stiffness:300,damping:20}}
                  className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl sm:rounded-3xl p-2 sm:p-7 h-full">
                  <div className="text-xl sm:text-5xl mb-1 sm:mb-4">{v.icon}</div>
                  <h3 className="text-white font-extrabold text-[10px] sm:text-xl mb-0.5">{v.title}</h3>
                  <p className="hidden sm:block text-blue-300 text-xs font-sinhala-body mb-2">{v.titleSi}</p>
                  <p className="text-blue-100 text-[8px] sm:text-sm leading-relaxed mb-1 sm:mb-2">{v.desc}</p>
                  <p className="hidden sm:block text-blue-300 text-xs font-sinhala-body leading-relaxed">{v.si}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="inline-block bg-navy/8 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">What We Offer</span>
            <h2 className="text-xl sm:text-5xl font-extrabold text-navy mb-3">Our Machine Categories</h2>
            <p className="text-gray-500 text-lg font-sinhala-body">ඔබේ ව්‍යාපාරය සඳහා නිවැරදි යන්ත්‍රය</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {SERVICES.map((s,i) => (
              <Reveal key={s.cat} delay={i*.06} variants={scaleIn}>
                <motion.div whileHover={{y:-6,boxShadow:'0 20px 50px rgba(10,37,64,.1)'}}
                  transition={{type:'spring',stiffness:300,damping:20}}
                  className="group bg-ice hover:bg-navy rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-gray-100 cursor-default transition-colors duration-300 h-full">
                  <span className="text-2xl sm:text-4xl mb-1 sm:mb-3 block group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
                  <h3 className="font-extrabold text-navy group-hover:text-white text-xs sm:text-base transition-colors">{s.cat}</h3>
                  <p className="text-gray-400 group-hover:text-blue-200 text-[9px] sm:text-xs font-sinhala-body sm:mb-2 transition-colors mt-0.5">{s.si}</p>
                  <p className="hidden sm:block text-gray-600 group-hover:text-blue-100 text-xs leading-relaxed transition-colors">{s.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-ice">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="inline-block bg-whatsapp/10 text-whatsapp text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Why Choose Us</span>
            <h2 className="text-xs sm:text-5xl font-extrabold text-navy mb-3 font-sinhala-body whitespace-nowrap">ඇයි HDB විශ්වාස කළ යුත්තේ?</h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-5">
            {[
              {icon:'🏛',t:'Registered Company',  si:'නිල ලියාපදිංචි ආයතනය', d:'Officially registered private limited company in Sri Lanka'},
              {icon:'📋',t:'Legal Agreement',      si:'නිල නීතිමය ගිවිසුමක්',  d:'Every order comes with a legally binding written agreement'},
              {icon:'🏭',t:'Physical Showroom',    si:'Dambulla Showroom',      d:'Visit our showroom in Dambulla for a live machine demo'},
              {icon:'🏦',t:'Secure Payments',      si:'ආරක්ෂිත ගෙවීම්',        d:'Bank transfers and secure payment methods only'},
              {icon:'🛡',t:'12-Month Warranty',   si:'මාස 12 වගකිම් කාලය',     d:'Full machine warranty for 12 months after purchase'},
              {icon:'👨‍🔧',t:'Island-wide Service', si:'දිවයිනේ පුරා සේවා කණ්ඩායම', d:'Our service team comes to you — anywhere in Sri Lanka'},
            ].map((c,i) => (
              <Reveal key={c.t} delay={i*.08} variants={scaleIn}>
                <motion.div whileHover={{y:-5,boxShadow:'0 16px 50px rgba(37,211,102,.1)'}}
                  transition={{type:'spring',stiffness:300,damping:20}}
                  className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-5 border border-gray-100 shadow-sm">
                  <span className="text-xl sm:text-3xl mb-0.5 sm:mb-3 block">{c.icon}</span>
                  <h3 className="font-extrabold text-navy text-[9px] sm:text-base">{c.t}</h3>
                  <p className="text-gray-400 text-[7px] sm:text-xs font-sinhala-body truncate">{c.si}</p>
                  <p className="hidden sm:block text-gray-600 text-sm leading-relaxed mt-1">{c.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-navy py-10 sm:py-20 px-4 overflow-hidden text-center">
        <div className="absolute left-1/4 bottom-0 w-96 h-40 bg-whatsapp/20 rounded-full blur-3xl pointer-events-none"/>
        <div className="absolute right-1/4 bottom-0 w-96 h-40 bg-orange/20 rounded-full blur-3xl pointer-events-none"/>
        <Reveal className="relative max-w-2xl mx-auto">
          <p className="text-blue-300 text-xs font-bold uppercase tracking-[.25em] mb-3">Ready to grow your business?</p>
          <h2 className="text-xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-8">
            Visit Our <span className="text-orange">Showroom</span> Today
          </h2>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center">
            <motion.a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{scale:1.05}} whileTap={{scale:.97}}
              className="flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg shadow-xl shadow-whatsapp/30">
              💬 WhatsApp Pre-Order
            </motion.a>
            <motion.a href={`tel:${CONTACT.phone2}`}
              whileHover={{scale:1.05}} whileTap={{scale:.97}}
              className="flex items-center justify-center gap-2 bg-orange text-white font-bold px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg shadow-xl shadow-orange/30">
              📞 {CONTACT.phone2Display}
            </motion.a>
          </div>
        </Reveal>
      </section>

    </div>
  )
}
