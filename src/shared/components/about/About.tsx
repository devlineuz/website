"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Images
import man1 from '../../assets/images/about/man1.png';
import man2 from '../../assets/images/about/man2.png';
import man3 from '../../assets/images/about/man3.png';
import woman1 from '../../assets/images/about/woman1.png';

const About = () => {
    const { t } = useTranslation();

    const items = [
        {
            image: man1,
            text: t('about.grid.item1'),
            gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.01%, #0013CC 100%)'
        },
        {
            image: man2,
            text: t('about.grid.item2'),
            gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.21%, #29303D 100%)'
        },
        {
            image: man3,
            text: t('about.grid.item3'),
            gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 49.89%, #3803B4 100%)'
        },
        {
            image: woman1,
            text: t('about.grid.item4'),
            gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%)'
        }
    ];

    return (
        <section id='about' className='py-[150px_0px] px-4 bg-white overflow-hidden'>
            <div className='container mx-auto max-w-[1440px]'>
                {/* Header with Circle Label */}
                <div className='flex flex-col gap-10 mb-16'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center gap-3 self-start'>
                            <span className='text-[18px] lg:text-[20px] font-medium text-[#667499] tracking-[-0.02em]'>
                                {t('about.label')}
                            </span>
                        </div>
                        <div className='w-full h-px bg-[#E5E7EB]' />
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-start gap-12'>
                        <h2 className='text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-[#001C66] leading-[1.1] tracking-[-0.04em] max-w-[800px]'>
                            {t('about.title')}
                        </h2>
                    </div>
                </div>

                {/* Staggered Image Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24'>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative aspect-387/640 rounded-[32px] overflow-hidden group ${index === 1 ? 'lg:mt-16' : index === 2 ? 'lg:mt-0' : index === 3 ? 'lg:mt-12' : 'lg:mt-4'
                                }`}
                        >
                            <Image
                                src={item.image}
                                alt={`About item ${index + 1}`}
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                            {/* Gradient Overlay */}
                            <div
                                className='absolute inset-0 transition-opacity duration-300 opacity-90 group-hover:opacity-100'
                                style={{ background: item.gradient }}
                            />
                            {/* Text Content */}
                            <div className='absolute bottom-0 left-0 p-8'>
                                <p className='text-white text-[20px] lg:text-[24px] font-bold leading-tight max-w-[280px]'>
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Footer Text */}
                <div className='flex justify-end'>
                    <h3 className='text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#001C66] leading-[1.2] tracking-[-0.02em] max-w-[900px] text-right'>
                        {t('about.footer')}
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);
