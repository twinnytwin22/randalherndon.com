"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { primarySkills } from "@/lib/skill";
import Marquee from "@/ui/misc/marquee";
import SkillBlock from "./skillBlock";

const AboutMe = () => {
  return (
    <div className="dark:bg-neutral-950 bg-slate-200 mx-auto h-full relative">
      <div className=" grid grid-cols-6 xl:grid-cols-12 max-w-screen min-h-screen place-items-center px-8  ">
      <div className="min-w-full h-full col-span-6 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl lg:border-l-2 md:border-neutral-800 items-center xl:order-2">
          <div className="md:flex text-center p-4 sm:p-16 items-center min-h-full">
            <h1 className=" text-black dark:text-white md:rotate-90 md:absolute md:right-0 md:-mr-24">About Me.</h1>
            <AnimatePresence>
            <p className="w-full text-2xl sm:p-8 md:pr-16 lg:pr-36 items-center min-h-full text-justify">
              My name is Randal Herndon. Many people call me 'Twinnny' Currently excelling in Web 3.0 and
              digital marketing services. As an artist, I am able to integrate
              my technical skills with my artistry and personal brand. I am
              known by my peers, personal clients, and supervisors for my
              leadership, positive & assertive attitude, work ethic and
              resourcefulness. I'm looking forward to applying my skills, wealth
              of knowledge, and community to brands and ideas that align with
              me. I am a creator of platforms, and advocate for education.
            </p></AnimatePresence>
          </div>
        </div>
        <div className="p-4 md:p-20 col-span-6 items-center w-full xl:order-1">
          <div className="flex flex-col w-full">
            {primarySkills.map((skill: any, index: number) => (
              <SkillBlock skill={skill} key={index} />
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutMe;
