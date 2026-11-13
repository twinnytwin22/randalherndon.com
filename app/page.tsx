import { getAboutMe, type AboutMe } from "@/lib/providers/sanity/about-me";
import { imageBuilder } from "@/lib/providers/sanity/sanity";
import { getProjects, type PortfolioProject } from "@/lib/portfolio";
import RHOSClient from "@/ui/os/RHOSClient";

export const revalidate = 60;

export default async function Home() {
  let projects: PortfolioProject[] = [];
  let about: AboutMe | null = null;

  const [portfolioResult, aboutResult] = await Promise.allSettled([getProjects(), getAboutMe()]);

  if (portfolioResult.status === "fulfilled") projects = portfolioResult.value;
  if (aboutResult.status === "fulfilled") about = aboutResult.value;

  const aboutContent = about
    ? {
        introText: about.introText || "",
        biography: about.aboutMe || "",
        headlines: Array.isArray(about.headlines) ? about.headlines : [],
        profileImageUrl: imageBuilder(about.profileImage),
      }
    : null;

  return <RHOSClient projects={projects} about={aboutContent} />;
}
