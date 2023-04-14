"use client";
import React from "react";
import { Variants, m } from "framer-motion";

const skillBlockVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      type: "spring",
      stiffness: 500,
    },
  },
};

function SkillBlock({ skill, index, delay }: any) {
  return (
    <m.div
      variants={skillBlockVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={`bg-slate-300 dark:bg-black my-2 p-3 rounded-md max-w-full mx-auto hover:scale-105 px-16 border border-slate-300 dark:border-gray-800`}
    >
      <h1 className="text-sm md:text-lg text-center">{skill}</h1>
    </m.div>
  );
}

export default SkillBlock;
