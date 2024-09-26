import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.backButton}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.offerDetails}>
            <div className={styles.heading2}>Welcome to TechNest</div>
            <div className={styles.heading1}>Online Digital Shopping</div>
            <div className={styles.heading4}>
              Discover Incredible Deals on Electronics
            </div>
            <div className={styles.heading1}>
              Save up to $300 on select Products.
            </div>
            <div className={styles.shopButtons}>
              <button className={styles.shopNow}>Shop Now</button>
              <button className={styles.shopAll}>Shop All</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/assets/images/products/hero-img.png" width={500} height={300} alt="Hero" />
          </div>
        </div>
        <div className={styles.forwardButton}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.dealsSection}>
          <div className={styles.dealsTitle}>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" width={50} height={50} alt="Deals Icon" />
            </div>
            <div className={styles.lastProText}>
              <h2>Deals</h2>
            </div>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" width={35} height={35} alt="Deals Icon" />
            </div>
          </div>
          <div className={styles.dealsItem}>
            <a href="#">
              <span className="material-symbols-outlined">laptop_mac</span>
              <p>Laptop</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">smartphone</span>
              <p>Smartphone</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">photo_camera</span>
              <p>Camera</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">stadia_controller</span>
              <p>Gaming Console</p>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">headset_mic</span>
              <p>HeadPhone</p>
            </a>
          </div>
        </section>

        <section className={styles.latestProducts}>
          <div className={styles.latestProductsTitle}>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" width={30} height={30} alt="Vertical Line" />
            </div>
            <div className={styles.lastProText}>
              <h2>Newest Arrivals</h2>
            </div>
          </div>
          <div className={styles.productGrid}>
            <div className={styles.productItem}>
              <div className={styles.proImage}>
                <Image
                  src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" width={200} height={200}
                  alt="ASUS Zenbook"
                />
                <div className={styles.proLike}>
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div>
                <p className={styles.proTitle}>ASUS Zenbook Duo (2024) UX8406</p>
                <p className={styles.proInfo}>
                  Revolutionary laptop with Apple's M2 chip for unparalleled performance and battery life.
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" width={35} height={35} alt="Rating" /> (58 Reviews)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>Price $1,399</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.proImage}>
                <Image
                  src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" width={200} height={200}
                  alt="ASUS Zenbook"
                />
                <div className={styles.proLike}>
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div>
                <p className={styles.proTitle}>ASUS Zenbook Duo (2024) UX8406</p>
                <p className={styles.proInfo}>
                  Revolutionary laptop with Apple's M2 chip for unparalleled performance and battery life.
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" width={30} height={30} alt="Rating" /> (58 Reviews)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>Price $1,399</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
