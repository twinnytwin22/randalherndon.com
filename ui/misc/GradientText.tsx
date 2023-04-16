'use client'
import { m } from "framer-motion";

export const GradientText = ({text}:any) => {
  const gradient = "linear-gradient(to right, #666699, #3366cc, #6699ff)";
  return (
    <div className=" pl-6 text-left hidden md:block">
    <m.h1
      className=" bg-clip-text text-transparent text-4xl md:ext-6xl "
      style={{ backgroundImage: gradient, backgroundSize: "600% 100%" ,  animation: "slide 10s linear infinite",
    }}
      animate={{ backgroundPosition: "100% 0%" }}
      transition={{ duration: 5, ease: "easeInOut" }}
    >
    {text}
    </m.h1></div>
  );
};
