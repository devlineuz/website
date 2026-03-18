"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactModal from './Contact';

const ContactSection = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#000099] to-[#0517C7]">
                <div className="container relative z-10 py-[100px]">
                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm overflow-hidden"
                    >
                        {/* Inner glow */}
                        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#23ADFB]/15 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] bg-[#061DF9]/30 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 px-[60px] lg:px-[100px] py-[80px] lg:py-[100px] flex flex-col lg:flex-row items-center justify-between gap-[50px]">
                            {/* Left: Text */}
                            <div className="flex flex-col gap-[20px] lg:max-w-[55%]">
                                <p className='font-medium text-[18px] tracking-[-0.02em] text-white/40 uppercase'>
                                    {t('contact.label')}
                                </p>
                                <h2 className="text-white font-extrabold text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.04em]">
                                    {t('contact.weWill')}{' '}
                                    {t('contact.contactYou')}
                                </h2>
                                <p className="text-white/40 text-[18px] lg:text-[20px] leading-[1.6]">
                                    {t('contact.subtitle')}
                                </p>
                            </div>

                            {/* Right: Button + decorative ring */}
                            <div className="relative flex items-center justify-center">
                                {/* Decorative rings */}
                                <div className="absolute w-[280px] h-[280px] border border-white/[0.06] rounded-full pointer-events-none animate-[spin_30s_linear_infinite]" />
                                <div className="absolute w-[220px] h-[220px] border border-white/[0.04] rounded-full pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />

                                {/* Small orbiting dots */}
                                <div className="absolute w-[280px] h-[280px] animate-[spin_15s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white/30 rounded-full" />
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-white/20 rounded-full" />
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative z-10 w-[180px] h-[180px] rounded-full bg-white text-[#0517C7] font-bold text-[20px] flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.15)] hover:shadow-[0_0_120px_rgba(255,255,255,0.25)] hover:scale-110 transition-all duration-500 cursor-pointer"
                                >
                                    {t('header.contact')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default React.memo(ContactSection);
