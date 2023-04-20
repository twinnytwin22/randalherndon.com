"use client";
import React, { useEffect, useRef, useState } from "react";
import resume from "./experience.json";
import { DownloadButton } from "@/ui/buttons/DownloadButton";
import skillsets from "./skillsets.json";
import ContactButton from "@/ui/misc/modal";
import { useAnimate, stagger, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { ScrollDown, ScrollDown2, ScrollDown3, SwipeSides } from "@/ui/misc/ScrollDown";
import WelcomeMarquee from "@/ui/misc/WelcomeMarquee";
function useStaggerAnimation(showExp: boolean) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("h2", { opacity: 1 }, { delay: stagger(0.3) });
  }, [showExp]);
  return scope;
}

const Experience = () => {
  const [showExp, setShowExp] = useState(false);
  const { ref: expRef, inView: expVisible } = useInView({
    threshold: 1,
  });
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];
  const scope = useStaggerAnimation(showExp);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    if (expVisible) {
      setShowExp(true);
      console.log("experience in view");
    } else {
      setShowExp(false);
      console.log("exp out of view");
    }
  }, [expVisible]);

  return (
    <>
      <div
        className="flex min-h-screen w-full  max-w-screen items-center mx-auto content-center relative"
        id="experience"
        ref={expRef}
      >
        
        <div className="flex items-center flex-col lg:grid grid-cols-12 w-full h-full place-items-center mx-auto">
          
          <div className="col-span-6 flex flex-col lg:mt-24 content-start max-w-xs sm:max-w-sm md:max-w-lg mx-auto h-fit">
            <Slider
              {...settings}
              className="mb-8 p-8 sm:p-12 h-fit rounded-lg bg-slate-200 dark:bg-neutral-950 shadow-lg  shadow-slate-300 dark:shadow-gray-900 border border-slate-300 dark:border-gray-800"
            >
              <>
                <h1 className="text-xl md:text-3xl">Education</h1>
                <div className="md:grid grid-cols-2">
                  {resume.education.map((my: any, i: any) => (
                    <div className="block p-2.5" key={i}>
                      <p className="text-base font-semibold">{my.field}</p>
                      <p className="text-base font-semibold italic">
                        {my.degree}
                      </p>
                      <div className="flex italic">
                        <p className="text-sm">{my.school}</p>,&nbsp;
                        <p className="text-sm">{my.startDate}</p>-
                        <p className="text-sm ">{my.endDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
              <>
                <div className="">
                  <h1 className=" text-xl md:text-3xl">Experience</h1>

                  {resume.experience.slice(0, 2).map((job: any, i: any) => (
                    <div key={i} className="p-2.5">
                      <p className="text-base font-semibold">{job.title}</p>
                      <div className="flex">
                        <p className="text-base">{job.company}</p>&nbsp;-&nbsp;
                        <p className="text-base">{job.location}</p>
                      </div>
                      <div className="flex italic">
                        <p className="text-base">{job.startDate}</p>
                        &nbsp;-&nbsp;
                        <p className="text-base">{job.endDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            </Slider>
            <div className="hidden lg:flex space-x-2">
              <ContactButton />
              <DownloadButton />
            </div>
          </div>
          <div className="col-span-6 h-full items-center flex -mt-8 lg:-mt-0">
            <div>
              <div
                className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center h-fit  max-w-xs sm:max-w-sm md:max-w-md"
                ref={scope}
              >
                {skillsets.skills.map(({ name }: any, index: number) => (
                  <m.h2
                    key={index}
                    className={`lg:h-20 flex whitespace-nowrap items-center justify-center text-white hover:scale-105 text-xs md:text-sm p-3 font-normal font-[owners-wide] rounded-lg ${
                      colors[Math.floor(Math.random() * colors.length)]
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                  >
                    {name}
                  </m.h2>
                ))}
              </div>
              <div className="flex lg:hidden h-fit mt-8 space-x-5">
                {" "}
                <ContactButton />
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>  <ScrollDown3/>
      </div>
    
    </>
  );
};

export default Experience;
