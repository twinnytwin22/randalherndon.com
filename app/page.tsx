import IntroHero from "@/ui/sections/IntroHero";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import AboutMe from "@/ui/sections/about/AboutMe";
import Portfolio from "@/ui/sections/portfolio/Portfolio";
import Services from "@/ui/sections/services/Services";
import Navbar from "@/ui/navigation/Navbar";
import Experience from "@/ui/sections/experience/Experience";
import { getGithubData, getAllCommits } from "@/lib/fetchGithubData";

export default async function Home() {
  const data = await getGithubData()
  const owner = 'getredash';
  const repo = 'redash';
  const sha = 'master';
  const commits = '1771'
  return (

    
    <div className="mx-auto z-0 w-full max-w-screen relative overflow-hidden isolate">
      <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory relative overflow-x-hidden">
          <section className="flex h-screen w-full snap-center snap-always" id="intro">
            <IntroHero />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-center snap-always relative" id="about">
            <AboutMe data={data} commits={commits}/>
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-center snap-always" id="skills">
            <Experience />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-center snap-always" id="services">
            <Services />
          </section>
          <section className="flex items-center justify-center h-screen w-full snap-center snap-always isolate" id="portfolio">
            <Portfolio/>
          </section></main>
  </div>
  );
}
