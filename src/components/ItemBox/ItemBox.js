import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./ItemBox.module.css";
// import { useState } from 'react';


const ItemBox = ({ image, name, description, price }) => {
//  const [cartItems , setCartItems] =useState([])
  return (
    <div className={styles.productItem}>
      <div className={styles.proImage}>
        <Image
          src={image} width={250} height={250}
          alt="Product Image"
        />
        <div className={styles.proLike}>
          <span className="material-symbols-outlined">favorite</span>
        </div>
      </div>
      <div>
        <p className={styles.proTitle}><Link href="/search">{name}</Link></p>
        <p className={styles.proInfo}>
        {description}
        </p>
      
      </div>
      <div className={styles.proRating}>
           <Image src="/assets/images/ratings/rating-35.png" width={65} height={15} alt="Rating" /> (58 Reviews)
      </div>
      <div className={styles.subInfoPro}>
        <div className={styles.infoButton}>
        <button className={styles.addItem}>+</button><span className={styles.numberPurchase}>0</span><button className={styles.removeItem}>-</button> 
        </div>
        <div className={styles.infoPrice}>
          <p>Price ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;