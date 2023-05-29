import { AnimatePresence, m } from "framer-motion";

export const NavContent = ({ setShowNavContent }: any) => {
    return (
        <AnimatePresence>
            <m.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    duration: 0.05,
                    ease: [0.6, -0.05, 0.01, 0.99],
                    scale: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="fixed mx-auto top-20 right-0 left-0 bg-slate-200 dark:bg-black h-4/5  w-[90vw] max-w-lg md:max-w-5xl justify-center items-center content-center flex rounded-lg border border-slate-300 dark:border-gray-900 shadow-slate-300 dark:shadow-gray-900 shadow-lg opacity-90 ease-in-out duration-500 transition"
            >
                <nav className="max-w-7xl w-full mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center font-extrabold text-4xl md:text-5xl lg:text-6xl text-center gap-y-20 font-owners-wide">
                        <div className="mx-4  hover:scale-105">
                            <a href="#about">About</a>
                        </div>
                        <div className="mx-4  hover:scale-105">
                            <a href="#skills">Experience</a>
                        </div>
                        <div className="mx-4  hover:scale-105">
                            <a href="#services">Services</a>
                        </div>
                        <div className="mx-4 hover:scale-105">
                            <a href="#portfolio">Portfolio</a>
                        </div>
                        <div className="mx-4 hover:scale-105">
                            <a href="#intro">Contact</a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">

                    </div>
                </nav>
            </m.div>
        </AnimatePresence>
    );
};



