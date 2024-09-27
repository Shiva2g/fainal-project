import db  from "../db/firestore";
import { getDocs, collection, doc, getFirestore} from 'firebase/firestore';

const Products = async () => {

  const snapshot = await getDocs(collection(db, "products"));
  const documents= snapshot.docs.map(doc => doc.data())
  return 
    <div>
      {documents.map(doc => (
        <div key={doc.id}>
            <h2>{doc.name}</h2>
        </div>
      ))}
    </div>
};



export default Products;