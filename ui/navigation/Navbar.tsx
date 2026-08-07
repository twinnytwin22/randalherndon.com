"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { RHLogo } from "../misc/RHLogo";
import { IoMenu, IoClose } from "react-icons/io5";
import SupportLink from "../buttons/SupportLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string) => {
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }
    setIsOpen(false);
    router.push(`/${link}`);
  };

  useEffect(() => {
    const hash = typeof window && window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, router]);

  const ROUTES = [
    { name: "Home", link: "" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Github", link: "https://github.com/twinnytwin22" },
    { name: "Resume", link: "cv" },
  ];

  return (
    <div
      className={`fixed isolate w-64 z md:border-r ${isOpen && "bg-white"} ${isOpen && "dark:bg-black"} border-slate-300 dark:border-gray-800 z-1001 `}
    >
      <div className={`p-8 ${isOpen && 'h-screen'} `}>
        <AnimatePresence>
          <div className="z-1000">
            <button
              className="text-2xl border rounded-xl p-2 md:hidden z-20 absolute top-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
            <aside className="mt-24  relative">
              <div className="md:flex justify-between items-center px-6 py-4 hidden">
                <RHLogo />
              </div>

              <m.nav
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className={`${
                  isOpen ? "block" : "hidden"
                } md:block mt-12 space-y-8`}
              >
                <nav className="flex flex-col space-y-6 text-lg font-medium font-mono">
                  {ROUTES.map((route, index) => (
                    <a
                      key={index}
                      onClick={() => handleNavigation(route.link)}
                      className="hover:scale-105 transition-transform cursor-pointer"
                    >
                      {route.name}
                    </a>
                  ))}
                  <SupportLink className="hover:scale-105 transition-transform">
                    Buy me a coffee
                  </SupportLink>
                </nav>
              </m.nav>
            </aside>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
