import React from 'react'

const AboutMe = () => {
  return (
    <div className='dark:bg-neutral-950 bg-slate-200 mx-auto h-screen'>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 max-w-screen-5xl min-h-screen place-items-center px-8">
       
        <div className="flex-1 flex p-12 lg:col-span-6 items-center">
          <div className='border-8 rounded-full h-fit text-left'>
           
          </div>
        </div>
        <div className="content-center justify-center min-w-full flex-2 lg:col-span-6 mx-auto ml-2 space-y-6 xl:text-8xl text-5xl sm:text-7xl">
          <h1 className=" text-left text-black dark:text-white">About Me.</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutMe