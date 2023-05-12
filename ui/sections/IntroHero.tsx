"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ScrollDown } from "../misc/ScrollDown";
import { m } from "framer-motion";
import ContactButton from "../buttons/modal";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";
import MyGitHubButton from "../buttons/CustomGitHubButton";
import LinkedInButton from "../buttons/LinkedIn";
import { DownloadButton } from "../buttons/DownloadButton";

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
    <div className="mx-auto bg-slate-100 dark:bg-black h-full lg:max-w-7xl xl:max-w-full w-full mb-20 md:mb-0 static isolate">
      <div className="">
      <ScrollDown color="black"/></div>

      <div className="grid lg:grid-cols-12 mx-auto min-h-screen items-center justify-center w-full lg:max-w-screen-xl place-items-center px-16 2xl:px-0 ">
        <div className="content-center justify-center min-w-full  h-fit lg:col-span-7 col-span-12 mx-auto ml-2 space-y-2 md:space-y-4 xl:text-6xl 2xl:text-7xl  text-4xl sm:text-5xl lg:order-1 order-2">
          <h1 className=" text-left text-black dark:text-white">Hello,</h1>
          <h1 className="text-left text-black dark:text-white">I'm Randal,</h1>
          <m.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`text-left ${colors[headlineIndex]}`}
          >
            {headlines[headlineIndex]}
          </m.h1>
          <div className="lg:hidden block lg:col-span-5 col-span-12 lg:items-center mx-6 py-10 sm:mx-auto xl:mx-12 content-center mt-20 lg:mt-0 max-w-md md:min-w-md justify-center lg:order-2 order-1"  >
      <p className="text-2xl"> I have a passion for learning, and creating new things. I love building beautiful web apps and products, while tinkering in between. 😃 </p>
        </div>
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex space-x-2 items-end h-fit"
          >
            <ContactButton
              bgColors={bgColors}
              headlineIndex={headlineIndex}
              buttonTextColors={buttonTextColors}
            />
    
           <LinkedInButton/>
            <MyGitHubButton/>
            <DownloadButton/>
          </m.div>
        </div>
        <div className="hidden lg:block lg:col-span-5 col-span-12 lg:items-center mx-6 sm:mx-auto xl:mx-12 content-center mt-20 lg:mt-0 max-w-md md:min-w-md justify-center lg:order-2 order-1"  >
      <p className="text-3xl"> I have a passion for learning, and creating new things. I love building beautiful web apps and products, while tinkering in between. 😃 </p>
        </div>
      </div>
    </div>
  );
}
