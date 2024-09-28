import React from 'react';
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
      <section className={styles.heroSection}>
        <div className={styles.backButton}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.offerDetails}>
            <div className={styles.heading2}>Welcome to TechNest</div>
            <div className={styles.heading1}>Online Digital Shopping</div>
            <div className={styles.heading4}>
              Discover Incredible Deals on Electronics
            </div>
            <div className={styles.heading1}>
              Save up to $300 on select Products.
            </div>
            <div className={styles.shopButtons}>
              <button className={styles.shopNow}>Shop Now</button>
              <button className={styles.shopAll}>Shop All</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/assets/images/products/hero-img.png" width={500} height={300} alt="Hero" />
          </div>
        </div>
        <div className={styles.forwardButton}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </section>
  );
};

export default Hero;