import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import "./globals.css"; // Assuming global styles

const CreateAccount = () => {
  return (
    <div>
      <main className={styles.main}>
        <div>
          <Link href="#" className={styles.backLink}>&#60; Back to previous page</Link>
        </div>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <Image src="/assets/images/logo3.png" alt="TechNest Logo" className={styles.logo2} width={150} height={50} />
            <h1>Create account</h1>
            <form>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="First and last name" required />
              <span className={styles.errorMessage}>Please enter your name.</span>

              <label htmlFor="email">Mobile number or email</label>
              <input type="email" id="email" name="email" placeholder="Mobile number or email" required />
              <span className={styles.errorMessage}>Please enter a valid email or mobile number.</span>

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="At least 6 characters"
                pattern=".{6,}"
                required
              />
              <span className={styles.errorMessage}>Passwords must be at least 6 characters.</span>

              <label htmlFor="confirm-password">Password again</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Repeat your password"
                required
              />
              <span className={styles.errorMessage}>Passwords do not match.</span>

              <button type="submit" className={styles.continueBtn}>Continue</button>
            </form>

            <p>
              By creating an account, you agree to TechNest's{" "}
              <Link href="#">Conditions of Use</Link> and <Link href="#">Privacy Notice</Link>.
            </p>
            <p>
              Already have an account? <Link href="#">Sign in</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateAccount;
