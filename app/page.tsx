import HeaderSticky from '@/components/header-sticky'
import HeroRedesign from '@/components/hero-redesign'
import EOIFormSection from '@/components/eoi-form-section'
import ProjectInfo from '@/components/project-info'
import ExperienceSection from '@/components/experience-section'
import DesignHeritage from '@/components/design-heritage'
import PriceUnlock from '@/components/price-unlock'
import FooterRedesign from '@/components/footer-redesign'

export default function Home() {
  return (
    <>
      <HeaderSticky />
      <main className="bg-white">
        <HeroRedesign />
        <EOIFormSection />
        <ProjectInfo />
        <ExperienceSection />
        <DesignHeritage />
        <PriceUnlock />
        <FooterRedesign />
      </main>
    </>
  )
}
