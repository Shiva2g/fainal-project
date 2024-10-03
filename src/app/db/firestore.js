import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { collection, getDocs } from "firebase/firestore"; //new

const firebaseConfig = { 
    apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIRESTORE_APP_ID,
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