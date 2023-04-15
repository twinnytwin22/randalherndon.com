import React from "react";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-50 bg-white">
      <img src="/logo.svg" className="animate-spin h-12 w-12 rounded-full" alt="Loading"/>
    </div>
  );
};

export default Preloader;
