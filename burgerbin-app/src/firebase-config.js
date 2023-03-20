import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "burgerbin-app.firebaseapp.com",
  projectId: "burgerbin-app",
  storageBucket: "burgerbin-app.appspot.com",
  messagingSenderId: "110067378323",
  appId: "1:110067378323:web:4fba87149e9d33b2e9c566"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);