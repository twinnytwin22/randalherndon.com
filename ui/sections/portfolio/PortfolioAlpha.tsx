'use client'
import { DownloadButton } from '@/ui/buttons/DownloadButton';
import LinkedInButton from '@/ui/buttons/LinkedIn';
import ContactButton from '@/ui/buttons/modal';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { branding, gfx } from './projects';

const array = [
    {
        title: 'Web Development',
        image: '/images/portfolio/twinny/twinny_3_mock.png'
    },
    {
        title: 'Branding',
        image: '/images/branding.jpg'
    },
    {
        title: 'Graphic Design',
        image: '/images/graphicdesign.png'
    }
];
function PortfolioAlpha() {
    const image = 'https://i.imgur.com/95fCHa1.png';


    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');

    const handleGridItemClick = (project: any) => {
        if (project.title === 'Web Development') {
            return; // or handle the navigation logic specific to your project structure
        } else {
            setSelectedProject(project.title);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        // Handle navigating to the selected project on initial page load
        const urlParams = new URLSearchParams(window.location.search);
        const selectedProjectFromURL = urlParams.get('project');
        if (selectedProjectFromURL) {
            setSelectedProject(selectedProjectFromURL);
            setShowModal(true);
        }
    }, []);

    return (
        <div id="portfolio">
            <h1 className="text-3xl text-center pb-8">Portfolio</h1>

            <div className="grid lg:grid-cols-3 gap-8 pb-6 ">
                {array.map((m) => (
                    <a href={m.title === 'Web Development' ? '#web' : '#'} key={m.title} className='rounded-lg'>
                        <div
                            style={{
                                backgroundImage: `url(${m.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className="relative rounded-lg dark:rounded-lg p-8 mx-auto bg-slate-200 text-white text-2xl text-center font-bold h-32 w-96 md:h-36 lg:w-72 lg:h-72 xl:w-96 xl:h-96 hover:scale-105 duration-300 ease-in-out cursor-pointer flex items-center justify-center"
                            onClick={() => handleGridItemClick(m)}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-40" />
                            <h1 className="relative z-10 [text-shadow:_2px_4px_2px_rgb(0_0_0_/_60%)]" style={{ textShadow: '8px' }}>{m.title}</h1>
                        </div>
                    </a>
                ))}
            </div>
            <div className="flex space-x-2 mx-auto w-full justify-center">
                <ContactButton />
                <LinkedInButton />
                <DownloadButton />
            </div>

            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-zinc-950 p-8 max-w-7xl w-full">
                        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Project: {selectedProject}</h2>
                        {selectedProject && <ModalSection handleGridItemClick={handleGridItemClick} title={selectedProject} />}



                        {/* Add sliders of project images and project info here */}
                        <button
                            className="bg-zinc-500 hover:bg-zinc-600 text-white rounded-lg px-4 py-2 justify-center mx-auto"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PortfolioAlpha;


const ModalSection = ({ handleGridItemClick, title }: any) => {
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 1;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = title === "Branding" ? branding.slice(startIndex, endIndex) : gfx.slice(startIndex, endIndex);
    const totalPages = Math.ceil(visibleItems?.length / itemsPerPage);

    const handleClickNext = () => {
        if (currentPage === totalPages - 1) {
            setCurrentPage(0); // Reset to first page
        } else {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handleClickPrevious = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };
    ;

    return (
        <div className="grid grid-cols-1 gap-8 pb-6">
            {visibleItems.map((m) => (
                <div key={m.title}
                    className="relative p-8 mx-auto bg-slate-200 text-white text-2xl text-center font-bold w-72 h-72 hover:scale-105 duration-300 ease-in-out cursor-pointer flex items-center justify-center"
                    onClick={() => handleGridItemClick(m)}
                >
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        style={{
                            zIndex: 1,
                        }}
                    ></div>
                    <h1 className="relative z-10">{m.title}</h1>
                </div>
            ))}
            <div className="flex justify-center font-[owners-wide] font-bold">
                <button
                    className="bg-zinc-600 px-4 py-2 rounded-lg mx-1 hover:bg-zinc-800 hover:scale-105 duration-200 ease-in-out "
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
        </div>
    );
};


const GFXSection = (handleGridItemClick: any) => {
    return (
        <div className="grid grid-cols-3 gap-8 pb-6">
            {array.map((m) => (
                <a href={m.title === 'Web Development' ? '#web' : '#'} key={m.title}>
                    <div
                        className="relative p-8 mx-auto bg-slate-200 text-white text-2xl text-center font-bold w-72 h-72 hover:scale-105 duration-300 ease-in-out cursor-pointer flex items-center justify-center"
                        onClick={() => handleGridItemClick(m)}
                    >
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50"
                            style={{
                                zIndex: 1,
                            }}
                        ></div>
                        <h1 className="relative z-10">{m.title}</h1>
                    </div>
                </a>
            ))}
        </div>

    )
}