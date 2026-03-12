'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import ContactPopup from '../components/ContactPopup';

const faqData = [
  {
    question: "WHAT SERVICES DOES DEVLINE PROVIDE?",
    answer: "We provide digital solutions including product strategy, design, development, and optimization. Our services focus on helping businesses build scalable, efficient, and user-friendly digital products."
  },
  {
    question: "DO YOU PROVIDE CUSTOM DIGITAL SOLUTIONS FOR BUSINESSES?",
    answer: "Yes, we specialize in building custom software tailored to specific business needs, ensuring high performance and seamless integration."
  },
  {
    question: "HOW DO YOU ENSURE PROJECT QUALITY AND PERFORMANCE?",
    answer: "We follow industry best practices, including rigorous testing, code reviews, and continuous integration to ensure the highest standards of quality."
  },
  {
    question: "CAN YOU HELP IMPROVE AN EXISTING DIGITAL PRODUCT?",
    answer: "Absolutely. We offer audit and optimization services to enhance the performance, UI/UX, and scalability of existing applications."
  },
  {
    question: "HOW LONG DOES IT TAKE TO COMPLETE A DIGITAL PROJECT?",
    answer: "Timeline varies based on project complexity, but we typically deliver initial versions within 8-12 weeks using our agile process."
  }
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

      <main className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>About</div>
          <h1 className={styles.heroHeadline}>
            We create solutions that improve processes <em className={styles.serif}>and</em> deliver real value
          </h1>
          <div className={styles.heroSub}>
            <p className={styles.heroDescription}>
              Our government is committed to transparency, accountability, and efficiency, ensuring that all citizens have easy access to essential.
            </p>
            <a href="#" className={styles.learnMore}>Learn more</a>
          </div>
        </div>
      </section>

      {/* Process Gallery */}
      <section className={styles.processGallery}>
        <div className={styles.galleryGrid}>
          {/* Card 1: Blue */}
          <div className={`${styles.processCard} ${styles.cardBlue}`}>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Process 1" className={styles.cardBg} />
            <div className={styles.cardOverlay}>
              <p className={styles.cardText}>Listening to the client and deeply understanding the problem</p>
            </div>
          </div>

          {/* Card 2: Gray */}
          <div className={`${styles.processCard} ${styles.cardGray}`}>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Process 2" className={styles.cardBg} />
            <div className={styles.cardOverlay}>
              <p className={styles.cardText}>Developing a clear plan and a strong technical solution</p>
            </div>
          </div>

          {/* Card 3: Purple */}
          <div className={`${styles.processCard} ${styles.cardPurple}`}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="Process 3" className={styles.cardBg} />
            <div className={styles.cardOverlay}>
              <p className={styles.cardText}>Building the product through a transparent and structured process</p>
            </div>
          </div>

          {/* Card 4: Pink */}
          <div className={`${styles.processCard} ${styles.cardPink}`}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Process 4" className={styles.cardBg} />
            <div className={styles.cardOverlay}>
              <p className={styles.cardText}>Testing the result and delivering a fully ready final product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Summary */}
      <section className={styles.bottomSummary}>
        <div className={styles.summaryContent}>
          <h2 className={styles.summaryHeadline}>
            By combining innovative thinking <span className={styles.serif}>and</span> reliable technology, we create digital solutions that help businesses build stronger, smarter <span className={styles.serif}>and</span> more competitive products.
          </h2>
        </div>
      </section>

      <div className={styles.divider} />

      {/* Company Overview Section */}
      <section className={styles.companyOverview}>
        <div className={styles.overviewHeader}>
          <div className={styles.heroBadge}>Company Overview</div>
          <h2 className={styles.overviewHeadline}>
            Devline is a digital team focused on building reliable, scalable, <span className={styles.serif}>and</span> impactful digital products.
          </h2>
          <div className={styles.overviewDescription}>
            Through collaboration with experienced partners and industry leaders, we create powerful digital solutions that address real business needs. Our approach combines innovative thinking and technology to build scalable products that improve operations and deliver better experiences. Together, we deliver solutions that help businesses stay competitive in an evolving digital landscape.
          </div>
        </div>

        <div className={styles.dividerWide} />

        {/* Feature 1 */}
        <div className={styles.featureBlock}>
          <div className={styles.featureTop}>
            <div className={styles.featureNumber}>1</div>
            <h3 className={styles.featureMainHeadline}>
              Devline is a digital product development company that builds solutions powered by modern technologies.
            </h3>
          </div>
          <div className={styles.featureImageWrapper}>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600" alt="Team Partnership" className={styles.featureImage} />
          </div>
          <div className={styles.featureInfoBox}>
            <p className={styles.featureDesc}>
              Partnering with industry leaders allows us to deliver high-quality digital products that meet business needs. Together we develop scalable and reliable solutions, leverage technology to create better experiences, and help organizations stay ahead in an ever-changing digital landscape.
            </p>
            <button className={styles.featureAction}>Learn more <span>→</span></button>
          </div>
        </div>

        <div className={styles.dividerWide} />

        {/* Feature 2 */}
        <div className={styles.featureBlock}>
          <div className={styles.featureTop}>
            <div className={styles.featureNumber}>2</div>
            <h3 className={styles.featureMainHeadline}>
              We create web platforms and mobile applications, and design solutions for businesses.
            </h3>
          </div>
          <div className={styles.featureImageWrapper}>
            <img src="https://images.unsplash.com/photo-1522071823991-b5ae72647a4a?auto=format&fit=crop&q=80&w=1600" alt="Collaboration" className={styles.featureImage} />
          </div>
          <div className={styles.featureInfoBox}>
            <p className={styles.featureDesc}>
              We collaborate with industry leaders and forward-thinking companies to build effective digital solutions. By combining expertise, creativity and advanced technology, we develop products that solve real business challenges, improve outcomes and help brands thrive in today's fast-evolving digital landscape.
            </p>
            <button className={styles.featureAction}>Learn more <span>→</span></button>
          </div>
        </div>

        <div className={styles.dividerWide} />

        {/* Feature 3 */}
        <div className={styles.featureBlock}>
          <div className={styles.featureTop}>
            <div className={styles.featureNumber}>3</div>
            <h3 className={styles.featureMainHeadline}>
              OUR GOAL IS TO TRANSFORM COMPLEX IDEAS INTO SIMPLE, EFFECTIVE, <span className={styles.serif}>AND</span> VALUABLE PRODUCTS.
            </h3>
          </div>
          <div className={styles.featureImageWrapper}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600" alt="Dashboard Analysis" className={styles.featureImage} />
          </div>
          <div className={styles.featureInfoBox}>
            <p className={styles.featureDesc}>
              Working alongside experienced partners and industry leaders, our collaborative approach allows us to design reliable digital products that improve performance, enhance user experiences, and support sustainable business growth.
            </p>
            <button className={styles.featureAction}>Learn more <span>→</span></button>
          </div>
        </div>

        <div className={styles.dividerWide} />

        {/* Feature 4 */}
        <div className={styles.featureBlock}>
          <div className={styles.featureTop}>
            <div className={styles.featureNumber}>4</div>
            <h3 className={styles.featureMainHeadline}>
              OUR TEAM CRAFTS WEB AND MOBILE SOLUTIONS THAT TRANSFORM CHALLENGING IDEAS INTO SEAMLESS USEFUL AND ENGAGING PRODUCTS.
            </h3>
          </div>
          <div className={styles.featureImageWrapper} style={{ backgroundColor: '#D5BDFE' }}>
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1600" alt="Mobile App Design" className={styles.featureImage} style={{ mixBlendMode: 'multiply', opacity: 0.8 }} />
          </div>
          <div className={styles.featureInfoBox}>
            <p className={styles.featureDesc}>
              Through strong partnerships with industry experts, we combine knowledge, creativity, and technical expertise to build digital products that bring value, improve operations, and help businesses stay competitive.
            </p>
            <button className={styles.featureAction}>Learn more <span>→</span></button>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.valuesHeadline}>
            AT DEVLINE, OUR VALUES GUIDE EVERYTHING WE DO. THEY DEFINE HOW WE WORK, HOW WE COLLABORATE, <span className={styles.serif}>AND</span> THE IMPACT WE DELIVER TO OUR CLIENTS
          </h2>
        </div>
        <div className={styles.valuesFeatureCard}>
          <div className={styles.featureCardInner}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600"
              alt="People shaking hands"
              className={styles.featureCardBg}
            />
            <div className={styles.featureCardOverlay}>
              <div className={styles.featureCardBadge}>Partnership</div>
              <h3 className={styles.featureCardHeadline}>Creative Thinking Meets Smart Technology</h3>
              <button className={styles.featureCardBtn}>View projects →</button>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divider} />

      {/* Partnership Section */}
      <section className={styles.partnershipSection}>
        <div className={styles.partnershipHeader}>
          <h2 className={styles.partnershipHeadline}>
            BY COLLABORATING WITH EXPERIENCED PARTNERS WE DELIVER MODERN SOLUTIONS THAT HELP BUSINESSES SUCCEED
          </h2>
        </div>

        <div className={styles.partnersGrid}>
          {/* Partner 1 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ backgroundColor: '#8BC34A' }}>
              <img src="https://it-park.uz/storage/images/it-park-logo.png" alt="IT Park" className={styles.partnerLogo} />
            </div>
            <span className={styles.partnerName}>IT Park</span>
          </div>

          {/* Partner 2 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ backgroundColor: '#00B0FF' }}>
              <img src="https://techjobs.uz/logo-blue.png" alt="Tech jobs" className={styles.partnerLogo} />
            </div>
            <span className={styles.partnerName}>Tech jobs</span>
          </div>

          {/* Partner 3 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ border: '1px solid #FFD54F' }}>
              <div style={{ color: '#FFD54F', fontWeight: 'bold' }}>Najot Ta'lim</div>
            </div>
            <span className={styles.partnerName}>Najot Ta'lim</span>
          </div>

          {/* Partner 4 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ backgroundColor: '#3F51B5' }}>
              <div style={{ color: 'white', fontWeight: 'bold' }}>UTV</div>
            </div>
            <span className={styles.partnerName}>TV UZCONT</span>
          </div>

          {/* Partner 5 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ backgroundColor: '#FF8A65' }}>
              <div style={{ color: 'white', fontWeight: 'bold' }}>FN</div>
            </div>
            <span className={styles.partnerName}>Falaq nashr®</span>
          </div>

          {/* Partner 6 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ border: '1px solid #4DB6AC' }}>
              <div style={{ color: '#4DB6AC', fontWeight: 'bold' }}>ET</div>
            </div>
            <span className={styles.partnerName}>Expert Test</span>
          </div>

          {/* Partner 7 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ border: '1px solid #E57373' }}>
              <div style={{ color: '#E57373', fontWeight: 'bold' }}>MASTER</div>
            </div>
            <span className={styles.partnerName}>Master Japan</span>
          </div>

          {/* Partner 8 */}
          <div className={styles.partnerCard}>
            <div className={styles.partnerLogoWrapper} style={{ backgroundColor: '#9575CD' }}>
              <div style={{ color: 'white', fontWeight: 'bold' }}>W</div>
            </div>
            <span className={styles.partnerName}>Smart Taxi</span>
          </div>
        </div>

        <div className={styles.partnershipFooter}>
          <p className={styles.partnershipDesc}>
            Working alongside talented partners and industry specialists, we develop digital solutions that empower businesses to innovate and grow. Our collaborative approach allows us to combine diverse expertise, create efficient strategies, and deliver scalable technology products that provide long-term value.
          </p>
          <a href="#" className={styles.partnershipAction}>Learn more →</a>
        </div>
      </section>

      <div className={styles.divider} />

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <div className={styles.heroBadge}>FAQ</div>
          <h2 className={styles.faqHeadline}>Frequently asked Questions</h2>
        </div>

        <div className={styles.faqAccordion}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={styles.faqItem}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div className={styles.faqQuestionRow}>
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <div className={styles.faqToggle}>
                  {openIndex === index ? (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(45deg)' }}>
                      <rect x="9" y="9" width="6" height="6" />
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  )}
                </div>
              </div>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p className={styles.faqText}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

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
