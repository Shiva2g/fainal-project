import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./ItemBox.module.css";

const ItemBox = () => {
  return (
    <div className={styles.productItem}>
      <div className={styles.proImage}>
        <Image
          src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" width={250} height={250}
          alt="ASUS Zenbook"
        />
        <div className={styles.proLike}>
          <span className="material-symbols-outlined">favorite</span>
        </div>
      </div>
      <div>
        <p className={styles.proTitle}>ASUS Zenbook Duo (2024) UX8406</p>
        <p className={styles.proInfo}>
          Revolutionary laptop with Apple's M2 chip for unparalleled performance and battery life.
        </p>
      
      </div>
      <div className={styles.proRating}>
          <Image src="/assets/images/ratings/rating-35.png" width={35} height={35} alt="Rating" /> (58 Reviews)
      </div>
      <div className={styles.subInfoPro}>
        <div className={styles.infoButton}>
          <button>View Details</button>
        </div>
        <div className={styles.infoPrice}>
          <p>Price $1,399</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;