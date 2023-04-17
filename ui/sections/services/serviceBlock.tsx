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
    <div className="hover:scale-105 dark:hover:bg-gray-950 hover:bg-slate-300 bg-slate-200 dark:bg-black  " key={skill}>
    <m.div
      variants={skillBlockVariants}
      initial="hidden"
      
      animate="visible"
      transition={{ delay }}
      className='my-2 p-3 rounded-md max-w-full  mx-auto md:px-16 border z-[999999]  border-slate-400 dark:border-gray-800'
    >
      <h1 className="text-sm lg:text-lg text-center font-owners-wide font-normal ">{skill}</h1>
    </m.div></div>
  );
}

export default ServiceBlock;
