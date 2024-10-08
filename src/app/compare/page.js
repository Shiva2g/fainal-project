'use client';

import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";
import CompareBox from "../../components/CompareBox/CompareBox";
import CompareItem from "../../components/CompareItem/CompareItem";
import CompareSection from "../../components/CompareSection/CompareSection";
import db from '../db/firestore';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';

const Compare = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);  
  const [category, setCategory] = useState('Laptop');  // دسته‌بندی پیش‌فرض
  const [products, setProducts] = useState([]);  // برای نگه‌داری محصولات فچ شده

  // فچ کردن محصولات از Firebase بر اساس دسته‌بندی
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, category));  // فچ بر اساس دسته‌بندی
        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [category]);  // فچ کردن مجدد وقتی دسته‌بندی تغییر کند

  const handleSelectProduct = (product) => {
    if (selectedProducts.length < 2 && !selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleCompare = () => {
    console.log('Comparing:', selectedProducts);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);  // تغییر دسته‌بندی
    setSelectedProducts([]);  // ریست کردن محصولات انتخاب‌شده
  };

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

          <div className={styles.dealsItem}>
            <ul>
              <li><input type="radio" name="category" onClick={() => handleCategoryChange('laptop')} checked={category === 'laptop'} /> <span className={`${styles.icon} material-symbols-outlined`}>laptop_mac</span>
              <p>Laptop</p></li>
              <li><input type="radio" name="category" onClick={() => handleCategoryChange('headphone')} checked={category === 'headphone'} />   <span className={`${styles.icon} material-symbols-outlined`}>headset_mic</span>
              <p>HeadPhone</p></li>
              <li><input type="radio" name="category" onClick={() => handleCategoryChange('mobile')} checked={category === 'mobile'} /> <span className={`${styles.icon} material-symbols-outlined`}>smartphone</span>
              <p>Smartphone</p></li>
              <li><input type="radio" name="category" onClick={() => handleCategoryChange('Gaming')} checked={category === 'Gaming'} /> <span className={`${styles.icon} material-symbols-outlined`}>stadia_controller</span>
              <p>Gaming Console</p></li>
              <li><input type="radio" name="category" onClick={() => handleCategoryChange('camera')} checked={category === 'camera'} /> <span className={`${styles.icon} material-symbols-outlined`}>photo_camera</span>
              <p>Camera</p></li>
            </ul>
          </div>
        </section>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <div className={styles.comparisonBox}>
              <h2>To start comparison</h2>

              <div className={styles.popularComparisons}>
                {products.map((product) => (
                  <CompareItem 
                    key={product.id} 
                    product={product} 
                    onSelect={handleSelectProduct}  // ارسال تابع به کامپوننت CompareItem
                  />
                ))}
              </div>
            </div>

            <div className={styles.selectedProducts}>
              <p>You can add two products to the comparison list.</p>
              <div id="selected-list">
                {selectedProducts.length === 0 && <p>No products selected...</p>}
                {selectedProducts.map((product) => (
                  <p key={product.id}>{product.name}</p>
                ))}
              </div>
              <button className={styles.compareButton} onClick={handleCompare}>Compare</button>
            </div>
          </aside>

          <section className={styles.products}>
            <div className={styles.productGrid}>
              <CompareBox product={selectedProducts[0]} />
              <CompareBox product={selectedProducts[1]} />
            </div>
          </section>
        </div>

        <CompareSection selectedProducts={selectedProducts} />
      </main>
    </div>
  );
};

export default Compare;
