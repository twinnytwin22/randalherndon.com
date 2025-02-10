import { getPortfolio, imageBuilder } from "@/lib/providers/sanity/sanity";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "@/lib/providers/sanity/imageLoader";

type Props = {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function page({ params }: Props) {
  const { projectId } = await params;
  const project = await getPortfolio({ projectId });

  return (
    <>
    <div className="section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition-all duration-[160ms] w-full my-8">
      <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="PROJECT">
        Project
      </h6>
      <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-8 lg:mb-10 dark:text-white">
        {project.title}
      </h2>

      <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 group-hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0">
            <Image
            width={400}
            height={200}
              src={imageBuilder(project.images[0])}
              alt={project.title}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-grow">
            <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string, index: number) => (
                <span key={index} className="font-mono px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </div>
    </div>
    {project.images.length > 1 && 
    project.images.slice(1).map((image: any, index: number) => (
    <div key={index} className="flex justify-center mt-8">
      <Image
        src={imageBuilder(image)}
        alt={project.title}
        width={1920}
        height={1080}
        quality={100}
        className="rounded-lg shadow-lg w-full"
        priority={index === 0}
      />
    </div>
    ))}
   
        <div className="mb-12"></div>
    </>
  );
}

export default page;