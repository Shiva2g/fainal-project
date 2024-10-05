'use client';

import React from 'react';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'; 
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';




const AddCart = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const description = searchParams.get('description');
  const price = searchParams.get('price');
  const image = searchParams.get('image');
  const store = searchParams.get('Store');

  const { addToCart, removeFromCart, getProductQuantity } = useCart();
  const product = { name, description, price, image, store };
  const quantity = getProductQuantity(product);

  const router = useRouter();

  const handleCheckout = () => {
    router.push('/checkOut');
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <p><Link href="/">Home</Link> {'>'} <Link href="/products">Products List</Link>  {'>'} <strong>{name}</strong></p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <div className={styles.thumbnailImages}>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="Zenbook S 16" width={105} height={105}/>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop1.webp" alt="Zenbook S 16 - Alt 1" width={105} height={105}/>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop2.webp" alt="Zenbook S 16 - Alt 2" width={105} height={105}/>
              <Image src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop3.webp" alt="Zenbook S 16 - Alt 3" width={105} height={105}/>
            </div>
            <Image src={image} alt="name" width={450} height={450}/>
          </div>

          <div className={styles.productDetails}>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.proRating}>
              <Image src="/assets/images/ratings/rating-35.png" alt="Rating" width={60} height={15}/> (58 Reviews)
            </div>
            <hr />
            <div className={styles.price}>
              <h4>Price: ${price}</h4>
              <p>Suggested payments with 6 months special financing</p>
            </div>
            <hr />
            <div className={styles.colorSelector}>
              <p>Choose a Color</p>
              <div className={styles.colors}>
                <span className={styles.colorOption} style={{ backgroundColor: '#aa9f80' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#333' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#e0e0e0' }}></span>
                <span className={styles.colorOption} style={{ backgroundColor: '#bcc6cc' }}></span>
              </div>
            </div>
            <hr />
            <div className={styles.quantitySelector}>
            <button onClick={() => removeFromCart(product)} className={styles.quantityBtn}>-</button>
            <span className={styles.numberPurchase}> {quantity}</span>
              <button onClick={() => addToCart(product)} className={styles.quantityBtn}>+</button>
              <p> <span className={styles.stock}>Only ...{store} Items Left!</span> Don't miss it</p>
            </div>
            <div className={styles.buyButtons}>
            <button onClick={handleCheckout}>Buy Now</button>
            </div>

            <div className={styles.deliveryInfo}>
              <table>
              <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddCart;
