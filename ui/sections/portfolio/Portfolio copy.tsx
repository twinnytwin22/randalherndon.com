"use client";
import { useState, useRef, useEffect } from "react";
import { projects } from "./projects";
import { ScrollBoth, ScrollDown,  } from "@/ui/misc/ScrollDown";
import { InView, useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import ContactButton from "@/ui/buttons/modal";
import { useMotionValue } from "framer-motion";

const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  console.log(projects);
  const [currentProjectImages, setCurrentProjectImages] = useState(
    projects[0].images 
  );
  const {ref: myRef, inView: myElementIsVisible , entry } = useInView({
    threshold: 0,

  })
  const {ref: projectRef, inView: newProjectVisible } = useInView({
    threshold: 0,

  })
  console.log('visible', myElementIsVisible, 'entry', entry)

  console.log('visible', newProjectVisible, 'new prject:', newProjectVisible)

  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  const renderLarge = () => {
    return (
      <div
        className="dark:bg-neutral-950 bg-slate-200 mx-auto h-screen w-full border-t-4 dark:border-white border-black "
        id="portfolio"
      >
        <div className="w-full columns-1 lg:columns-2 max-w-screen min-h-screen h-full flex  lg:flex-row overflow-x-hidden" >
          <div className="flex mx-auto space-y-6 items-center content-center justify-center bg-slate-100 dark:bg-black h-full w-full overflow-clip " >
            <div className="max-w-lg w-full content-center mx-auto relative" >
              <Slider {...settings}>
                {currentProjectImages?.map((images, index) => (
                  <img
                    key={index}
                    className="justify-center max-w-lg mx-auto" 
                    src={images}
                    alt={`${projects[currentProjectIndex]?.title} - Image ${index}`}
                  />
                ))}</Slider>


            </div>
          </div>

          <div className="portfolio-selector h-screen w-full mx-auto items-center content-center snap-y overflow-y-scroll overflow-x-hidden snap-mandatory">
            <ScrollBoth />

            <div className="min-w-[50vw] mx-auto content-center justify-center w-full flex flex-col" ref={myRef as any}>
              {projects?.map((project, index) => (
                <InView
                
                  key={index} 
                  className="h-full min-h-screen min-w-full flex items-center mx-auto content-center snap-normal snap-center" 
                >
                  <div className="w-full flex flex-col items-center" ref={projectRef as any}>
                    <h1  className="text-4xl text-center p-4" > {project?.title}</h1>
                    <p className="max-w-sm p-2.5 text-center">{project?.description}</p>
                    <div className="grid grid-cols-4 space-x-2 p-6 mb-4">
                      {project?.stack.map((stack: any, i) => (
                        <div className="" key={i}>
                          
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{stack.name}</span>
                        </div>
                      ))}</div>
                      <div className="flex space-x-2">
                    <button
                      key={index}
                      className={`portfolio-selector-item p-4 h-fit text-sm bg-black hover:scale-105 dark:bg-white text-white items-center dark:text-black rounded-lg mx-auto ${index === currentProjectIndex ? "active" : ""
                        }`}
                      onClick={() => {
                        setCurrentProjectIndex(index);
                        setCurrentProjectImages(project?.images);
                      }}
                    >  <h1 className="font-[owners-wide]">
                      View Live</h1>
                    </button>
                    <ContactButton/></div>
                  </div>
                </InView>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSmall = () => {
    return (
      <div className="min-w-screen min-h-screen mx-auto w-full static">
        <div className="flex flex-col h-screen min-w-screen w-full">
          <div className="h-full min-h-[55vh] p-8 md:p-20">
            <div className="flex mx-auto space-y-6 items-center content-center justify-center bg-slate-100 dark:bg-black h-full w-full overflow-clip ">
            <div className="max-w-sm px-4">
              <Slider {...settings}>
                {currentProjectImages?.map((image, index) => (
                  <img
                    key={index}
                    className="max-h-72"
                    src={image}
                    alt={`${projects[currentProjectIndex]?.title} - Image ${index}`}
                  />
                ))}</Slider>


            </div>
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-neutral-950 h-full">
            <div
              id="portfolio-details"
              className="h-full w-full items-center flex content-center justify-center"
            >
              <div className="portfolio-selector h-full w-full max-w-screen mx-auto items-center content-center snap-x overflow-x-scroll overflow-y-hidden snap-mandatory">
                <div className="max-w-screen mx-auto content-center justify-center w-full flex ">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="h-full min-h-[45vh] min-w-full max-w-screen w-full flex items-center mx-auto content-center snap-normal snap-center"
                      
                    >
                      <div className="w-full flex flex-col">
                        <h1 className="text-3xl md:text-4xl text-center">
                          {project.title}
                        </h1>
                        <p className="max-w-sm p-2.5 text-center mx-auto">{project?.description}</p>

                        <div className="max-w-md grid grid-cols-4 space-x-1 p-4 mx-auto">
                      {project?.stack.map((stack: any, i) => (
                        <div className="" key={i}>
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{stack.name}</span>
                        </div>
                      ))}</div>
                        <button
                          
                          key={index}
                          className={`portfolio-selector-item p-4 w-36 bg-black dark:bg-white text-white items-center dark:text-black rounded-lg mx-auto ${index === currentProjectIndex ? "active" : ""
                            }`}
                          onClick={() => {
                            setCurrentProjectIndex(index);
                            setCurrentProjectImages(project?.images);
                            setShowProjectDetails(false);
                          }}
                        >
                          View Live
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="hidden lg:block w-full mx-auto min-h-screen">
        {renderLarge()}
      </div>
      <div className="block lg:hidden w-full mx-auto min-h-screen">
        {renderSmall()}
      </div>
    </>
  );
};

export default Portfolio;
