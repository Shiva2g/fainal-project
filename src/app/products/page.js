
//"use client";
 import db  from "../db/firestore";
 import { getDocs, collection, doc, getFirestore} from 'firebase/firestore';


const Products = async () => {

  const snapshot = await getDocs(collection(db, "laptop"));
  const documents= snapshot.docs.map(doc => doc.data());

    return (
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
}; 



export default Products;