"use client";
import React, {useEffect, useState, useRef} from "react";
import { delay, m, Variants } from "framer-motion";
import { GradientText } from "@/ui/misc/GradientText";
import ContactButton from "@/ui/misc/modal";
import { useInView } from "framer-motion";
import { ScrollDown } from "@/ui/misc/ScrollDown";
import AboutCard from "./AboutCard";
import resume from "@/ui/sections/experience/experience.json";
import { FaMapPin } from "react-icons/fa";

const AboutMe = ({data, commits}: any) => {
const [showAboutCard, setShowAboutCard ] = useState(false)

const ref = useRef(null)
const isInView = useInView(ref)
useEffect(() => {
  if (isInView) {
    setShowAboutCard(true);
  } else {
    setShowAboutCard(false)
    console.log('card out of view')
  }
}, [isInView]);

const card: Variants = {
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
  
  console.log(commits, data)
  return (
    <div
      className="dark:bg-neutral-950 bg-slate-200 mx-auto h-full max-w-screen"
      id="about"
      ref={ref}
    >
       <ScrollDown color='text-blue-800 dark:text-blue-600'/>
      <div className="bg-fixed" style={{backgroundImage:"/phoenix.png"}}/>
      <div className=" grid grid-cols-1 md:grid-cols-12 max-w-screen min-h-full place-items-center px-8 ">
        <div className="min-w-full h-full col-span-6 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl items-center md:order-2 place-items-center">
          <div className="flex text-center p-4 items-center min-h-full">
            <div className="content-start justify-start items-center">
              <GradientText text='About Me'/>
              <div className="md:hidden block mt-4 col-span-6 items-center w-full  content-center justify-center md:order-1" ref={ref}>
         {showAboutCard && 
         <m.div
         variants={card}
         initial="hidden"
         animate="visible"
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01],
         }}
>
         <AboutCard data={data} commits={commits}/> </m.div>}
         </div>
         {[resume].map((my: any, i) => (<div key={i}>
              <div className="w-full text-base md:text-lg lg:text-xl p-4 sm:p-8 md:pr-8 lg:pr-16 items-center min-h-full text-left text-gray-900 dark:text-slate-200 ">
              <div className="flex h-10 items-center">
                <FaMapPin/>
              <h1 className="text-sm  h-fit font-semibold text-left">{my.location}</h1></div>
              <div className="overflow-auto h-36 md:h-full p-4">
              <p className="text-base lg:text-xl text-ellipsis">
              {my.summary}</p></div>
              </div>
              <div className="flex ml-6 h-fit -mt-3 lg:-mt-6">
                <ContactButton color='text-blue-800 dark:text-blue-600'/>
              </div></div>))}
            </div>
          </div>
        </div>
        <div className="hidden md:block p-0 col-span-6 items-center w-full  content-center justify-center md:order-1">
         
        {showAboutCard && 
         <m.div
         variants={card}
         initial="hidden"
         animate="visible"
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01],
         }}
>
         <AboutCard data={data} commits={commits}/> </m.div>}
        </div>
        
      </div>
    </div>
  );
};

export default AboutMe;
