"use client";

import dynamic from "next/dynamic";

const RHOS = dynamic(() => import("@/ui/os/RHOS"), {
  ssr: false,
  loading: () => <div style={{ width: "100vw", height: "100vh", background: "#0a0a0c" }} />,
});

export default function Home() {
  return <RHOS />;
}
