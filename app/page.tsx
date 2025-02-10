import { getAboutMe, getPortfolio } from "@/lib/providers/sanity/sanity";
import IntroHero from "@/ui/sections/IntroHero";
import AboutMe from "@/ui/sections/about/AboutMe";

import Experience from "@/ui/sections/experience/Experience";
import PortfolioAlpha from "@/ui/sections/portfolio/PortfolioAlpha";
import WebDev from "@/ui/sections/portfolio/WebDev";
import { Suspense } from "react";

export default async function Home() {

  const [portfolio, aboutMe] = await Promise.all([getPortfolio(), getAboutMe()]);
  return (
    <div className="mx-auto z-0 w-full max-w-screen relative isolate">
      <main className="relative overflow-x-hidden">
      <Suspense>
        <section className="flex flex-col relative w-full mx-auto justify-center" id="intro">
            <h1 className="text-6xl text-[poppins] font-semibold mb-6 dark:text-white/90 ">
            Randal <span className="relative">
              Herndon
            </span>
            </h1>
          <IntroHero aboutMe={aboutMe} />
        </section>
  
        <section className="flex relative w-full mx-auto justify-center" id="portfolio">
          <PortfolioAlpha portfolio={portfolio}  />
        </section>
        {/* <section className="flex items-center justify-center h-screen w-full snap-center snap-always isolate text-white relative" id="portfolio"> 
          {JSON.stringify(portfolio)}
        </section>
        </Suspense>
        <div className="hidden">

        <section className="flex items-center justify-center h-screen w-full snap-center snap-always relative" id="about">
          <AboutMe />
        </section>
        <section className="flex items-center justify-center h-screen w-full snap-center snap-always" id="skills">
          <Experience />
        </section>
   
        <section className="flex items-center justify-center h-screen w-full snap-center snap-always isolate" id="web">
          <WebDev id="web" />
        </section>
        </div> */}
        </Suspense>
      </main>
    </div>
  );
}
