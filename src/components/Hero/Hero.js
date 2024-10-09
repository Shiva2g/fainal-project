"use client"; // component is a Client Component

import React, { useState, useEffect } from 'react'; 
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from 'next/link';

const images = [
  "/assets/images/products/hero-img2.png", //  image
  "/assets/images/products/hero-img.png", 
  "/assets/images/products/hero-img4.png",
  "/assets/images/products/hero-img1.png",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('');

  const handleNextImage = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeClass('fade-in');
    }, 500);
  };

  const handlePreviousImage = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex - 1 + images.length) % images.length
      );
      setFadeClass('fade-in');
    }, 500);
  };

   //     تغییر خودکار تصویر
   useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 4000); // عوض شدن تصویر هر ۴ ثانیه

    return () => clearInterval(interval); // پاک کردن interval هنگام unmount
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.backButton} onClick={handlePreviousImage}>
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
          <Link href="/products"><button className={styles.shopNow}>Shop Now</button></Link>
            {/* <button className={styles.shopAll}>Details</button> */}
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src={images[currentImageIndex]} 
            width={500} 
            height={300} 
            alt="Hero"
            className={`${styles.imageTransition} ${styles[fadeClass]}`} 
          />
        </div>
      </div>
      <div className={styles.forwardButton} onClick={handleNextImage}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </section>
  );
};

export default Hero;
