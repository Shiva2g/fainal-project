import React from 'react';
import styles from './CheckOut.module.css';

const CheckOut = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.topHeader}>
          <div className={styles.logo}>
            <a href="#"><img className={styles.myLogo} src="images/logo1.png" alt="Logo" /></a>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search for products..." />
            <button type="submit">
              <img className={styles.iconSearch} src="images/icons/search-icon.png" alt="Search Icon" />
              <div className={styles.tooltip}>Search</div>
            </button>
          </div>
          <div className={styles.headerIcons}>
            <div className={styles.checkoutItem}>Checkout (3 items)</div>
            <a href="#"><img src="images/icons/shopping_cart.png" className={styles.shoppingCart} alt="Cart" /> Cart</a>
            <a href="#"><img src="images/icons/account.png" className={styles.account} alt="Account" /> Account</a>
          </div>
        </div>
      </header>

      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            { /* Order Item 1 */ }
            <div className={styles.cartItemContainer}>
              <div className={styles.deliveryDate}>
                Delivery date: Tuesday, September 10
              </div>
              <div className={styles.cartItemDetailsGrid}>
                <img className={styles.productImage} src="images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" alt="ASUS Zenbook" />
                <div className={styles.cartItemDetails}>
                  <div className={styles.productName}>ASUS Zenbook Duo (2024) UX8406</div>
                  <div className={styles.productPrice}>$1599</div>
                  <div className={styles.productQuantity}>
                    <span>Quantity: <span className={styles.quantityLabel}>2</span></span>
                    <span className={styles.updateQuantityLink}>Update</span>
                    <span className={styles.deleteQuantityLink}>Delete</span>
                  </div>
                </div>
                <DeliveryOptions optionName="delivery-option-1" />
              </div>
            </div>

            { /* Order Item 2 */ }
            <div className={styles.cartItemContainer}>
              <div className={styles.deliveryDate}>
                Delivery date: Wednesday, September 15
              </div>
              <div className={styles.cartItemDetailsGrid}>
                <img className={styles.productImage} src="images/products/phone/Apple iPhone 15 Pro Max 512GB - White Titanium.jpg" alt="iPhone 15 Pro Max" />
                <div className={styles.cartItemDetails}>
                  <div className={styles.productName}>Apple iPhone 15 Pro Max 512GB - White Titanium</div>
                  <div className={styles.productPrice}>$1220</div>
                  <div className={styles.productQuantity}>
                    <span>Quantity: <span className={styles.quantityLabel}>1</span></span>
                    <span className={styles.updateQuantityLink}>Update</span>
                    <span className={styles.deleteQuantityLink}>Delete</span>
                  </div>
                </div>
                <DeliveryOptions optionName="delivery-option-2" />
              </div>
            </div>
          </div>

          <PaymentSummary />
        </div>
      </div>
    </div>
  );
};

// Delivery Options Component
const DeliveryOptions = ({ optionName }) => {
  return (
    <div className={styles.deliveryOptions}>
      <div className={styles.deliveryOptionsTitle}>Choose a delivery option:</div>
      <div className={styles.deliveryOption}>
        <input type="radio" className={styles.deliveryOptionInput} name={optionName} defaultChecked />
        <div>
          <div className={styles.deliveryOptionDate}>Tuesday, September 21</div>
          <div className={styles.deliveryOptionPrice}>FREE Shipping</div>
        </div>
      </div>
      <div className={styles.deliveryOption}>
        <input type="radio" className={styles.deliveryOptionInput} name={optionName} />
        <div>
          <div className={styles.deliveryOptionDate}>Wednesday, September 15</div>
          <div className={styles.deliveryOptionPrice}>$4.99 - Shipping</div>
        </div>
      </div>
      <div className={styles.deliveryOption}>
        <input type="radio" className={styles.deliveryOptionInput} name={optionName} />
        <div>
          <div className={styles.deliveryOptionDate}>Monday, September 13</div>
          <div className={styles.deliveryOptionPrice}>$9.99 - Shipping</div>
        </div>
      </div>
    </div>
  );
};

// Payment Summary Component
const PaymentSummary = () => {
  return (
    <div className={styles.paymentSummary}>
      <div className={styles.paymentSummaryTitle}>Order Summary</div>
      <div className={styles.paymentSummaryRow}>
        <div>Items (3):</div>
        <div className={styles.paymentSummaryMoney}>$4418</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Shipping &amp; handling:</div>
        <div className={styles.paymentSummaryMoney}>$4.99</div>
      </div>
      <div className={`${styles.paymentSummaryRow} ${styles.subtotalRow}`}>
        <div>Total before tax:</div>
        <div className={styles.paymentSummaryMoney}>$4422.99</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Estimated tax (8%):</div>
        <div className={styles.paymentSummaryMoney}>$354</div>
      </div>
      <div className={`${styles.paymentSummaryRow} ${styles.totalRow}`}>
        <div>Order total:</div>
        <div className={styles.paymentSummaryMoney}>$4776.80</div>
      </div>
      <button className={`${styles.placeOrderButton} ${styles.buttonPrimary}`}>
        Place your order
      </button>
    </div>
  );
};

export default CheckOut;
