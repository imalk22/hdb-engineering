'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CONTACT } from '@/lib/constants'

// ── Animation helpers ──────────────────────────────────────
const fadeUp   = { hidden: { opacity: 0, y: 32 },  visible: { opacity: 1, y: 0 } }
const fadeLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }
const fadeRight= { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } }
const scaleIn  = { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } }

function AnimSection({ children, className = '', delay = 0, variants = fadeUp }: {
  children: React.ReactNode; className?: string; delay?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants?: any
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} variants={variants} initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

const SOCIAL = [
  { name: 'Facebook',  href: CONTACT.facebook,  icon: 'f', bg: 'bg-[#1877F2]' },
  { name: 'YouTube',   href: CONTACT.youtube,   icon: '▶', bg: 'bg-[#FF0000]' },
  { name: 'TikTok',    href: CONTACT.tiktok,    icon: '♪', bg: 'bg-[#010101]' },
  { name: 'Instagram', href: CONTACT.instagram, icon: '◉', bg: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]' },
]

// ── Floating label input ───────────────────────────────────
function FloatingInput({ label, type = 'text', value, onChange, rows }: {
  label: string; type?: string; value: string
  onChange: (v: string) => void; rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0
  const cls = `w-full bg-white border-2 rounded-xl px-4 pt-6 pb-3 text-gray-900 text-sm focus:outline-none transition-colors duration-200 resize-none ${
    focused ? 'border-navy/60' : 'border-gray-200 hover:border-gray-300'
  }`
  return (
    <div className="relative">
      <label className={`absolute left-4 transition-all duration-200 pointer-events-none font-medium ${
        active ? 'top-2 text-[10px] text-navy' : 'top-[18px] text-sm text-gray-500'
      }`}>{label}</label>
      {rows ? (
        <textarea rows={rows} value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className={cls} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className={cls} />
      )}
    </div>
  )
}

/* ── contact glass cards ──────────────────────────────────── */
const CONTACT_CARDS = [
  {
    title: 'Call Us', titleSi: 'දුරකතනය',
    lines: [CONTACT.phone1Display, CONTACT.phone2Display],
    href: `tel:${CONTACT.phone1}`,
    gradient: 'from-blue-500/30 to-blue-700/20', accent: 'text-blue-100',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a2 2 0 012-2h6.28a2 2 0 011.897 1.368l2 6a2 2 0 01-.45 2.05L15 18s3 6 8 8l2.58-2.727a2 2 0 012.05-.45l6 2A2 2 0 0135 26.72V33a2 2 0 01-2 2C14 35 6 20 6 8z"/>
      </svg>
    ),
  },
  {
    title: 'WhatsApp', titleSi: 'WhatsApp',
    lines: ['Pre-Order & Enquiries', 'Fast Reply Guaranteed'],
    href: CONTACT.whatsappUrl,
    gradient: 'from-emerald-500/30 to-teal-700/20', accent: 'text-emerald-100',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6C14.06 6 6 14.06 6 24c0 3.19.84 6.18 2.3 8.78L6 42l9.48-2.27A17.93 17.93 0 0024 42c9.94 0 18-8.06 18-18S33.94 6 24 6z"/>
        <path d="M32 28.5c-.5-1-3-2.5-3.5-2.5s-1.5 1-2 1.5c-3-1-5-3-6-6 .5-.5 1.5-1.5 1.5-2s-1.5-3-2.5-3.5c-.5 0-2 1-2.5 2 0 5 5 10 10 10 1 0 2-1.5 5-2z" fill="currentColor" opacity=".3"/>
      </svg>
    ),
  },
  {
    title: 'Email Us', titleSi: 'විද්‍යුත් තැපෑල',
    lines: [CONTACT.email],
    href: `mailto:${CONTACT.email}`,
    gradient: 'from-orange/30 to-amber-600/20', accent: 'text-amber-100',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="12" width="36" height="24" rx="3"/>
        <path d="M6 15l18 13L42 15"/>
      </svg>
    ),
  },
  {
    title: 'Visit Us', titleSi: 'අපව බලන්න',
    lines: ['No.218 Kurunegala Road', 'Dambulla, Sri Lanka'],
    href: CONTACT.mapsUrl,
    gradient: 'from-purple-500/30 to-violet-700/20', accent: 'text-purple-100',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6C16.27 6 10 12.27 10 20c0 11 14 26 14 26s14-15 14-26C38 12.27 31.73 6 24 6z"/>
        <circle cx="24" cy="20" r="5" fill="currentColor" opacity=".3"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`*New Enquiry from Website*\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`)
    window.open(`${CONTACT.whatsappUrl}?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <div className="bg-navy">
      <section className="relative overflow-hidden pt-24 pb-4 sm:pt-32 sm:pb-52 px-4">
        {/* Background orbs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-royal/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-electric/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid mesh */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block bg-orange/15 text-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-orange/20">
              📬 Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Let&apos;s Talk <span className="text-orange">Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-blue-200/80 text-sm sm:text-lg mx-auto mb-6 sm:mb-10 font-sinhala-body leading-relaxed">
            ඔබේ ව්‍යාපාරය ඉදිරියට ගෙනයාමට HDB Engineering Lanka සූදානම්
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-row gap-2 sm:gap-3 justify-center">
            <motion.a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(37,211,102,0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-1.5 bg-whatsapp hover:bg-green-400 text-white font-bold px-3 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-base transition-colors shadow-lg">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              <span className="whitespace-nowrap">WhatsApp Us</span>
            </motion.a>
            <motion.a href={`tel:${CONTACT.phone1}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-3 py-2.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-base transition-colors border border-white/15">
              📞 {CONTACT.phone1Display}
            </motion.a>
          </motion.div>
        </div>

      </section>

      {/* ── CONTACT GLASS CARDS ────────────────────────────── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 pb-6 sm:-mt-36 sm:pb-4">
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {CONTACT_CARDS.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: .92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: .65, delay: .15 + i * .1, ease: [.22, 1, .36, 1] }}
              whileHover={{ y: -6, scale: 1.03, boxShadow: '0 24px 64px rgba(10,37,64,.35)' }}
              whileTap={{ scale: 0.97 }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-2 sm:p-6 text-center border border-white/30 bg-gradient-to-br ${c.gradient} backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.28)] cursor-pointer block`}
            >
              {/* glass shine top */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/25 pointer-events-none rounded-2xl sm:rounded-3xl"/>
              <div className={`relative inline-flex items-center justify-center w-8 h-8 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/20 border border-white/30 mb-1 sm:mb-4 ${c.accent}`}>
                {c.icon}
              </div>
              <p className="relative text-white font-extrabold text-[10px] sm:text-lg leading-snug mb-0.5 sm:mb-1"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55), 0 0 24px rgba(0,0,0,0.35)' }}>
                {c.title}
              </p>
              <p className={`relative text-[8px] sm:text-sm font-semibold font-sinhala-body mb-0.5 sm:mb-3 ${c.accent}`}
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                {c.titleSi}
              </p>
              {c.lines.map((line) => (
                <p key={line} className="relative text-white font-semibold text-[7px] sm:text-sm leading-snug text-center truncate"
                  style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.4)' }}>
                  {line}
                </p>
              ))}
            </motion.a>
          ))}
        </div>
      </section>
      </div>{/* end bg-navy wrapper */}

      {/* ══════════════════════════════════════════════════
          FORM + RIGHT COLUMN
      ══════════════════════════════════════════════════ */}
      <section className="bg-ice py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

          {/* ── FORM ── */}
          <AnimSection variants={fadeLeft}>
            <span className="inline-block bg-navy/8 text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-navy/10">
              📝 Send a Message
            </span>
            <h2 className="text-4xl font-extrabold text-navy mb-2">Write to Us</h2>
            <p className="text-gray-500 mb-8 font-sinhala-body">
              ඔබේ ප්‍රශ්නයට WhatsApp හරහා ඉක්මන් පිළිතුරක් ලැබේ
            </p>

            <div className="bg-white/40 backdrop-blur-2xl rounded-2xl p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FloatingInput label="Your Name / ඔබේ නම" value={name} onChange={setName} />
                  <FloatingInput label="Phone Number" type="tel" value={phone} onChange={setPhone} />
                </div>
                <FloatingInput label="Subject / විෂය" value={subject} onChange={setSubject} />
                <FloatingInput label="Your Message / ඔබේ ප්‍රශ්නය" value={message} onChange={setMessage} rows={5} />

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(37,211,102,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-500 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-md"
                >
                  {sent ? (
                    <><span>✅</span> Message Sent via WhatsApp!</>
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.875L0 24l6.335-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.012-1.379l-.361-.214-3.746.897.941-3.636-.235-.375A9.807 9.807 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* ── What Happens Next ── */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-navy text-lg mb-5">What Happens Next?</h3>
              <div className="flex flex-col gap-4">
                {[
                  { step: '01', title: 'We Receive Your Message', desc: 'Your enquiry lands directly with our sales team via WhatsApp.' },
                  { step: '02', title: 'Reply Within 30 Minutes', desc: 'A team member contacts you with pricing and availability.' },
                  { step: '03', title: 'Legal Agreement & Order', desc: 'We finalise your order with a signed agreement for your protection.' },
                  { step: '04', title: 'Delivered & Installed', desc: 'Machine delivered island-wide and installed at your location.' },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-orange font-extrabold text-xs">
                      {item.step}
                    </div>
                    <div className={i < 3 ? 'pb-4 border-b border-gray-100 flex-1' : 'flex-1'}>
                      <p className="text-navy font-bold text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </AnimSection>

          {/* ── RIGHT COLUMN ── */}
          <AnimSection variants={fadeRight} className="flex flex-col gap-5">

            {/* Showroom card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-extrabold text-navy text-xl mb-4 flex items-center gap-2">
                🏭 Our Showroom
              </h3>
              <div className="rounded-xl overflow-hidden mb-5 border border-navy/10 h-56">
                <iframe
                  src="https://maps.google.com/maps?q=No.218+Kurunegala+Road,+Dambulla,+Sri+Lanka&output=embed&hl=en&z=16"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HDB Engineering Lanka Location"
                />
              </div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-navy font-bold text-sm">{CONTACT.address}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Dambulla, Sri Lanka</p>
                </div>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-orange font-semibold hover:underline whitespace-nowrap ml-4">
                  Open in Google Maps →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['🕐', 'Mon – Sat', '8:00 AM – 6:00 PM'],
                  ['🕐', 'Sunday',   '10:00 AM – 4:00 PM'],
                ].map(([icon, day, time]) => (
                  <div key={day} className="bg-ice rounded-xl p-3.5 border border-gray-100">
                    <p className="text-gray-500 text-xs">{icon} {day}</p>
                    <p className="font-bold text-navy text-sm mt-0.5">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-extrabold text-navy text-xl mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${s.bg} text-white flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm shadow-sm`}
                  >
                    <span className="text-base w-5 text-center">{s.icon}</span>
                    {s.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick response */}
            <div className="bg-navy rounded-2xl p-7 text-white">
              <h3 className="font-extrabold text-xl mb-2">⚡ Quick Response</h3>
              <p className="text-blue-200/80 text-sm font-sinhala-body leading-relaxed mb-5">
                WhatsApp හෝ Call කළ පසු විනාඩි 30ක් ඇතුළත අපේ Team Member කෙනෙක් ඔබව Contact කරයි.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[['<30min','Reply Time'],['24/7','WhatsApp'],['Island','Coverage']].map(([num, label]) => (
                  <div key={label} className="bg-white/8 rounded-xl p-3.5 border border-white/10">
                    <p className="font-extrabold text-orange text-lg leading-none">{num}</p>
                    <p className="text-blue-300 text-xs mt-1.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </AnimSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════ */}
      <AnimSection variants={fadeUp}>
        <section className="bg-gradient-to-r from-navy via-blue-900 to-navy py-8 sm:py-16 px-4 text-center">
          <p className="text-blue-300 text-xs sm:text-sm uppercase tracking-widest font-bold mb-2 sm:mb-3">Ready to order?</p>
          <h2 className="text-xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-8">
            Start Your <span className="text-orange">Pre-Order</span> Today
          </h2>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center">
            <motion.a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: '0 14px 40px rgba(37,211,102,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-whatsapp text-white font-bold px-4 py-2.5 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg shadow-lg transition-colors hover:bg-green-400">
              💬 WhatsApp Pre-Order
            </motion.a>
            <motion.a href={`tel:${CONTACT.phone2}`}
              whileHover={{ y: -2, boxShadow: '0 14px 40px rgba(255,107,0,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-orange text-white font-bold px-4 py-2.5 sm:px-10 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-lg shadow-lg transition-colors hover:bg-orange/90">
              📞 {CONTACT.phone2Display}
            </motion.a>
          </div>
        </section>
      </AnimSection>

    </div>
  )
}