'use client';
import { useState } from "react";
import styles from "./page.module.css";
import ContactPopup from "./components/ContactPopup";

export default function Home() {
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
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <a href="/contact" className={`${styles.btnContact}`}>Contact</a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>

          {/* Hero Content */}
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Powerful digital <span className={styles.titleItalic}>and</span><br />
              IT Solutions <span className={styles.titleItalic}>for</span> modern<br />
              Growing Businesses
            </h1>
            <p className={styles.description}>
              We help businesses move faster with clear and efficient IT solutions. Devline combines modern technology with a simple approach to create digital products that are reliable, secure, and ready to scale.
            </p>
            <div className={styles.heroActions}>
              <a href="/contact" className={styles.btnQuote}>
                Get a quote
              </a>
              <a href="/service" className={styles.btnServices}>
                View services <span>→</span>
              </a>
            </div>
          </div>

          {/* Bottom Features Wrapper */}
          <div className={styles.featuresWrapper}>
            <div className={styles.decorLeftSquare} />
            <div className={styles.decorLeftCircle1} />
            <div className={styles.decorLeftCircle2} />
            <div className={styles.decorRightSquare} />
            <div className={styles.decorRightCircle1} />
            <div className={styles.decorRightCircle2} />

            <div className={styles.featuresGrid}>

              <article className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Clean Architecture</h3>
                <p className={styles.featureDesc}>
                  Our systems are built with clean, scalable, and well-structured architecture for long-term stability.
                </p>
              </article>
              <article className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Transparent Process</h3>
                <p className={styles.featureDesc}>
                  You stay informed at every stage through open communication and clear project milestones.
                </p>
              </article>
              <article className={styles.featureCard}>
                <h3 className={styles.featureTitle}>Reliable Results</h3>
                <p className={styles.featureDesc}>
                  We focus on solutions that work consistently and support real business growth.
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section className={styles.aboutUsSection}>
        {/* Wavy Background Pattern */}
        <div className={styles.aboutBgLines}>
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path d="M-100,500 C200,400 500,200 800,450 C1100,700 1300,500 1600,450" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.08" />
            <path d="M-100,520 C250,420 550,230 850,470 C1150,710 1350,520 1600,470" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.07" />
            <path d="M-100,540 C300,440 600,260 900,490 C1200,720 1400,540 1600,490" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.06" />
            <path d="M-100,560 C350,460 650,290 950,510 C1250,730 1450,560 1600,510" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.05" />
            <path d="M-100,580 C400,480 700,320 1000,530 C1300,740 1500,580 1600,530" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.04" />
            <path d="M-100,600 C450,500 750,350 1050,550 C1350,750 1550,600 1600,550" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.03" />
            
            <path d="M-100,300 C200,250 500,100 800,300 C1100,500 1300,350 1600,300" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.06" />
            <path d="M-100,320 C250,270 550,130 850,320 C1150,510 1350,370 1600,320" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.05" />
            <path d="M-100,340 C300,290 600,160 900,340 C1200,520 1400,390 1600,340" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.04" />
            <path d="M-100,360 C350,310 650,190 950,360 C1250,530 1450,410 1600,360" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.03" />
            <path d="M-100,380 C400,330 700,220 1000,380 C1300,540 1500,430 1600,380" stroke="#00008C" strokeWidth="1" fill="none" opacity="0.02" />
          </svg>
        </div>

        <div className={styles.aboutContent}>
          {/* Top Info */}
          <div className={styles.aboutHeader}>
            <div className={styles.badge}>
              ◯ About us
            </div>
            <h2 className={styles.mainHeadline}>
              Devline is a digital product development company focused on building reliable and scalable solutions. We help businesses turn ideas into quality
            </h2>
          </div>

          {/* Bottom Stats & Description */}
          <div className={styles.statsRow}>
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Completed Projects</span>
                <span className={styles.statValue}>45+</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Team Members</span>
                <span className={styles.statValue}>120+</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Countries Served</span>
                <span className={styles.statValue}>23+</span>
              </div>
            </div>

            {/* Paragraph & Button */}
            <div className={styles.statDescriptionWrapper}>
              <p className={styles.statText}>
                Focused on delivering smart and scalable digital solutions, the team helps businesses transform ideas into powerful products. From Design to full-cycle development, every project is built with clarity, performance, and user experience in mind. The goal is simple — create technology that supports growth and makes digital products easier to use and manage.
              </p>
              <a href="/about" className={styles.learnMore}>
                <span>Learn more</span>
                <div className={styles.arrowCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase Section */}
      <section className={styles.teamSection}>
        {/* Background Overlay */}
        <div className={styles.teamBgOverlay} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')" }}></div>

        <div className={styles.teamContent}>
          {/* Top Massive Headline */}
          <h2 className={styles.hugeHeadline}>
            <span className={styles.italic}>Our</span>
            Team develops<br />innovative digital products<br />that support business<br />growth
          </h2>

          {/* Bottom Right Floating Details & Tablet Presentation */}
          <div className={styles.teamFloatingActions}>
            {/* Tablet Mockup */}
            <div className={styles.tabletMockup}>
              <div className={styles.tabletTop}>
                <div className={styles.tabletDots}>
                  <div className={styles.tabletDot} style={{ backgroundColor: '#ff5f56' }}></div>
                  <div className={styles.tabletDot} style={{ backgroundColor: '#ffbd2e' }}></div>
                  <div className={styles.tabletDot} style={{ backgroundColor: '#27c93f' }}></div>
                </div>
              </div>
              <div style={{ padding: '16px', color: '#fff' }}>
                <div style={{ width: '50%', height: '16px', background: 'rgba(255,255,255,0.2)', marginBottom: '8px', borderRadius: '4px' }}></div>
                <div style={{ width: '75%', height: '8px', background: 'rgba(255,255,255,0.1)', marginBottom: '4px', borderRadius: '4px' }}></div>
                <div style={{ width: '66%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
              </div>
            </div>

            {/* Description Box */}
            <div className={styles.glassBox}>
              <p>
                Our government is committed to transparency, accountability, and efficiency, ensuring that all citizens have easy access to essential information, online services, government programs, and public sector initiatives designed to improve national development.
              </p>
            </div>

            {/* Action Button */}
            <div className={styles.aboutUsBtn}>
              About us
              <span>→</span>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className={styles.servicesSection}>
        {/* Background Waves/Lines */}
        <div className={styles.servicesBgLines}>
          <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100 C1400,150 1600,50 1800,100" stroke="white" strokeWidth="1" fill="none" opacity="0.1" />
            <path d="M0,150 C200,200 400,100 600,150 C800,200 1000,100 1200,150 C1400,200 1600,100 1800,150" stroke="white" strokeWidth="1" fill="none" opacity="0.05" />
            <path d="M0,200 C200,250 400,150 600,200 C800,250 1000,150 1200,200 C1400,250 1600,150 1800,200" stroke="white" strokeWidth="1" fill="none" opacity="0.02" />
          </svg>
        </div>

        <div className={styles.servicesContent}>
          <div className={styles.servicesTopRow}>
            {/* Heading Column */}
            <div className={styles.servicesHeadingCol}>
              <div className={styles.servicesBadge}>
                Services
              </div>
              <h2 className={styles.servicesTitle}>
                Strategic solution <em>and</em><br />
                IT Development Services <em>for</em><br />
                Ambitious companies
              </h2>
            </div>

            {/* Cards Column */}
            <div className={styles.servicesCardsCol}>
              {/* Web Development */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitleText}>Web Development</h3>
                  <p className={styles.serviceDescription}>
                    We build fast, secure, and scalable websites and web platforms tailored to real business needs.
                  </p>
                </div>
                <div className={styles.serviceArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* Mobile Apps */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitleText}>Mobile Apps</h3>
                  <p className={styles.serviceDescription}>
                    Devline creates intuitive and high-performance mobile apps that deliver smooth user experiences on iOS and Android.
                  </p>
                </div>
                <div className={styles.serviceArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* Custom Software */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitleText}>Custom Software</h3>
                  <p className={styles.serviceDescription}>
                    We develop custom software solutions designed to fit your workflows, goals, and long-term growth.
                  </p>
                </div>
                <div className={styles.serviceArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* Automation Systems */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitleText}>Automation Systems</h3>
                  <p className={styles.serviceDescription}>
                    We automate business processes to reduce manual work, improve efficiency, and increase operational accuracy.
                  </p>
                </div>
                <div className={styles.serviceArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Area */}
          <div className={styles.servicesBottomArea}>
            <p className={styles.servicesFooterNote}>
              WE DELIVER INNOVATIVE DIGITAL SOLUTIONS THAT HELP BUSINESSES GROW.<br />
              EACH SERVICE FOCUSES ON QUALITY, SCALABILITY, AND IMPROVING<br />
              OPERATIONS WHILE ENHANCING CUSTOMER EXPERIENCES WITH<br />
              RELIABLE TECHNOLOGY.
            </p>
            <div className={styles.viewServicesBtn}>
              View services <span>→</span>
            </div>
          </div>
        </div>
      </section>
      {/* Why Devline Section */}
      <section className={styles.whyDevlineSection}>
        <div className={styles.whyContent}>
          {/* Top Headline Area */}
          <div className={styles.whyBadge}>
            Why Devline
          </div>
          <h2 className={styles.whyHeadline}>
            Let's create something valuable for your <b>business</b> by delivering innovative solutions improving operations and driving sustainable growth together
          </h2>

          {/* Feature Image with Overlay */}
          <div className={styles.featureImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
              alt="Team collaborating"
              className={styles.featureImage}
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayTitle}>
                Business <em>Focused Approach</em>
              </div>
            </div>
          </div>

          {/* Bottom Description & CTA */}
          <div className={styles.bottomInfo}>
            <p className={styles.whyDescription}>
              WE UNDERSTAND THE UNIQUE CHALLENGES BUSINESSES FACE AND PROVIDE TAILORED SOLUTIONS THAT PERFECTLY MATCH YOUR GROWTH STAGE, HELPING YOU SCALE EFFICIENTLY, IMPROVE OPERATIONS, AND ACHIEVE LONG-TERM SUCCESS.
            </p>
            <button className={styles.viewProjectsBtn}>
              View projects
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsContent}>
          {/* Top Headline Area */}
          <div className={styles.benefitsTop}>
            <div className={styles.benefitBadge}>
              Benefit
            </div>
            <h2 className={styles.benefitHeadline}>
              Smart ideas <em>for</em><br />
              <span>your Modern</span> Businesses
            </h2>
            <p className={styles.benefitLeadText}>
              OUR GOVERNMENT IS COMMITTED TO TRANSPARENCY, ACCOUNTABILITY, AND EFFICIENCY, ENSURING THAT ALL CITIZENS HAVE EASY ACCESS TO ESSENTIAL INFORMATION, ONLINE SERVICES, GOVERNMENT PROGRAMS, AND PUBLIC SECTOR INITIATIVES DESIGNED.
            </p>
          </div>

          {/* Stacked Cards */}
          <div className={styles.benefitsStack}>
            {/* Card 1 */}
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitCardHeadline}>Digital Knowledge for Growing Companies</h3>
              <p className={styles.benefitCardDesc}>
                We understand the unique challenges businesses face and provide tailored solutions that perfectly match your growth stage, helping you scale efficiently, improve operations, and achieve long-term success.
              </p>
            </div>
            {/* Card 2 */}
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitCardHeadline}>Where Ideas Become Digital Solutions</h3>
              <p className={styles.benefitCardDesc}>
                Focused on delivering smart and scalable digital solutions, the team helps businesses transform ideas into powerful products.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Learn more <span>→</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className={styles.benefitCard}>
              <h3 className={styles.benefitCardHeadline}>Insights That Shape the Digital Future</h3>
              <p className={styles.benefitCardDesc}>
                We understand the unique challenges businesses face and provide tailored solutions that perfectly match your growth stage.
              </p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Explore insights <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy & Technology Section */}
      <section className={styles.strategySection}>
        <div className={styles.strategyContent}>
          {/* Left Area (Illustration) */}
          <div className={styles.strategyLeft}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
              alt="Strategy Illustration"
              className={styles.strategyImage}
            />
          </div>

          {/* Right Area (Headline + Description) */}
          <div className={styles.strategyRight}>
            <h2 className={styles.strategyHeadline}>
              <em>We</em> Combine strategy, creativity <span>and</span><br />
              technology to deliver solutions<br />
              that solve real business<br />
              challenges
            </h2>
            <p className={styles.strategyDescription}>
              We understand the unique challenges businesses face and provide tailored solutions that perfectly match your growth stage, helping you scale efficiently, improve operations, and achieve long-term success.
            </p>
            <button className={styles.strategyBtn}>
              View projects
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
      {/* Prossies Section */}
      <section className={styles.prossiesSection}>
        <div className={styles.prossiesContent}>
          {/* Top Info */}
          <div className={styles.prossiesTop}>
            <div className={styles.prossiesBadge}>Prossies</div>
            <h2 className={styles.prossiesHeadline}>
              We deliver reliable technology solutions that help businesses build, launch <em>and</em> grow powerful digital products
            </h2>
            <p className={styles.prossiesLeadText}>
              OUR GOVERNMENT IS COMMITTED TO TRANSPARENCY, ACCOUNTABILITY, AND EFFICIENCY, ENSURING THAT ALL CITIZENS HAVE EASY ACCESS TO ESSENTIAL INFORMATION, ONLINE SERVICES, GOVERNMENT PROGRAMS, AND PUBLIC SECTOR INITIATIVES DESIGNED.
            </p>
          </div>

          {/* Split Hero */}
          <div className={styles.prossiesHeroSplit}>
            {/* Featured Card */}
            <div className={styles.prossiesFeaturedCard}>
              <div>
                <div className={styles.cardTopLabel}>Building Digital solutions</div>
                <p className={styles.cardDescription}>
                  We provide innovative digital solutions that help businesses transform ideas into scalable, efficient, and user-friendly products. Our services focus on driving growth, improving operations, and enhancing customer experiences through reliable technology.
                </p>
              </div>

              <div className={styles.card3DOverlay}>
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
                  alt="3D Abstract UI"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <button className={styles.viewProssiesBtn}>
                View Prossies <span>→</span>
              </button>
            </div>

            {/* Image Card */}
            <div className={styles.prossiesImageCard}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                alt="Digital Professional"
                className={styles.prossiesHeroImage}
              />
              <div className={styles.imageLabelOverlay}>
                <span>Digital - FUTURE</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className={styles.prossiesGrid}>
            <div className={styles.prossieValueItem}>
              <div className={styles.valueIconBox}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" rx="12" fill="#0013CC" fillOpacity="0.1" />
                  <path d="M40 20C28.9543 20 20 28.9543 20 40C20 51.0457 28.9543 60 40 60C51.0457 60 60 51.0457 60 40C60 28.9543 51.0457 20 40 20ZM40 52C33.3726 52 28 46.6274 28 40C28 33.3726 33.3726 28 40 28C46.6274 28 52 33.3726 52 40C52 46.6274 46.6274 52 40 52Z" fill="#0013CC" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Fast prossies</h4>
              <p className={styles.valueDesc}>
                Timely and precise completion every time, ensuring high-quality results, seamless workflow, and customer satisfaction with every digital solution.
              </p>
            </div>

            <div className={styles.prossieValueItem}>
              <div className={styles.valueIconBox}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" rx="12" fill="#0013CC" fillOpacity="0.1" />
                  <path d="M40 20L25 35H35V60H45V35H55L40 20Z" fill="#0013CC" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Affordable Pricing</h4>
              <p className={styles.valueDesc}>
                Affordable and effective digital solutions that perfectly fit your budget, delivering maximum value, efficiency and long-term business growth.
              </p>
            </div>

            <div className={styles.prossieValueItem}>
              <div className={styles.valueIconBox}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" rx="12" fill="#0013CC" fillOpacity="0.1" />
                  <circle cx="40" cy="40" r="20" stroke="#0013CC" strokeWidth="4" />
                  <circle cx="40" cy="40" r="10" fill="#0013CC" />
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Expert Team</h4>
              <p className={styles.valueDesc}>
                Dedicated professionals who genuinely care about your success, providing expert guidance, reliable solutions, and support to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Partnership Section */}
      <section className={styles.partnershipSection}>
        <div className={styles.partnershipContent}>
          {/* Top Info */}
          <div className={styles.partnershipTop}>
            <div className={styles.partnershipBadge}>Partnership</div>
            <h2 className={styles.partnershipHeadline}>How to start a partnership?</h2>
            <p className={styles.partnershipDescription}>
              OUR GOVERNMENT IS COMMITTED TO TRANSPARENCY, ACCOUNTABILITY, AND EFFICIENCY, ENSURING THAT ALL CITIZENS HAVE EASY ACCESS TO ESSENTIAL INFORMATION, ONLINE SERVICES, GOVERNMENT PROGRAMS, AND PUBLIC SECTOR INITIATIVES DESIGNED TO IMPROVE NATIONAL DEVELOPMENT.
            </p>
          </div>

          {/* Logo Grid */}
          <div className={styles.partnershipGrid}>
            {/* IT Park */}
            <div className={styles.partnerLogoBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#8BC34A', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '24px', fontWeight: '700', color: '#001C66' }}>IT Park</span>
              </div>
            </div>

            {/* Tech jobs */}
            <div className={styles.partnerLogoBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#379AAF', transform: 'rotate(45deg)' }}></div>
                <span style={{ fontSize: '24px', fontWeight: '600', color: '#001C66' }}>Tech jobs</span>
              </div>
            </div>

            {/* Najot ta'lim */}
            <div className={styles.partnerLogoBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', border: '2px solid #E7AA12' }}></div>
                <span style={{ fontSize: '24px', fontWeight: '600', color: '#001C66' }}>Najot ta'lim</span>
              </div>
            </div>

            {/* Falaq nashr */}
            <div className={styles.partnerLogoBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#00008C', borderRadius: '50%' }}></div>
                <span style={{ fontSize: '24px', fontWeight: '500', color: '#001C66' }}>Falaq nashr</span>
              </div>
            </div>

            {/* Master */}
            <div className={styles.partnerLogoBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#FF0000', clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
                <span style={{ fontSize: '24px', fontWeight: '600', color: '#001C66' }}>Master</span>
              </div>
            </div>

            {/* Expert test */}
            <div className={styles.partnerLogoBox}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', border: '2px solid #379AAF', borderRadius: '8px' }}></div>
                <span style={{ fontSize: '24px', fontWeight: '600', color: '#001C66' }}>Expert test</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section className={styles.portfolioSection}>
        <div className={styles.portfolioContent}>
          {/* Top Info */}
          <div className={styles.portfolioTop}>
            <div className={styles.portfolioBadgeLabel}>Benefits</div>
            <h2 className={styles.portfolioHeadline}>
              Explore the digital products we've built to help businesses grow and innovate
            </h2>
            <p className={styles.portfolioDescription}>
              OUR GOVERNMENT IS COMMITTED TO TRANSPARENCY, ACCOUNTABILITY, AND EFFICIENCY, ENSURING THAT ALL CITIZENS HAVE EASY ACCESS TO ESSENTIAL INFORMATION, ONLINE SERVICES, GOVERNMENT PROGRAMS, AND PUBLIC SECTOR INITIATIVES DESIGNED.
            </p>
          </div>

          {/* Featured Image */}
          <div className={styles.portfolioFeatured}>
            <img
              src="https://images.unsplash.com/photo-1522071823991-b1ae650a0c98?auto=format&fit=crop&q=80&w=2000"
              alt="Our Team"
              className={styles.portfolioMainImage}
            />
            <div className={styles.portfolioCompanyBadge}>
              <em>Devline</em> <span>Company</span>
            </div>
          </div>

          {/* Accountability Bar */}
          <div className={styles.accountabilityBar}>
            <div className={styles.accountabilityIcon}>
              <svg viewBox="0 0 72 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="54" rx="4" fill="#00008C" />
                <circle cx="36" cy="27" r="12" stroke="white" strokeWidth="4" />
              </svg>
            </div>
            <p className={styles.accountabilityText}>
              OUR GOVERNMENT IS COMMITTED TO TRANSPARENCY, ACCOUNTABILITY, AND EFFICIENCY, ENSURING THAT ALL CITIZENS HAVE EASY ACCESS TO ESSENTIAL INFORMATION.
            </p>
          </div>

          {/* Category Nav */}
          <div className={styles.portfolioCategoryNav}>
            <button className={styles.insightsBtn}>
              Insights <span>→</span>
            </button>
          </div>

          {/* Info List */}
          <div className={styles.portfolioInfoList}>
            <div className={styles.portfolioInfoItem}>
              <div className={styles.infoItemIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="2" fillOpacity="0.1" />
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className={styles.infoItemText}>
                WE ENCOURAGE ALL CITIZENS TO ACCESS POLICIES, AND INTERNATIONAL INVESTMENTS IN THE CORE.
              </p>
              <div className={styles.infoItemChevron}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className={styles.portfolioInfoItem}>
              <div className={styles.infoItemIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <p className={styles.infoItemText}>
                GOVERNMENT'S OFFICIAL WEBSITE TO FIND RELEVANT DATA, REPORTS, STATISTICS, AND INFORMATION.
              </p>
              <div className={styles.infoItemChevron}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className={styles.portfolioInfoItem}>
              <div className={styles.infoItemIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className={styles.infoItemText}>
                PAPERS, AND SECTOR-SPECIFIC RESEARCH FOR INFORMED DECISION-MAKING IN THE REGION.
              </p>
              <div className={styles.infoItemChevron}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className={styles.portfolioInfoItem}>
              <div className={styles.infoItemIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                  <path d="M19.4 15V9M4.6 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className={styles.infoItemText}>
                TRANSPARENCY AND GOOD GOVERNANCE ARE THE FOUNDATION OF OUR ADMINISTRATION.
              </p>
              <div className={styles.infoItemChevron}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
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
                  <a href="#" className={styles.footerLink}>About us</a>
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
    </>
  );
}
