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

  try {
    records = await getPortfolio({ projectId: null });
  } catch {
    // RHOS retains its built-in work list if Sanity is unavailable.
  }

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

  return <RHOSClient projects={projects} />;
}
