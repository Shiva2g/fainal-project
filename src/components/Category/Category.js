import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./Category.module.css";

const Category = () => {
  return (

    <div className={styles.dealsItem}>
      <Link href="#">
      <span className={`${styles.icon} material-symbols-outlined`}>laptop_mac</span>
        <p>Laptop</p>
      </Link>
      <Link href="#">
      <span className={`${styles.icon} material-symbols-outlined`}>smartphone</span>
        <p>Smartphone</p>
      </Link>
      <Link href="#">
      <span className={`${styles.icon} material-symbols-outlined`}>photo_camera</span>
        <p>Camera</p>
      </Link>
      <Link href="#">
      <span className={`${styles.icon} material-symbols-outlined`}>stadia_controller</span>
        <p>Gaming Console</p>
      </Link>
      <Link href="#">
      <span className={`${styles.icon} material-symbols-outlined`}>headset_mic</span>
        <p>HeadPhone</p>
      </Link>
    </div>

  );
};

export default Category;
