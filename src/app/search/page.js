"use client"; 

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // useSearchParams
import Link from 'next/link';
import styles from './page.module.css';
import ItemBox from "../../components/ItemBox/ItemBox";
import db  from "../db/firestore";
import { collection, getDocs, query, where } from 'firebase/firestore';

const Search = () => {
  const searchParams = useSearchParams(); 
  const productType = searchParams.get('productType'); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      if (!productType) return;

      try {
        // ایجاد یک query برای فچ کردن محصولات بر اساس productType
        const q = query(collection(db, productType));
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [productType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.addressPath}>
          <Link href="/">Home</Link> {'>'} <Link href="/products">Products</Link> {'>'} <span className={styles.titleCategory}><strong>{productType}</strong></span> 
        </div>
        <div className={styles.container}>
          {/* Sidebar */}
            <aside className={styles.sidebar}>
              <h2>Properties</h2> <button type="submit">Apply Search</button>
              <section>
                <h3>Product Categories</h3>
                <ul>
                  <li><input type="checkbox" /> Laptops (3)</li>
                  <li><input type="checkbox" /> HeadPhone (2)</li>
                  <li><input type="checkbox" /> Mobile (2)</li>
                  <li><input type="checkbox" /> Gaming (2)</li>
                  <li><input type="checkbox" /> Camera (2)</li>
                </ul>
              </section>
              <section>
                <h3>Status</h3>
                <ul>
                  <li><input type="checkbox" /> Available to Ship</li>               <li><input type="checkbox" /> Pick Up at Nearby Stores</li>
                </ul>
              </section>
              <section>
                <h3>Discount</h3>
                <ul>
                  <li><input type="checkbox" /> On Sale (5)</li>
                  <li><input type="checkbox" /> Latest and Greatest (5)</li>
                  <li><input type="checkbox" /> On Deal (0)</li>
                </ul>
              </section>
              <section>
                <form className={styles.searchForm}>
                  <h3>Price Range</h3>
                  <label htmlFor="min-price">Min</label>
                  <input type="number" id="min-price" name="min-price" placeholder="$0" />

                  <label htmlFor="max-price">Max</label>
                  <input type="number" id="max-price" name="max-price" placeholder="$5000" />

                </form>
              </section>
              <br />
              <section>
                <h3>Brands</h3>
                <ul>
                  <li><input type="checkbox" /> Samsung</li>
                  <li><input type="checkbox" /> Sony</li>
                  <li><input type="checkbox" /> Asus</li>
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
                  <li><input type="checkbox" /> 14 inch</li>
                  <li><input type="checkbox" /> 15 inch</li>
                  <li><input type="checkbox" /> 16 inch</li>
                </ul>
              </section>
            </aside>

          {/* Product Section */}
          <section className={styles.products}>
            <div className={styles.filterBar}>
              <div><strong>({products.length})</strong> Results</div>
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
              {products.map((product) => (
                <ItemBox
                  key={product.id}
                  image={product.image} 
                  name={product.name} 
                  description={product.description}
                  price={product.Price} 
                  store={product.store} 
                  imageTwo={product.image2}
                  imageThree={product.image3}
                  imageFour={product.image4}
                />
              ))}
            </div>

          </section>
        </div>
      </main>
    </>
  );
};

export default Search;


