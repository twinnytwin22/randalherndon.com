'use client'
import React, {useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { primarySkills } from "@/lib/skill";
import ServiceBlock from "./serviceBlock";
import { ScrollDown } from "@/ui/misc/ScrollDown";
import ContactButton from "@/ui/misc/modal";

const Services = () => {
  const [showSkillBlocks, setShowSkillBlocks] = useState(false);
  const [ description , setDescription ] = useState('')

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setShowSkillBlocks(true);
    }
  }, [inView]);

  return (
    <div className="dark:bg-black bg-slate-200 mx-auto w-full h-full" id="services" ref={ref}>
          <div className="border-t-4 dark:border-white border-black w-full"></div>

      <ScrollDown/>
      <div className="grid grid-cols-6 xl:grid-cols-12 max-w-screen-2xl min-h-full place-items-center px-8 mx-auto">
        <div className="w-full col-span-6 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl items-center content-center justify-center mt-20">
          <h1 className="text-center">Services</h1>
          <p className="text-base md:text-lg text-center">{primarySkills[0].description}</p>
          <div className="flex content-center justify-center">
          <ContactButton/></div>
        </div>
        <div className="p-4 md:p-20 col-span-6 items-center w-full">
          <div className="skill-blocks">{showSkillBlocks ? primarySkills.map(({skill, id}: any, index) => (<ServiceBlock skill={skill} key={skill} id={id} delay={index * 0.9}/>)) : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
