import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection'
import ImageGallery from '@/components/home/ImageGallery'
import YoutubeInterviews from '@/components/home/YoutubeInterviews'
import PreOrderCTA from '@/components/home/PreOrderCTA'

export const metadata: Metadata = {
  title: "HDB Engineering Lanka — Sri Lanka's Industrial Machinery Supplier",
  description: 'Liquid filling machines, dehydrators, grinding mills and more. Island-wide delivery. Visit our Dambulla showroom.',
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <>
      <HeroSection locale={locale} />
      <FeaturedProductsSection locale={locale} />
      <YoutubeInterviews locale={locale} />
      <ImageGallery />
      <PreOrderCTA />
    </>
  )
}
