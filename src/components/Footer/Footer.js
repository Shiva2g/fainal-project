import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Shop</h3>
          <ul>
            <li><Link href="#">Mobile & Accessories</Link></li>
            <li><Link href="#">Laptops & Accessories</Link></li>
            <li><Link href="#">Cameras & Photography</Link></li>
            <li><Link href="#">Gaming & Accessories</Link></li>
            <li><Link href="#">HeadPhone</Link></li>
            <li><Link href="#">Tech News</Link></li>
            <li><Link href="#">Compare & Analyze</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>We created TechNest Marketplace to offer you a huge assortment, Whether you're looking for the latest mobile phones, laptops, headphones, or cameras, TechNest has it all. Established with a mission to provide easy, safe, and convenient shopping experiences, we cater to all your electronic needs.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: <Link className={styles.footerEmail} href="mailto:support@technestshop.com">support@technestshop.com</Link></p>
          <p>Phone: +1 800 111 1111</p>
          <p>4617 Gordon Rd, Regina, SK S4W 0B7</p>
          <div className={styles.socialIcons}>
            <Link href="#"><Image src="/assets/images/icons/facebook_circled.png" width={30} height={30} alt="Facebook" /></Link>
            <Link href="#"><Image src="/assets/images/icons/instagram.png" width={30} height={30} alt="Instagram" /></Link>
            <Link href="#"><Image src="/assets/images/icons/twitter_x.png" width={30} height={30} alt="X" /></Link>
            <Link href="#"><Image src="/assets/images/icons/linked_in.png" width={30} height={30} alt="LinkedIn" /></Link>
            <Link href="#"><Image src="/assets/images/icons/you_tube.png" width={30} height={30} alt="YouTube" /></Link>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footerSection}>
          <h3>Be the first to know</h3>
          <p>Sign up to stay in the loop about the hottest deals...</p>
          <form className={styles.signupForm}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.paymentMethods}>
          <span>We accept the following paying methods :</span>
          <Image src="/assets/images/visa.png" width={30} height={30} alt="Visa" />
          <Image src="/assets/images/paypal.png" width={30} height={30} alt="PayPal" />
          <Image src="/assets/images/mastercard.png" width={30} height={30} alt="Mastercard" />
          <Image src="/assets/images/bitcoin.png" width={30} height={30} alt="Bitcoin" />
          <Image src="/assets/images/tether.png" width={30} height={30} alt="Tether" />
        </div>
        <div className={styles.footerCredits}>
          <p>&copy; 2024 TechNest. All Rights Reserved.</p>
          <p><Link href="#">Terms &amp; Conditions</Link> | <Link href="#">Cookie Policy</Link> | <Link href="#">Privacy Policy</Link> | <Link href="#">Product Recalls</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
