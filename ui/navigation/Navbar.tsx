"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import DarkModeSwitch from "../buttons/DarkModeSwitch";
import { RHLogo } from "../misc/RHLogo";
import { NavContent } from "./NavContent";
// ... existing imports ...

const Navbar = () => {
  const [showNavContent, setShowNavContent] = useState(false);

  const handleShowContent = () => {
    setShowNavContent(!showNavContent);
  };

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
              <a href="#about" className="hover:scale-105 transition-transform">
                About
              </a>
              <a href="#skills" className="hover:scale-105 transition-transform">
                Experience
              </a>
              <a href="#portfolio" className="hover:scale-105 transition-transform">
                Portfolio
              </a>
            </div>
          </nav>
          
          {/* Mobile menu button - only show on small screens */}
          <div className="lg:hidden mt-8 bg-white dark:bg-black">
            <button
              onClick={handleShowContent}
              className={`border-2 dark:border-slate-200 border-gray-900 rounded-full p-2 ${
                showNavContent ? "rotate-90" : ""
              } transition-transform duration-300`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </m.nav>

        {showNavContent && (
          <NavContent showNavbar={true} setShowNavbar={() => {}} />
        )}
      </aside>
    </AnimatePresence>
  );
};

export default Navbar;
