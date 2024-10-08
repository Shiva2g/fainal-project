'use client';
import React, { useState } from "react";
import { useCart } from '../../context/CartContext';
import styles from "./page.module.css";

const OrderConfirmation = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setError(''); // Reset error when payment method is changed
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !address || !paymentMethod) {
      setError('Please fill out all fields and select a payment method.');
      return;
    }

    // Generate a random tracking code
    const generatedTrackingCode = `TRK-${Math.floor(Math.random() * 1000000)}`;
    setTrackingCode(generatedTrackingCode);
    setShowConfirmation(true);
  };

  return (
    <main className={styles.main}>
      <div className={styles.orderConfirmationContainer}>
        <h1>Order Confirmation</h1>
        <h2>Your Order:</h2>
        <div className={styles.orderSummary}>
          {cart.map((product, index) => (
            <div key={index} className={styles.productRow}>
              <div>{product.name} - ${product.price} x {product.quantity}</div>
            </div>
          ))}
        </div>

        <h3>Choose your payment method:</h3>
        <form className={styles.paymentForm}>
          <div className={styles.paymentMethods}>
            <label className={styles.paymentLabel}>
              <input
                type="radio"
                id="mastercard"
                name="payment"
                value="MasterCard"
                onChange={() => handlePaymentMethodChange('MasterCard')}
              />
              MasterCard
              {paymentMethod === 'MasterCard' && (
                <input
                  className={styles.paymentInput}
                  type="text"
                  placeholder="Enter your MasterCard number"
                />
              )}
            </label>

            <label className={styles.paymentLabel}>
              <input
                type="radio"
                id="bitcoin"
                name="payment"
                value="Bitcoin"
                onChange={() => handlePaymentMethodChange('Bitcoin')}
              />
              Bitcoin
              {paymentMethod === 'Bitcoin' && (
                <input
                  className={styles.paymentInput}
                  type="text"
                  placeholder="Enter your Bitcoin wallet address"
                />
              )}
            </label>

            <label className={styles.paymentLabel}>
              <input
                type="radio"
                id="tether"
                name="payment"
                value="Tether"
                onChange={() => handlePaymentMethodChange('Tether')}
              />
              Tether
              {paymentMethod === 'Tether' && (
                <input
                  className={styles.paymentInput}
                  type="text"
                  placeholder="Enter your Tether wallet address"
                />
              )}
            </label>
          </div>
        </form>


        <h3>Shipping Information:</h3>
        <div className={styles.shippingInfo}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button onClick={handleSubmit} className={styles.confirmButton}>
          Confirm Purchase
        </button>

        {showConfirmation && (
          <div className={styles.confirmationMessage}>
            <p>Your purchase has been completed successfully!</p>
            <p>Tracking Code: <strong>{trackingCode}</strong></p>
          </div>
        )}
      </div>
    </main>
  );
};

export default OrderConfirmation;
