import React from 'react';
import Image from "next/image";
import styles from "./PurchaseList.module.css";

{ /* Order Item 1 */ }
const PurchaseList = () => {
  return (
    
    <div className={styles.cartItemContainer}>
      <div className={styles.deliveryDate}>
        Delivery date: Tuesday, September 10
      </div>
      <div className={styles.cartItemDetailsGrid}>
        <Image className={styles.productImage} src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="ASUS Zenbook" width={100} height={100}/>
        <div className={styles.cartItemDetails}>
          <div className={styles.productName}>ASUS Zenbook Duo (2024) UX8406</div>
          <div className={styles.productPrice}>$1599</div>
          <div className={styles.productQuantity}>
            <span>Quantity: <span className={styles.quantityLabel}>2</span></span>
            <div className={styles.updateQuantityLink}>
            <div className={styles.quantitySelector}>
            <button className={styles.quantityBtn}>-</button>
            <span>1</span>
            <button className={styles.quantityBtn}>+</button>
            
          </div>
            

            </div>
            <button className={styles.deleteQuantity}>Delete</button>
          </div>
        </div>
        

        
          <div className={styles.deliveryOptions}>
            <div className={styles.deliveryOptionsTitle}>
              Choose a delivery option:
            </div>

            <div className={styles.deliveryOption}>
              <input 
                type="radio" 
                className={styles.deliveryOptionInput} 
                name="delivery-option-2" 
              />
              <div>
                <div className={styles.deliveryOptionDate}>
                  Tuesday, September 21
                </div>
                <div className={styles.deliveryOptionPrice}>
                  FREE Shipping
                </div>
              </div>
            </div>

            <div className={styles.deliveryOption}>
              <input 
                type="radio" 
                className={styles.deliveryOptionInput} 
                name="delivery-option-2" 
                defaultChecked 
              />
              <div>
                <div className={styles.deliveryOptionDate}>
                  Wednesday, September 15
                </div>
                <div className={styles.deliveryOptionPrice}>
                  $4.99 - Shipping
                </div>
              </div>
            </div>

            <div className={styles.deliveryOption}>
              <input 
                type="radio" 
                className={styles.deliveryOptionInput} 
                name="delivery-option-2" 
              />
              <div>
                <div className={styles.deliveryOptionDate}>
                  Monday, September 13
                </div>
                <div className={styles.deliveryOptionPrice}>
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>


        
      </div>
    </div>
  
  );
};


export default PurchaseList;