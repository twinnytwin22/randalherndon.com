"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { RHLogo } from "../misc/RHLogo";
import { NavContent } from "./NavContent";
import Link from "next/link";
// ... existing imports ...

const Navbar = () => {
  const [showNavContent, setShowNavContent] = useState(false);

  const handleShowContent = () => {
    setShowNavContent(!showNavContent);
  };

  const ROUTES = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#skills" },
    { name: "Portfolio", link: "#portfolio" },
  ];

  return (
    <AnimatePresence>
      <aside className="mt-24 bg-white dark:bg-black">
        <m.nav
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <RHLogo />
          <nav className="mt-12 space-y-8">
            <div className="flex flex-col space-y-6 text-lg font-medium font-mono">
              {ROUTES.map((route, index) => (
              <Link key={index} href={route.link} className="hover:scale-105 transition-transform">
                {route.name}
              </Link>))}
            </div>
          </nav>
        </m.nav>

        {showNavContent && (
          <NavContent showNavbar={true} setShowNavbar={() => {}} />
        )}
      </aside>
    </AnimatePresence>
  );
};

export default Navbar;
