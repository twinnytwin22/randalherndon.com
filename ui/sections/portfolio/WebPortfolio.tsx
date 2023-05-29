import { ScrollBoth } from "@/ui/misc/ScrollDown";
import { projects } from "./projects";
import { ImageSlider } from "./WebDevImageSlider";
import ContactButton from "@/ui/buttons/ContactButton";
import Link from "next/link";

export const renderPortfolio = ({ id, settings }: any) => {
    return (
        <div
            className="dark:bg-neutral-950 bg-slate-200 mx-auto h-screen w-full border-t-4 dark:border-white border-black relative overflow-hidden"
            id={id}
        >
            <div className="w-full max-w-screen min-h-screen h-full flex  lg:flex-row overflow-hidden relative">
                <div className="portfolio-selector h-screen w-full mx-auto items-center content-center snap-y overflow-y-scroll overflow-x-hidden snap-mandatory ">
                    <div className="">
                        <ScrollBoth />
                    </div>
                    {projects?.map((project, index) => (
                        <div className="grid grid-cols-10" key={index}>
                            <div className="col-span-10 mx-2 lg:col-span-6 md:mx-auto content-center justify-center w-full flex flex-col">
                                <div

                                    className={`h-full min-h-screen min-w-full flex items-center mx-auto content-center snap-normal snap-center relative ${project.title}`}
                                >
                                    <div className="w-full flex flex-col items-center">
                                        <h1
                                            className="text-xl lg:text-3xl text-center p-4"
                                            id={project.title}
                                        >
                                            {" "}
                                            {project?.title}
                                        </h1>
                                        <div className="lg:hidden max-w-sm px-6 w-full">
                                            <ImageSlider project={project} index={index} settings={settings} />
                                        </div>
                                        <p className="max-w-sm p-2.5 text-center lg:text-base text-sm">
                                            {project?.description}
                                        </p>
                                        <div className="flex flex-wrap justify-center space-x-2 p-6 mb-4 max-w-md space-y-1">
                                            {project?.stack.map((stack: any, i) => (
                                                <div className="" key={i}>
                                                    <span className="bg-gray-100 text-gray-800 text-xs md:text-sm lg:text-base font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                                        {stack.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex space-x-2 h-fit">

                                            <ContactButton />
                                            {project?.url !== "" ? (
                                                <Link href={project.url}>
                                                    <div className="p-4 h-fit text-sm  bg-blue-700 text-center font-[owners-wide] rounded-lg text-white font-bold hover:scale-105">
                                                        See Live
                                                    </div>{" "}
                                                </Link>
                                            ) : (
                                                ""
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex mx-auto space-y-6 items-center col-span-4 content-center justify-center bg-slate-100 dark:bg-black h-full w-full overflow-clip ">
                                <div className="max-w-xl px-16 w-full">
                                    <ImageSlider project={project} index={index} settings={settings} />

                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
};