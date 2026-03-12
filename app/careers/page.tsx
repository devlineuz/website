'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ContactPopup from '../components/ContactPopup';

export default function CareersPage() {
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

      <main className={styles.careersPage}>
      {/* Hero Section */}
      <section className={styles.careersHero}>
        <div className={styles.heroBg}>
           <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1600" 
            alt="Career at Devline" 
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeIcon}>○</span> Careers
            </div>
            <h1 className={styles.heroHeadline}>
              <em className={styles.serifItalic}>Your next</em> Career <br />
              Opportunity at Devline
            </h1>
            <button className={styles.infoBtn} onClick={() => setIsPopupOpen(true)}>
              Your information <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className={styles.vacanciesSection}>
        <div className={styles.vacanciesContent}>
          <div className={styles.vacanciesHeader}>
            <div className={styles.vacanciesBadge}>Vacancies</div>
            <h2 className={styles.vacanciesHeadline}>
              Join our team and help us build innovative digital <br />
              solutions. Check out the current openings and <br />
              see where you fit in
            </h2>
          </div>

          <div className={styles.vacanciesList}>
            {/* Vacancy 1: Java Backend */}
            <div className={`${styles.vacancyCard} ${styles.javaCard}`}>
              <div className={styles.vacancyImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
                  alt="Java Backend Developer" 
                  className={styles.vacancyImage}
                />
                <div className={styles.imageGradientOverlay}></div>
              </div>
              <div className={styles.vacancyInfo}>
                <div className={styles.vacancyTitleRow}>
                  <h3 className={styles.vacancyTitle}>Middle Java Backend Developer.</h3>
                  <div className={styles.vacancyDivider}></div>
                </div>
                <div className={styles.vacancyBody}>
                  <div className={styles.vacancySidebar}>
                    <ul className={styles.sidebarLinks}>
                      <li>Middle Java Backend Developer.</li>
                      <li>Android Developer.</li>
                      <li>IOS Developer.</li>
                      <li>Manager for B2B Sales.</li>
                      <li>Data Analyst</li>
                    </ul>
                  </div>
                  <div className={styles.vacancyDescriptionCol}>
                    <p className={styles.vacancyDescriptionText}>
                      Bizga maqsad sari intiluvchan, tez o'sishga tayyor bo'lgan, o'z ustida ishlaydigan va yuqori natijalarni kuzatish bilan shug'ullanishni biladigan xodimlar kerak.
                    </p>
                    <button className={styles.resumeBtn}>
                      Send your resume <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacancy 2: Android Developer */}
            <div className={`${styles.vacancyCard} ${styles.androidCard}`}>
              <div className={styles.vacancyImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                  alt="Android Developer" 
                  className={styles.vacancyImage}
                />
                <div className={styles.imageGradientOverlay}></div>
              </div>
              <div className={styles.vacancyInfo}>
                <div className={styles.vacancyTitleRow}>
                  <h3 className={styles.vacancyTitle}>Android Developer.</h3>
                  <div className={styles.vacancyDivider}></div>
                </div>
                <div className={styles.vacancyBody}>
                  <div className={styles.vacancySidebar}>
                    <ul className={styles.sidebarLinks}>
                      <li>Middle Java Backend Developer.</li>
                      <li>Android Developer.</li>
                      <li>IOS Developer.</li>
                      <li>Manager for B2B Sales.</li>
                      <li>Data Analyst</li>
                    </ul>
                  </div>
                  <div className={styles.vacancyDescriptionCol}>
                    <p className={styles.vacancyDescriptionText}>
                      Bizga maqsad sari intiluvchan, tez o'sishga tayyor bo'lgan, o'z ustida ishlaydigan va yuqori natijalarni kuzatish bilan shug'ullanishni biladigan xodimlar kerak.
                    </p>
                    <button className={styles.resumeBtn}>
                      Send your resume <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacancy 3: IOS Developer */}
            <div className={`${styles.vacancyCard} ${styles.iosCard}`}>
              <div className={styles.vacancyImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                  alt="IOS Developer" 
                  className={styles.vacancyImage}
                />
                <div className={styles.imageGradientOverlay}></div>
              </div>
              <div className={styles.vacancyInfo}>
                <div className={styles.vacancyTitleRow}>
                  <h3 className={styles.vacancyTitle}>IOS Developer.</h3>
                  <div className={styles.vacancyDivider}></div>
                </div>
                <div className={styles.vacancyBody}>
                  <div className={styles.vacancySidebar}>
                    <ul className={styles.sidebarLinks}>
                      <li>Middle Java Backend Developer.</li>
                      <li>Android Developer.</li>
                      <li>IOS Developer.</li>
                      <li>Manager for B2B Sales.</li>
                      <li>Data Analyst</li>
                    </ul>
                  </div>
                  <div className={styles.vacancyDescriptionCol}>
                    <p className={styles.vacancyDescriptionText}>
                      Bizga maqsad sari intiluvchan, tez o'sishga tayyor bo'lgan, o'z ustida ishlaydigan va yuqori natijalarni kuzatish bilan shug'ullanishni biladigan xodimlar kerak.
                    </p>
                    <button className={styles.resumeBtn}>
                      Send your resume <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacancy 4: B2B Sales */}
            <div className={`${styles.vacancyCard} ${styles.salesCard}`}>
              <div className={styles.vacancyImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                  alt="B2B Sales" 
                  className={styles.vacancyImage}
                />
                <div className={styles.imageGradientOverlay}></div>
              </div>
              <div className={styles.vacancyInfo}>
                <div className={styles.vacancyTitleRow}>
                  <h3 className={styles.vacancyTitle}>Manager for B2B Sales.</h3>
                  <div className={styles.vacancyDivider}></div>
                </div>
                <div className={styles.vacancyBody}>
                  <div className={styles.vacancySidebar}>
                    <ul className={styles.sidebarLinks}>
                      <li>Middle Java Backend Developer.</li>
                      <li>Android Developer.</li>
                      <li>IOS Developer.</li>
                      <li>Manager for B2B Sales.</li>
                      <li>Data Analyst</li>
                    </ul>
                  </div>
                  <div className={styles.vacancyDescriptionCol}>
                    <p className={styles.vacancyDescriptionText}>
                      Bizga maqsad sari intiluvchan, tez o'sishga tayyor bo'lgan, o'z ustida ishlaydigan va yuqori natijalarni kuzatish bilan shug'ullanishni biladigan xodimlar kerak.
                    </p>
                    <button className={styles.resumeBtn}>
                      Send your resume <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
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
            Have an idea or a business challenge Devline is ready <em>to</em> turn it into a clear reliable <em>and</em> scalable solution
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
                  <a href="/careers" className={styles.footerLink}>Careers</a>
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
