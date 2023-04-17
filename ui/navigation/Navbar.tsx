"use client";
import React, { useState, useEffect } from "react";
import { m, AnimatePresence, stagger, animate } from "framer-motion";
import DarkModeSwitch from "../buttons/DarkModeSwitch";
import { RHLogo } from "../misc/RHLogo";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showNavContent, setShowNavContent] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false)


  useEffect(() => {
    

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setShowNavContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setShowNavContent(false);
    };
  }, []);

  const handleShowContent = () => {
    setShowNavContent(!showNavContent);
  };

  return (
    <AnimatePresence>
      <div className="content-center mx-auto justify-center opacity-90 absolute">
        {showNavbar && (
          <m.nav
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="fixed flex items-center justify-between top-3 right-0 left-0 w-[90vw] max-w-lg md:max-w-5xl mx-auto py-4 px-8 rounded-xl transition-all duration-300 dark:bg-black bg-slate-200 border-slate-300 dark:border-gray-900 shadow-slate-300 dark:shadow-gray-700 shadow-sm border opacity-80"
          >
            <RHLogo/>
            <h1 className="font-professor text-xl">Randal Herndon</h1>
            <div className="flex items-center">
              <div className="block lg:hidden mr-3">
                <DarkModeSwitch />
              </div>
              <div
                onClick={handleShowContent}
                className={`border-2 dark:border-slate-200 border-gray-900 rounded-full ${
                  showNavContent && "rotate-90 ease-in-out duration-300"
                } `}
              >
                <svg
                  className="w-10 p-3"
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
        )}
        {showNavContent && showNavbar && (

      <NavContent showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>)}
    </div></AnimatePresence>
  );
};

export default Navbar;

const NavContent = ({setShowNavContent}:any) => {
  return (
    <AnimatePresence>
      <m.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 0.05,
          ease: [0.6, -0.05, 0.01, 0.99],
          scale: { type: "spring", stiffness: 300, damping: 30 }
        }}
        className="fixed mx-auto top-32 right-0 left-0 bg-slate-200 dark:bg-black h-4/5  w-[90vw] max-w-lg md:max-w-5xl justify-center items-center content-center flex rounded-lg border border-slate-300 dark:border-gray-900 shadow-slate-300 dark:shadow-gray-900 shadow-lg opacity-90 ease-in-out duration-500 transition"
      >
        <nav className="max-w-7xl w-full mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-center gap-y-20 font-owners-wide">
            <div className="mx-4  hover:scale-105">
              <a href="#about">About</a>
            </div>
            <div className="mx-4  hover:scale-105">
              <a href="#skills">Experience</a>
            </div>
            <div className="mx-4  hover:scale-105">
              <a href="#services">Services</a>
            </div>
            <div className="mx-4 hover:scale-105">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            
          </div>
        </nav>
      </m.div>
    </AnimatePresence>
  );
};

  

