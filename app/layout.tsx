import Providers from "@/lib/providers";
import "@/styles/globals.css";
import Navbar from "@/ui/navigation/Navbar";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import Script from "next/script";
import { metaDataKeywords } from "@/lib/keywords";
export const metadata = {
  title: "RandalHerndon.com",
  description:
    "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.",
  keywords: metaDataKeywords,
  openGraph: {
    title: "RandalHerndon.com",
    description:
      "Randal Herndon | Interdisciplinary, Creative, Developer, Musician.",
    url: "https:/randalherndon.com",
    siteName: "Hi. I'm Randal",
    images: [
      {
        url: "https://i.imgur.com/0rfoa02.jpeg",
        width: 800,
        height: 800,
      },
      {
        url: "https://i.imgur.com/0rfoa02.jpeg",
        width: 1800,
        height: 1800,
        alt: "My custom alt",
      },
    ],
    locale: "en-US",
    type: "website",
    
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yka6cyh.css" />
      </head>

      <body className="bg-slate-100 dark:bg-black h-screen mx-auto w-full max-w-screen flex overflow-x-hidden relative">
        <Providers>
          <div className="fixed ml-10 mt-10 z-50 hidden lg:block">
            <DarkModeSwitch />
          </div>
          <div className="min-h-full relative max-w-screen w-full mx-auto flex overflow-x-hidden">
            <div className="relative  z-[999999]">
              <Navbar />
            </div>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
