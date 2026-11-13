import type { Metadata } from "next";
import { metaDataKeywords } from "./keywords";
import { SITE_URL, type SiteProfile } from "./site";

<<<<<<< Updated upstream
export const metadata: Metadata = {
    title: "RandalHerndon.com",
    description:
      "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.",
    keywords: metaDataKeywords,
    openGraph: {
      title: "RandalHerndon.com",
      description:
        "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.",
      url: "https:/randalherndon.com",
      siteName: "Hi. I'm Randal",
      images: [
        {
          url: "https://i.imgur.com/0rfoa02.jpeg",
          width: 800,
          height: 800,
        },
        {
          url: "https://i.imgur.com/0rfoa02.jpeg",
          width: 1800,
          height: 1800,
          alt: "My custom alt",
        },
      ],
      locale: "en-US",
      type: "website",
    },
  };
=======
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
>>>>>>> Stashed changes
