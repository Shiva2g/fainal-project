'use client';
import React, { useState } from "react"; // اضافه کردن useState
import { useCart } from '../../context/CartContext';
import styles from "./page.module.css";
import PurchaseList from "../../components/PurchaseList/PurchaseList";

const CheckOut = () => {
  const { cart } = useCart();
  const [shippingCost, setShippingCost] = useState(4.99); // مقدار اولیه shippingCost
  
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            {/* نمایش لیست محصولات خریداری شده */}
            {cart.length > 0 ? (
              <PurchaseList updateShippingCost={setShippingCost}/>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {/* نمایش خلاصه پرداخت */}
          <PaymentSummary shippingCost={shippingCost}/>
        </div>
      </div>
    </div>
  );
};

// PaymentSummary componente 
const PaymentSummary = ({ shippingCost }) => {
  const { cart } = useCart(); 
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const estimatedTax = totalPrice * 0.08; 
  const orderTotal = totalPrice + (shippingCost || 0) + estimatedTax; // اضافه کردن چک برای undefined
  
  return (
    <div className={styles.paymentSummary}>
      <div className={styles.paymentSummaryTitle}>Order Summary</div>
      <div className={styles.paymentSummaryRow}>
        <div>Items ({totalItems}):</div>
        <div className={styles.paymentSummaryMoney}>${totalPrice.toFixed(2)}</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Shipping &amp; handling:</div>
        <div className={styles.paymentSummaryMoney}>${(shippingCost || 0).toFixed(2)}</div> {/* مقدار پیش‌فرض برای undefined */}
      </div>
      <div className={`${styles.paymentSummaryRow} ${styles.subtotalRow}`}>
        <div>Total before tax:</div>
        <div className={styles.paymentSummaryMoney}>${(totalPrice + (shippingCost || 0)).toFixed(2)}</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Estimated tax (8%):</div>
        <div className={styles.paymentSummaryMoney}>${estimatedTax.toFixed(2)}</div>
      </div>
      <div className={`${styles.paymentSummaryRow} ${styles.totalRow}`}>
        <div>Order total:</div>
        <div className={styles.paymentSummaryMoney}>${orderTotal.toFixed(2)}</div>
      </div>
      <button className={`${styles.placeOrderButton} ${styles.buttonPrimary}`}>
        Place your order
      </button>
    </div>
  );
};


export default CheckOut;

