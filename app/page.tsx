import IntroHero from '@/ui/sections/IntroHero'
import DarkModeSwitch from '@/ui/buttons/DarkModeSwitch'
import AboutMe from '@/ui/sections/about/AboutMe'
import Portfolio from '@/ui/sections/portfolio/Portfolio'
import Services from '@/ui/sections/services/Services'
import Navbar from '@/ui/navigation/Navbar'
import Skills from '@/ui/sections/skills/Skills'
export default function Home() {
  return (
  <div className='mx-auto w-full max-w-screen content-center'>
    <div className='fixed ml-10 mt-10 z-[1] hidden lg:block'>
      <DarkModeSwitch/>
    </div>
    <IntroHero/>
    <Navbar/>
    <AboutMe/>
    <Skills/>
    <Services/>
    <Portfolio/>
  </div>
  )
}
