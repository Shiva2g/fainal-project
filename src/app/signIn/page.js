// signIn.js
import React from 'react';
import styles from './signIn.module.css';

const SignIn = () => {
  return (
    <div>
      <header>
        <div className={styles.topHeader}>
          <div className={styles.logo}>
            <a href="page">
              <img className={styles.myLogo} src="images/logo1.png" alt="Logo" />
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <a href="#" className={styles.backLink}>&lt; Back to previous page</a>
        </div>
        <div className={styles.container}>
          <h1>Sign In</h1>
          <div className={styles.mainSign}>
            <div className={styles.signInForm}>
              <form action="#" method="post">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <div>
                  <input type="password" id="password" name="password" maxLength="30" minLength="8" required />
                  <span className={styles.showPassword}>Show</span>
                </div>
                <button type="submit" className={styles.signInBtn}>Sign In</button>
                <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
              </form>
            </div>

            <div className={styles.benefits}>
              <h2>Don't have an account?</h2>
              <p>Here are some perks you'll get:</p>
              <ul>
                <li>
                  <h3>
                    <span className="material-symbols-outlined">shopping_cart_checkout</span> 
                    Faster checkout
                  </h3>
                  <p>Your payment details are stored and ready to use.</p>
                </li>
                <li>
                  <h3>
                    <span className="material-symbols-outlined">share_location</span> 
                    Simple tracking
                  </h3>
                  <p>Easily monitor your order status.</p>
                </li>
                <li>
                  <strong>
                    <h3>
                      <span className="material-symbols-outlined">history</span> 
                      Quick summary
                    </h3>
                  </strong>
                  <p>Your order history is just a click away.</p>
                </li>
              </ul>
              <a href="#" className={styles.createAccount}><h3>Create an account &#62;</h3></a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>
          Security & Privacy - Every transaction on TechNest.ca is secure. Any personal information you give us will be handled according to our <a href="#">Privacy Policy.</a>
        </p>
        <div className={styles.footerCredits}>
          <p>&copy; 2024 TechNest. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
