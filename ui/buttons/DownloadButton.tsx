'use client'
import Link from "next/link";
import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
export const DownloadButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <Link href="/Resume-Randal-Herndon.pdf" className="flex rounded-lg p-4 text-lg hover:scale-105 duration-200 ease-in-out text-white bg-blue-700"
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}>
      <span

        className="relative inline-block"
      >
        <FaFileDownload />
        {showTooltip && (
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 py-2 px-4 bg-black text-white text-xs rounded-md whitespace-nowrap">
            Download my resume
          </span>
        )}
      </span>
    </Link>
  );
};