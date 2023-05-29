"use client";
import { useEffect, useRef, useState } from "react";
import { branding, gfx } from "./projects";
import { m } from "framer-motion";

export const ModalSection = ({ title, closeModal }: any) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const visibleItems =
        title === "Branding"
            ? branding.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            : gfx.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const totalPages = Math.ceil(
        (title === "Branding" ? branding.length : gfx.length) / itemsPerPage
    );


    const handleClickNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handleClickPrevious = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    return (
        <>
            <m.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 9999, position: "relative" }}
                className="grid grid-cols-3 lg:grid-cols-4 gap-8 pb-6 relative w-full"
            >
                {visibleItems.map((p) => (
                    <div
                        key={p.image}
                        style={{
                            backgroundImage: `url(${p.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="relative p-8 mx-auto bg-slate-200 text-white text-2xl text-center font-bold w-72 h-72 hover:scale-105 duration-300 ease-in-out cursor-pointer flex items-end justify-center"
                    >
                        <div
                            className="absolute inset-0 bg-black bg-opacity-40"
                            style={{
                                zIndex: 1,
                            }}
                        ></div>
                        <h1 className="relative z-10 text-base">{p.title}</h1>
                    </div>
                ))}
            </m.div>
            <div className="flex justify-center text-white  font-bold relative z-50">
                <button
                    className="bg-zinc-600 px-4 py-2 rounded-lg mx-1 hover:bg-zinc-800 hover:scale-105 duration-200 ease-in-out"
                    onClick={handleClickPrevious}
                >
                    Previous
                </button>
                <button
                    className="bg-zinc-600 px-4 py-2 rounded-lg mx-1 hover:bg-zinc-800 hover:scale-105 duration-200 ease-in-out"
                    onClick={handleClickNext}
                >
                    Next
                </button>
            </div>

            <m.div
                className="fixed inset-0 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeModal}
            ></m.div>
        </>
    );
};
