'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ContactPopup from '../components/ContactPopup';

export default function ContactPage() {
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

      <main className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>○</span> Contact
          </div>
          <h1 className={styles.heroHeadline}>
            We'd love to hear from you <br />
            Reach out to Devline using the <br />
            contact details below
          </h1>
          <button className={styles.infoBtn}>
            Your information <span>→</span>
          </button>
        </div>

        <div className={styles.heroIllustration}>
          <div className={styles.illustrationBg}>
            <img 
              src="https://images.unsplash.com/photo-1573164573938-c9a3db2eeda4?auto=format&fit=crop&q=80&w=1200" 
              alt="Contact Support" 
              className={styles.heroImage}
            />
            {/* Overlay UI elements */}
            <div className={styles.uiCardInvoice}>
              <div className={styles.uiCardHeader}>INVOICE</div>
              <div className={styles.uiCardIcon}>⇄</div>
              <div className={styles.uiCardLabel}>DUE ON</div>
              <div className={styles.uiCardDate}>20/10/23</div>
            </div>
            <div className={styles.uiCardPaid}>PAID</div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className={styles.detailsSection}>
        <div className={styles.detailsHeader}>
          <h2 className={styles.detailsHeadline}>
            Set up your <br /> <b>Super Details</b> automatically
          </h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.detailsGrid}>
          {/* Main Info */}
          <div className={styles.infoRow}>
            <div className={styles.infoBadge}>Contact</div>
            <div className={styles.infoText}>
              <a href="mailto:info@devline.uz" className={styles.infoValue}>info@devline.uz</a>
              <div className={styles.infoIcon}>↗</div>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.emptyBadge} />
            <div className={styles.infoText}>
              <a href="tel:+712078080" className={styles.infoValue}>+(71) 207-80-80</a>
              <div className={styles.infoIcon}>⧄</div>
            </div>
          </div>

          <div className={styles.dividerLarge} />

          {/* Social Media */}
          <div className={styles.infoRow}>
            <div className={styles.infoBadge}>Social Media</div>
            <div className={styles.infoText}>
              <a href="#" className={styles.infoValue}>Facebook</a>
              <div className={styles.infoIcon}>⧄</div>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.emptyBadge} />
            <div className={styles.infoText}>
              <a href="#" className={styles.infoValue}>Instagram</a>
              <div className={styles.infoIcon}>⧄</div>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.emptyBadge} />
            <div className={styles.infoText}>
              <a href="#" className={styles.infoValue}>YouTube</a>
              <div className={styles.infoIcon}>⧄</div>
            </div>
          </div>

          <div className={styles.infoRow}>
            <div className={styles.emptyBadge} />
            <div className={styles.infoText}>
              <a href="#" className={styles.infoValue}>Telegram</a>
              <div className={styles.infoIcon}>⧄</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className={styles.locationGrid}>
          <div className={styles.locationBadgeCol}>
            <div className={styles.infoBadge}>Location</div>
          </div>
          <div className={styles.mapCol}>
            <div className={styles.mapContainer}>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Placeholder" 
                className={styles.mapImage}
              />
              <div className={styles.mapTooltip}>
                Yunusobod tumani, Kichik Xalqa yo'li <br />
                Scuer Mahalla 11-a Uy
                <div className={styles.tooltipPin}>📍</div>
              </div>
              <button className={styles.openMapBtn}>
                Open in google map <span>→</span>
              </button>
            </div>
            
            <div className={styles.addressLine}>
              <h3 className={styles.addressText}>
                Toshkent shahar, Yunusobod tumani <br />
                Kichik xalqa yo'li, 44 - uy <span>→</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCtaSection}>
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

        <div className={styles.finalCtaIllustration}>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
            alt="Digital Solutions Illustration" 
            style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>Devline</div>
            <div className={styles.footerColumns}>
              <div className={styles.footerColumn}>
                <h4 className={styles.footerColumnTitle}>Sections</h4>
                <nav className={styles.footerLinks}>
                  <a href="/about" className={styles.footerLink}>About us</a>
                  <a href="/service" className={styles.footerLink}>Services</a>
                  <a href="/projects" className={styles.footerLink}>Projects</a>
                  <a href="#" className={styles.footerLink}>Insights</a>
                </nav>
              </div>
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
              <div className={styles.footerColumn}>
                <h4 className={styles.footerColumnTitle}>Location</h4>
                <div className={styles.footerLocation}>
                  Toshkent shahar, Shayxontohur tumani Islom Karimov ko'chasi, Nest One -teppasi →
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerMiddle}>
            <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Mail</span>
                <a href="mailto:info@devline.uz" className={styles.contactValue}>info@devline.uz</a>
              </div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Phone</span>
                <a href="tel:+712078080" className={styles.contactValue}>+(71) 207-80-80</a>
              </div>
            </div>
            <div className={styles.socialMedia}>
              <span className={styles.contactLabel}>Social media</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>fb</a>
                <a href="#" className={styles.socialIcon}>ig</a>
                <a href="#" className={styles.socialIcon}>yt</a>
                <a href="#" className={styles.socialIcon}>tg</a>
              </div>
            </div>
          </div>
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
