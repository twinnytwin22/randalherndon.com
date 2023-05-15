"use client";
import React from "react";
import { Variants } from "framer-motion";
import { GradientText } from "@/ui/misc/GradientText";
import ContactButton from "@/ui/buttons/modal";
import { ScrollDown } from "@/ui/misc/ScrollDown";
import resume from "@/ui/sections/experience/experience.json";
import { FaCheckCircle, FaMapPin } from "react-icons/fa";
import LinkedInButton from "@/ui/buttons/LinkedIn";
import { DownloadButton } from "@/ui/buttons/DownloadButton";
import Slider from "react-slick";
const AboutMe = () => {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <> <div className="absolute top-0 left-0 w-full h-full bg-slate-100 dark:bg-black  opacity-10 bg-cover bg-[url(https://i.imgur.com/XqbXLxL.png)]" />
      <div
        className=" mx-auto h-full max-w-screen relative "
        id="about"

      >
        <div className="w-screen mx-auto items-center h-full ">
          <ScrollDown />
          <div className=" grid grid-cols-1 lg:grid-cols-12 min-h-full mx-auto max-w-screen-2xl place-items-center px-8 lg:gap-24 ">

            <div className="min-w-full h-full col-span-6  mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl lg:items-center">
              <div className="flex text-center p-4 items-end lg:items-center min-h-full ">
                <div className="content-start justify-start md:justify-center md:content-center items-center mx-auto">
                  <GradientText text="About Me" />

                  {[resume].map((my: any, i) => (
                    <div key={i}>
                      <div className="w-full text-base md:text-lg lg:text-xl p-4 sm:p-8 md:pr-8 lg:pr-16 items-center min-h-full text-left text-gray-900 dark:text-slate-200 ">
                        <div className="flex h-10 items-center">
                          <FaMapPin />
                          <h1 className="text-sm  h-fit font-semibold text-left">
                            {my.location}
                          </h1>
                        </div>
                        <div className="overflow-auto h-56 lg:h-full mx-auto p-4 bg-slate-200 dark:bg-black rounded-lg  shadow-lg  shadow-slate-300 dark:shadow-gray-900">

                          {my.descriptions.map((item: any, i: any) => (
                            <div className=" lg:text-base text-sm text-ellipsis flex border-b border-slate-400 p-2 text-slate-950 dark:text-white dark:border-slate-900 items-center -ml-3" key={i}>
                              <div className="p-3"><FaCheckCircle /></div>
                              <p> {item}</p>
                            </div>))}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="block p-0 col-span-6 lg:items-center w-full px-8 lg:max-w-2xl items-start mx-auto content-center justify-center ml-2 lg:mt-8 lg:px-4 xl:mr-16 lg:mr-12">
              <Slider
                {...settings}
                className="mb-8 p-8 sm:p-12 h-fit rounded-lg bg-slate-200 dark:bg-black shadow-lg mx-auto shadow-slate-300 dark:shadow-gray-900 "
              >
                <>
                  <h1 className="text-xl md:text-3xl">Education</h1>
                  <div className="md:grid grid-cols-2 ">
                    {resume.education.map((my: any, i: any) => (
                      <div className="block p-2.5 lg:text-base text-sm" key={i}>
                        <p className="font-semibold">{my.field}</p>
                        <p className="font-semibold italic">
                          {my.degree}
                        </p>
                        <div className="flex italic">
                          <p className="">{my.school}</p>,&nbsp;
                          <p className="">{my.startDate}</p>-
                          <p className="">{my.endDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
                <>
                  <div className="">
                    <h1 className=" text-xl md:text-3xl">Experience</h1>
                    <div className="md:grid grid-cols-2 ">

                      {resume.experience.slice(0, 2).map((job: any, i: any) => (
                        <div key={i} className="p-1.5">
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
                  </div>
                </>
                <>
                  <div className="">
                    <h1 className=" text-xl md:text-3xl">Experience</h1>
                    <div className="md:grid grid-cols-2 ">

                      {resume.experience.slice(2, 4).map((job: any, i: any) => (
                        <div key={i} className="p-1.5">
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
                  </div>
                </>
              </Slider>
              <div className="flex h-fit space-x-2">
                <ContactButton color="text-blue-800 dark:text-blue-600" />
                <LinkedInButton />
                <DownloadButton />
              </div>
            </div>
          </div>
        </div></div>
    </>
  );
};

export default AboutMe;
