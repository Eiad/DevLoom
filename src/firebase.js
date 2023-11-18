import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIRESTORE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRESTORE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
