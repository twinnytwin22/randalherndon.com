'use client'
import { motion, AnimatePresence } from "framer-motion";
import Download from "@/public/download.png";
import Logo2 from "@/public/images/logo2.png";
import Image from "next/image";
// import other logos here

const logos = [...Array(10)].map((_, i) => (
    <div key={i} className="w-32 h-32 bg-gray-300 m-4" />
  ));
  
  const Marquee = () => {
    return (
      <div className="overflow-hidden bg-slate-200 dark:bg-black">
        <AnimatePresence>
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              exit={{ x: "-100%" }}
              className="inline-block"
            >
              {logo}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  };
  
  export default Marquee;