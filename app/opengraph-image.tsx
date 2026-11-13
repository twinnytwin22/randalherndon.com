import { ImageResponse } from "next/og";
import { getSiteProfile } from "@/lib/providers/sanity/site-settings";

export const alt = "Randal Herndon — Digital Product Manager";
export const revalidate = 3600;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const profile = await getSiteProfile();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, #1d1d22, #0a0a0c 70%)",
          color: "#ececee",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#94949b", letterSpacing: 2 }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, background: "#7ee29b" }} />
          RH·OS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 140,
            fontWeight: 800,
            fontStyle: "italic",
            lineHeight: 0.9,
            letterSpacing: -4,
            textTransform: "uppercase",
          }}
        >
          <span>Randal</span>
          <span>Herndon</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 30, color: "#ececee" }}>{profile.headline}</div>
          <div style={{ fontSize: 24, color: "#94949b" }}>{`${profile.tagline} · randalherndon.com`}</div>
        </div>
      </div>
    ),
    size
  );
}
