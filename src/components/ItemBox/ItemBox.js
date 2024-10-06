"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./ItemBox.module.css";
// import { useState } from 'react';


const ItemBox = ({ image, name, description, price, store, imageTwo, imageThree, imageFour }) => {

//  const [quantity, setQuantity] =useState(0); //
//   const handleAdd = () => {          
//  setQuantity(quantity + 1);      
// // onAddToCart();           
// };                       

// const handleSubtract = () => {   
//  if (quantity > 0) {             
//    setQuantity(quantity - 1); 
//  }
// };        

  return (
    <div className={styles.productItem}>
      <div className={styles.proImage}>
        <Image
          src={image} width={200} height={200}
          alt="Product Image"
        />
        <div className={styles.proLike}>
          <span className="material-symbols-outlined">favorite</span>
        </div>
      </div>
      <div>
        <p className={styles.proTitle}>
        <Link href={`/addCart?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&price=${price}&image=${encodeURIComponent(image)}&store=${encodeURIComponent(store)}&imageTwo=${encodeURIComponent(imageTwo)}&imageThree=${encodeURIComponent(imageThree)}&imageFour=${encodeURIComponent(imageFour)}`}>
        {name}</Link></p>
        <p className={styles.proInfo}>
        {description}
        </p>
      
      </div>
      <div className={styles.proRating}>
           <Image src="/assets/images/ratings/rating-35.png" width={65} height={15} alt="Rating" /> (58 Reviews)
      </div>
      <div className={styles.subInfoPro}>
        <div className={styles.infoButton}>
        <Link href={`/addCart?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&price=${price}&image=${encodeURIComponent(image)}&store=${encodeURIComponent(store)}&imageTwo=${encodeURIComponent(imageTwo)}&imageThree=${encodeURIComponent(imageThree)}&imageFour=${encodeURIComponent(imageFour)}`}>
            <button>View Details</button>
          </Link>
        {/*<button className={styles.addItem} onClick={handleAdd}>+</button>
         <span className={styles.numberPurchase}> {quantity} </span><button className={styles.removeItem} onClick={handleSubtract}>-</button>   */}
        </div>
        <div className={styles.infoPrice}>
          <p>Price ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;