"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { RHLogo } from "../misc/RHLogo";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string) => {
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
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Portfolio", link: "#portfolio" },
    {name: "Resume", link: "Randal Herndon 2025 - DMM.pdf"}
  ];

  return (
    <AnimatePresence>
      <aside className="mt-24 bg-white dark:bg-black">
      <RHLogo />

        <m.nav
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <nav className="mt-12 space-y-8">
            <div className="flex flex-col space-y-6 text-lg font-medium font-mono">
              {ROUTES.map((route, index) => (
                <a
                  key={index}
                  onClick={() => handleNavigation(route.link)}
                  className="hover:scale-105 transition-transform cursor-pointer"
                >
                  {route.name}
                </a>
              ))}
            </div>
          </nav>
        </m.nav>
      </aside>
    </AnimatePresence>
  );
};

export default Navbar;