import { Metadata } from "next";
import { metaDataKeywords } from "./keywords";

export const SITE_URL = "https://randalherndon.com";

// TODO(Phase 2): align this description with the chosen positioning.
const description = "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Randal Herndon",
    template: "%s — Randal Herndon",
  },
  description,
  keywords: metaDataKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Randal Herndon",
    description,
    url: SITE_URL,
    siteName: "Randal Herndon",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Randal Herndon",
    description,
  },
};
