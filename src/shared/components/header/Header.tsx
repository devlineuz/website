"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/header/logo.svg'
import ContactModal from '../contact/Contact';
import { useTranslation } from 'react-i18next';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const currentLanguage = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 w-full pt-4 pointer-events-none'>
                <div className='container pointer-events-auto'>
                    <div className="flex justify-between items-center bg-[#0517C7] p-[8px_8px_8px_16px] lg:p-[8px_8px_8px_32px] rounded-[60px] border border-white/10 shadow-lg">
                        {/* Logo + Nav */}
                        <nav className='flex items-center gap-4 lg:gap-[60px]'>
                            <div className='shrink-0'>
                                <Image src={logo} alt="Devline Logo" />
                            </div>
                            {/* Desktop nav links */}
                            <ul className='hidden lg:flex gap-5 text-white/80'>
                                <li><a href="#about" className='hover:text-white transition-colors duration-300'>{t('header.about')}</a></li>
                                <li><a href="#services" className='hover:text-white transition-colors duration-300'>{t('header.service')}</a></li>
                                <li><a href="#projects" className='hover:text-white transition-colors duration-300'>{t('header.projects')}</a></li>
                                <li><a href="#partners" className='hover:text-white transition-colors duration-300'>{t('header.partners')}</a></li>
                            </ul>
                        </nav>

                        {/* Desktop right side */}
                        <div className='hidden lg:flex gap-4 items-center'>
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

                        {/* Mobile hamburger button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 mr-1'
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <HiOutlineXMark size={24} /> : <HiOutlineBars3 size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu panel */}
                <div
                    className={`absolute top-0 right-0 w-[85%] max-w-[380px] h-full bg-[#0517C7] shadow-2xl transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className='flex flex-col h-full pt-24 pb-8 px-8'>
                        {/* Nav Links */}
                        <ul className='flex flex-col gap-2'>
                            {[
                                { href: '#about', label: t('header.about') },
                                { href: '#services', label: t('header.service') },
                                { href: '#projects', label: t('header.projects') },
                                { href: '#partners', label: t('header.partners') },
                            ].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className='block py-4 px-4 text-white/90 text-[20px] font-medium hover:bg-white/10 rounded-2xl transition-all duration-300'
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Divider */}
                        <div className='h-px bg-white/10 my-6' />

                        {/* Language Switcher */}
                        <div className='flex items-center bg-[#ffffff0d] p-[4px] gap-[2px] rounded-[24px] border border-white/10 text-white/60 text-[16px] font-medium w-fit'>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`px-4 py-2 rounded-[24px] transition-all duration-300 leading-none ${currentLanguage === 'en' ? 'bg-[#0000B2] text-white shadow-lg' : 'hover:bg-white/10 hover:text-white/80'}`}
                            >
                                {t('header.english')}
                            </button>
                            <span className="w-[3px] h-[3px] bg-white/20 rounded-full"></span>
                            <button
                                onClick={() => changeLanguage('uz')}
                                className={`px-4 py-2 rounded-[24px] transition-all duration-300 leading-none ${currentLanguage === 'uz' ? 'bg-[#0000B2] text-white shadow-lg' : 'hover:bg-white/10 hover:text-white/80'}`}
                            >
                                {t('header.uzbek')}
                            </button>
                            <span className="w-[3px] h-[3px] bg-white/20 rounded-full"></span>
                            <button
                                onClick={() => changeLanguage('ru')}
                                className={`px-4 py-2 rounded-[24px] transition-all duration-300 leading-none ${currentLanguage === 'ru' ? 'bg-[#0000B2] text-white shadow-lg' : 'hover:bg-white/10 hover:text-white/80'}`}
                            >
                                {t('header.russian')}
                            </button>
                        </div>

                        {/* Spacer */}
                        <div className='flex-1' />

                        {/* Contact Button */}
                        <button
                            onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                            className='w-full rounded-full py-4 bg-[#FFFFFFF2] backdrop-blur-2xl font-semibold text-[18px] text-[#002380] hover:bg-white transition-colors'
                        >
                            {t('header.contact')}
                        </button>
                    </div>
                </div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default React.memo(Header)