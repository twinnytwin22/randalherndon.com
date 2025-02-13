"use client";
import React from "react";

export default function IntroHero({aboutMe}: any) {
  return (
    <div className="w-full space-y-6 pb-8 relative">

                    {/* <!-- About me section --> */}
                    <div id="about" className="section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
                        <div className="lg:flex lg:space-x-10">
                            <div className="relative h-fit mb-6">
                                <img className="min-w-52 min-h-52 max-w-64 max-h-64 rounded-full" src="/randal.jpeg" alt=""/>
                                <div className="absolute bottom-4 left-2 bg-black/30 dark:bg-black/60 px-4 py-2 rounded-full shadow-avatarText backdrop-blur-[5px] text-white font-mono font-normal uppercase text-sm tracking-wider">
                                    <span className="typer" id="typer1" data-words="Hi There!, I'm Randal" data-colors="white" data-delay="50" data-deletedelay="1500" style={{ color: "white" }}> I'm Randal</span><span className="cursor" data-owner="typer1" style={{ transition: "0.1s", opacity: 0 }}>_</span>
                                </div>
                            </div>
                            <div>
                                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="About Me">About Me</h6>
                                <h2 className="text-4xl font-poppins font-semibold mb-2 dark:text-white">
                                  {aboutMe?.headlines.map((headline: string, index: number) => (
                                    <span key={index}>{headline}<br/></span>
                                ))}
                                </h2>
                                <ul className="space-y-3 mb-4">
                                  {aboutMe?.skills.map((skill: {name: string, percentage: number}, index: number) => (
                                    <li key={index} className=" text-sm list-none inline-block px-4 py-2 me-2 rounded-full border border-black/20 dark:border-white/30 border-dashed text-pColor hover:text-black dark:text-white/70 dark:hover:text-white transition ease-linear duration-100">
                                        <i className="bi bi-camera pe-1"></i>
                                        {skill.name}
                                        <div className="inline-block font-mono text-sm">(<span className="counter">{skill.percentage.toString()}</span>%)</div>
                                    </li>
                               
                                  ))}
                                </ul>
                                <p className="text-black/70 dark:text-white/70">{aboutMe.aboutMe}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
                            {aboutMe.stats.map((stat: {label: string, value: number, suffix: string}, index: number) => (
                            <div className="flex items-center" key={index}>
                                <div className="pe-2">
                                    <div className="font-mono font-semibold text-6xl stroke-text"><span className="counter">{stat?.value.toString()}</span></div>
                                </div>
                                <div className="dark:text-white">
                                    <span className="block text-2xl font-normal mb-1">{stat.suffix}</span>
                                    <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">{stat.label}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

           
                </div>
  )
}
