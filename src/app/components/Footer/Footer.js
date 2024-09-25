import React from 'react';
import Image from "next/image";
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Mobile & Accessories</a></li>
            <li><a href="#">Laptops & Accessories</a></li>
            <li><a href="#">Cameras & Photography</a></li>
            <li><a href="#">Gaming & Accessories</a></li>
            <li><a href="#">HeadPhone</a></li>
            <li><a href="#">Tech News</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Compare & Analyze</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We created TechNest Marketplace to offer you a huge assortment, more than just TechNest products...</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a className="footer-email" href="mailsupport@technestshop.com">support@technestshop.com</a></p>
          <p>Phone: +1 800 111 1111</p>
          <p>4617 Gordon Rd, Regina, SK S4W 0B7</p>
          <div className="social-icons">
            <a href="#"><Image src="images/icons/facebook_circled.png" alt="Facebook" /></a>
            <a href="#"><Image src="images/icons/instagram.png" alt="Instagram" /></a>
            <a href="#"><Image src="images/icons/twitter_x.png" alt="X" /></a>
            <a href="#"><Image src="images/icons/linked_in.png" alt="LinkedIn" /></a>
            <a href="#"><Image src="images/icons/you_tube.png" alt="YouTube" /></a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-section">
          <h3>Be the first to know</h3>
          <p>Sign up to stay in the loop about the hottest deals...</p>
          <form className="signup-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-methods">
          <span>We accept the following paying methods :</span>
          <Image src="images/visa_1.png" alt="Visa" />
          <Image src="images/pay_pal_1.png" alt="PayPal" />
          <Image src="images/mastercard_1.png" alt="Mastercard" />
          <Image src="images/bitcoin_1.png" alt="Bitcoin" />
          <Image src="images/tether_logo_svg_1.png" alt="Tether" />
        </div>
        <div className="footer-credits">
          <p>&copy; 2024 TechNest. All Rights Reserved.</p>
          <p><a href="#">Terms &amp; Conditions</a> | <a href="#">Cookie Policy</a> | <a href="#">Privacy Policy</a> | <a href="#">Product Recalls</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
