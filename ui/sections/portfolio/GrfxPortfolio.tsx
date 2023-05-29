import React from 'react'
import { m } from 'framer-motion'

function GrfxPortfolio({ visibleItems, handleItemClick }: any) {
    return (
        <div>
            <m.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 9999, position: "relative" }}
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-6 relative w-full"
            >
                {visibleItems.map((p: any) => (
                    <div
                        onClick={handleItemClick}
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
            </m.div></div>
    )
}

export default GrfxPortfolio