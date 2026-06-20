'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { CONTACT } from '@/lib/constants'

/* ── helpers ──────────────────────────────────────────────── */
function Reveal({ children, className = '', delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const raw = useMotionValue(0)
  const smooth = useSpring(raw, { stiffness: 55, damping: 18 })
  const [display, setDisplay] = useState(0)
  useEffect(() => { if (inView) raw.set(to) }, [inView, to, raw])
  useEffect(() => smooth.on('change', v => setDisplay(Math.round(v))), [smooth])
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>
}

function Stars({ count = 5, filled = 5 }: { count?: number; filled?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < filled ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

/* ── data ─────────────────────────────────────────────────── */
type Story = {
  id: string
  name: string
  location?: string
  industry: string
  machine: string
  stars: number
  quote: string
  bg: string
  videoId?: string
  isShort?: boolean
}

const SUCCESS_STORIES: Story[] = [
  {
    id: '01',
    name: 'වීරසේකර මහතා',
    location: 'රත්නපුර',
    industry: 'Liquid Machine / Food Grade Export',
    machine: 'Automatic Liquid Filling Machine',
    stars: 5,
    quote: '"Food Grade Machine: මේක Food Grade මැෂින් එකක් හින්දා අපේ නිෂ්පාදන අපනයනය (Export) කරන්නත් හොඳයි. මං කතා කරපුවහම, සුහදශීලීව හැම දෙයක්ම කරලා දුන්නා."',
    videoId: '-kQ_kJt2yIw',
    bg: 'from-blue-900 to-navy',
  },
  {
    id: '02',
    name: 'ප්‍රියන්ති කුමාරි මහත්මිය',
    location: 'ලක්ෂපාන',
    industry: 'Food Dehydration',
    machine: 'Food Dehydrator',
    stars: 5,
    quote: '"මම දැනට ආහාර විජලන ක්ෂේත්‍රයේ (Food Dehydration sector) නියැලෙන කෙනෙක්. අපේ වැඩ කටයුතු සඳහා යන්ත්‍රයක් සොයනකොට HDB Engineering Lanka වෙතින් ලැබුණු සේවය ඇත්තටම අගය කළ යුතුයි."',
    videoId: '2I5hQcuDcE8',
    bg: 'from-emerald-900 to-teal-900',
  },
  {
    id: '03',
    name: 'දහනායක මහත්මා',
    location: 'කුරුණෑගල',
    industry: 'Rice Milling',
    machine: 'Rice Mill',
    stars: 5,
    quote: '"වටේ වී මෝල් 4ක් විතර තියනවා ... මේක හොඳ නිසා තමයි කට්ටිය එන්නෙ."',
    videoId: 'U6H1mN_iGZ0',
    bg: 'from-amber-900 to-orange-900',
  },
  {
    id: '04',
    name: 'HDB පාරිභෝගිකයා',
    location: 'ශ්‍රී ලංකාව',
    industry: 'Industrial Machinery',
    machine: 'HDB Machine',
    stars: 5,
    quote: '"HDB Engineering Lanka වෙතින් යන්ත්‍රය ලබාගත් පාරිභෝගිකයෙකුගේ අත්දැකීම."',
    videoId: '5jIxVmmJyOU',
    isShort: true,
    bg: 'from-purple-900 to-indigo-900',
  },
  {
    id: '05',
    name: 'චතුරි මහත්මිය',
    location: 'කෑගල්ල',
    industry: 'Dehydration & Grinding',
    machine: 'Dehydrator + Grinding Mill',
    stars: 5,
    quote: '"අපගේ Dehydrator Machine සහ Grinding Mill machine එක මිලදී ගත් පාරිභෝගිකයෙකුගේ සතුටුදායක අදහස් මෙන්න."',
    videoId: '9hNBd0QLMD8',
    isShort: true,
    bg: 'from-rose-900 to-red-900',
  },
  {
    id: '06',
    name: 'ආරියසේන මහතා',
    location: 'කුලියාපිටිය',
    industry: 'Fruit, Vegetable & Spice Dehydration',
    machine: 'Food Dehydrator',
    stars: 5,
    quote: '"පළතුරු, එළවළු, කුළුබඩු හොඳ quality එකෙන් විජලනය කරගන්න පුළුවන්."',
    videoId: 'gAfOOug313k',
    isShort: true,
    bg: 'from-lime-900 to-green-900',
  },
  {
    id: '07',
    name: 'Alo Agro',
    location: 'Horana',
    industry: 'Agriculture & Processing',
    machine: 'HDB Machine',
    stars: 5,
    quote: '"කාලය ඉතිරි කරගෙන ඉතා ඉක්මණින් වැඩ ටික පහසු කරගන්න පුළුවන්."',
    videoId: 'NzSpIvZvJwg',
    isShort: true,
    bg: 'from-teal-900 to-cyan-900',
  },
  {
    id: '08',
    name: 'පාරිභෝගික මහත්මිය',
    location: 'කළුතර',
    industry: 'Industrial Machinery',
    machine: 'HDB Machine',
    stars: 5,
    quote: '"මන් ගොඩක් තැන් වලින් මැෂින් ගත්ත කෙනෙක්, හැබැයි මට මේ මැෂින් එක වැඩ කරලා පෙන්නපු එකම ආයතනය. මෙතන ඉන්න ටීම් එක හරිම සුහදශීලී — අපිව හොඳට පිලිගෙන, වැඩ ඔක්කොම කරලා දුන්නා. මන් ඕනෑ කෙනෙකුටත් Recommend කරනවා!"',
    videoId: 'WAgJM5sUGts',
    bg: 'from-blue-900 to-navy',
  },
]

const TRUST_STRIP = [
  {
    stat: '500+',
    label: 'Machines Installed',
    sub: 'Across Sri Lanka',
    color: 'text-orange',
    iconBg: 'bg-orange/15',
    icon: (
      <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
  },
  {
    stat: '25+',
    label: 'Districts Covered',
    sub: 'Island-Wide Delivery',
    color: 'text-electric',
    iconBg: 'bg-electric/15',
    icon: (
      <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
  },
  {
    stat: '50+',
    label: 'Spare Parts',
    sub: 'Always in Stock',
    color: 'text-whatsapp',
    iconBg: 'bg-whatsapp/15',
    icon: (
      <svg className="w-6 h-6 text-whatsapp" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
      </svg>
    ),
  },
  {
    stat: '24/7',
    label: 'Technical Support',
    sub: 'Expert Team Always Ready',
    color: 'text-blue-300',
    iconBg: 'bg-blue-400/15',
    icon: (
      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
      </svg>
    ),
  },
  {
    stat: '#1',
    label: 'Trusted Brand',
    sub: 'HDB Engineering Lanka',
    color: 'text-amber-400',
    iconBg: 'bg-amber-400/15',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
      </svg>
    ),
  },
]

/* ── stat cards (same design as About page) ──────────────── */
const STAT_CARDS = [
  {
    num: '500+', to: 500, suffix: '+', label: 'Happy Clients', labelSi: 'සතුටු ගනුදෙනුකරුවන්',
    gradient: 'from-blue-500/25 to-blue-700/15', accent: 'text-blue-200',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="14" r="6"/>
        <path d="M4 40c0-7.732 6.268-14 14-14"/>
        <circle cx="34" cy="18" r="5"/>
        <path d="M26 40c0-6.627 5.373-12 12-12h2"/>
        <path d="M22 30c1.5-.667 3.5-1 6-1"/>
      </svg>
    ),
  },
  {
    num: '5★', to: 5, suffix: '', label: 'Average Rating', labelSi: 'සාමාන්‍ය ශ්‍රේණිය',
    gradient: 'from-amber-500/25 to-yellow-700/15', accent: 'text-amber-300',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5l4.12 8.35L38 14.82l-7 6.82 1.65 9.63L24 26.5l-8.65 4.77L17 21.64 10 14.82l9.88-1.47L24 5z" fill="currentColor" opacity=".25"/>
        <path d="M24 5l4.12 8.35L38 14.82l-7 6.82 1.65 9.63L24 26.5l-8.65 4.77L17 21.64 10 14.82l9.88-1.47L24 5z"/>
        <path d="M10 38h28M14 43h20" strokeWidth={1.4} opacity=".5"/>
      </svg>
    ),
  },
  {
    num: '98%', to: 98, suffix: '%', label: 'Would Recommend', labelSi: 'නිර්දේශ කිරීමේ අනුපාතය',
    gradient: 'from-emerald-500/25 to-teal-700/15', accent: 'text-emerald-200',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 24l10 10L38 14"/>
        <circle cx="24" cy="24" r="20" strokeWidth={1.3} opacity=".4"/>
      </svg>
    ),
  },
  {
    num: '1yr', to: 1, suffix: '', label: 'Warranty on All Machines', labelSi: 'සියලු යන්ත්‍රවලට වගකීම',
    gradient: 'from-purple-500/25 to-violet-700/15', accent: 'text-purple-200',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l16 6v12c0 9-7 16.8-16 20C15 38.8 8 31 8 22V10l16-6z"/>
        <path d="M16 24l6 6 10-12" strokeWidth={2}/>
      </svg>
    ),
  },
]

/* ═══════════════════════════════════════════════════════════ */
export default function ClientsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden pt-24 pb-36 sm:pt-36 sm:pb-52 px-4">
        <motion.div animate={{ x: [0,30,0], y: [0,-20,0] }} transition={{ duration:9,repeat:Infinity,ease:'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange/10 rounded-full blur-3xl pointer-events-none"/>
        <motion.div animate={{ x: [0,-20,0], y: [0,15,0] }} transition={{ duration:11,repeat:Infinity,ease:'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-whatsapp/10 rounded-full blur-3xl pointer-events-none"/>
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)',backgroundSize:'60px 60px' }}/>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-6">
              👥 Our Happy Customers
            </span>
          </motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight">
            Real Stories, <span className="text-orange">Real Results</span>
          </motion.h1>
          <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.2}}
            className="text-sm sm:text-base font-semibold text-blue-200 font-sinhala-body mb-4 leading-relaxed">
            HDB යන්ත්‍රෝපකරණ භාවිතයෙන් සාර්ථක වූණු ශ්‍රී ලාංකික ව්‍යාපාරිකයින්
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}}
            className="text-blue-300 font-sinhala-body text-base mb-0">
            අපගේ පාරිභෝගිකයින්ගේ කර්මාන්තශාලා වලින් ලබාගත් අත්දැකීම්
          </motion.p>
        </div>

      </section>

      {/* ── STAT CARDS ───────────────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 -mt-20 sm:-mt-36 pb-16">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {STAT_CARDS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 60, scale: .85, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ duration: .7, delay: .2 + i * .15, ease: [.22, 1, .36, 1] }}
              whileHover={{ y: -8, scale: 1.04 }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-1.5 sm:p-6 text-center border border-white/20 bg-gradient-to-br ${s.gradient} backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-2xl sm:rounded-3xl"/>
              <div className={`hidden sm:inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-4 ${s.accent}`}>
                {s.icon}
              </div>
              <div className="text-base sm:text-4xl font-extrabold text-white mb-0.5 sm:mb-1 leading-none tracking-tight"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55), 0 0 24px rgba(0,0,0,0.35)' }}>
                {s.num}
              </div>
              <p className="text-white/90 text-[9px] sm:text-sm font-semibold leading-snug"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)' }}>{s.label}</p>
              <p className={`hidden sm:block text-xs font-sinhala-body mt-1 ${s.accent} opacity-80`}
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>{s.labelSi}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SUCCESS STORIES ───────────────────────────────── */}
      <section className="bg-ice py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-navy text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest mb-4">
              👥 OUR HAPPY CUSTOMERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy font-sinhala-body leading-tight">
              HDB යන්ත්‍රෝපකරණ භාවිතයෙන් සාර්ථක වූණු<br className="hidden sm:block"/> ශ්‍රී ලාංකික ව්‍යාපාරිකයින්
            </h2>
            <p className="text-gray-500 mt-3 font-sinhala-body">
              අපගේ පාරිභෝගිකයින්ගේ කර්මාන්ශාලා වලින් ලබාගත් වීඩියෝ සහ අත්දැකීම්
            </p>
          </Reveal>

          {/* ── Regular 16:9 videos ── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-10 sm:mb-14">
            {SUCCESS_STORIES.filter(s => !s.isShort).map((story, i) => (
              <Reveal key={story.id} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(10,37,64,.13)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col"
                >
                  <div className="relative w-full flex-shrink-0" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${story.videoId}?rel=0&modestbranding=1`}
                      title={story.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-extrabold text-navy text-base font-sinhala-body leading-snug mb-0.5">
                      {story.name}
                      {story.location && <span className="font-normal text-gray-400 text-sm ml-1">— {story.location}</span>}
                    </p>
                    <p className="text-gray-400 text-xs mb-3">({story.industry})</p>
                    <Stars filled={story.stars} />
                    <p className="text-gray-700 text-sm font-sinhala-body font-semibold leading-relaxed mt-3">{story.quote}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* ── YouTube Shorts shelf ── */}
          <Reveal className="mb-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 9l6 3-6 3V9z"/><path d="M21 4H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z"/></svg>
                YouTube Shorts
              </span>
              <div className="flex-1 h-px bg-gray-200"/>
            </div>
          </Reveal>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {SUCCESS_STORIES.filter(s => s.isShort).map((story, i) => (
              <Reveal key={story.id} delay={i * 0.07} className="h-full">
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(10,37,64,.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col"
                >
                  <div
                    className="relative w-full flex-shrink-0 overflow-hidden"
                    style={{ paddingTop: '177.78%' }}
                  >
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${story.videoId}?rel=0&modestbranding=1`}
                      title={story.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <p className="font-extrabold text-navy text-sm font-sinhala-body leading-snug">
                      {story.name}
                    </p>
                    {story.location && <p className="text-gray-400 text-xs mt-0.5">📍 {story.location}</p>}
                    <p className="text-gray-600 text-xs font-sinhala-body font-semibold leading-relaxed mt-2 line-clamp-3">{story.quote}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <Reveal className="max-w-7xl mx-auto mt-14">
          <div className="relative bg-navy rounded-3xl overflow-hidden">
            {/* Gradient top accent */}
            <div className="h-[3px] bg-gradient-to-r from-electric via-orange to-whatsapp" />
            <div className="px-2 sm:px-6 py-3 sm:py-8 grid grid-cols-5 divide-x divide-white/10">
              {TRUST_STRIP.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1 sm:gap-3 text-center px-1 sm:px-4 py-1 sm:py-0 group">
                  {/* Icon bubble */}
                  <div className={`w-7 h-7 sm:w-12 sm:h-12 ${item.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                    <span className="scale-50 sm:scale-100 origin-center">{item.icon}</span>
                  </div>
                  {/* Stat */}
                  <span className={`${item.color} font-extrabold text-sm sm:text-2xl leading-none tracking-tight`}>
                    {item.stat}
                  </span>
                  {/* Labels */}
                  <div>
                    <p className="text-white text-[8px] sm:text-sm font-bold leading-snug">{item.label}</p>
                    <p className="hidden sm:block text-blue-300/70 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── REVIEW CTA ───────────────────────────────────── */}
      <section className="py-10 sm:py-20 px-4 bg-gradient-to-r from-navy via-blue-900 to-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(white 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <motion.div animate={{ x:[0,30,0], y:[0,-20,0] }} transition={{ duration:9,repeat:Infinity,ease:'easeInOut' }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-whatsapp/10 rounded-full blur-3xl pointer-events-none"/>
        <motion.div animate={{ x:[0,-20,0], y:[0,15,0] }} transition={{ duration:11,repeat:Infinity,ease:'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-electric/10 rounded-full blur-3xl pointer-events-none"/>

        <Reveal className="relative max-w-2xl mx-auto">
          <p className="text-blue-300 text-xs uppercase tracking-widest font-bold mb-3">
            Ready to grow your business?
          </p>
          <h2 className="text-lg sm:text-5xl font-extrabold text-white mb-2 sm:mb-3">
            Join Our <span className="text-whatsapp">500+</span> Happy Customers
          </h2>
          <p className="hidden sm:block text-blue-300 font-sinhala-body text-base mb-8">
            ඔබේ ව්‍යාපාරය සඳහා නිවැරදි යන්ත්‍රය සොයා ගන්න — නොමිලේ Delivery, ස්ථාපනය සහ නෛතික ගිවිසුම
          </p>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center mt-3 sm:mt-0">
            <motion.a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: .97 }}
              className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-3 py-2 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-lg shadow-xl shadow-whatsapp/30 transition-colors">
              💬 WhatsApp Pre-Order
            </motion.a>
            <motion.a href={`tel:${CONTACT.phone2}`}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: .97 }}
              className="flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-white font-bold px-3 py-2 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-lg shadow-xl shadow-orange/30 transition-colors">
              📞 {CONTACT.phone2Display}
            </motion.a>
          </div>
          <p className="hidden sm:block text-blue-300/50 text-xs mt-6 font-sinhala-body">
            ✅ නොමිලේ Delivery · ✅ නොමිලේ Installation · ✅ Legal Agreement · ✅ 12-Month Warranty
          </p>
        </Reveal>
      </section>

    </div>
  )
}
