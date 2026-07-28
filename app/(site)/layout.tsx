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
    <div className="flex relative">
      <div className="flex space-x-4 isolate absolute top-0 right-4 z-[1100]">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 relative
       bg-black text-white p-4 border border-slate-300 dark:border-gray-800 flex items-center justify-center text-lg font-bold font-mono"
          >
            {social.name}
          </Link>
        ))}
      </div>
      <div className="fixed top-4 left-24 md:top-10 md:left-6 z-[1002]">
        <DarkModeSwitch />
      </div>
      <Navbar />
      {/* Main Content */}
      <div className="w-full md:ml-64 px-8 top-16 md:top-0 relative z-[1000] h-full">
        {children}
      </div>
    </div>
  );
}
