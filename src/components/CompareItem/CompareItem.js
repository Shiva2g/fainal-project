"use client";

import React from 'react';
import Image from "next/image";
import Styles from "./CompareItem.module.css";

const CompareItem = ({ product, onSelect }) => {  // افزودن onSelect به props
  const { image, name, description, price, store, imageTwo, imageThree, imageFour } = product;

  const handleClick = () => {
    onSelect({  // ارسال اطلاعات محصول به والد
      name, 
      description, 
      price, 
      store, 
      image, 
      imageTwo, 
      imageThree, 
      imageFour 
    });
  };

  return (
    <div className={Styles.compareItem} onClick={handleClick}>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100} 
        className={Styles.compareIcon}
      />
      <span>{name}</span>
      <button className={Styles.addButton}>+</button>
    </div>
  );
};

export default CompareItem;
