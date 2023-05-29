import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

function LinkedInButton() {
  return (
    <div className="">
      <Link
        href="https://www.linkedin.com/in/randalherndon/"
        className="rounded-lg p-4 h-fit text-xl hover:scale-105 duration-200 ease-in-out text-white bg-blue-700 w-full flex"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
}

export default LinkedInButton;
