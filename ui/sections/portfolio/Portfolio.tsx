"use client";
import { useState, useRef } from "react";
import { GradientText } from "@/ui/misc/GradientText";
import { projects } from "./projects";
import { ScrollBoth, ScrollDown } from "@/ui/misc/ScrollDown";
import { useInView } from "framer-motion"


const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [currentProjectImageUrl, setCurrentProjectImageUrl] = useState(projects[0].imageUrl);
  const ref = useRef(null)
  const isInView = useInView(ref)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderLarge = () => {
    return (

      <div className="dark:bg-neutral-950 bg-slate-200 mx-auto h-screen w-full border-t-4 dark:border-white border-black " id='portfolio'>
        <div className="w-full columns-1 lg:columns-2 max-w-screen min-h-screen h-full flex  lg:flex-row overflow-x-hidden">
          <div className="flex mx-auto space-y-6 items-center content-center justify-center bg-slate-100 dark:bg-black h-full w-full overflow-clip ">
            <img src={currentProjectImageUrl} alt={projects[currentProjectIndex].title} />
          </div>
          <div id="portfolio-details" className="h-full w-full items-center flex content-center justify-center">
            <div className="flex">
              <div className={`portfolio-details ${showProjectDetails ? "" : "hidden"}`}>
                <GradientText>{projects[currentProjectIndex].title}</GradientText>
                <p>{projects[currentProjectIndex].description}</p>
                <a href={projects[currentProjectIndex].url} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
              <div className="portfolio-selector h-screen w-full mx-auto items-center content-center snap-y overflow-y-scroll overflow-x-hidden snap-mandatory">
                <div className="">
                  <ScrollBoth /></div>

                <div className="min-w-[50vw] mx-auto content-center justify-center w-full flex flex-col ">
                  {projects.map((project, index) => (
                    <div key={index} className="h-screen min-w-full flex items-center mx-auto content-center snap-normal snap-center" ref={ref}>
                      <div className="w-full flex flex-col">
                        <h1 className="text-4xl text-center"> {project.title}</h1>
                        <button
                          key={index}
                          className={`portfolio-selector-item p-4 w-36 bg-black dark:bg-white text-white items-center dark:text-black rounded-lg mx-auto ${index === currentProjectIndex ? "active" : ""}`}
                          onClick={() => {
                            setCurrentProjectIndex(index);
                            setCurrentProjectImageUrl(project.imageUrl);
                            setShowProjectDetails(false);
                          }}
                        >
                          View Live
                        </button>
                      </div></div>
                  ))}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderSmall = () => {
    return (
      <div className="min-w-screen min-h-screen mx-auto w-full">

        <div className="flex flex-col h-screen min-w-screen w-full">
          <div className="h-full min-h-[55vh] p-8 md:p-20">
            <div className="flex mx-auto space-y-6 items-center content-center justify-center bg-slate-100 dark:bg-black h-full w-full overflow-clip ">
              <img src={currentProjectImageUrl} alt={projects[currentProjectIndex].title} />
            </div>

          </div>
          <div className="bg-slate-200 dark:bg-neutral-950 h-full">

            <div id="portfolio-details" className="h-full w-full items-center flex content-center justify-center">
              <div className="flex">
                <div className={`portfolio-details ${showProjectDetails ? "" : "hidden"}`}>
                  <GradientText>{projects[currentProjectIndex].title}</GradientText>
                  <p>{projects[currentProjectIndex].description}</p>
                  <a href={projects[currentProjectIndex].url} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
                <div className="portfolio-selector h-full w-full max-w-screen mx-auto items-center content-center snap-x overflow-x-scroll overflow-y-hidden snap-mandatory">
                <div className="max-w-screen mx-auto content-center justify-center w-full flex ">
                  {projects.map((project, index) => (
                    <div key={index} className="h-full min-h-[45vh] min-w-full max-w-screen w-full flex items-center mx-auto content-center snap-normal snap-center" ref={ref}>
                      <div className="w-full flex flex-col">
                        <h1 className="text-4xl text-center"> {project.title}</h1>
                        <button
                          key={index}
                          className={`portfolio-selector-item p-4 w-36 bg-black dark:bg-white text-white items-center dark:text-black rounded-lg mx-auto ${index === currentProjectIndex ? "active" : ""}`}
                          onClick={() => {
                            setCurrentProjectIndex(index);
                            setCurrentProjectImageUrl(project.imageUrl);
                            setShowProjectDetails(false);
                          }}
                        >
                          View Live
                        </button>
                      </div></div>
                  ))}</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }

  return (<>
    <div className="hidden lg:block w-full mx-auto min-h-screen">{renderLarge()}</div>
    <div className="block lg:hidden w-full mx-auto min-h-screen">{renderSmall()}</div></>
  )
};

export default Portfolio;
