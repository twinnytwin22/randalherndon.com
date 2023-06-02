import React from 'react'
import { companies } from './skill'
import { GradientText } from '@/ui/misc/GradientText'

function Companies() {
    return (
        <div>
            <GradientText text="Companies I've worked with." textSize="xl" />

            <div className='grid grid-cols-5 p-4 gap-4 mb-10 md:mb-0 '>
                {companies.map((company) => (
                    <div key={company.name}>
                        <img className='p-1 hover:scale-110 duration-200 ease-in-out dark:bg-white rounded-lg' src={company.logoUrl} alt={company.name} />
                        <p className='text-center text-xs p-1'>{company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Companies