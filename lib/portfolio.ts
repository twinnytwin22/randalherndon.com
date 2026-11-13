import { getPortfolio, imageBuilder } from "@/lib/providers/sanity/sanity";

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

import type { PortfolioProject } from "@/lib/portfolio-shared";
export { monogram, type PortfolioProject } from "@/lib/portfolio-shared";

function normalize(project: PortfolioRecord): PortfolioProject {
  return {
    id: project._id,
    title: project.title || "Untitled project",
    description: project.description || "",
    url: project.link || "",
    tags: Array.isArray(project.tags) ? project.tags : [],
    tileColor: project.previewBGColor?.hex,
    logoUrl: imageBuilder(project.logoImage),
    imageUrls: (project.images || []).map(imageBuilder).filter(Boolean),
  };
}

export async function getProjects(): Promise<PortfolioProject[]> {
  const records = (await getPortfolio({ projectId: null })) as PortfolioRecord[] | null;
  return (records || []).map(normalize);
}

export async function getProject(id: string): Promise<PortfolioProject | null> {
  const record = (await getPortfolio({ projectId: id })) as PortfolioRecord | null;
  return record ? normalize(record) : null;
}
