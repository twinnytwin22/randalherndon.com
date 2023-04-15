"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

function AboutCard() {
    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(true)
    }

    const handleDisLike = () => {
        setLike(false)
    }

    return (
        <div className="block max-w-sm mx-auto">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-2xl shadow-slate-300 dark:shadow-black dark:bg-black dark:border-gray-800 mx-auto content-center justify-center">
                <Link href="">
                    <img
                        className="w-72 h-72 rounded-sm gap-10 bg-slate-500 object-cover scale-100 mx-auto content-center justify-center"
                        src="/twin-transparent.png"
                        alt="Collection Image"
                    />
                </Link>
                <div className="flex justify-center mt-3 content-center items-center">
                    <h6
                        className="text-xs mt-0.5 uppercase text-gray-900 dark:text-white tracking-tight pr-5"
                        key=""
                    ></h6>
                </div>

                <div className="flex justify-between mx-5 items-center mt-2">
                        <h2
                            className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white"
                            key=""
                        >
                            <Link href="">@randalherndon</Link>
                        </h2>
                        <div>
                        {!like ? (
                            <>
                                <IoIosHeartEmpty 
                                onClick={handleLike}
                                className="text-3xl delay-300 transition duration-200 ease-in-out text-black dark:text-white"  />
                            </>
                        ) : (
                            <>

                                <IoIosHeart
                                onClick={handleDisLike}
                                className="text-3xl" fill="red" />
                        </>
                        )}</div>
                    </div>
                <div className="mx-auto" key="">
                    <span
                        className="bg-gray-100 text-gray-800 text-[8px] md:text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900"
                        key=""
                    >
                       {""}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
