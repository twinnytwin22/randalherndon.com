import Providers from "@/lib/providers";
import "./globals.css";
<<<<<<< Updated upstream
import { metadata as meta } from "@/lib/metadata";
import { Metadata } from "next";
export const metadata: Metadata = meta
=======
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
>>>>>>> Stashed changes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yka6cyh.css" />
      </head>
      <body className="bg-slate-100 dark:bg-slate-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
