import { client, imageBuilder } from "@/lib/providers/sanity/sanity";
import type { PortfolioProject } from "@/lib/portfolio-shared";

export { monogram, type PortfolioProject } from "@/lib/portfolio-shared";

type SanityImage = { asset?: { _ref?: string } };

type PortfolioRecord = {
  _id: string;
  slug?: { current?: string };
  role?: string;
  year?: number;
  title?: string;
  description?: string;
  link?: string;
  tags?: string[];
  previewBGColor?: { hex?: string };
  logoImage?: SanityImage;
  images?: SanityImage[];
};

const FIELDS = `_id, slug, role, year, title, description, link, tags, previewBGColor, logoImage, images`;

function normalize(project: PortfolioRecord): PortfolioProject {
  return {
    id: project._id,
    slug: project.slug?.current || project._id,
    title: (project.title || "Untitled project").trim(),
    role: project.role || "",
    year: typeof project.year === "number" ? project.year : undefined,
    description: project.description || "",
    url: project.link || "",
    tags: Array.isArray(project.tags) ? project.tags : [],
    tileColor: project.previewBGColor?.hex,
    logoUrl: imageBuilder(project.logoImage),
    imageUrls: (project.images || []).map(imageBuilder).filter(Boolean),
  };
}

export async function getProjects(): Promise<PortfolioProject[]> {
  const records = await client.fetch<PortfolioRecord[] | null>(
    `*[_type == "portfolio"] | order(coalesce(year, 0) desc, _createdAt asc){${FIELDS}}`
  );
  return (records || []).map(normalize);
}

/** Look a project up by slug, or by document _id for links created before slugs existed. */
export async function getProject(slugOrId: string): Promise<PortfolioProject | null> {
  const record = await client.fetch<PortfolioRecord | null>(
    `*[_type == "portfolio" && (slug.current == $key || _id == $key)][0]{${FIELDS}}`,
    { key: slugOrId }
  );
  return record ? normalize(record) : null;
}
