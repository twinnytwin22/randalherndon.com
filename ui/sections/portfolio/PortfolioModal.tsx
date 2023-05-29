"use client";
import { useState } from "react";
import { branding, gfx } from "./projects";
import { m } from "framer-motion";
import GrfxPortfolio from "./GrfxPortfolio";
import BrandingPortfolio from "./BrandingPortfolio";

interface ItemsPerPageByTitle {
    [key: string]: number;
}

const itemsPerPageByTitle: ItemsPerPageByTitle = {
    Branding: 1,
    "Graphic Design": 4,
};


export const ModalSection = ({ title, closeModal }: any) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemOpen, setItemOpen] = useState(false)
    const itemsPerPage = itemsPerPageByTitle[title] || 4; // Default to 4 items per page if the title is not found
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
    const handleItemClick = () => {
        console.log('item open')
        setItemOpen(true)

    }
    return (
        <>
            {title === 'Graphic Design' && <GrfxPortfolio visibleItems={visibleItems} />}
            {title === "Branding" && <BrandingPortfolio visibleItems={visibleItems} />}
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
