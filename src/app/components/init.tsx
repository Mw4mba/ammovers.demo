'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            LogiFlow
          </Link>
          
          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/tracking" onClick={closeMobileMenu}>
                Tracking
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <Link href="/quote" className={styles.ctaButton}>
            Get Quote
          </Link>

          <div className={styles.mobileMenu} onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;