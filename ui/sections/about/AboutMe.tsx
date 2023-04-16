"use client";
import React, {useEffect, useState} from "react";
import { m } from "framer-motion";
import { GradientText } from "@/ui/misc/GradientText";
import ContactButton from "@/ui/misc/modal";
import { useInView } from "react-intersection-observer";
import { ScrollDown } from "@/ui/misc/ScrollDown";
import AboutCard from "./AboutCard";
import Marquee from "@/ui/misc/marquee";
import { InView } from "react-intersection-observer";
const AboutMe = ({data, commits}: any) => {
const [aboutCard, showAboutCard ] =useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      showAboutCard (true);
    }
  }, [inView]);
  
  console.log(commits, data)
  return (
    <div
      className="dark:bg-neutral-950 bg-slate-200 mx-auto h-full"
      id="about"
    >
       <ScrollDown color='text-blue-800 dark:text-blue-600'/>
      <div className="bg-fixed" style={{backgroundImage:"/phoenix.png"}}/>
      <div className=" grid grid-cols-1 md:grid-cols-12 max-w-screen min-h-full place-items-center px-8 ">
        <div className="min-w-full h-full col-span-6 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl items-center md:order-2 place-items-center">
          <div className="flex text-center p-4 items-center min-h-full">
            <div className="content-start justify-start items-center">
              <GradientText text='About Me'/>
              <div className="md:hidden block mt-4 col-span-6 items-center w-full  content-center justify-center md:order-1" ref={ref}>
         
         <AboutCard data={data} commits={commits}/>
         </div>
              <p className="w-full text-base md:text-lg lg:text-xl p-4 sm:p-8 md:pr-8 lg:pr-16 items-center min-h-full text-left text-gray-900 dark:text-slate-200 ">
                I'm Randal. Many people call me 'Twinny' Currently excelling in
                Web 3.0 and digital marketing services. As an artist, I am able
                to integrate my technical skills with my artistry and personal
                brand. I am known by my peers, personal clients, and supervisors
                for my leadership, positive & assertive attitude, work ethic and
                resourcefulness. I'm looking forward to applying my skills,
                wealth of knowledge, and community to brands and ideas that
                align with me. I am a creator of platforms, and advocate for
                education.
              </p>
              <div className="flex ml-6 h-fit lg:-mt-6">
                <ContactButton color='text-blue-800 dark:text-blue-600'/>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block p-0 col-span-6 items-center w-full  content-center justify-center md:order-1">
         
        <AboutCard data={data} commits={commits}/>
        </div>
        
      </div>
   
    </div>
  );
};

export default AboutMe;
