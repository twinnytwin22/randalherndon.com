"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion"
import { primarySkills } from "@/ui/sections/services/skill";
import ServiceBlock from "./serviceBlock";
import { ScrollDown } from "@/ui/misc/ScrollDown";
import ContactButton from "@/ui/misc/modal";
import LinkedInButton from "@/ui/buttons/LinkedIn";

const Services = () => {
  const [showSkillBlocks, setShowSkillBlocks] = useState(false);
  const [description, setDescription] = useState("");

  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    if (isInView) {
      setShowSkillBlocks(true);
    } else {
      setShowSkillBlocks(false)
    }
  }, [isInView]);

  return (
    <div
      className="dark:bg-black bg-slate-200 mx-auto w-full h-full border-b-4 dark:border-white border-black items-center max-w-screen "
      id="services"
      ref={ref}
    >
      <ScrollDown />
      <div className="grid grid-cols-6 xl:grid-cols-12 max-w-screen-2xl min-h-full place-items-center px-8 mx-auto">
        <div className="w-full col-span-6 mx-auto space-y-6 xl:text-8xl text-5xl nd:text-7xl items-center content-center justify-center mt-12 lg:mt-28 xl:mt-0">
          <h1 className="text-center">Services</h1>
          <p className="text-xs sm:text-base md:text-lg text-center max-w-md mx-auto">
            {!primarySkills[0].description}
          </p>
          <div className="flex content-center justify-center space-x-2">
            <ContactButton />
            <LinkedInButton/>
          </div>
        </div>
        <div className="px-10 md:p-20 col-span-6 items-center w-full -mt-32 lg:-mt-16 xl:-mt-0 mx-auto">
          <div className="skill-blocks">
            {showSkillBlocks
              ? primarySkills.map(({ skill, id }: any, index) => (
                  <ServiceBlock
                    skill={skill}
                    key={skill}
                    id={id}
                    delay={index * 0.9}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
