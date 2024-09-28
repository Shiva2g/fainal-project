import React from 'react';
import Image from "next/image";
import Styles from "./CompareItem.module.css";

const CompareItem = () => {
  return (
    <div className={Styles.compareItem}>
      <Image
        src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp"
        alt="Asus Pro Image"
        width={100}
        height={100}
        className={Styles.compareIcon}
      />
      <span>ASUS Zenbook Duo (2024) UX8406 - 15.6 inch</span>
      <button className={Styles.addButton}>+</button>
    </div>
  );
};

export default CompareItem;