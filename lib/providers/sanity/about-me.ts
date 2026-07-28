import {defineQuery} from "groq";
import {client} from "./sanity";

export type AboutMe = {
  introText?: string;
  aboutMe: string;
  headlines?: string[];
  profileImage?: {
    asset?: {_ref?: string};
    crop?: {top: number; right: number; bottom: number; left: number};
    hotspot?: {x: number; y: number; height: number; width: number};
  };
};

const ABOUT_ME_QUERY = defineQuery(/* groq */ `
  *[_type == "aboutMe"] | order(_updatedAt desc)[0]{
    introText,
    aboutMe,
    headlines,
    profileImage
  }
`);

export async function getAboutMe(): Promise<AboutMe | null> {
  return client.fetch<AboutMe | null>(ABOUT_ME_QUERY);
}
