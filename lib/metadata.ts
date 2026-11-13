import type { Metadata } from "next";
import { metaDataKeywords } from "./keywords";
import { SITE_URL, type SiteProfile } from "./site";

export { SITE_URL };

export function buildMetadata(profile: SiteProfile): Metadata {
  const title = `${profile.name} — Digital Product Manager`;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s — ${profile.name}`,
    },
    description: profile.description,
    keywords: metaDataKeywords,
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description: profile.description,
      url: SITE_URL,
      siteName: profile.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: profile.description,
    },
  };
}
