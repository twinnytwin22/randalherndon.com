import { getAboutMe, getPortfolio } from "@/lib/providers/sanity/sanity";
import IntroHero from "@/ui/sections/IntroHero";
import AboutMe from "@/ui/sections/about/AboutMe";
import SkillsList, { WorkExperience } from "@/ui/sections/experience/Experience";

import Experience from "@/ui/sections/experience/Experience";
import PortfolioAlpha from "@/ui/sections/portfolio/PortfolioAlpha";
import WebDev from "@/ui/sections/portfolio/WebDev";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const [portfolio, aboutMe] = await Promise.all([
    getPortfolio({projectId: null}),
    getAboutMe(),
  ]);
  return (
    <div className="mx-auto z-0 w-full max-w-screen relative isolate top-0">
        <NameAndNav/>
      <main className="relative overflow-x-hidden">
   
        <Suspense>
          <section
            className="flex flex-col relative w-full mx-auto justify-center"
            id="intro"
          >
            <IntroHero aboutMe={aboutMe} />
          </section>

        

          <section
            className="flex relative w-full mx-auto justify-center"
            id="skills"
          >
            <SkillsList />
          </section>

          <section
            className="flex relative w-full mx-auto justify-center"
            id="experience"
          >
            <WorkExperience />
          </section>
          <section
            className="flex relative w-full mx-auto justify-center"
            id="portfolio"
          >
            <PortfolioAlpha portfolio={portfolio} />
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
        <div className="mb-16"></div>
      </main>
    </div>
  );
}

const NameAndNav = () => {
  return (
    <div className="w-full relative top-0 flex justify-between">
      <h1 className="text-6xl text-[poppins] font-extrabold my-8 dark:text-white/90 ">
        Randal <span className="relative">Herndon</span>
      </h1>
      <div className="flex space-x-4 isolate">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hidden w-8 h-8 bg-black text-white p-4 border border-slate-300 dark:border-gray-800 items-center justify-center">
          FB
        </Link>
        <Link href="https://www.linkedin.com/in/randalherndon/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white p-4 border border-slate-300 dark:border-gray-800 flex items-center justify-center text-lg font-bold font-mono">
          LN
        </Link>
        <Link href="https://github.com/twinnytwin22" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white p-4 border border-slate-300 dark:border-gray-800  flex items-center justify-center  text-lg font-bold font-mono">
          GH
        </Link>
      </div>
    </div>
  );
}