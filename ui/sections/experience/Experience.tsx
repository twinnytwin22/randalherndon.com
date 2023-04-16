"use client";
import React from "react";
import resume from "./experience.json";
import skillsets from "./skillsets.json"
const Experience = () => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

  console.log(resume);
  return (
    <div className="h-full w-full items-center" id="skills">
      <div className="flex items-center flex-col-reverse md:grid grid-cols-12 w-full h-full place-items-center">
        <div className="col-span-6 h-full items-center flex">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center h-fit">
  {skillsets.skills.map(({ name }: any, index: number) => (
    <h2
      key={index}
      className={`md:h-24 flex items-center justify-center text-white hover:scale-105 text-base p-3 font-normal font-[owners-wide] rounded-lg ${colors[Math.floor(Math.random() * colors.length)]}`}
    >
      {name}
    </h2>
  ))}
</div>
        </div>
        <div className="col-span-6 flex flex-col content-start">
          <h1 className="text-3xl">Education</h1>

          <div className="md:grid grid-cols-2">
          {resume.education.map((my: any, i: any) => (
              <div className="block p-2.5"  key={i}>
                <p className="text-base font-semibold">{my.field}</p>
                <p className="text-base font-semibold">{my.degree}</p>
                <div className="flex italic">
                  <p className="text-base">{my.school}</p>,&nbsp;
                  <p className="text-base">{my.startDate}</p>&nbsp;-&nbsp;
                  <p className="text-base ">{my.endDate}</p>
                </div>
              </div>
          ))}
                      </div>

          <h1 className="text-3xl">Experience</h1>
          <div className="">

          {resume.experience.slice(0,2).map((job: any, i: any) => (
            <div key={i} className="p-2.5">
              <p className="text-base font-semibold">{job.title}</p>
              <div className="flex">

              <p className="text-base">{job.company}</p>&nbsp;-&nbsp;
              <p className="text-base">{job.location}</p>
              </div>
              <div className="flex italic">
              <p className="text-base">{job.startDate}</p>&nbsp;-&nbsp;
                
              <p className="text-base">{job.endDate}</p>
</div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
