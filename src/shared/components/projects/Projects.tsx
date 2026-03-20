"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Project images
import expert_test from '@/shared/assets/images/projects/expert_test.png';
import techjobs from '@/shared/assets/images/projects/techjobs.png';
import smart_taxi from '@/shared/assets/images/projects/smart_taxi.jpg';
import uzcont_play from '@/shared/assets/images/projects/uzcont_play.jpg';

const Projects = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 'expert_test',
            title: t('projects.list.expert_test.title'),
            image: expert_test,
        },
        {
            id: 'techjobs',
            title: t('projects.list.techjobs.title'),
            image: techjobs,
        },
        {
            id: 'smart_taxi',
            title: t('projects.list.smart_taxi.title'),
            image: smart_taxi,
        },
        {
            id: 'uzcont_play',
            title: t('projects.list.uzcont_play.title'),
            image: uzcont_play,
        }
    ];

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section
            id='projects'
            className='relative min-h-screen overflow-hidden py-16 md:py-24 lg:py-[150px] px-4'
            style={{ background: 'linear-gradient(180deg, #CDDFF2 0%, #FFFFFF 30%, #FFFFFF 100%)' }}
        >
            <div className='container relative z-10'>
                <div className='flex flex-col gap-8 md:gap-12 lg:gap-20'>
                    {/* Header Section */}
                    <div className='flex flex-col gap-6 md:gap-12 w-full'>
                        {/* Label with Circle - Top Left */}
                        <div className='flex items-center gap-3 self-start'>
                            <span className='text-[16px] md:text-[20px] lg:text-[22px] font-medium text-[#222B59A1] tracking-[-0.02em] leading-4'>
                                {t('projects.label')}
                            </span>
                        </div>

                        {/* Main Heading - Centered */}
                        <div className='flex flex-col items-center text-center w-full px-0 md:px-4'>
                            <h2 className='text-[28px] md:text-[44px] lg:text-[64px] font-bold text-[#0517C7] leading-[1.15] tracking-tight max-w-[1000px]'>
                                {t('projects.title')}
                            </h2>
                        </div>

                        {/* Thin Separator Line */}
                        <div className='w-full h-px bg-[#0517C7]/10' />
                    </div>

                    {/* Content Section */}
                    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16'>
                        {/* High-Quality CSS MacBook Pro Mockup */}
                        <div className='relative w-full lg:w-[65%] flex items-center justify-center'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.6 }}
                                    className='relative w-full max-w-[900px]'
                                >
                                    {/* MacBook Screen */}
                                    <div className='relative w-full aspect-16/10 bg-black rounded-[12px] md:rounded-[24px] p-[1.2%] border-4 md:border-12 border-[#1E2229] shadow-[0_20px_40px_rgba(5,23,199,0.15)] md:shadow-[0_40px_80px_rgba(5,23,199,0.15)] overflow-hidden ring-1 ring-black/5'>
                                        {/* Camera hole */}
                                        <div className='absolute top-1.5 md:top-2 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#333] z-20' />

                                        <div className='w-full h-full rounded-[6px] md:rounded-[10px] overflow-hidden bg-[#f0f0f0]'>
                                            <Image
                                                src={projects[currentIndex].image}
                                                alt={projects[currentIndex].title}
                                                className='w-full h-full object-cover object-top hover:object-bottom transition-all duration-3000 ease-in-out cursor-ns-resize'
                                            />
                                        </div>
                                    </div>

                                    {/* MacBook Base */}
                                    <div className='relative w-[106%] left-[-3%] h-2 md:h-4 bg-[#1E2229] rounded-b-[4px] md:rounded-b-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-t border-black/5 flex justify-center'>
                                        {/* Hinge notch */}
                                        <div className='absolute top-[-2px] md:top-[-3px] w-[22%] h-[4px] md:h-[6px] bg-[#161A1F] rounded-t-[4px]' />
                                    </div>
                                    {/* Additional base depth */}
                                    <div className='relative w-full left-0 h-0.5 md:h-1 bg-[#0F1216] rounded-b-[10px] opacity-40' />

                                    {/* Bottom Shadow */}
                                    <div className='absolute bottom-[-15px] md:bottom-[-30px] left-[5%] right-[5%] h-8 md:h-16 bg-[#0517C7]/10 blur-2xl rounded-full pointer-events-none' />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Project Details Card */}
                        <div className='w-full lg:w-[32%] flex flex-col gap-6 md:gap-8'>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className='bg-white/70 backdrop-blur-md p-6 md:p-10 lg:p-12 rounded-[24px] md:rounded-[40px] border border-[#0517C7]/5 shadow-[0_20px_50px_rgba(5,23,199,0.06)] relative overflow-hidden group'
                                >
                                    {/* Hover gradient line */}
                                    <div className='absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-[#0517C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

                                    <h3 className='text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#0517C7] mb-6 md:mb-10 leading-tight'>
                                        {projects[currentIndex].title}
                                    </h3>

                                    {/* Navigation Arrows inside card */}
                                    <div className='flex gap-4 md:gap-6 items-center'>
                                        <button
                                            onClick={prevProject}
                                            className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-[#0517C7]/10 flex items-center justify-center text-[#0517C7]/40 hover:text-[#0517C7] hover:border-[#0517C7] transition-all hover:scale-110 active:scale-95 bg-white shadow-sm'
                                        >
                                            <IoIosArrowBack size={24} />
                                        </button>
                                        <button
                                            onClick={nextProject}
                                            className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border border-[#0517C7]/10 flex items-center justify-center text-[#0517C7]/40 hover:text-[#0517C7] hover:border-[#0517C7] transition-all hover:scale-110 active:scale-95 bg-white shadow-sm'
                                        >
                                            <IoIosArrowForward size={24} />
                                        </button>

                                        <div className='ml-auto text-[#0517C7]/20 font-medium text-base md:text-lg'>
                                            {currentIndex + 1} / {projects.length}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Projects);