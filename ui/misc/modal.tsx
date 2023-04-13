"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "../sections/ContactPageForm";

const Modal = ({ handleClose }: { handleClose: () => void }) => {
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 w-full h-sm max-w-3xl dark:bg-black border dark:border-gray-900"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      style={{ zIndex: 9999, position: "relative" }}
    >
      <ContactForm style={{ zIndex: 10000 }} />{" "}
      <button
        className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        onClick={handleClose}
      >
        Close
      </button>
    </motion.div>
    <motion.div
      className="fixed inset-0  opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleClose}
    ></motion.div>
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
        className={`rounded-lg p-4 h-fit text-sm ${bgColors[headlineIndex]} ${buttonTextColors[headlineIndex]}`}
        onClick={handleOpenModal}
      >
        Let's Chat!
      </button>
      <AnimatePresence>
        {isOpen && <Modal handleClose={handleCloseModal} />}
      </AnimatePresence>
    </div>
  );
};

export default ContactButton;
