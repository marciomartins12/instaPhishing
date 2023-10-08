import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAi_b4QfjQjBQ9RPErqml97iXVJYqt5yo8",
  authDomain: "pdaingles-87849.firebaseapp.com",
  projectId: "pdaingles-87849",
  storageBucket: "pdaingles-87849.appspot.com",
  messagingSenderId: "257983601723",
  appId: "1:257983601723:web:ad241de8dc3fd3cf92901e",
  measurementId: "G-DTNJL6D57R"
};


export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);