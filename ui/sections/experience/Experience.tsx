"use client";
import React, { useEffect, useRef, useState } from "react";
import resume from "./experience.json";
import { DownloadButton } from "@/ui/buttons/DownloadButton";
import skillsets from "./skillsets.json";
import ContactButton from "@/ui/buttons/modal";
import { useAnimate, stagger, m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { primarySkills } from "./skill";
import {
  ScrollDown,
  ScrollDown2,
  ScrollDown3,
  SwipeSides,
} from "@/ui/misc/ScrollDown";
import WelcomeMarquee from "@/ui/misc/WelcomeMarquee";
import LinkedInButton from "@/ui/buttons/LinkedIn";
import Badges from "./Badges";
import Companies from "./Companies";
import { GradientText } from "@/ui/misc/GradientText";
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
        className="flex min-h-screen w-full  min-w-6xl max-w-screen-2xl items-center mx-auto content-center relative"
        id="experience"
        ref={expRef}
      >
        <div className="top-0 left-0 right-0 mx-auto mt-24 lg:mt-36 w-full md:inline-flex absolute max-w-md md:max-w-xl lg:max-w-full hidden">
          <Badges />
        </div>
        <div className="flex items-center flex-col lg:grid grid-cols-12 w-full h-full place-items-center mx-auto">
          <div className="col-span-6 flex flex-col lg:mt-24 content-start max-w-xs sm:max-w-sm md:max-w-lg mx-auto h-fit">
            <Companies />
            <div className="hidden lg:flex space-x-2">
              <ContactButton />
              <LinkedInButton />
              <DownloadButton />
            </div>
          </div>
          <div className="col-span-6 h-full items-center flex -mt-8 lg:-mt-0">
            <div>
              <GradientText text="A few items in my toolbox" textSize="xl" />

              <div
                className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center h-fit  max-w-xs sm:max-w-sm md:max-w-md"
                ref={scope}
              >
                {skillsets.skills.map(({ name }: any, index: number) => (
                  <m.h2
                    key={index}
                    className={`lg:h-20 flex whitespace-nowrap items-center font-bold justify-center text-white hover:scale-105 text-xs md:text-sm p-3  font-[owners-wide] rounded-lg ${colors[Math.floor(Math.random() * colors.length)]
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
                <LinkedInButton />
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>{" "}
        <ScrollDown3 />
      </div>
    </>
  );
};

export default Experience;
