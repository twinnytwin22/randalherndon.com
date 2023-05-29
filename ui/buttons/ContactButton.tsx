'use client'
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Modal } from "./modal";

const ContactButton = ({ bgColors, buttonTextColors, headlineIndex }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex">
            <button
                className={`rounded-lg p-4 h-fit text-sm relative hover:scale-105 duration-200 ease-in-out ${bgColors ? bgColors[headlineIndex] : 'bg-black dark:bg-white'} ${buttonTextColors ? buttonTextColors[headlineIndex] : "text-white dark:text-black "}`}
                onClick={handleOpenModal}
            >
                <h1 className="font-[owners-wide]">Let's Chat!</h1>
            </button>
            <AnimatePresence>
                {isOpen && <Modal handleCloseModal={handleCloseModal} />}
            </AnimatePresence>
        </div>
    );
};

export default ContactButton;
