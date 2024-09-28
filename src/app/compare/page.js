
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";

const Compare = () => {
  return (
    <div>
      <main className={styles.main}>
        <h1>Product Comparison</h1>
        <section className={styles.categorySection}>
          <div className={styles.categoryTitle}>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" alt="category" width={20} height={20} />
            </div>
            <div className={styles.lastProText}>
              <h3>Select the category to compare:</h3>
            </div>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" alt="category" width={20} height={20} />
            </div>
          </div>
          <div className={styles.categoryItem}>
            <Link href="">
              <span className="material-symbols-outlined">laptop_mac</span>
              <p>Laptop</p>
            </Link>
            <Link href="">
              <span className="material-symbols-outlined">smartphone</span>
              <p>Smartphone</p>
            </Link>
            <Link href="">
              <span className="material-symbols-outlined">photo_camera</span>
              <p>Camera</p>
            </Link>
            <Link href="">
              <span className="material-symbols-outlined">stadia_controller</span>
              <p>Gaming Console</p>
            </Link>
            <Link href="">
              <span className="material-symbols-outlined">headset_mic</span>
              <p>HeadPhone</p>
            </Link>
          </div>
        </section>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.comparisonBox}>
              <h2>To start comparison</h2>
              <input type="text" placeholder="Search for a product..." className={styles.searchInput} />
              <button className={styles.searchButton}>Search</button>

              <div className={styles.popularComparisons}>
                <h3>Most Compared Products</h3>
                <div className={styles.compareItem}>
                  <Image
                    src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp"
                    alt="Asus Pro Image"
                    width={100}
                    height={100}
                    className={styles.compareIcon}
                  />
                  <span>ASUS Zenbook Duo (2024) UX8406 - 15.6 inch</span>
                  <button className={styles.addButton}>+</button>
                </div>
                <div className={styles.compareItem}>
                  <Image
                    src="/assets/images/products/laptop/ASUS TUF Gaming A14 (2024) 14 inch Laptop.webp"
                    alt="Laptop 2"
                    width={100}
                    height={100}
                    className={styles.compareIcon}
                  />
                  <span>ASUS TUF Gaming A14 (2024) 14 inch</span>
                  <button className={styles.addButton}>+</button>
                </div>
                {/* Add more products as needed */}
              </div>
            </div>

            <div className={styles.selectedProducts}>
              <p>You can add two products to the comparison list.</p>
              <div id="selected-list">
                <p>No products selected...</p>
              </div>
              <button className={styles.compareButton}>Compare</button>
            </div>
          </aside>

          <section className={styles.products}>
            <div className={styles.filterBar}>
              <strong> Compare </strong> ASUS Zenbook Duo (2024) UX8406 <strong>VS</strong> ASUS 14inch (2024) NU9506
            </div>

            <div className={styles.productGrid}>
              <div className={styles.productItem}>
                <div className={styles.proImage}>
                  <Image
                    src="/assets/images/products/laptop/ASUS Zenbook S 16 (UM5606) OLED Laptop.webp"
                    alt="MacBook Pro M2 Image"
                    width={150}
                    height={150}
                  />
                  <div className={styles.proLike}>
                    <span className="material-symbols-outlined">close</span>
                  </div>
                </div>
                <p className={styles.proTitle}>ASUS Zenbook Duo (2024) UX8406</p>
                <p className={styles.proInfo}>
                  Revolutionary laptop with Apple's M2 chip for unparalleled performance and battery life.
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" alt="Rating" width={100} height={20} /> (58 Review)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>price $1,399</p>
                  </div>
                </div>
              </div>

              <div className={styles.productItem}>
                <div className={styles.proImage}>
                  <Image
                    src="/assets/images/products/laptop/ASUS TUF Gaming A14 (2024) 14 inch Laptop.webp"
                    alt="Asus Pro Image"
                    width={150}
                    height={150}
                  />
                  <div className={styles.proLike}>
                    <span className="material-symbols-outlined">close</span>
                  </div>
                </div>
                <p className={styles.proTitle}>ASUS TUF Gaming A14 (2024) 14 inch</p>
                <p className={styles.proInfo}>
                  Revolutionary laptop with Apple's M2 chip for unparalleled performance and battery life.
                </p>
                <div className={styles.proRating}>
                  <Image src="/assets/images/ratings/rating-35.png" alt="Rating" width={100} height={20} /> (58 Review)
                </div>
                <div className={styles.subInfoPro}>
                  <div className={styles.infoButton}>
                    <button>View Details</button>
                  </div>
                  <div className={styles.infoPrice}>
                    <p>price $1,590</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Compare;

