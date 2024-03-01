import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {

  apiKey: "AIzaSyC_xQHf6xF0QbuTDWagI1-TRL4jwnAzyjM",

  authDomain: "instaafi.firebaseapp.com",

  projectId: "instaafi",

  storageBucket: "instaafi.appspot.com",

  messagingSenderId: "122627142562",

  appId: "1:122627142562:web:8c91efd6231eb30703f8fb",

  measurementId: "G-6T4CBYHG8D"

};


export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);