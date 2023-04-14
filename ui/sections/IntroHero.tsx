"use client";
import React from "react";
import { useEffect, useState } from "react";
import { ScrollDown } from "../misc/ScrollDown";
import { m } from "framer-motion";
import ContactButton from "../misc/modal";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

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
    <div className="mx-auto bg-slate-100 dark:bg-black min-h-screen lg:max-w-7xl xl:max-w-full mb-20 md:mb-0 ">
      <ScrollDown />

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:mx-8 2xl:mx-16 min-h-screen place-items-center px-8">
        <div className="content-center justify-center min-w-full h-fit flex-2 lg:col-span-7 mx-auto ml-2 space-y-6 xl:text-6xl 2xl:text-7xl  text-4xl sm:text-5xl">
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
          <m.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex space-x-10 items-end h-fit"
          >
            <ContactButton
              bgColors={bgColors}
              headlineIndex={headlineIndex}
              buttonTextColors={buttonTextColors}
            />

            <Link
              href="https://www.linkedin.com/in/randalherndon/"
              className="rounded-lg p-4 h-fit text-xl hover:scale-105 text-white bg-blue-700"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://github.com/twinnytwin22"
              className="rounded-lg p-4 h-fit text-xl hover:scale-105 text-white bg-gray-800"
            >
              <FaGithub />
            </Link>
          </m.div>
        </div>
        <div className="flex-1 flex lg:col-span-5 items-center">
          <m.div
            className={`border-8 rounded-full h-fit text-left ${bColors[headlineIndex]}`}
          >
            <m.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="rounded-full p-6 lg:p-12 min-w-full"
              src="/twinny.jpeg"
              alt="Twinny"
            ></m.img>
          </m.div>
        </div>
      </div>
    </div>
  );
}
