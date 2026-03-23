"use client";

import React from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/footer/logo.svg'
import it_park from '../../assets/icons/footer/it_park.svg'
import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white pt-10 md:pt-15 pb-8 md:pb-10">
      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 md:pb-20 border-b border-[#F2F4F7]">
          <div className='col-span-2 md:col-span-1 flex flex-col gap-6 md:gap-8'>
            <Image src={logo} alt="Devline Logo" width={100} height={24} />
            <div className="flex items-center gap-3 bg-white p-2.5 pr-4 rounded-xl shadow-sm border border-[#EAECF0] w-max hover:shadow-md transition-shadow">
              <Image src={it_park} alt="IT Park Resident" width={36} height={36} className="rounded-md object-contain" />
              <p className="text-[13px] font-medium text-[#344054] leading-tight w-[100px]">
                {t('footer.itParkResident')}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[16px] md:text-[18px] font-bold text-[#101828] mb-4 md:mb-6">{t('footer.sections')}</h4>
            <ul className="space-y-3 md:space-y-4 text-[#667085] text-[14px] md:text-[16px]">
              <li><a href="#about" className="hover:text-[#0000B2] transition-colors">{t('header.about')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('header.service')}</a></li>
              <li><a href="#projects" className="hover:text-[#0000B2] transition-colors">{t('header.projects')}</a></li>
              <li><a href="#partners" className="hover:text-[#0000B2] transition-colors">{t('header.partners')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] md:text-[18px] font-bold text-[#101828] mb-4 md:mb-6">{t('footer.service')}</h4>
            <ul className="space-y-3 md:space-y-4 text-[#667085] text-[14px] md:text-[16px]">
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.websites')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.mobileApps')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.ecommerce')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.crm')}</a></li>
              <li><a href="#services" className="hover:text-[#0000B2] transition-colors">{t('footer.erp')}</a></li>
            </ul>
          </div>

          <div className='col-span-2 md:col-span-1'>
            <h4 className="text-[16px] md:text-[18px] font-bold text-[#101828] mb-4 md:mb-6">{t('footer.location')}</h4>
            <p className="text-[#667085] text-[14px] md:text-[16px] leading-relaxed">
              {t('footer.address')}
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 md:gap-12 py-10 md:py-20 border-b border-[#F2F4F7]">
          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-auto">
            <p className="text-[#667085] mb-3 md:mb-4">{t('footer.mail')}</p>
            <a href="mailto:info@devline.uz" className="text-[22px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold text-[#0000B2] hover:underline decoration-2 underline-offset-8 break-all md:break-normal">
              info@devline.uz
            </a>
          </div>

          <div className="w-full md:w-[calc(50%-1.5rem)] lg:w-auto">
            <p className="text-[#667085] mb-3 md:mb-4">{t('footer.phone')}</p>
            <a href="tel:+998990116606" className="text-[22px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-bold text-[#0000B2] whitespace-nowrap">
              +998(99) 011-66-06
            </a>
          </div>

          <div className="w-full lg:w-auto md:mt-4 lg:mt-0">
            <p className="text-[#667085] mb-4 md:mb-6">{t('footer.social')}</p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://www.instagram.com/devlineuz" target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#0000B2] flex items-center justify-center text-white hover:bg-[#00008C] transition-all transform hover:scale-110">
                <FaInstagram size={20} className='md:hidden' />
                <FaInstagram size={24} className='hidden md:block' />
              </a>
              <a href="https://www.linkedin.com/company/devline-uz/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#0000B2] flex items-center justify-center text-white hover:bg-[#00008C] transition-all transform hover:scale-110">
                <FaLinkedinIn size={20} className='md:hidden' />
                <FaLinkedinIn size={24} className='hidden md:block' />
              </a>
              <a href="https://t.me/devlineuz" target="_blank" rel="noopener noreferrer" className="w-11 h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#0000B2] flex items-center justify-center text-white hover:bg-[#00008C] transition-all transform hover:scale-110">
                <FaTelegramPlane size={20} className='md:hidden' />
                <FaTelegramPlane size={24} className='hidden md:block' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 text-[#667085] text-[13px] md:text-[14px]">
          <p>© 2025 Devline IT Company</p>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
