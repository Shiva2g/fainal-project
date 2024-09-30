
//"use client";
 import db  from "../db/firestore";
 import { getDocs, collection, doc, getFirestore} from 'firebase/firestore';
 import ItemBox from "../../components/ItemBox/ItemBox";
 import styles from "./page.module.css";
 import Image from "next/image";
 import Category from "../../components/Category/Category";


const Products = async () => {

  const snapshot = await getDocs(collection(db, "laptop"));
  const documents= snapshot.docs.map(doc => doc.data());

  {/*  return (
      <div>
        <h1>Product Data</h1>
        {documents.map(doc => (
          <div key={doc.id}>

              Name: <h3>{doc.name}</h3>
            <p>
              price: {doc.Price}
            </p>
          </div>
        ))}
      </div>
      )
      */}

      return (
        <>
        <main className={styles.main}>
          <div >
            <h1>Product Data</h1>
            <section className={styles.categorySection}>
            <div className={styles.categoryTitle}>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" alt="category" width={20} height={20} />
            </div>
            <div className={styles.lastProText}>
              <h3>Select the Category</h3>
            </div>
            <div className={styles.verticalLineIcon}>
              <Image src="/assets/images/icons/vertical_line.png" alt="category" width={20} height={20} />
            </div>
          </div>
          <Category/>

        </section>
            <div className={styles.productGrid}>
              {documents.map(doc => (
                <ItemBox 
                  key={doc.id} 
                  name={doc.name} 
                  description={doc.description} 
                  price={doc.Price} 
                  image={doc.image}
                /> 
              ))}
            </div>
          </div>
        </main>
        </>
      );
}; 



export default Products;