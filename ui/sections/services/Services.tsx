"use client";
import { ScrollDown } from "@/ui/misc/ScrollDown";
const Services = () => {

  return (
    <div
      className="dark:bg-black bg-slate-200 mx-auto w-full h-full border-b-4 dark:border-white border-black items-center max-w-screen "
      id="services"
    >
      <ScrollDown />
      <div className="grid grid-cols-6 xl:grid-cols-12 max-w-screen-2xl min-h-full place-items-center px-8 mx-auto">
        <div className="w-full col-span-6 mx-auto space-y-6 xl:text-8xl text-5xl nd:text-7xl items-center content-center justify-center mt-12 lg:mt-28 xl:mt-0">
          <h1 className="text-center">Services</h1>

        </div>
      </div>
    </div>
  );
};

export default Services;
