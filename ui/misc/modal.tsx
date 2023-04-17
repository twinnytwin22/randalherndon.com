"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import ContactForm from "../sections/ContactPageForm";

const Modal = ({ handleClose }: { handleClose: () => void }) => {


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-8 isolate">
    <m.div
      className="bg-slate-100 dark:bg-neutral-950 rounded-lg shadow-lg p-6 w-full h-sm max-w-3xl flex flex-col  border dark:border-gray-900"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      style={{ zIndex: 9999, position: "relative" }}
    >
      <ContactForm style={{ zIndex: 10000 }} />{" "}
      <button
        className="bg-blue-500 text-white px-4 py-2 text-sm w-24 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleClose}
      >
        Close
      </button>
    </m.div>
    <m.div
      className="fixed inset-0  opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleClose}
    ></m.div>
  </div>
  );
};

const ContactButton = ({ bgColors, buttonTextColors, headlineIndex }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className={`rounded-lg p-4 h-fit text-sm hover:scale-105 ${bgColors ? bgColors[headlineIndex] : 'bg-black dark:bg-white'} ${buttonTextColors ? buttonTextColors[headlineIndex] : "text-white dark:text-black "}`}
        onClick={handleOpenModal}
      >
        <h1 className="font-[owners-wide]">Let's Chat!</h1>
      </button>
      <AnimatePresence>
        {isOpen && <Modal handleClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
