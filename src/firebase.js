import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeBJBatAoNRdjLGbg6e-ZspGZbSG7nEI0",
  authDomain: "kousik-react-portfolio.firebaseapp.com",
  projectId: "kousik-react-portfolio",
  storageBucket: "kousik-react-portfolio.appspot.com",
  messagingSenderId: "346259253612",
  appId: "1:346259253612:web:7762de145d14482c096b49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();