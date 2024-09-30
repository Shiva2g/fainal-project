import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { collection, getDocs } from "firebase/firestore"; //new

const firebaseConfig = { 
    apiKey: process.env.FIRESTORE_API_KEY,
    authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.FIRESTORE_PROJECT_ID,
    storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIRESTORE_MESSAGING_SENDER_ID,
    appId: process.env.FIRESTORE_APP_ID,
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

{/*export const getCollectionData = async (collectionName) => {  //new
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map(doc => doc.data());
    return data;
  };
  */}