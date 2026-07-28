import Navbar from "@/ui/navigation/Navbar";
import DarkModeSwitch from "@/ui/buttons/DarkModeSwitch";
import { socials } from "@/lib/socials";
import Link from "next/link";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh min-w-0 relative">
      <div className="flex gap-2 sm:gap-4 isolate absolute top-0 right-2 sm:right-4 z-1100">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 sm:size-12 relative
       bg-black text-white p-2 sm:p-4 border border-slate-300 dark:border-gray-800 flex items-center justify-center text-base sm:text-lg font-bold font-mono"
          >
            {social.name}
          </Link>
        ))}
      </div>
      <div className="fixed top-3 left-20 sm:top-4 sm:left-24 md:top-10 md:left-6 z-1002">
        <DarkModeSwitch />
      </div>
      <Navbar />
      {/* Main Content */}
      <main className="w-full min-w-0 md:ml-64 px-4 sm:px-6 lg:px-8 top-16 md:top-0 relative z-1000 h-full">
        {children}
      </main>
    </div>
  );
}
