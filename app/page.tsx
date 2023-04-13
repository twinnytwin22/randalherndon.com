import Image from 'next/image'
import { Inter } from 'next/font/google'
import IntroHero from '@/ui/sections/IntroHero'
import DarkModeSwitch from '@/ui/buttons/DarkModeSwitch'
import AboutMe from '@/ui/sections/AboutMe'


export default function Home() {
  return (
    <>
    <div className='fixed ml-10 mt-10'><DarkModeSwitch/></div>
    <IntroHero/>
    <AboutMe/>
    </>
  )
}
