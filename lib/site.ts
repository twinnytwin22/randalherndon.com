// Single source of truth for identity + profile links.
// Sanity `siteSettings` can override the text fields at runtime (see
// lib/providers/sanity/site-settings.ts); these values are the fallback.

export const SITE_URL = "https://randalherndon.com";

export const PROFILE = {
  name: "Randal Herndon",
  headline: "Digital Product Manager · Web Platforms, MarTech & Growth Systems",
  tagline: "Built like a developer. Wired like a marketer.",
  description:
    "Randal Herndon — Digital Product Manager for web platforms, MarTech and growth systems. Phoenix, AZ.",
  location: "Phoenix, AZ",
  timeZone: "America/Phoenix",
  email: "randal.herndon@gmail.com",
} as const;

export const GITHUB_USERNAME = "twinnytwin22";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/randalherndon/",
  github: `https://github.com/${GITHUB_USERNAME}`,
  support: "https://buymeacoffee.com/randalhernp",
} as const;

export type SiteProfile = {
  name: string;
  headline: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
};
