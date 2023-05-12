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

function ServiceBlock({ skill, delay }: any, i: any) {
  return (
    <div className="" key={skill}>
      <m.div
        variants={skillBlockVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay }}
        className=""
      >
        <div className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap ">{skill}</div>

      </m.div></div>
  );
}

export default ServiceBlock;
