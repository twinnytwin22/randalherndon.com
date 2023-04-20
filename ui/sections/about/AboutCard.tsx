"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import GitHubButton from "react-github-btn";
import MyGitHubButton from "@/ui/buttons/CustomGitHubButton";
import { m } from "framer-motion";
import { FollowButton } from "@/lib/followOnGitbhub";
function AboutCard(props: any) {
  const commits = props?.commits;
  const data = props?.data;
  const [like, setLike] = useState(false);
console.log(data)
  const handleLike = () => {
    setLike(true);
  };

  const handleDisLike = () => {
    setLike(false);
  };

  return (
    <div className="flex mx-auto w-fit max-w-xs ">
      <div className="pb-3 p-0 md:p-8 sm:p-4 bg-white rounded-xl border border-gray-200  max-w-sm shadow-2xl shadow-slate-300 dark:shadow-black dark:bg-black dark:border-gray-800 mx-auto content-center justify-center w-fit ">
        <Link href="">
          <img
            className="w-48 sm:w-60  lg:w-72  xl:w-96 rounded-sm gap-10 m-5 object-cover scale-100 mx-auto content-center justify-center bg-blue-900"
            src="/twin-transparent.png"
            alt="Collection Image"
          />
        </Link>
        <div className="flex justify-center mt-3 content-center items-center text-center text-xs md:text-sm font-bold">
          <div
            className=" mt-0.5 text-gray-900 dark:text-white tracking-tight pr-3"
            key={data?.followers}
          >
            <p className="font-extrabold">Followers</p>
            {data && data?.followers}
          </div>
          <div
            className=" mt-0.5 text-gray-900 dark:text-white tracking-tight pr-3"
            key={data?.following}
          >
            <p className="font-extrabold">Following</p>
            {data && data?.following}
          </div>
          <div
            className="mt-0.5 text-gray-900 dark:text-white tracking-tight pr-3"
            key={data?.repos}
          >
            <p className="font-extrabold">{data ? 'Repos' : ""}</p>
            {data?.public_repos}
          </div>
        </div>

        <div className="flex justify-between mx-5 items-center mt-2 h-12">
          <h2
            className="text-sm md:text-base lg:text-lg font-extrabold tracking-tight text-gray-900 dark:text-white"
            key=""
          >
            <Link href="https://github.com/twinnytwin22">@twinnytwin22</Link>
          </h2>
          <div className="m-2">
            {!like ? (
              <>
                <IoIosHeartEmpty
                  onClick={handleLike}
                  className=" text-2xl md:text-3xl text-black dark:text-white"
                />
              </>
            ) : (
              <>
                <IoIosHeart
                  onClick={handleDisLike}
                  className="text-xl md:text-3xl"
                  fill="red"
                />
              </>
            )}
          </div>
          <div className="">
            <GitHubButton
              href="https://github.com/twinnytwin22"
              aria-label="Follow @twinnytwin22 on GitHub"
              data-color-scheme="red"
              data-size="large"
            >
              Follow
            </GitHubButton>
          </div>
        </div>
        <div className="mx-auto" key=""></div>
      </div>
    </div>
  );
}

export default AboutCard;
