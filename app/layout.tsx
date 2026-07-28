import Providers from "@/lib/providers";
import "./globals.css";
import { metadata as meta } from "@/lib/metadata";
import { Metadata } from "next";
export const metadata: Metadata = meta

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
