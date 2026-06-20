import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { inter, notoSinhala } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import StickyMobileBar from '@/components/layout/StickyMobileBar'
import IntroLoader from '@/components/layout/IntroLoader'
import LanguagePopup from '@/components/layout/LanguagePopup'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'HDB Engineering Lanka — Smart Industrial Machines',
  description: 'Sri Lanka\'s trusted supplier of liquid filling, dehydrators, grinding mills and more. Island-wide delivery.',
  openGraph: {
    title: 'HDB Engineering Lanka — Smart Machines for Sri Lankan Businesses',
    description: 'Automatic liquid filling machines, dehydrators, grinding mills and more. Island-wide delivery & free installation.',
    siteName: 'HDB Engineering Lanka',
    locale: 'si_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HDB Engineering Lanka',
    description: 'Smart Machines for Sri Lankan Businesses — Island-wide delivery & free installation.',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'si' | 'en')) notFound()

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${notoSinhala.variable}`}
    >
      <body className="min-h-screen bg-ice text-gray-900 pb-16 lg:pb-0 scroll-smooth">
        <NextIntlClientProvider messages={messages}>
          <IntroLoader />
          <LanguagePopup />
          <Navbar locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
          <StickyMobileBar />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
