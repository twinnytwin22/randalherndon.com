import IntroHero from "@/ui/sections/IntroHero";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import AboutMe from "@/ui/sections/about/AboutMe";
import Portfolio from "@/ui/sections/portfolio/WebDev";

import Experience from "@/ui/sections/experience/Experience";
import { getGithubData, getAllCommits } from "@/lib/fetchGithubData";
import PortfolioAlpha from "@/ui/sections/portfolio/PortfolioAlpha";
import WebDev from "@/ui/sections/portfolio/WebDev";

export default async function Home() {
  return (


    <div className="mx-auto z-0 w-full max-w-screen relative overflow-hidden isolate">
      <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory relative overflow-x-hidden">
        <section className="flex h-screen w-full snap-center snap-always" id="intro">
          <IntroHero />
        </section>
        <section className="flex items-center justify-center h-screen w-full snap-center snap-always relative" id="about">
          <AboutMe />
        </section>
        <section className="flex items-center justify-center h-screen w-full snap-center snap-always" id="skills">
          <Experience />
        </section>
        <section className="flex items-center justify-center h-screen w-full snap-center snap-always isolate" id="portfolio">
          <PortfolioAlpha />
        </section>
        <section className="flex items-center justify-center h-screen w-full snap-center snap-always isolate" id="web">
          <WebDev id="web" />
        </section>

      </main>
    </div>
  );
}
