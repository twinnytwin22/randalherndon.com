'use client'
import { imageBuilder } from "@/lib/providers/sanity/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react"

function PortfolioAlpha({ portfolio }: any) {
    return (
        <div className="w-full pb-8 relative">
            <div id="portfolio" className=" section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms] relative">
                <div className="md:w-4/5 lg:w-3/4">
                    <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Portfolio">Portfolio</h6>
                    <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">
                        My Latest Works</h2>
                    <p className="text-pColor dark:text-white/70">{portfolio?.description || ""}</p>
                </div>
                <div className="mt-6 lg:mt-12">
                    <ul className="hidden filter space-x-2">
                        <li className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black mixitup-control-active" data-filter="all">Show All</li>
                        <li className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" data-filter=".category-1">Branding</li>
                        <li className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" data-filter=".category-2">Mockup</li>
                    </ul>
                    <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6" >
                        {portfolio.map((item: any) => (
                            // <!-- Portfolio Item 1 -->
                            <div style={{ backgroundColor: item?.previewBGColor?.hex || 'white' }} className={`portfolio-item h-full min-h-80 min-w-1/2 w-full border border-slate-300 dark:border-gray-700 relative category-1 flex items-center justify-center`} key={item._id}>
                                {item?.images?.length > 0 && (
                                    <Link style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }} href={`/portfolio/${item._id}`} 
                                    >
                                        <div
                                    className={`relative w-full h-full flex items-center justify-center overflow-hidden group rounded-lg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/30 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100 category-1 bg-[${item?.previewBGColor?.hex || 'red'}]`}>
                                        <Image 
                                            width={400} 
                                            height={200} 
                                            className="transition ease-custom duration-500 group-hover:scale-105 object-cover" 
                                            src={imageBuilder(item?.images[0])} 
                                            alt=""
                                        />
                                        <div className="z-[1] absolute top-4 right-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">
                                            {item.category || 'View Project'}
                                        </div>

                                        <div className="z-[1] absolute bottom-0 left-0 w-full px-7 pb-6 translate-y-2 mb-0 transition ease-out duration-[160ms]">
                                            <p className="text-white font-poppins font-semibold text-lg lg:text-xl tracking-[0.5px] portfolio-stroke-text transition-all ease-linear duration-100">{item.title}</p>
                                        </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PortfolioAlpha;



