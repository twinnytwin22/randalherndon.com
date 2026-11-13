"use client";

import dynamic from "next/dynamic";
import type { AboutContent, PortfolioProject } from "./RHOS";
import type { SiteProfile } from "@/lib/site";

const RHOS = dynamic(() => import("./RHOS"), {
  ssr: false,
  loading: () => <div style={{ width: "100vw", height: "100vh", background: "#0a0a0c" }} />,
});

export default function RHOSClient({
  projects,
  about,
  profile,
}: {
  projects: PortfolioProject[];
  about: AboutContent | null;
  profile: SiteProfile;
}) {
  return <RHOS projects={projects} about={about} profile={profile} />;
}
