"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

import { GradientText } from "@/ui/misc/GradientText";
import ContactButton from "@/ui/misc/modal";


const projects = [  {    title: "Project 1",    description: "This is project 1",    imageUrl: "https://i.imgur.com/3S89OFw.png",    url: "https://example.com/project1",  },  {    title: "Project 2",    description: "This is project 2",    imageUrl: "https://i.imgur.com/p6YCJdG.jpeg",    url: "https://example.com/project2",  },  {    title: "Project 3",    description: "This is project 3",    imageUrl: "https://i.imgur.com/5D8dPZO.jpeg",    url: "https://example.com/project3",  },];

const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const currentProject = projects[currentProjectIndex];

  const handleScroll = (event: any) => {
    const delta = event.deltaY;
    if (delta > 0) {
      setCurrentProjectIndex((index) =>
        index < projects.length - 1 ? index + 1 : index
      );
    } else if (delta < 0) {
      setCurrentProjectIndex((index) => (index > 0 ? index - 1 : index));
    }
    setShowProjectDetails(false);
  };

  return (
    <div
      className="dark:bg-gray-950 bg-slate-200 mx-auto h-screen"
      id="portfolio"
      onWheel={handleScroll}
    >
      <div className="grid grid-cols-6 xl:grid-cols-12 max-w-screen min-h-full place-items-center px-8 ">
        <div className="col-span-6 mx-auto ml-2 space-y-6 items-center">
          <motion.img
            key={currentProject.imageUrl}
            src={currentProject.imageUrl}
            alt={currentProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="p-4 md:p-20 col-span-6 items-center w-full">
          <AnimatePresence>
            {showProjectDetails && (
              <motion.div
                key={currentProject.title}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
              >
                <GradientText>{currentProject.title}</GradientText>
                <p>{currentProject.description}</p>
                <a href={currentProject.url} target="_blank">
                  View Project
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={() => setShowProjectDetails(!showProjectDetails)}>
            {showProjectDetails ? "Hide Details" : "Show Details"}
          </button>
        </div>
     
       
      </div>
    </div>
  );
};

export default Portfolio;
