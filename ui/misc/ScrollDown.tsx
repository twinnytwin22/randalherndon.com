
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const ScrollDown = ({color}:any) => {
  return (
    <div className={`absolute w-full -ml-12 ${color}`}>
      <div className="rotate-90 absolute left-0 text-sm mt-96 flex items-center ">
      <h1 className="tracking-normal ">Scroll Down</h1>
        <IoIosArrowForward className="text-2xl animate-pulse" />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
    </div>
  );
};

export const ScrollDown2 = ({color}:any) => {
  return (
      <div className=" absolute left-0 right-0 bottom-0 text-sm items-center ">
      <h1 className="tracking-normal ">Scroll Down</h1>
        <IoIosArrowForward className="text-2xl animate-pulse" />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
  );
};

export const ScrollBoth = ({color}:any) => {
  return (
    <div className={`absolute -ml-12 ${color}`}>
      <div className="rotate-90 absolute left-0 text-sm mt-96 items-center flex">
      <IoIosArrowBack className="text-2xl animate-pulse" style={{animationDelay: '1.5s'}} />
      <IoIosArrowBack className="text-2xl animate-pulse" style={{animationDelay: '1s'}} />
      <h1 className="tracking-widest	">Scroll</h1>
        <IoIosArrowForward className="text-2xl animate-pulse" />
        <IoIosArrowForward className="text-2xl animate-pulse" style={{animationDelay: '0.5s'}} />

      </div>
    </div>
  );
};
