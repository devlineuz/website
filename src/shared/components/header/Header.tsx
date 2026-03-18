"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/header/logo.svg'
import ContactModal from '../contact/Contact';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentLanguage = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 w-full pt-4 pointer-events-none'>
                <div className='container pointer-events-auto'>
                    <div className="flex justify-between items-center bg-[#0517C7] p-[8px_8px_8px_32px] rounded-[60px] border border-white/10 shadow-lg">
                        <nav className='flex gap-[60px]'>
                            <div>
                                <Image src={logo} alt="Devline Logo" />
                            </div>
                            <ul className='flex gap-5 text-white/80'>
                                <li><a href="#about" className='hover:text-white transition-colors duration-300'>{t('header.about')}</a></li>
                                <li><a href="#services" className='hover:text-white transition-colors duration-300'>{t('header.service')}</a></li>
                                <li><a href="#projects" className='hover:text-white transition-colors duration-300'>{t('header.projects')}</a></li>
                                <li><a href="#clients" className='hover:text-white transition-colors duration-300'>{t('header.clients')}</a></li>
                            </ul>
                        </nav>
                        <div className='flex gap-4 items-center'>
                            <div className='flex items-center bg-[#ffffff0d] p-[4px] gap-[2px] rounded-[24px] border border-white/10 text-white/60 text-[18px] font-medium'>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={`px-4 py-[7.5px] rounded-[24px] transition-all duration-300 leading-none tracking-[-3%] ${currentLanguage === 'en' ? 'bg-[#0000B2] text-white shadow-lg' : 'hover:bg-white/10 hover:text-white/80'}`}
                                >
                                    {t('header.english')}
                                </button>
                                <span className="w-[3px] h-[3px] bg-white/20 rounded-full mx-auto"></span>
                                <button
                                    onClick={() => changeLanguage('uz')}
                                    className={`px-4 py-[7.5px] rounded-[24px] transition-all duration-300 leading-none tracking-[-3%] ${currentLanguage === 'uz' ? 'bg-[#0000B2] text-white shadow-lg' : 'hover:bg-white/10 hover:text-white/80'}`}
                                >
                                    {t('header.uzbek')}
                                </button>
                                <span className="w-[3px] h-[3px] bg-white/20 rounded-full mx-auto"></span>
                                <button
                                    onClick={() => changeLanguage('ru')}
                                    className={`px-4 py-[7.5px] rounded-[24px] transition-all duration-300 leading-none tracking-[-3%] ${currentLanguage === 'ru' ? 'bg-[#0000B2] text-white shadow-lg' : 'hover:bg-white/10 hover:text-white/80'}`}
                                >
                                    {t('header.russian')}
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className='rounded-[60px] p-[13.5px_70.5px] bg-[#FFFFFFF2] backdrop-blur-2xl font-semibold text-[18px] leading-[100%] tracking-[-5%] text-[#002380] hover:bg-white transition-colors'
                                >
                                    {t('header.contact')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default React.memo(Header)