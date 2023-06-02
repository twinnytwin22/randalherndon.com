"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import DarkModeSwitch from "../buttons/DarkModeSwitch";
import { RHLogo } from "../misc/RHLogo";
import { NavContent } from "./NavContent";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showNavContent, setShowNavContent] = useState(false);

  const handleShowContent = () => {
    setShowNavContent(!showNavContent);
  };

  return (
    <AnimatePresence>
      <div className="content-center mx-auto justify-center opacity-90 absolute items-center">
        <m.nav
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="fixed flex items-center justify-between top-3 right-0 left-0 w-[90vw] max-w-lg md:max-w-5xl mx-auto py-2.5 px-8 rounded-xl transition-all duration-300 dark:bg-black bg-slate-200 border-slate-300 dark:border-gray-900 shadow-slate-300 dark:shadow-gray-700 shadow-sm border opacity-80"
        >
          <RHLogo />
          <nav className="hidden md:flex md:-ml-12 lg:-ml-24 w-full mx-auto px-4 items-center h-fit text-center justify-center font-[owners]">
            <div className="flex content-between mx-auto items-center h-fit w-full justify-center font-bold">
              <div className="mx-4  hover:scale-105">
                <a href="#about">About</a>
              </div>
              <div className="mx-4  hover:scale-105">
                <a href="#skills">Experience</a>
              </div>
              <div className="mx-4 hover:scale-105">
                <a href="#portfolio">Portfolio</a>
              </div>

            </div>
            <div className="flex justify-center mt-8">

            </div>
          </nav>
          <div className="flex items-center">
            <div className="block lg:hidden mr-3">
              <DarkModeSwitch />
            </div>
            <div
              onClick={handleShowContent}
              className={`border-2  dark:border-slate-200 border-gray-900 rounded-full block md:hidden ${showNavContent && "rotate-90 ease-in-out duration-300"
                } `}
            >
              <svg
                className="w-8 p-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </m.nav>

        {showNavContent && showNavbar && (

          <NavContent showNavbar={showNavbar} setShowNavbar={setShowNavbar} />)}
      </div></AnimatePresence>
  );
};

export default Navbar;
