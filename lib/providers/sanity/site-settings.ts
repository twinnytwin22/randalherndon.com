import { defineQuery } from "groq";
import { cache } from "react";
import { PROFILE, type SiteProfile } from "@/lib/site";
import { client } from "./sanity";

type SiteSettingsDoc = Partial<{
  title: string;
  headline: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
}>;

const SITE_SETTINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "siteSettings"] | order(_updatedAt desc)[0]{
    title,
    headline,
    tagline,
    description,
    location,
    email
  }
`);

/** Site identity from Sanity, falling back to lib/site.ts for any empty field. */
export const getSiteProfile = cache(async (): Promise<SiteProfile> => {
  let doc: SiteSettingsDoc | null = null;
  try {
    doc = await client.fetch<SiteSettingsDoc | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 60 } });
  } catch {
    doc = null;
  }
  return {
    name: PROFILE.name,
    headline: doc?.headline || PROFILE.headline,
    tagline: doc?.tagline || PROFILE.tagline,
    description: doc?.description || PROFILE.description,
    location: doc?.location || PROFILE.location,
    email: doc?.email || PROFILE.email,
  };
});
