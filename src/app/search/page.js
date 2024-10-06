"use client"; 

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; 
import Link from 'next/link';
import styles from './page.module.css';
import ItemBox from "../../components/ItemBox/ItemBox";
import db  from "../db/firestore";
import { collection, getDocs, query} from 'firebase/firestore';

const Search = () => {
  const searchParams = useSearchParams(); 
  const initialProductType = searchParams.get('productType'); 
  const [productType, setProductType] = useState(initialProductType); // Define productType state
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); //new
  const [loading, setLoading] = useState(true);

  // filters
  const [inStock, setInStock] = useState(false);
  const [newestOnly, setNewestOnly] = useState(false);
  const [sortOption, setSortOption] = useState('bestMatch');
  const [selectedBrands, setSelectedBrands] = useState([]); // brand
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 }); //  price range

  useEffect(() => {
    const fetchProducts = async () => {
      if (!productType) return;

      try {
        //  for fetching base on query  productType
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

  //   filter (In Stock)
  useEffect(() => {
    let tempProducts = [...products];
  if (inStock) {
    tempProducts = tempProducts.filter(product => product.Store > 0);
  }

  // new products filter (2024)
  if (newestOnly) {
    tempProducts = tempProducts.filter(product => product.year === "2024");
  }

  // sorting
  // Sorting by Price Low to High
  if (sortOption === "Price Low to High") {
    tempProducts.sort((a, b) => Number(a.Price) - Number(b.Price));
  }

  if (sortOption === "Price High to Low") {
    tempProducts.sort((a, b) => Number(b.Price) - Number(a.Price));
  }

  // brand filter
  if (selectedBrands.length > 0) {
    tempProducts = tempProducts.filter(product => selectedBrands.includes(product.Brand));
  }

  // price range filter
  tempProducts = tempProducts.filter(product => {
    const price = Number(product.Price);
    return price >= priceRange.min && price <= priceRange.max;
  });


  setFilteredProducts(tempProducts);
    }, [inStock, newestOnly, sortOption, products, selectedBrands, priceRange]);

    // هندل کردن تغییرات برند
    const handleBrandChange = (brand) => {
      setSelectedBrands(prev => 
        prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
      );
    };

    // هندل کردن دکمه "Apply Search"
    const handleSearchApply = (e) => {
      e.preventDefault();
      const minPrice = Number(document.getElementById('min-price').value);
      const maxPrice = Number(document.getElementById('max-price').value);
      setPriceRange({ min: minPrice, max: maxPrice });
    };

    const handleCategoryChange = (category) => {
      setProductType(category); 
      setLoading(true); // Reset loading state when category changes
    };

// ending sortbar filter

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
              <h2>Properties</h2> 
              <section>
                <h3>Product Categories</h3>
                <ul>
                <li><input type="radio" name="category" onClick={() => handleCategoryChange('laptop')} /> Laptops</li>
                <li><input type="radio" name="category" onClick={() => handleCategoryChange('headphone')} /> HeadPhone</li>
                <li><input type="radio" name="category" onClick={() => handleCategoryChange('mobile')} /> Mobile</li>
                <li><input type="radio" name="category" onClick={() => handleCategoryChange('Gaming')} /> Gaming</li>
                <li><input type="radio" name="category" onClick={() => handleCategoryChange('camera')} /> Camera</li>
              </ul>
              </section>

          
              <section>
                <h3>Brands</h3>
                <ul>
                  <li><input type="checkbox" onChange={() => handleBrandChange('Samsung')} /> Samsung</li>
                  <li><input type="checkbox" onChange={() => handleBrandChange('Sony')} /> Sony</li>
                  <li><input type="checkbox" onChange={() => handleBrandChange('Asus')} /> Asus</li>
                  <li><input type="checkbox" onChange={() => handleBrandChange('Apple')} /> Apple</li>
                </ul>
              </section>
              <section>
                <form className={styles.searchForm} onSubmit={handleSearchApply}>
                  <h3>Price Range</h3>
                  <label htmlFor="min-price">Min</label>
                  <input type="number" id="min-price" name="min-price" placeholder="$0" />

                  <label htmlFor="max-price">Max</label>
                  <input type="number" id="max-price" name="max-price" placeholder="$5000" />
                  <button type="submit">Apply Search</button>
                </form>
              </section>
              <section>
                <h3>Discount</h3>
                <ul>
                  <li><input type="checkbox" /> On Sale (5)</li>
                  <li><input type="checkbox" /> On Deal (0)</li>
                </ul>
              </section>
              
              <section>
                <h3>Status</h3>
                <ul>
                  <li><input type="checkbox" /> Available to Ship</li>               <li><input type="checkbox" /> Pick Up at Nearby Stores</li>
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
              <div><strong>({filteredProducts.length})</strong> Results</div>
              <div className={styles.filterOptions}>
                <label><input type="checkbox"
                    checked={inStock}
                    onChange={() => setInStock(!inStock)} /> In Stock</label>
                <label><input type="checkbox" checked={newestOnly}
                    onChange={() => setNewestOnly(!newestOnly)} /> Newest Only</label>
                <label>Sort 
                  <select value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}>
                    <option>Best Match</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </select>
                </label>
              </div>
            </div>

            {/* Product Grid */}
            <div className={styles.productGrid}>
              {filteredProducts.map((product) => (
                <ItemBox
                  key={product.id}
                  image={product.image} 
                  name={product.name} 
                  description={product.description}
                  price={product.Price} 
                  store={product.Store} 
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


