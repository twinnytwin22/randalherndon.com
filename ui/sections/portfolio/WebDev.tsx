"use client";

import { useInView } from "react-cool-inview";
import { renderPortfolio } from "./WebPortfolio";
const WebDev = (id: any) => {

  const { inView, entry } = useInView<HTMLDivElement>({
    root: null,
    delay: 100,
    onEnter: () => {
      console.log("here");
    },
    onLeave: () => {
      console.log("gone");
    },
    onChange: () => {
      console.log("change");
    },
  });

  if (inView) {
    console.log("in view", entry?.target.children);
  } else {
    console.log("out of view");
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="block w-full mx-auto min-h-screen max-h-screen relative">
        {renderPortfolio({ id, settings })}
      </div>

    </>
  );
};

export default WebDev;
