import Providers from "@/lib/providers";
import "./globals.css";
import Navbar from "@/ui/navigation/Navbar";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import { socials } from "@/lib/socials";
import Link from "next/link";
import { metadata as meta } from "@/lib/metadata";
export const metadataa = meta

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
            <div className="flex space-x-4 isolate absolute top-0 right-4">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12
             bg-black text-white p-4 border border-slate-300 dark:border-gray-800 flex items-center justify-center text-lg font-bold font-mono"
                >
                  {social.name}
                </Link>
              ))}
            </div>
            <div className="fixed top-4 left-24 md:top-10 md:left-6 z-[9000]">
                  <DarkModeSwitch />
                </div>

            {/* Sticky Sidebar */}
      
            
                <Navbar />
            

            {/* Main Content */}
            <div className="w-full md:ml-64 min-h-screen px-8 top-16 md:top-0 relative">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
