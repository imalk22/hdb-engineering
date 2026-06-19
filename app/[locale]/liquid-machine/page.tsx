import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import IndustryAppsSection from '@/components/sections/IndustryAppsSection'
import ROISection from '@/components/sections/ROISection'
import TechSpecsSection from '@/components/sections/TechSpecsSection'
import FAQSection from '@/components/sections/FAQSection'
import WhyHDBSection from '@/components/sections/WhyHDBSection'
import FinalOfferSection from '@/components/sections/FinalOfferSection'

export const metadata: Metadata = {
  title: 'Automatic Liquid Filling & Packing Machine — HDB Engineering Lanka',
  description: 'LKR 460,000 pre-order price. Food-grade stainless steel, 10–25 packs/min, date coder included. Free delivery & installation island-wide.',
}

export default function LiquidMachinePage() {
  return (
    <>
      <HeroSection />
      <IndustryAppsSection />
      <ROISection />
      <TechSpecsSection />
      <FAQSection />
      <WhyHDBSection />
      <FinalOfferSection />
    </>
  )
}
