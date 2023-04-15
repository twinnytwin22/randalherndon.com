"use client";
import React from "react";
import { m } from "framer-motion";
import { GradientText } from "@/ui/misc/GradientText";
import ContactButton from "@/ui/misc/modal";
import { useInView } from "react-intersection-observer";
import { ScrollDown } from "@/ui/misc/ScrollDown";

const AboutMe = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div
      className="dark:bg-neutral-950 bg-slate-200 mx-auto h-full"
      id="about"
    >
       <ScrollDown color='text-blue-800'/>
      <div className="bg-fixed" style={{backgroundImage:"/phoenix.png"}}/>
      <div className=" grid grid-cols-6 xl:grid-cols-12 max-w-screen min-h-full place-items-center px-8 ">
        <div className="min-w-full h-full col-span-6 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl items-center xl:order-2">
          <div className="md:flex text-center p-4 sm:p-16 items-center min-h-full">
            <div className="content-start justify-start">
              <p className="w-full text-xl p-4 sm:p-8 md:pr-12 lg:pr-24 items-center min-h-full text-left text-gray-900 dark:text-slate-200 ">
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
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-20 col-span-6 items-center w-full xl:order-1">
          <div
            className="w-fits bg-gradient-to-tr from-zinc-950 from-10% via-[#3366cc] via-30% to-[#6699ff] to-70% rounded-full overflow-hidden mx-20 relative"         
          >
            <div className="bg-white w-fit"></div>
            <img className="w-fit contrast-125 relative z-[-0]" src="/twin-transparent.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
