import React from 'react'
import { primarySkills } from './skill'
import ServiceBlock from '../services/serviceBlock'
function Badges() {
  return (
    <div className='flex flex-wrap mx-auto content-center justify-center'>
      {primarySkills.map(({ skill, id }: any, index) => (
        <ServiceBlock
          skill={skill}
          key={skill}
          id={id}
          delay={index * 0.9}
        />
      ))
      }
    </div>
  )
}

export default Badges