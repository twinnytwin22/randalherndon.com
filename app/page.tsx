'use client'
import IntroHero from '@/ui/sections/IntroHero'
import DarkModeSwitch from '@/ui/buttons/DarkModeSwitch'
import AboutMe from '@/ui/sections/about/AboutMe'
import Portfolio from '@/ui/sections/portfolio/Portfolio'


export default function Home() {
  return (
  <>
    <div className='fixed ml-10 mt-10 z-[9]'>
      <DarkModeSwitch/>
    </div>
    <IntroHero/>
    <AboutMe/>
    <Portfolio/>
  </>
  )
}
