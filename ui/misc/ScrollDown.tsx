
import { IoIosArrowForward } from 'react-icons/io';

export const ScrollDown = () => {
  return (
    <div className="absolute w-full -ml-12">
      <div className="rotate-90 absolute left-0 text-sm mt-96 flex ">
      <h1 className=" ">Scroll Down</h1>
        <IoIosArrowForward className="text-2xl animate-pulse" />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
};

