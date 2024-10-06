import React from 'react';
import Link from 'next/link';
import styles from "./Category.module.css";

const Category = () => {
  return (

    <div className={styles.dealsItem}>
      <Link href={{pathname:'/search' , query:{productType:'laptop'}}}>
      <span className={`${styles.icon} material-symbols-outlined`}>laptop_mac</span>
        <p>Laptop</p>
      </Link>
      <Link href={{pathname:'/search' , query:{productType:'mobile'}}}>
      <span className={`${styles.icon} material-symbols-outlined`}>smartphone</span>
        <p>Smartphone</p>
      </Link>
      <Link href={{pathname:'/search' , query:{productType:'camera'}}}>
      <span className={`${styles.icon} material-symbols-outlined`}>photo_camera</span>
        <p>Camera</p>
      </Link>
      <Link href={{pathname:'/search' , query:{productType:'Gaming'}}}>
      <span className={`${styles.icon} material-symbols-outlined`}>stadia_controller</span>
        <p>Gaming Console</p>
      </Link>
      <Link href={{pathname:'/search' , query:{productType:'headphone'}}}>
      <span className={`${styles.icon} material-symbols-outlined`}>headset_mic</span>
        <p>HeadPhone</p>
      </Link>
    </div>

  );
};

export default Category;
