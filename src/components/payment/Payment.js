import { useState } from "react";
import styles from "./Payment.module.css";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      setErrorMessage("Please select your payment method.");
    } else {
      setErrorMessage(""); // حذف پیام خطا
      alert(`You selected ${paymentMethod} for payment.`);
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <h1>Checkout</h1>
      <h3>Your Cart</h3>
      <ul>
        {/* لیست خریدهای کاربر */}
        <li>Product 1: $1100</li>
        <li>Product 2: $250</li>
      </ul>
      <h3>Total: $1350</h3>

      <form onSubmit={handlePaymentSubmit} className={styles.paymentForm}>
        <h3>Select Payment Method</h3>
        <div>
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="creditCard">Credit Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="masterCard"
            name="paymentMethod"
            value="MasterCard"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="masterCard">MasterCard</label>
        </div>
        <div>
          <input
            type="radio"
            id="bitcoin"
            name="paymentMethod"
            value="Bitcoin"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="bitcoin">Bitcoin</label>
        </div>
        <div>
          <input
            type="radio"
            id="tether"
            name="paymentMethod"
            value="Tether"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="tether">Tether</label>
        </div>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* پیام خطا */}

        <button type="submit" className={styles.paymentButton}>
          Pay Now
        </button>
      </form>
    </div>
  );
}
