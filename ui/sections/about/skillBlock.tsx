import React from 'react'

function SkillBlock({skill, index}:any) {
  return (
 
        
        <div className={`bg-slate-300 dark:bg-black my-2 p-6 rounded-xl max-w-full w-f  hover:scale-105 px-16 shadow-md shadow-slate-300 dark:shadow-neutral-800`} key={skill}>
               <h1 className="text-xl md:text-3xl text-center" >{skill.skill}</h1>
                </div>
  )
}

export default SkillBlock