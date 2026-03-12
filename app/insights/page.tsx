'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ContactPopup from '../components/ContactPopup';

export default function InsightsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const insights = [
    {
      id: 1,
      date: '2021',
      title: 'Devline IT Corp invites you to join a new challenge',
      description: 'Bizga middle darajadagi malakali va o\'z ustida ishlashni xohlaydigan xodimlar kerak. Jamoamizga qo\'shiling va birgalikda o\'saylik.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      date: '2021',
      title: 'Devline IT Corp invites you to join a new challenge',
      description: 'Bizga middle darajadagi malakali va o\'z ustida ishlashni xohlaydigan xodimlar kerak. Jamoamizga qo\'shiling va birgalikda o\'saylik.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      date: '2021',
      title: 'Devline IT Corp invites you to join a new challenge',
      description: 'Bizga middle darajadagi malakali va o\'z ustida ishlashni xohlaydigan xodimlar kerak. Jamoamizga qo\'shiling va birgalikda o\'saylik.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      date: '2021',
      title: 'Devline IT Corp invites you to join a new challenge',
      description: 'Bizga middle darajadagi malakali va o\'z ustida ishlashni xohlaydigan xodimlar kerak. Jamoamizga qo\'shiling va birgalikda o\'saylik.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      date: '2021',
      title: 'Devline IT Corp invites you to join a new challenge',
      description: 'Bizga middle darajadagi malakali va o\'z ustida ishlashni xohlaydigan xodimlar kerak. Jamoamizga qo\'shiling va birgalikda o\'saylik.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      date: '2021',
      title: 'Devline IT Corp invites you to join a new challenge',
      description: 'Bizga middle darajadagi malakali va o\'z ustida ishlashni xohlaydigan xodimlar kerak. Jamoamizga qo\'shiling va birgalikda o\'saylik.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    }
  ];

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

      <main className={styles.insightsPage}>
      {/* Hero Section */}
      <section className={styles.insightsHero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1600" 
            alt="Insights background" 
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>○</span> Insights
          </div>
          <h1 className={styles.heroHeadline}>
            We help businesses grow <br />
            with cutting-edge web <br />
            development
          </h1>
          <div className={styles.heroDescriptionCol}>
            <p className={styles.heroDescription}>
              Devline is a digital product development company focused on <br />
              building reliable and scalable solutions. We help businesses turn <br />
              ideas into high-quality web and mobile products through <br />
              modern technologies and clear processes.
            </p>
            <button className={styles.contactMeBtn} onClick={() => setIsPopupOpen(true)}>
              We will you contact <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className={styles.discoverySection}>
        <div className={styles.discoveryContent}>
          <h2 className={styles.discoveryHeadline}>
            Discover the latest in tech business <br />
            and coding tips.
          </h2>

          <div className={styles.insightsGrid}>
            {insights.map((item) => (
              <div key={item.id} className={styles.insightCard}>
                <div className={styles.insightImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.insightImage} />
                  <span className={styles.insightDate}>{item.date}</span>
                </div>
                <div className={styles.insightInfo}>
                  <h3 className={styles.insightTitle}>{item.title}</h3>
                  <p className={styles.insightDescription}>{item.description}</p>
                  <button className={styles.readMoreBtn}>
                    Send your resume <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className={styles.joinTeamCta}>
        <div className={styles.joinCtaBg}>
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600" 
            alt="Join our team" 
            className={styles.joinCtaImage}
          />
          <div className={styles.joinCtaOverlay}></div>
        </div>
        <div className={styles.joinCtaContent}>
          <div className={styles.joinCtaBadge}>
            <span className={styles.badgeIcon}>○</span> Work at Devline
          </div>
          <h2 className={styles.joinCtaHeadline}>
            Join the our <br />
            Innovative Team
          </h2>
          <a href="/contact" className={styles.joinCtaBtn}>
            Contact us <span>→</span>
          </a>
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
                  <a href="/insights" className={styles.footerLink}>Insights</a>
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
