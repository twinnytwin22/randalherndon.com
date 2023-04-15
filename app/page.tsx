import IntroHero from "@/ui/sections/IntroHero";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import AboutMe from "@/ui/sections/about/AboutMe";
import Portfolio from "@/ui/sections/portfolio/Portfolio";
import Services from "@/ui/sections/services/Services";
import Navbar from "@/ui/navigation/Navbar";
import Skills from "@/ui/sections/skills/Skills";

export default function Home() {
  return (

    
    <div className="mx-auto z-0 w-full max-w-screen relative">
      <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory relative">
          <section className="flex h-screen w-full snap-start">
            <IntroHero />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-start relative" id="about">
            <AboutMe />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-start" id="skills">
            <Skills />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-start" id="services">
            <Services />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-start" id="portfolio">
            <Portfolio/>
          </section></main>
  </div>
  );
}
