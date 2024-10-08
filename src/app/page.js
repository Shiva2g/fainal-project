"use client";

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import ItemBox from "../components/ItemBox/ItemBox";
import { useEffect, useState, useContext  } from 'react'; 

import db from "./db/firestore";
import { getDocs, collection } from 'firebase/firestore';
import { useSession } from "next-auth/react"; 


export default function Home () {
  
  
  const [productData, setProductData] = useState([]); //db
  

    useEffect(() => {
       const fetchProductData = async () => {
        const snapshot = await getDocs(collection(db, "laptop")); 
        const documents= snapshot.docs.map(doc => doc.data());
        
        setProductData(documents); 
      };

     fetchProductData(); 
   }, []); 


    return (
      <>
        <Hero/>

        <main className={styles.main}>
          <section className={styles.dealsSection}>
            <div className={styles.dealsTitle}>
              <div className={styles.verticalLineIcon}>
                <Image src="/assets/images/icons/vertical_line.png" width={40} height={40} alt="Deals Icon" />
              </div>
              <div className={styles.lastProText}>
                <h2>Product Line</h2>
              </div>
              <div className={styles.verticalLineIcon}>
                <Image src="/assets/images/icons/vertical_line.png" width={40} height={40} alt="Deals Icon" />
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
              {productData.map(doc => (
                  <ItemBox 
                  name={doc.name} 
                  description={doc.description} 
                  price={doc.Price} 
                  image={doc.image}
                  imageTwo={doc.image2}
                  imageThree={doc.image3}
                  imageFour={doc.image4}
                  store={doc.Store} 
                  />
                ))}
            </div>
          </section>

            
            
        </main>
    
      </>
    );
}
