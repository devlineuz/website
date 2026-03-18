"use client";

import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

interface ContactProps {
    isOpen: boolean;
    onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setName('');
            setPhone('');
            setSuccess(false);
            setError('');
        }
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name.trim() || !phone.trim()) {
            setError(t('contact.errorEmpty'));
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || t('contact.errorGeneral'));
                return;
            }

            setSuccess(true);
        } catch {
            setError(t('contact.errorGeneral'));
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-[440px] bg-[#F1F3F4] rounded-[32px] p-8 md:p-12 shadow-2xl transition-all transform scale-100 animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <IoClose size={24} />
                </button>

                <div className="mb-8">
                    <p className="text-[20px] italic text-[#667085] leading-tight mb-1">{t('contact.weWill')}</p>
                    <h2 className="text-[40px] font-bold text-[#00008C] leading-none tracking-tight">{t('contact.contactYou')}</h2>
                    <div className="h-px w-full bg-gray-200 mt-6"></div>
                </div>

                {success ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-[18px] font-semibold text-[#101828] mb-2">{t('contact.success')}</p>
                        <p className="text-[#667085] text-[15px]">{t('contact.successSub')}</p>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t('contact.namePlaceholder')}
                                className="w-full h-[56px] px-6 bg-[#E0E4E7] rounded-full border-none focus:ring-2 focus:ring-[#0517C7] outline-none text-[#101828] placeholder-[#667085] transition-all"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={t('contact.phonePlaceholder')}
                                className="w-full h-[56px] px-6 bg-[#E0E4E7] rounded-full border-none focus:ring-2 focus:ring-[#0517C7] outline-none text-[#101828] placeholder-[#667085] transition-all"
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <p className="text-red-500 text-sm text-center px-2">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-[56px] mt-4 bg-[#0000B2] text-white rounded-full font-semibold text-[18px] hover:bg-[#0412A5] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : (
                                t('contact.send')
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default React.memo(Contact)
