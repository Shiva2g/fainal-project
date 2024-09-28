import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";

export default function Home() {
  return (
    <>
      <Hero/>

      <main className={styles.main}>
        <section className={styles.dealsSection}>
          <div className={styles.dealsTitle}>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" width={50} height={50} alt="Deals Icon" />
            </div>
            <div className={styles.lastProText}>
              <h2>Product Line</h2>
            </div>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" width={35} height={35} alt="Deals Icon" />
            </div>
          </div>
          <Category/>
          
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
                  src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp" width={250} height={250}
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
              
              </div>
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
            <div className={styles.productItem}>
              <div className={styles.proImage}>
                <Image
                  src="/assets/images/products/phone/iPhone 16 Pro.jfif" width={200} height={200}
                  alt="iPhone 16 Pro"
                />
                <div className={styles.proLike}>
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div>
                <p className={styles.proTitle}>iPhone 16 Pro (2024)</p>
                <p className={styles.proInfo}>
                Titanium design with larger 6.3‑inch Super Retina XDR display, footnote 1 durable, latest-generation Ceramic Shield, Action button, and USB-C with USB 3 speeds.
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" width={35} height={35} alt="Rating" /> (24 Reviews)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>Price From $1449</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.proImage}>
                <Image
                  src="/assets/images/products/camera/Canon EOS R5 C Mirrorless2.webp" width={230} height={160}
                  alt="Canon EOS R5 C Mirrorless"
                />
                <div className={styles.proLike}>
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div>
                <p className={styles.proTitle}>Canon EOS R5 C Mirrorless (2024) </p>
                <p className={styles.proInfo}>
                Canon EOS R5 C Mirrorless Digital Cinema Camera + RF 24-105mm F4 L is USM Lens Kit (International Model).
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" width={35} height={35} alt="Rating" /> (100 Reviews)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>Price $5,654.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.proImage}>
                <Image
                  src="/assets/images/products/headphone/AirPods Max2.jfif" width={230} height={200}
                  alt="AirPods Max"
                />
                <div className={styles.proLike}>
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div>
                <p className={styles.proTitle}>AirPods Max (2024)</p>
                <p className={styles.proInfo}>
                  The ultimate over-ear personal listening experience — now in fresh new colors. AirPods Max deliver stunningly detailed, high-fidelity audio.
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" width={30} height={30} alt="Rating" /> (18 Reviews)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>Price $549</p>
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
