import { getAboutMe, type AboutMe } from "@/lib/providers/sanity/about-me";
import { getPortfolio, imageBuilder } from "@/lib/providers/sanity/sanity";
import RHOSClient from "@/ui/os/RHOSClient";

export const revalidate = 60;

type SanityImage = { asset?: { _ref?: string } };
type PortfolioRecord = {
  _id: string;
  title?: string;
  description?: string;
  link?: string;
  tags?: string[];
  previewBGColor?: { hex?: string };
  logoImage?: SanityImage;
  images?: SanityImage[];
};

export default async function Home() {
  let records: PortfolioRecord[] = [];
  let about: AboutMe | null = null;

  const [portfolioResult, aboutResult] = await Promise.allSettled([
    getPortfolio({ projectId: null }) as Promise<PortfolioRecord[]>,
    getAboutMe(),
  ]);

  if (portfolioResult.status === "fulfilled") records = portfolioResult.value;
  if (aboutResult.status === "fulfilled") about = aboutResult.value;

  const projects = records.map((project) => ({
    id: project._id,
    title: project.title || "Untitled project",
    description: project.description || "",
    url: project.link || "",
    tags: Array.isArray(project.tags) ? project.tags : [],
    tileColor: project.previewBGColor?.hex,
    logoUrl: imageBuilder(project.logoImage),
    imageUrls: (project.images || []).map(imageBuilder).filter(Boolean),
  }));

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
