import IntroHero from "@/ui/sections/IntroHero";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import AboutMe from "@/ui/sections/about/AboutMe";
import Portfolio from "@/ui/sections/portfolio/Portfolio";
import Services from "@/ui/sections/services/Services";
import Navbar from "@/ui/navigation/Navbar";
import Skills from "@/ui/sections/skills/Skills";

export default function Home() {
  return (

    
    <div className="mx-auto z-0">
          <div className="snap-start h-screen w-full">
            <IntroHero />
          </div>
          <div className="snap-start h-screen w-full">
            <AboutMe />
          </div>
          <div className="snap-start h-screen w-full">
            <Skills />
          </div>
          <div className="snap-start h-screen w-full">
            <Services />
          </div>
          <div className="snap-start h-screen w-full">
            <Portfolio/>
          </div>
  </div>
  );
}
