"use client";

import React from 'react'
import { useTranslation } from 'react-i18next'
import {
    HiOutlineComputerDesktop,
    HiOutlineShoppingCart,
    HiOutlineDevicePhoneMobile,
    HiOutlineUsers,
    HiOutlineCircleStack
} from "react-icons/hi2";

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('services.list.websites.title'),
            description: t('services.list.websites.description'),
            icon: <HiOutlineComputerDesktop size={40} className="text-white" />,
        },
        {
            title: t('services.list.ecommerce.title'),
            description: t('services.list.ecommerce.description'),
            icon: <HiOutlineShoppingCart size={40} className="text-white" />,
        },
        {
            title: t('services.list.mobileApps.title'),
            description: t('services.list.mobileApps.description'),
            icon: <HiOutlineDevicePhoneMobile size={40} className="text-white" />,
        },
        {
            title: t('services.list.crm.title'),
            description: t('services.list.crm.description'),
            icon: <HiOutlineUsers size={40} className="text-white" />,
        },
        {
            title: t('services.list.erp.title'),
            description: t('services.list.erp.description'),
            icon: <HiOutlineCircleStack size={40} className="text-white" />,
        }
    ]

    return (
        <section id='services' className='py-[150px] bg-[#000099]'>
            <div className='container'>
                <div className='flex flex-col gap-[80px]'>
                    <div className='flex flex-col gap-[50px] text-white'>
                        <p className='inline-block font-medium text-[20px] leading-[20px] tracking-[-0.02em] text-[#FFFFFFB2]'>◯  {t('services.label')}</p>
                        <h2 className='font-extrabold text-[64px] leading-[64px] tracking-[-4%] pl-[30px] max-w-[909px]'>{t('services.mainTitle')}</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                        {services.map((service, index) => (
                            <div key={index} className='bg-[#1313A0] border border-[#FFFFFF1A] backdrop-blur-[20px] rounded-[20px] py-[50px] px-[40px] flex flex-col gap-[30px] hover:bg-[#1a1ab8] transition-all duration-300'>
                                <div className='flex items-center gap-[20px]'>
                                    <div className='w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0'>
                                        {service.icon}
                                    </div>
                                    <h3 className='font-bold italic text-[40px] leading-[40px] tracking-[-5%]'>{service.title}</h3>
                                </div>
                                <p className='text-[24px] leading-[24px] tracking-[-4%] text-[#FFFFFFB2]'>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Services)