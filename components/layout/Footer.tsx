import Link from 'next/link'
import Image from 'next/image'
import { COMPANY, CONTACT } from '@/lib/constants'

const TRUST_ITEMS = [
  '✅ 500+ Machines Installed',
  '🚚 Island-wide Delivery',
  '🛡 1 Year Warranty',
  '🔧 After-Sales Support',
  '🏭 Physical Showroom — Dambulla',
  '📋 Legal Agreement Issued',
  '🏦 Secure Bank Payments',
  '⭐ Rated #1 in Sri Lanka',
]

export default function Footer({ locale = 'si' }: { locale?: string }) {
  return (
    <footer className="bg-navy text-blue-200 mt-6 sm:mt-12 relative overflow-hidden">
      {/* Blue design */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-royal/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-electric/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* ── Marquee trust strip ── */}
      <div className="relative bg-blue-950/80 py-2 overflow-hidden">
        <div className="marquee-track">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span key={i} className="text-blue-200 text-xs font-medium px-6 whitespace-nowrap flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

        {/* Brand */}
        <div className="sm:col-span-1">
          <Image
            src="/logo.png"
            alt="HDB Engineering Lanka"
            width={260}
            height={82}
            className="h-10 sm:h-14 w-auto object-contain mb-1.5 sm:mb-2"
          />
          <p className="text-xs leading-relaxed mb-0.5">{COMPANY.tagline}</p>
          <p className="text-xs font-sinhala-body text-blue-300 hidden sm:block">{COMPANY.taglineSi}</p>
          <div className="flex gap-2 mt-2">
            {[
              { href: CONTACT.facebook,  src: '/fb.png',    label: 'Facebook' },
              { href: CONTACT.youtube,   src: '/yt.png',    label: 'YouTube' },
              { href: CONTACT.tiktok,    src: '/tk.png',    label: 'TikTok' },
              { href: CONTACT.instagram, src: '/insta.png', label: 'Instagram' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-full overflow-hidden hover:scale-110 hover:opacity-90 transition-all flex-shrink-0">
                <Image src={s.src} alt={s.label} width={28} height={28} className="w-full h-full object-cover" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-bold text-xs mb-2">Quick Links</h4>
          <ul className="space-y-1.5 text-xs">
            {[['Home',`/${locale}`],['Machines',`/${locale}/machines`],['About Us',`/${locale}/about`],['Contact',`/${locale}/contact`]].map(([label,href])=>(
              <li key={label}><Link href={href} className="hover:text-white hover:translate-x-1 inline-block transition-all">{label}</Link></li>
            ))}
            <li className="hidden sm:block"><Link href={`/${locale}/contact`} className="hover:text-white hover:translate-x-1 inline-block transition-all">FAQ</Link></li>
          </ul>
        </div>

        {/* Categories — hidden on mobile */}
        <div className="hidden sm:block">
          <h4 className="text-white font-bold text-xs mb-2">Machines</h4>
          <ul className="space-y-1 text-xs">
            {[
              ['💧 Liquid Machine',`/${locale}/liquid-machine`],
              ['🌡️ Dehydrate Machines',`/${locale}/machines/dehydrators`],
              ['⚙️ Grinding Mills',`/${locale}/machines/grinding-mills`],
              ['🔒 Band Sealers',`/${locale}/machines/band-sealers`],
              ['🌀 Vacuum Sealers',`/${locale}/machines/vacuum-sealers`],
              ['🌾 Rice Mills',`/${locale}/machines/rice-mills`],
              ['🔪 Slicer Machines',`/${locale}/machines/slicers`],
              ['🌿 Chuff Cutters',`/${locale}/machines/chuff-cutters`],
              ['🌲 Wood Chippers',`/${locale}/machines/wood-chippers`],
              ['🐄 Feed Pellet Machines',`/${locale}/machines/feed-pellet`],
            ].map(([label,href])=>(
              <li key={label}><Link href={href} className="hover:text-white hover:translate-x-1 inline-block transition-all">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-xs mb-2">Contact Us</h4>
          <address className="not-italic space-y-1.5 sm:space-y-2 text-xs">
            <p className="leading-snug">📍 {CONTACT.address}, Sri Lanka</p>
            <p>📞 <a href={`tel:${CONTACT.phone1}`} className="hover:text-white transition-colors font-medium">{CONTACT.phone1Display}</a></p>
            <p>📞 <a href={`tel:${CONTACT.phone2}`} className="hover:text-white transition-colors font-medium">{CONTACT.phone2Display}</a></p>
            <p className="hidden sm:block">✉️ <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors break-all">{CONTACT.email}</a></p>
          </address>
          <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 bg-whatsapp text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-green-500 transition-colors btn-press">
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <div className="relative border-t border-blue-900/60 py-2 text-center text-xs text-blue-400">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  )
}
