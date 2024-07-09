import AboutCompanySection from '@/components/AboutCompanySection'
import CatalogSwiperSection from '@/components/CatalogSwiperSection'
import CatalogueSection from '@/components/CatalogueSection'
import CompanySection from '@/components/CompanySection'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutCompanySection />
      <CatalogueSection />
      <CatalogSwiperSection />
    </>
  )
}
