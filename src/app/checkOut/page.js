'use client';
import React, { useState } from "react"; 
import { useCart } from '../../context/CartContext';
import styles from "./page.module.css";
import PurchaseList from "../../components/PurchaseList/PurchaseList";
import { useRouter } from 'next/navigation'; // Import useRouter

const CheckOut = () => {
  const { cart } = useCart();
  const [shippingCost, setShippingCost] = useState(4.99); // Initial shippingCost
  const [deliveryDate, setDeliveryDate] = useState('Not specified'); // Delivery date
  const router = useRouter(); // Initialize useRouter

  const handlePlaceOrder = () => {  // Navigate to the order confirmation page
    router.push('/orderConfirmation');
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            {cart.length > 0 ? (
              <PurchaseList 
                updateShippingCost={setShippingCost} 
                updateDeliveryDate={setDeliveryDate} // ارسال متد به PurchaseList
              />
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          <PaymentSummary shippingCost={shippingCost} deliveryDate={deliveryDate} onPlaceOrder={handlePlaceOrder}/> {/* ارسال تاریخ تحویل */}
        </div>
      </div>
    </div>
  );
};

// PaymentSummary component 
const PaymentSummary = ({ shippingCost, deliveryDate, onPlaceOrder }) => {
  const { cart } = useCart(); 
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const estimatedTax = totalPrice * 0.08; 
  const orderTotal = totalPrice + shippingCost + estimatedTax; 
  
  return (
    <div className={styles.paymentSummary}>
      <div className={styles.paymentSummaryTitle}>Order Summary</div>
      <div className={styles.paymentSummaryRow}>
        <div>Items ({totalItems}):</div>
        <div className={styles.paymentSummaryMoney}>${totalPrice.toFixed(2)}</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Shipping &amp; handling:</div>
        <div className={styles.paymentSummaryMoney}>${shippingCost.toFixed(2)}</div>
      </div>
      <div className={`${styles.paymentSummaryRow} ${styles.subtotalRow}`}>
        <div>Total before tax:</div>
        <div className={styles.paymentSummaryMoney}>${(totalPrice + shippingCost).toFixed(2)}</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Estimated tax (8%):</div>
        <div className={styles.paymentSummaryMoney}>${estimatedTax.toFixed(2)}</div>
      </div>
      <div className={`${styles.paymentSummaryRow} ${styles.totalRow}`}>
        <div>Order total:</div>
        <div className={styles.paymentSummaryMoney}>${orderTotal.toFixed(2)}</div>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div>Delivery Date:</div>
        <div className={styles.paymentSummaryMoney}>{deliveryDate}</div> {/* نمایش تاریخ تحویل */}
      </div>
      <button 
          className={`${styles.placeOrderButton} ${styles.buttonPrimary}`} 
          onClick={onPlaceOrder} // Use handlePlaceOrder
        >
        Place your order
      </button>

    </div>
  );
};

export default CheckOut;
