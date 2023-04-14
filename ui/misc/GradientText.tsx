'use client'
import { m } from "framer-motion";

export const GradientText = ({text}:any) => {
  const gradient = "linear-gradient(to right, #ff0000, #ffff00, #0000ff)";
  return (
    <div className="">
    <m.h1
      className="md:rotate-90 md:absolute md:right-0 md:-mr-24 bg-clip-text text-transparent "
      style={{ backgroundImage: gradient, backgroundSize: "600% 100%" ,  animation: "slide 10s linear infinite",
    }}
      animate={{ backgroundPosition: "100% 0%" }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
    {text}
    </m.h1></div>
  );
};
