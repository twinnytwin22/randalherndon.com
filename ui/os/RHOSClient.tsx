"use client";

import dynamic from "next/dynamic";
import type { AboutContent, PortfolioProject } from "./RHOS";

const RHOS = dynamic(() => import("./RHOS"), {
  ssr: false,
  loading: () => <div style={{ width: "100vw", height: "100vh", background: "#0a0a0c" }} />,
});

export default function RHOSClient({
  projects,
  about,
}: {
  projects: PortfolioProject[];
  about: AboutContent | null;
}) {
  return <RHOS projects={projects} about={about} />;
}
