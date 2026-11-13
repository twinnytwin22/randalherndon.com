// Client-safe portfolio types and helpers (no Sanity client import).

export type PortfolioProject = {
  id: string;
  /** URL segment: the Sanity slug when set, else the document _id. */
  slug: string;
  title: string;
  role: string;
  year?: number;
  description: string;
  url: string;
  tags: string[];
  tileColor?: string;
  logoUrl: string;
  imageUrls: string[];
};

export function monogram(title: string) {
  return (
    title
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "•"
  );
}
