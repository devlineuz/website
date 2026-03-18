"use client";

import React from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/footer/logo.svg'
import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white pt-15 pb-10">
      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20 border-b border-[#F2F4F7]">
          <div>
            <Image src={logo} alt="Devline Logo" width={100} height={24} className="mb-6" />
          </div>

          <div>
            <h4 className="text-[18px] font-bold text-[#101828] mb-6">{t('footer.sections')}</h4>
            <ul className="space-y-4 text-[#667085] text-[16px]">
              <li><a href="#about" className="hover:text-[#0000B2] transition-colors">{t('header.about')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('header.service')}</a></li>
              <li><a href="#projects" className="hover:text-[#0000B2] transition-colors">{t('header.projects')}</a></li>
              <li><a href="#clients" className="hover:text-[#0000B2] transition-colors">{t('header.clients')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold text-[#101828] mb-6">{t('footer.service')}</h4>
            <ul className="space-y-4 text-[#667085] text-[16px]">
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.websites')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.mobileApps')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.ecommerce')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.crm')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.erp')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold text-[#101828] mb-6">{t('footer.location')}</h4>
            <p className="text-[#667085] text-[16px] leading-relaxed">
              {t('footer.address')}
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 border-b border-[#F2F4F7]">
          <div>
            <p className="text-[#667085] mb-4">{t('footer.mail')}</p>
            <a href="mailto:info@devline.uz" className="text-[32px] md:text-[48px] font-bold text-[#0000B2] hover:underline decoration-2 underline-offset-8">
              info@devline.uz
            </a>
          </div>

          <div>
            <p className="text-[#667085] mb-4">{t('footer.phone')}</p>
            <a href="tel:+782078080" className="text-[32px] md:text-[48px] font-bold text-[#0000B2] whitespace-nowrap">
              +(99) 011-66-06
            </a>
          </div>

          <div>
            <p className="text-[#667085] mb-6">{t('footer.social')}</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/devlineuz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0000B2] flex items-center justify-center text-white hover:bg-[#00008C] transition-all transform hover:scale-110">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/devline-uz/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0000B2] flex items-center justify-center text-white hover:bg-[#00008C] transition-all transform hover:scale-110">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://t.me/devlineuz" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0000B2] flex items-center justify-center text-white hover:bg-[#00008C] transition-all transform hover:scale-110">
                <FaTelegramPlane size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 text-[#667085] text-[14px]">
          <p>© 2025 Devline IT Company</p>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
