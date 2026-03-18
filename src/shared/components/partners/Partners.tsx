"use client";

import React from 'react'
import Image from 'next/image'
import smart_taxi from '../../assets/icons/clients/smart_taxi.svg'
import techjobs from '../../assets/icons/clients/techjobs.svg'
import expert_test from '../../assets/icons/clients/expert_test.jpg'
import jlpt_master from '../../assets/icons/clients/jlpt_master.jpg'
import quarter_aspect from '../../assets/icons/clients/quarter_aspect.jpg'
import uzcont_play from '../../assets/icons/clients/uzcont_play.jpg'
import najot_talim from '../../assets/icons/partners/najot_talim.svg'
import it_park from '../../assets/icons/partners/it_park.svg'
import { useTranslation } from 'react-i18next';


const partners = [
    { icon: expert_test, name: 'Expert Test' },
    { icon: uzcont_play, name: 'UZCONT PLAY' },
    { icon: smart_taxi, name: 'Smart Taxi' },
    { icon: najot_talim, name: "Najot Ta'lim" },
    { icon: techjobs, name: 'Techjobs' },
    { icon: it_park, name: 'IT Park' },
    { icon: jlpt_master, name: 'JLPT Master' },
    { icon: quarter_aspect, name: 'QUARTER ASPECT' },
]

const Partners = () => {
    const { t } = useTranslation();
    // Duplicate the clients array for a seamless loop
    const displayPartners = [...partners, ...partners]

    return (
        <section className='p-[60px_0_80px]'>
            <div className='container'>
                <div className='flex flex-col gap-[35px]'>
                    <div className='flex flex-col gap-[88.57px]'>
                        <p className='inline-block font-medium text-[20px] leading-[20px] tracking-[-0.02em] text-[#667499]'>◯  {t('partners.label')}</p>
                        <h2 className='font-extrabold text-[64px] leading-[64px] tracking-[-4%] pl-[30px] max-w-[909px] text-[#001C66]'>{t('partners.title')}</h2>
                    </div>

                    <div className='overflow-hidden relative'>
                        {/* Gradient overlays for smooth entry/exit */}
                        <div className='absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-linear-to-r from-white to-transparent pointer-events-none' />
                        <div className='absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-linear-to-l from-white to-transparent pointer-events-none' />

                        <div className='flex w-max animate-scroll hover:[animation-play-state:paused] py-4 my-26'>
                            {displayPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-[12px] px-[40px] shrink-0 hover:opacity-100 transition-all duration-300'
                                >
                                    <div className='w-[60px] h-[60px] flex items-center justify-center'>
                                        <Image
                                            src={partner.icon}
                                            alt={`${partner.name} icon`}
                                            className='max-h-full w-auto rounded-full'
                                        />
                                    </div>
                                    <p className='font-semibold text-[48px] leading-[40px] tracking-[-5%] text-[#414158] whitespace-nowrap'>{partner.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Partners)