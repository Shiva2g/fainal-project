
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";
import ItemBox from "../../components/ItemBox/ItemBox"

const Search = () => {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.addressPath}>
        <Link href="#">Home</Link> {'>'} <Link href="#">Products</Link> {'>'} <Link href="#">Laptops & Accessories</Link> 
      </div>
      <div className={styles.container}>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2>Properties</h2>
          <section>
            <h3>Product Properties</h3>
            <ul>
              <li><input type="checkbox" /> Windows Laptops (32)</li>
              <li><input type="checkbox" /> MacBook (3)</li>
              <li><input type="checkbox" /> Chromebooks (4)</li>
              <li><input type="checkbox" /> Gaming Laptops (15)</li>
              <li><input type="checkbox" /> 2 in 1 Laptops (10)</li>
            </ul>
          </section>
          <section>
            <h3>Status</h3>
            <ul>
              <li><input type="checkbox" /> Available to Ship</li>
              <li><input type="checkbox" /> Pick Up at Nearby Stores</li>
            </ul>
          </section>
          <section>
            <h3>Discount</h3>
            <ul>
              <li><input type="checkbox" /> On Sale (5)</li>
              <li><input type="checkbox" /> Top Deals (11)</li>
              <li><input type="checkbox" /> Latest and Greatest (3)</li>
              <li><input type="checkbox" /> On Clearance (21)</li>
              <li><input type="checkbox" /> Open Box (12)</li>
            </ul>
          </section>
          <section>
            <form className={styles.searchForm}>
              <h3>Price Range</h3>
              <label htmlFor="min-price">Min</label>
              <input type="number" id="min-price" name="min-price" placeholder="$0" />

              <label htmlFor="max-price">Max</label>
              <input type="number" id="max-price" name="max-price" placeholder="$5000" />

              <button type="submit">Apply Price Range</button>
            </form>
          </section>
          <br />
          <section>
            <h3>Brands</h3>
            <ul>
              <li><input type="checkbox" /> Samsung</li>
              <li><input type="checkbox" /> Dell</li>
              <li><input type="checkbox" /> HP</li>
              <li><input type="checkbox" /> Apple</li>
            </ul>
          </section>
          <section>
            <h3>Release Year</h3>
            <ul>
              <li><input type="checkbox" /> 2024</li>
              <li><input type="checkbox" /> 2023</li>
              <li><input type="checkbox" /> 2022</li>
            </ul>
          </section>
          <section>
            <h3>Screen Size</h3>
            <ul>
              <li><input type="checkbox" /> 13-14 inch</li>
              <li><input type="checkbox" /> 15-16 inch</li>
              <li><input type="checkbox" /> 17-18 inch</li>
            </ul>
          </section>
        </aside>

        {/* Product Section */}
        <section className={styles.products}>
          <div className={styles.filterBar}>
            <div>19 Results</div>
            <div className={styles.filterOptions}>
              <label><input type="checkbox" /> In Stock</label>
              <label><input type="checkbox" /> Newest Only</label>
              <label>Sort 
                <select>
                  <option>Best Match</option>
                  <option>Price Low to High</option>
                  <option>Price High to Low</option>
                </select>
              </label>
            </div>
          </div>

          {/* Product Grid */}
          
          <div className={styles.productGrid}>
            <ItemBox/>
            <ItemBox/>
            <ItemBox/>

            {/* Add other product items similarly */}
          </div>
        </section>
      </div>
    </main>
    </>
  );
};

export default Search;
