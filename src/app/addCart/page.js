// src/app/components/AddCart/AddCart.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; 

const AddCart = () => {
  return (
    <div>
      
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <p>Electronics {'>'} Laptop {'>'} New Arrival {'>'} Shop Laptop by type {'>'} <strong>Zenbook Duo (2024) UX8406</strong></p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <div className={styles.thumbnailImages}>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="Zenbook S 16" width={105} height={105}/>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop1.webp" alt="Zenbook S 16 - Alt 1" width={105} height={105}/>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop2.webp" alt="Zenbook S 16 - Alt 2" width={105} height={105}/>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop3.webp" alt="Zenbook S 16 - Alt 3" width={105} height={105}/>
            </div>
            <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="Zenbook S 16" width={450} height={450}/>
          </div>

          <div className={styles.productDetails}>
            <h3>ASUS Zenbook Duo (2024) UX8406</h3>
            <p className={styles.description}>A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.</p>
            <div className={styles.proRating}>
              <Image src="/assets/images/ratings/rating-35.png" alt="Rating" width={30} height={30}/> (58 Reviews)
            </div>
            <hr />
            <div className={styles.price}>
              <h4>$1549.00 or 99.99/month</h4>
              <p>Suggested payments with 6 months special financing</p>
            </div>
            <hr />
            <div className={styles.colorSelector}>
              <p>Choose a Color</p>
              <div className={styles.colors}>
                <span className={styles.colorOption} style={{ backgroundColor: '#aa9f80' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#333' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#e0e0e0' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#ecc5c0' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#bcc6cc' }}></span>
              </div>
            </div>
            <hr />
            <div className={styles.quantitySelector}>
              <button className={styles.quantityBtn}>-</button>
              <span>1</span>
              <button className={styles.quantityBtn}>+</button>
              <p>Only <span className={styles.stock}>12 Items Left!</span> Don't miss it</p>
            </div>
            <div className={styles.buyButtons}>
              <button className={styles.buyNow}>Buy Now</button>
              <button className={styles.addToCart}>Add to Cart</button>
            </div>

            <div className={styles.deliveryInfo}>
              <table>
                <tr>
                  <td>
                    <p>
                      <span className="material-symbols-outlined">local_shipping</span>
                      <span>Free Delivery - Enter your postal code for delivery availability</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <span className="material-symbols-outlined">change_circle</span>
                      Free 30-days delivery returns. <Link href="#">Details</Link>
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default AddCart;
