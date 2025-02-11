'use client'
import { useState } from "react";

export default function SkillsList({skills}: any) {
  //console.log(skills)
  return (
    <div id="skills" className="section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms] w-full mb-8">
      <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="SKILLS">
      {skills.title}
      </h6>
      <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-8 lg:mb-10 dark:text-white">
       {skills.introText}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.categories.map((section: any) => (
          <div key={section.categoryTitle} className="group">
            <div className="bg-white dark:bg-gray-950 rounded p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                {/* <span className="text-2xl hidden">{section?.icon || ""}</span> */}
                <h3 className="text-xl font-bold ">
                  {section.categoryTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {section.skillsList.map((skill: any) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-500 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-slate-700 dark:from-blue-500 to-indigo-500 transition-all duration-500 group-hover:from-blue-500 group-hover:to-indigo-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  metrics?: string[];
  logo?: string;
}


export function WorkExperience({workExperience}: any) {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? workExperience.jobs : workExperience.jobs.slice(0, 3);

  return (
    <div className="section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition-all duration-[160ms] w-full mb-8">
      <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="EXPERIENCE">
        {workExperience.title}
      </h6>
      <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-8 lg:mb-10 dark:text-white">
        {workExperience.introText}</h2>

      <div className="relative">
        {displayedExperiences.map((exp: WorkExperience, index: number) => (
          <div key={exp.company + index} className="group relative pl-8 pb-12 border-l-2 border-slate-300 dark:border-gray-700 last:border-l-0">
            <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-white dark:bg-gray-900 border-2 border-slate-500 dark:border-blue-500 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300" />
            
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 group-hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-mono">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 font-mono">{exp.duration}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {exp.metrics && (
                <div className="mt-4 flex gap-2">
                  {exp.metrics.map((metric, i) => (
                    <span key={i} className="font-mono px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-600 transition-all duration-300 text-center w-1/2"
          >
            {!showAll ? "Show All" : "Show Less"}
          </button>
        </div>

    </div>
  );
}