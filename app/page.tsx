import { getAboutMe, getPortfolio, getSkills, getWorkExperience } from "@/lib/providers/sanity/sanity";
import IntroHero from "@/ui/sections/IntroHero";
import SkillsList, { WorkExperience } from "@/ui/sections/experience/Experience";
import PortfolioAlpha from "@/ui/sections/portfolio/PortfolioAlpha";
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 60

export default async function Home() {
  const [portfolio, aboutMe, skills, workExperience] = await Promise.all([
    getPortfolio({projectId: null}),
    getAboutMe(),
    getSkills(),
    getWorkExperience(),
  ]);
  return (
    <div className="mx-auto z-0 w-full max-w-screen relative isolate top-0">
        <NameAndNav/>
      <main className="relative overflow-x-hidden">
   
        <Suspense fallback={<div className="w-full h-screen bg-white dark:bg-black"></div>}>
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
            <SkillsList skills={skills} />
          </section>
          <section
            className="flex relative w-full mx-auto justify-center"
            id="experience"
          >
            <WorkExperience workExperience={workExperience} />
          </section>
          <section
            className="flex relative w-full mx-auto justify-center"
            id="portfolio"
          >
            <PortfolioAlpha portfolio={portfolio} />
          </section>
        </Suspense>
        <div className="mb-16"></div>
      </main>
    </div>
  );
}


const NameAndNav = () => {
  return (
    <div className="w-full relative top-0 flex justify-between">
      <h1 className="text-6xl font-[owners] italic font-extrabold my-8 dark:text-white/90 uppercase pt-8">
        Randal <span className="relative">Herndon</span>
      </h1>
      
    </div>
  );
}