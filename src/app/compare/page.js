
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";
import Category from "../../components/Category/Category";
import CompareBox from "../../components/CompareBox/compareBox";
import CompareItem from "../../components/CompareItem/CompareItem";
import CompareSection from "../../components/CompareSection/CompareSection";


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
          <Category/>

        </section>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.comparisonBox}>
              <h2>To start comparison</h2>
              <input type="text" placeholder="Search for a product..." className={styles.searchInput} />
              <button className={styles.searchButton}>Search</button>

              <div className={styles.popularComparisons}>
                <h3>Most Compared Products</h3>
                <CompareItem/>
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
                <CompareItem/>
                <CompareItem/>
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
              <CompareBox/>

              <CompareBox/>
            </div>
          </section>
          
        </div>
        <CompareSection/>
      </main>
    </div>
  );
};

export default Compare;

