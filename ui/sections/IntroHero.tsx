"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroHero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = [
    "Interdisciplinary.",
    "Creative.",
    "Developer.",
    "Musician.",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeadlineIndex((prevIndex) =>
        prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const colors = [ 
    "text-black dark:text-white",
    "text-yellow-500",
    "text-blue-600",
    "text-red-500",
  ];
  const bColors = [ 
    "border-black dark:border-white",
    "border-yellow-500",
    "border-blue-600",
    "border-red-500",
  ];
  const bgColors = [ 
    "bg-black dark:bg-white",
    "bg-yellow-500",
    "bg-blue-600",
    "bg-red-500",
  ];

  const buttonTextColors = [ 
    "text-white dark:text-black",
    "text-white",
    "text-white",
    "text-white",
  ];

  const headlineVariants = {
    animate: { color: colors[headlineIndex], transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-auto bg-slate-100 dark:bg-black min-h-screen mb-16">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 max-w-screen-5xl min-h-screen place-items-center px-8">
        <div className="content-center justify-center min-w-full flex-2 lg:col-span-7 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl">
          <h1 className=" text-left text-black dark:text-white">Hello,</h1>
          <h1 className="text-left text-black dark:text-white">I'm Randal,</h1>
          <motion.h1 
          animate={{  }}
          className={`text-left ${colors[headlineIndex]}`}>

            {headlines[headlineIndex]}
          </motion.h1>
          <button className={`rounded-lg p-4 h-fit text-sm ${bgColors[headlineIndex]} ${buttonTextColors[headlineIndex]}`}>Let's Chat!</button>
        </div>
        <div className="flex-1 flex p-12 lg:col-span-5 items-center">
          <div className={`border-8 rounded-full h-fit text-left ${bColors[headlineIndex]}`}>
            <motion.img
              animate={{}}
              transition={{ ease: "easeOut", duration: 2 }}
              className="rounded-full p-6 md:p-12 min-w-full"
              src="/twinny.jpeg"
              alt="Twinny"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
}
