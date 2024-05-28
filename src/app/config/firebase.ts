
import { initializeApp } from "firebase/app";

import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tw-visit-reg.firebaseapp.com",
  projectId: "tw-visit-reg",
  storageBucket: "tw-visit-reg.appspot.com",
  messagingSenderId: "687815959215",
  appId: "1:687815959215:web:058bcd4d6652d3825aaa5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)