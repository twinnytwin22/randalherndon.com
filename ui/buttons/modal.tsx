"use client"
import { m } from "framer-motion";
import ContactForm from "../sections/ContactPageForm";

export const Modal = ({ handleCloseModal }: any) => {


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
          onClick={handleCloseModal}
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
        onClick={handleCloseModal}
      ></m.div>
    </div>
  );
};

