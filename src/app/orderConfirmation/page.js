'use client';
import React, { useState } from "react";
import { useCart } from '../../context/CartContext';
import styles from "./page.module.css";

const OrderConfirmation = () => {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <main className={styles.main}>
    <div className={styles.orderConfirmationContainer}>
      <h1>Order Confirmation</h1>
      <h2>Your Order:</h2>
      <div className={styles.orderSummary}>
        {cart.map((product, index) => (
          <div key={index}>
            <div>{product.name} - ${product.price} x {product.quantity}</div>
          </div>
        ))}
      </div>

      <h3>Choose your payment method:</h3>
      <div>
        <input className={styles.inputform}
          type="radio" 
          id="mastercard" 
          name="payment" 
          value="MasterCard" 
          onChange={() => handlePaymentMethodChange('MasterCard')}
        />
        <label htmlFor="mastercard">MasterCard</label>
        {paymentMethod === 'MasterCard' && <input type="text" placeholder="Enter your MasterCard number" />}
      </div>

      <div>
        <input className={styles.inputform}
          type="radio" 
          id="bitcoin" 
          name="payment" 
          value="Bitcoin" 
          onChange={() => handlePaymentMethodChange('Bitcoin')}
        />
        <label htmlFor="bitcoin">Bitcoin</label>
        {paymentMethod === 'Bitcoin' && <input type="text" placeholder="Enter your Bitcoin wallet address" />}
      </div>

      <div>
        <input className={styles.inputform}
          type="radio" 
          id="tether" 
          name="payment" 
          value="Tether" 
          onChange={() => handlePaymentMethodChange('Tether')}
        />
        <label htmlFor="tether">Tether</label>
        {paymentMethod === 'Tether' && <input type="text" placeholder="Enter your Tether wallet address" />}
      </div>

      <h3>Shipping Address:</h3>
      <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        placeholder="Enter your address" 
      />
      
      <button onClick={handleSubmit}>Confirm Purchase</button>

      {showConfirmation && <div>Your purchase has been completed!</div>}
    </div>
    </main>
  );
};

export default OrderConfirmation;
