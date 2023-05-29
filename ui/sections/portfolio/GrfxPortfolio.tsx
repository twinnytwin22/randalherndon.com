import React, { useState } from 'react';
import { m } from 'framer-motion';

function GrfxPortfolio({ visibleItems }: any) {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const handleClick = (item: any) => {
        setSelectedItem(item);
    };

    const handleClose = () => {
        setSelectedItem(null);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = visibleItems.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <m.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 9999, position: "relative" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-6 relative w-full"
            >
                {currentItems.map((p: any) => (
                    <div
                        key={p.image}
                        style={{
                            backgroundImage: `url(${p.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="relative p-8 mx-auto bg-slate-200 text-white text-2xl text-center font-bold w-48 h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72 hover:scale-105 duration-300 ease-in-out cursor-pointer flex items-end justify-center"
                        onClick={() => handleClick(p)}
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

            {/* Pagination */}
            <div className="pagination">
                {visibleItems.length > itemsPerPage &&
                    Array(Math.ceil(visibleItems.length / itemsPerPage))
                        .fill(null)
                        .map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`pagination-item ${currentPage === index + 1 ? "active" : ""
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
            </div>

            {selectedItem && (
                <Popup selectedItem={selectedItem} handleClose={handleClose} />
            )}
        </div>
    );
}

function Popup({ selectedItem, handleClose }: any) {
    return (
        <div className="popup absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] font-owners font-bold bg-white dark:bg-black text-black dark:text-white p-5 rounded-lg">
            <div className="popup-content relative z-[90]">
                <h2>{selectedItem.title}</h2>
                <img className="w-96" src={selectedItem.image} alt={selectedItem.title} />
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default GrfxPortfolio;
