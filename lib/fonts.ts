import { Inter, Noto_Sans_Sinhala } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Reliable Sinhala fallback — always available, no file required
export const notoSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sinhala',
  display: 'swap',
})
