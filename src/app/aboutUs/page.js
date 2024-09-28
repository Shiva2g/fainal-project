
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";

const AboutUs= () => {
  return (
    <>
    <div className={styles.addressBar}>
        <p>
          <Link href="/">Home</Link> {'>'} <strong>What is TechNest Marketplace?</strong>
        </p>
      </div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.offerDetails}>
            <div className={styles.logo}>
              <Image className={styles.myLogo} src="/assets/images/logo.png" alt="TechNest Logo" width={120} height={30}/>
            </div>
            <div className={styles.intro}>
              <h1>About TechNest Marketplace</h1>
              <p>
                Welcome to <strong>TechNest</strong>, your trusted online marketplace for purchasing
                high-quality electronics. Whether you're looking for the latest mobile phones, laptops,
                headphones, or cameras, TechNest has it all. Established with a mission to provide easy, safe, and convenient shopping experiences, we cater to all your electronic needs.
              </p>
            </div>
            <div className={styles.heading4}>Discover Incredible Deals on Electronics</div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>What We Offer</h2>
          <ul>
            <li>Wide selection of electronics, including <strong>mobile phones</strong>, <strong>laptops</strong>, <strong>headphones</strong>, and <strong>cameras</strong>.</li>
            <li>Secure payment methods ensuring your transactions are protected.</li>
            <li>24/7 customer service committed to helping you with any inquiries.</li>
            <li>Fast and reliable shipping options to ensure you get your products on time.</li>
            <li>Easy return and refund policies for a hassle-free experience.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.trust}> 
            <div >
              <h2>Why Shop With Us?</h2>
              <p>At TechNest, we prioritize customer satisfaction. Shop with confidence thanks to:</p>
              <ul>
                <li><strong>Commitment to customer service:</strong> We ensure all your needs are met with our friendly and knowledgeable team.</li>
                <li><strong>Secure transactions:</strong> Your payment information is encrypted and processed safely.</li>
                <li><strong>Money-back guarantee:</strong> Unsatisfied with your purchase? Our hassle-free return policy has you covered.</li>
              </ul>
            </div>
            <div>
              <Image className={styles.trustPic} src="/assets/images/online-shopping.png" alt="Online Shopping" width={150} height={150} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Refund & Return Policy</h2>
          <p>
            If you're not completely satisfied with your purchase, you can return the item within 30 days for a full refund. We make the return process easy and transparent, so you can shop worry-free.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h3>How can I track my order?</h3>
            <p>Once your order is shipped, you'll receive a tracking number via email. Use this to track the delivery status of your item.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and other secure online payment methods.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>Can I return an item if I don't like it?</h3>
            <p>Yes, we offer a 30-day money-back guarantee. If you're not happy with your product, simply return it for a full refund.</p>
          </div>
        </section>
      </main>
      </>
  );
}
export default AboutUs;