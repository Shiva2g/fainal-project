// src/app/components/AddCart/AddCart.js
import React from 'react';
import Image from 'next/image'; 
import headerStyles from '../Header/Header.module.css'; 
import footerStyles from '../Footer/Footer.module.css'; 
import styles from './AddCart.module.css'; 

const AddCart = () => {
  return (
    <div>
      {/* Header Section */}
      <header className={headerStyles.header}>
        <div className={headerStyles.topHeader}>
          <div className={headerStyles.logo}>
            <a href="index.html">
              <Image className="my-logo" src="/images/logo1.png" alt="Logo" />
            </a>
          </div>
          <div className={headerStyles.searchBar}>
            <input type="text" placeholder="Search for products..." />
            <button type="submit">
              <Image className="icon-search" src="/images/icons/search-icon.png" alt="Search Icon" />
              <div className="tooltip">Search</div>
            </button>
          </div>
          <div className={headerStyles.headerIcons}>
            <a href="#">
              <Image src="/images/icons/shopping_cart.png" className="shopping-cart" alt="Cart" /> Cart
            </a>
            <a href="#">
              <Image src="/images/icons/account.png" className="account" alt="Account" /> Account
            </a>
          </div>
        </div>

        {/* Nav Bar Section */}
        <nav>
          <ul>
            <li>
              <a href="#">
                <Image src="/images/icons/menu.png" className="menu-ico" alt="Menu" />
              </a>
            </li>
            <li className="dropdown">
              <a href="#">Products</a>
              <div className="dropdown-content">
                <a href="#">Mobile & Accessories</a>
                <hr />
                <a href="#">Laptops & Accessories</a>
                <hr />
                <a href="#">Cameras & Photography</a>
                <hr />
                <a href="#">Gaming & Accessories</a>
                <hr />
                <a href="#">HeadPhone</a>
              </div>
            </li>
            <li><a href="#">Compare & Analyze</a></li>
            <li><a href="#">Smart Picks</a></li>
            <li><a href="#">Tech News</a></li>
            <li>
              <a href="#">Deals</a>
              <div className="dropdown-content">
                <a href="#">Laptop</a>
                <hr />
                <a href="#">Mobile</a>
                <hr />
                <a href="#">Cameras</a>
                <hr />
                <a href="#">Gaming</a>
                <hr />
                <a href="#">HeadPhone</a>
              </div>
            </li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <div className={styles.breadcrumb}>
          <p>Electronics {'>'} Laptop {'>'} New Arrival {'>'} Shop Laptop by type {'>'} <strong>Zenbook Duo (2024) UX8406</strong></p>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <div className={styles.thumbnailImages}>
              <Image src="/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="Zenbook S 16" />
              <Image src="/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop1.webp" alt="Zenbook S 16 - Alt 1" />
              <Image src="/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop2.webp" alt="Zenbook S 16 - Alt 2" />
              <Image src="/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop3.webp" alt="Zenbook S 16 - Alt 3" />
            </div>
            <Image src="/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="Zenbook S 16" />
          </div>

          <div className={styles.productDetails}>
            <h3>ASUS Zenbook Duo (2024) UX8406</h3>
            <p className={styles.description}>A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.</p>
            <div className={styles.proRating}>
              <Image src="/images/ratings/rating-35.png" alt="Rating" /> (58 Reviews)
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
                      Free 30-days delivery returns. <a href="#">Details</a>
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerContainer}>
          {/* Your footer content here... */}
        </div>
      </footer>
    </div>
  );
};

export default AddCart;
