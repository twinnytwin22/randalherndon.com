import { getAboutMe } from "@/lib/providers/sanity/about-me";
import { imageBuilder } from "@/lib/providers/sanity/sanity";
import { getSiteProfile } from "@/lib/providers/sanity/site-settings";
import { getProjects } from "@/lib/portfolio";
import RHOSClient from "@/ui/os/RHOSClient";

export const revalidate = 60;

export default async function Home() {
  const [projects, about, profile] = await Promise.all([
    getProjects().catch(() => []),
    getAboutMe().catch(() => null),
    getSiteProfile(), // never rejects; falls back to lib/site.ts
  ]);

  const aboutContent = about
    ? {
        introText: about.introText || "",
        biography: about.aboutMe || "",
        headlines: Array.isArray(about.headlines) ? about.headlines : [],
        profileImageUrl: imageBuilder(about.profileImage),
      }
    : null;

  return <RHOSClient projects={projects} about={aboutContent} profile={profile} />;
}
