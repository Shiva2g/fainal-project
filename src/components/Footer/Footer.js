import React from 'react';
import Image from "next/image";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Mobile & Accessories</a></li>
            <li><a href="#">Laptops & Accessories</a></li>
            <li><a href="#">Cameras & Photography</a></li>
            <li><a href="#">Gaming & Accessories</a></li>
            <li><a href="#">HeadPhone</a></li>
            <li><a href="#">Tech News</a></li>
            <li><a href="#">Compare & Analyze</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>We created TechNest Marketplace to offer you a huge assortment, more than just TechNest products...</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: <a className={styles.footerEmail} href="mailto:support@technestshop.com">support@technestshop.com</a></p>
          <p>Phone: +1 800 111 1111</p>
          <p>4617 Gordon Rd, Regina, SK S4W 0B7</p>
          <div className={styles.socialIcons}>
            <a href="#"><Image src="/assets/images/icons/facebook_circled.png" width={30} height={30} alt="Facebook" /></a>
            <a href="#"><Image src="/assets/images/icons/instagram.png" width={30} height={30} alt="Instagram" /></a>
            <a href="#"><Image src="/assets/images/icons/twitter_x.png" width={30} height={30} alt="X" /></a>
            <a href="#"><Image src="/assets/images/icons/linked_in.png" width={30} height={30} alt="LinkedIn" /></a>
            <a href="#"><Image src="/assets/images/icons/you_tube.png" width={30} height={30} alt="YouTube" /></a>
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
          <p><a href="#">Terms &amp; Conditions</a> | <a href="#">Cookie Policy</a> | <a href="#">Privacy Policy</a> | <a href="#">Product Recalls</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
