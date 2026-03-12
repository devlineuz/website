'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ContactPopup from '../components/ContactPopup';

const infoList = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    text: "OUR GOVERNMENT IS COMMITTED TO TRANSPARENCY, ACCOUNTABILITY, AND EFFICIENCY, ENSURING"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    text: "WE ENCOURAGE ALL CITIZENS, BUSINESSES, AND INTERNATIONAL INVESTORS TO EXPLORE"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    text: "GOVERNMENT’S OFFICIAL WEBSITE TO FIND RELEVANT DATA, REPORTS, STATISTICAL INFORMATION"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "PAPERS, AND SECTOR-SPECIFIC INSIGHTS FOR INFORMED DECISION-MAKING."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    text: "TRANSPARENCY AND GOOD GOVERNANCE ARE THE FOUNDATION OF OUR ADMINISTRATION,"
  }
];

export default function ProjectsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoNav}>
          <a href="/" className={styles.logo}>
            <img src="/icons/logo.svg" alt="Logo" />
          </a>
          <nav className={styles.nav}>
            <a href="/about" className={styles.navLink}>About</a>
            <a href="/service" className={styles.navLink}>Service</a>
            <a href="/projects" className={styles.navLink}>Projects</a>
            <a href="/insights" className={styles.navLink}>Insights</a>
            <a href="/careers" className={styles.navLink}>Careers</a>
          </nav>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.lang}>
            English
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <a href="/contact" className={styles.btnContact}>Contact</a>
        </div>
      </header>

      <main className={styles.projectsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Store</div>
          <h1 className={styles.heroHeadline}>
            Get your <br /> Super Card now <em className={styles.serif}>and</em> <br /> Enjoy exclusive <br /> benefits
          </h1>
        </div>
        
        <div className={styles.heroIllustration}>
          <img 
            src="https://images.unsplash.com/photo-1549421263-524d603a270d?auto=format&fit=crop&q=80&w=1200" 
            alt="Person with Card" 
            className={styles.heroImage}
          />
          <div className={styles.superCardMockup}>
            <div className={styles.cardHeader}>
              <span>Super Card</span>
              <span className={styles.vibLogo}>VIB</span>
            </div>
            <div className={styles.chip} />
            <div className={styles.cardBottom}>
              <div className={styles.cardInfo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2z"/></svg>
                <span>1234</span>
              </div>
              <div className={styles.osonLogo}>oson</div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Setup Section */}
      <section className={styles.autoSetupSection}>
        <div className={styles.circularLines}>
          <div className={styles.circle} style={{ width: '600px', height: '600px' }} />
          <div className={styles.circle} style={{ width: '800px', height: '800px' }} />
          <div className={styles.circle} style={{ width: '1000px', height: '1000px' }} />
        </div>

        <div className={styles.autoSetupHeader}>
          <h2 className={styles.autoSetupHeadline}>
            Set up your <br /> <b>Super Card</b> automatically <span>↗</span>
          </h2>
        </div>

        <div className={styles.featureCards}>
          <div className={styles.featureCard} style={{ backgroundColor: '#52B2A9' }}>
            <div className={styles.featureIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zM13 11V5h-2v6H9l3 4 3-4h-2z"/></svg>
            </div>
            <h3 className={styles.featureTitle}>SIM-kartalarni unuting</h3>
            <p className={styles.featureText}>Sayohatlarda SIM-kart qidirishni unuting! OSON ilovasida eSIM-ni bir necha daqiqada faollashtiring.</p>
          </div>

          <div className={styles.featureCard} style={{ backgroundColor: '#5278B2' }}>
            <div className={styles.featureIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
            </div>
            <h3 className={styles.featureTitle}>Bir necha bosqichda mamlakat va tarifni tanlang</h3>
            <p className={styles.featureText}>To'g'ridan-to'g'ri ilovada kerakli mamlakat va tarifni tanlang.</p>
          </div>

          <div className={styles.featureCard} style={{ backgroundColor: '#8052B2' }}>
            <div className={styles.featureIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
            </div>
            <h3 className={styles.featureTitle}>Tez faollashtirish</h3>
            <p className={styles.featureText}>Tarifni bir zumda, kutish va ortiqcha harakatlarsiz faollashtiring.</p>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className={styles.transparencySection}>
        <div className={styles.transparencyContent}>
          <div className={styles.transparencyText}>
            <h2 className={styles.transparencyHeadline}>
              Transparency and good <br /> governance are the <br /> foundation of <br /> our administration
            </h2>
            <p className={styles.transparencySub}>
              Our government is committed to transparency, accountability, and efficiency, ensuring that all citizens have easy access to essential information, online services, government programs, and public sector initiatives designed
            </p>
            <div className={styles.osonCard}>
              <span>Oson.app</span>
              <span>↗</span>
            </div>
          </div>
          <div className={styles.transparencyImageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200" 
              alt="Payment Terminal" 
              className={styles.transparencyImage}
            />
          </div>
        </div>
      </section>

      {/* Info List Section */}
      <section className={styles.infoListSection}>
        <div className={styles.infoListWrapper}>
          {infoList.map((item, idx) => (
            <div key={idx} className={styles.infoListItem}>
              <div className={styles.infoListItemIcon}>{item.icon}</div>
              <div className={styles.infoListText}>{item.text}</div>
              <div className={styles.infoListBadge}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#001C66" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCtaSection}>
        {/* Background Patterns */}
        <div className={styles.finalCtaBg}>
          <div className={styles.finalCtaBgCircle1}></div>
          <div className={styles.finalCtaBgCircle2}></div>
        </div>

        <div className={styles.finalCtaContent}>
          <h2 className={styles.finalCtaHeadline}>
            Have an idea or a business challenge Devline is ready <em className={styles.serif}>to</em> turn it into a clear reliable <em className={styles.serif}>and</em> scalable solution
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p className={styles.finalCtaDescription}>
              WE ENCOURAGE ALL CITIZENS, BUSINESSES, AND INTERNATIONAL INVESTORS TO EXPLORE OUR GOVERNMENT'S OFFICIAL WEBSITE TO FIND RELEVANT DATA REPORTS, STATISTICAL INFORMATION RESEARCH PAPERS, AND SECTOR-SPECIFIC INSIGHTS FOR INFORMED DECISION-MAKING.
            </p>
            <button className={styles.finalCtaBtn} onClick={() => setIsPopupOpen(true)}>
              We will contact you
              <span>→</span>
            </button>
          </div>
        </div>

        {/* 3D Illustration Placeholder */}
        <div className={styles.finalCtaIllustration}>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
            alt="Digital Solutions Illustration" 
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
          />
        </div>
      </section>
      {/* Footer Section */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContent}>
          {/* Top: Logo and Columns */}
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>Devline</div>

            <div className={styles.footerColumns}>
              {/* Sections */}
              <div className={styles.footerColumn}>
                <h4 className={styles.footerColumnTitle}>Sections</h4>
                <nav className={styles.footerLinks}>
                  <a href="/about" className={styles.footerLink}>About us</a>
                  <a href="/service" className={styles.footerLink}>Services</a>
                  <a href="/projects" className={styles.footerLink}>Projects</a>
                  <a href="#" className={styles.footerLink}>Insights</a>
                </nav>
              </div>

              {/* Service */}
              <div className={styles.footerColumn}>
                <h4 className={styles.footerColumnTitle}>Service</h4>
                <nav className={styles.footerLinks}>
                  <a href="#" className={styles.footerLink}>Web Development</a>
                  <a href="#" className={styles.footerLink}>Mobile App Development</a>
                  <a href="#" className={styles.footerLink}>Custom Software</a>
                  <a href="#" className={styles.footerLink}>Automation Systems</a>
                  <a href="#" className={styles.footerLink}>UI/UX Design</a>
                  <a href="#" className={styles.footerLink}>Support & Maintenance</a>
                </nav>
              </div>

              {/* Location */}
              <div className={styles.footerColumn}>
                <h4 className={styles.footerColumnTitle}>Location</h4>
                <div className={styles.footerLocation}>
                  Toshkent shahar, Shayxontohur tumani Islom Karimov ko'chasi, Nest One -teppasi →
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Contact and Social */}
          <div className={styles.footerMiddle}>
            <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Mail</span>
                <a href="mailto:info@devline.uz" className={styles.contactValue}>info@devline.uz</a>
              </div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Phone</span>
                <a href="tel:+782078080" className={styles.contactValue}>+(78) 207-80-80</a>
              </div>
            </div>

            <div className={styles.socialMedia}>
              <span className={styles.contactLabel}>Social media</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.792 5 15.536 5H18V0h-3.977C10.038 0 9 2.292 9 5.583V8z" /></svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" /></svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-10.131c0-7.88-8.921-7.593-11.02 3.732v-2z" /></svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.146l-1.996 9.432c-.15.674-.551.841-1.115.524l-3.047-2.245-1.47 1.415c-.161.161-.298.298-.611.298l.219-3.111 5.661-5.115c.246-.22-.054-.342-.38-.126l-7.001 4.409-3.016-.944c-.655-.205-.668-.655.136-.969l11.776-4.538c.545-.198 1.022.128.844.869z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Copyright and Credit */}
          <div className={styles.footerBottom}>
            <div>© 2026 Devline IT Company</div>
            <div>Design by : Og'abek Yusuf</div>
          </div>
        </div>
      </footer>

      <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
    </>
  );
}
