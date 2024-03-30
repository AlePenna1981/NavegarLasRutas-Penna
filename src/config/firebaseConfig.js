
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQO0Sm9ljvX7wRbYRPLGEwtwIMkkwgOxE",
    authDomain: "ecomerce-91425.firebaseapp.com",
    projectId: "ecomerce-91425",
    storageBucket: "ecomerce-91425.appspot.com",
    messagingSenderId: "307980705910",
    appId: "1:307980705910:web:108709b6e6816952e53f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)