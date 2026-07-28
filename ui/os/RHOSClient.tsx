"use client";

import dynamic from "next/dynamic";
import type { PortfolioProject } from "./RHOS";

const RHOS = dynamic(() => import("./RHOS"), {
  ssr: false,
  loading: () => <div style={{ width: "100vw", height: "100vh", background: "#0a0a0c" }} />,
});

export default function RHOSClient({ projects }: { projects: PortfolioProject[] }) {
  return <RHOS projects={projects} />;
}
