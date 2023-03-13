import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAthIjIRZOFnK2nTBpAwF5pDy1REp6LfA0",
  authDomain: "burgerbin-app.firebaseapp.com",
  projectId: "burgerbin-app",
  storageBucket: "burgerbin-app.appspot.com",
  messagingSenderId: "110067378323",
  appId: "1:110067378323:web:4fba87149e9d33b2e9c566"
};

export const app = initializeApp(firebaseConfig);