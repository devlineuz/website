
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import hero_img from '../../assets/images/hero/hero.svg';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative bg-[#0517C7] overflow-hidden flex flex-col">
            {/* Top/Main Content Area */}
            <div className="grow flex items-center pt-24 lg:pt-28 pb-8 lg:pb-12">
                <div className="container relative z-10 px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        {/* Left Content (and Mobile Main Wrapper) */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10 relative z-20">
                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-white text-[42px] md:text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-[-0.04em]"
                            >
                                {t('hero.title_part1')} {t('hero.title_and')} {t('hero.title_part2')} {t('hero.title_for')} {t('hero.title_part3')}
                            </motion.h1>

                            {/* Mobile Image (Visible only on mobile) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="lg:hidden w-full relative z-10"
                            >
                                <div className="relative z-10 drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                                    <Image
                                        src={hero_img}
                                        alt="Devline IT Solutions"
                                        className="w-full h-auto object-contain mx-auto scale-125"
                                        priority
                                    />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#23ADFB]/25 blur-[120px] rounded-full pointer-events-none" />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white/70 text-[18px] lg:text-[20px] leading-relaxed max-w-[600px]"
                            >
                                {t('hero.description')}
                            </motion.p>
                        </div>

                        {/* Desktop Image (Visible only on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="hidden lg:block w-full lg:w-[70%] lg:-ml-[8%] lg:-mr-[12%] lg:-mt-16 relative z-10"
                        >
                            <div className="relative z-10 drop-shadow-[0_50px_80px_rgba(0,0,0,0.4)]">
                                <Image
                                    src={hero_img}
                                    alt="Devline IT Solutions"
                                    className="w-full h-auto object-contain max-w-[1100px] mx-auto lg:mx-0"
                                    priority
                                />
                            </div>

                            {/* Decorative background glow for the image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#23ADFB]/20 blur-[120px] rounded-full pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Hero);
