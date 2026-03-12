'use client';

import React, { useEffect } from 'react';
import styles from './ContactPopup.module.css';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.header}>
          <span className={styles.serifItalic}>We will</span>
          <h2 className={styles.headline}>Contact you</h2>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your name" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="tel" placeholder="Phone number" className={styles.input} />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
