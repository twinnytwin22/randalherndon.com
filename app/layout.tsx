import Providers from "@/lib/providers";
import "./globals.css";
import Navbar from "@/ui/navigation/Navbar";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
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
      <body className="bg-slate-100 dark:bg-slate-950 min-h-screen">
        <Providers>
          <div className="flex">
            {/* Sticky Sidebar */}
            <div className="fixed w-64 h-screen md:border-r border-slate-300 dark:border-gray-800">
              <div className="p-8 h-full bg-white dark:bg-black hidden md:block">
                <div className="fixed top-10 left-6">
                  <DarkModeSwitch />
                </div>
                <Navbar />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:ml-64 min-h-screen px-8 top-0">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}