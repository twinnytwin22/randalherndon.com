'use clint'
import React from "react";
import { m } from "framer-motion";

const MyNames = () => {
  return (
    <div className="text-5xl uppercase space-y-8 font-extrabold ">
      <m.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="text-slate-200 dark:text-neutral-950 inline-block align-middle ml-12"
        style={{ textShadow: "0 0 2px #2196f3" }}
      >
        Randal
      </m.h1>
      <m.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-200 dark:text-neutral-950  inline-block align-middle"
        style={{ textShadow: "0 0 2px #ffeb3b" }}
      >
        Mr. Herndon
      </m.h1>
      <m.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-slate-200 dark:text-neutral-950  inline-block align-middle ml-24"
        style={{ textShadow: "0 0 2px #f44336" }}
      >
        Twinny Twin
      </m.h1>
    </div>
  );
};

export default MyNames;
