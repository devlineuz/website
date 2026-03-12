'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ContactPopup from '../components/ContactPopup';

const services = [
  {
    title: "Web Development",
    description: "Through strong partnerships with industry leaders, we design and deliver modern digital solutions that combine knowledge, creativity, and technology to build scalable products that improve operations and help businesses grow faster.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0517C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: "Mobile App Development",
    description: "We create intuitive and high-performance mobile applications for iOS and Android platforms, focusing on user experience and seamless integration with your business processes.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0517C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  },
  {
    title: "Custom Software",
    description: "Our team develops tailored software solutions that address your specific business challenges, ensuring scalability, security, and long-term value for your organization.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#0517C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Automation Systems",
    description: "We implement advanced automation systems that streamline your workflows, reduce manual effort, and improve overall operational efficiency through smart technology.",
    icon: (
      <svg width="60" height="45" viewBox="0 0 24 24" fill="none" stroke="#0517C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  }
];

export default function ServicePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Header */}
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

      <main className={styles.servicePage}>
      {/* Hero Section */}
      <section className={styles.serviceHero}>
        <div className={styles.heroBg}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" alt="Office Background" />
        </div>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>→</span> Service
          </div>
          <h1 className={styles.heroHeadline}>Digital Services that Power Your Business Growth</h1>
          <p className={styles.heroSub}>
            We provide end-to-end digital services tailored to your business goals. From strategy and design to development and launch, our team focuses on building scalable, high-quality solutions that deliver real results.
          </p>
          <button className={styles.viewPortfolioBtn}>
            View portfolio <span>→</span>
          </button>
        </div>

        {/* Floating UI Cards */}
        <div className={styles.floatingCards}>
          <div className={styles.cardEmail}>
            <div className={styles.emailIcon}>✉</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>Send welcome email</div>
              <div style={{ fontSize: '12px', color: '#666' }}>Automated workflow</div>
            </div>
          </div>
          
          <div className={styles.cardContent}>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>Opportunities vs Conversions</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>708.02</div>
              <div style={{ color: '#4CAF50', fontSize: '14px' }}>+12.5%</div>
            </div>
            <div style={{ height: '100px', backgroundColor: '#F5F5F7', borderRadius: '4px' }}>
              {/* Simple Chart Placeholder */}
              <div style={{ borderBottom: '2px solid #0517C7', height: '100%', width: '100%', borderRadius: '0 0 4px 4px' }} />
            </div>
          </div>

          <div className={styles.cardGrowth}>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>Statistics</div>
            <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '12px' }}>Business Growth</div>
            <div style={{ height: '60px', width: '100%', background: 'linear-gradient(90deg, #F0F0F5 0%, #E8EAF6 100%)', borderRadius: '4px' }} />
          </div>
        </div>
      </section>

      {/* Service List Section */}
      <section className={styles.serviceListSection}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.serviceLargeIcon}>
              {service.icon}
            </div>
            <div className={styles.serviceDetails}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.description}</p>
              <a href="#" className={styles.learnMoreLink}>Learn more <span>→</span></a>
            </div>
          </div>
        ))}
      </section>

      {/* Partnership Section */}
      <section className={styles.partnershipSection}>
        <div className={styles.partnershipHeader}>
          <div className={styles.partnershipBadge}>Partnership</div>
          <h2 className={styles.partnershipHeadline}>
            Boost Your Business with Our <span style={{ textDecoration: 'underline' }}>Service?</span>
          </h2>
          <p className={styles.partnershipSubDesc}>
            Our services are designed to help your business grow, optimize processes, and deliver measurable results.
          </p>
        </div>

        <div className={styles.partnersGrid}>
          {/* Partner 1: Tele2 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoText}>Tele.2®</div>
          </div>

          {/* Partner 2: Verizon */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoText}>Verizon®</div>
          </div>

          {/* Partner 3: Airtel */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoText}>Airtel®</div>
          </div>

          {/* Partner 4: AT&T */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoText}>AT&T®</div>
          </div>

          {/* Partner 5: Unicom */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoText}>Unicom®</div>
          </div>

          {/* Partner 6: Airvoice */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoText}>Airvoice®</div>
          </div>
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
