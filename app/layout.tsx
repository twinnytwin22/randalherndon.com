import "./globals.css";
import { buildMetadata } from "@/lib/metadata";
import { getSiteProfile } from "@/lib/providers/sanity/site-settings";
import type { Metadata, Viewport } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(await getSiteProfile());
}

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/yka6cyh.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
