"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { RHLogo } from "../misc/RHLogo";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string) => {
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
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Resume", link: "Randal Herndon 2025 - DMM.pdf" },
  ];

  return (
    <div
     className={`fixed w-64 h-screen md:border-r ${isOpen && 'bg-white'} ${isOpen && 'dark:bg-black'} border-slate-300 dark:border-gray-800 z-50`}>
      <div className="p-8 h-full ">
    <AnimatePresence>
      <div className="z-50">
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
