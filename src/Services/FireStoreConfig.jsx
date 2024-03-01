import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {

  apiKey: "AIzaSyC4LgpHVCA7lfjNJyiqBWbM_ZeLOZX5VXE",

  authDomain: "ists-c8a24.firebaseapp.com",

  projectId: "ists-c8a24",

  storageBucket: "ists-c8a24.appspot.com",

  messagingSenderId: "670970209140",

  appId: "1:670970209140:web:cb6e58cfa42ae82e9c0221",

  measurementId: "G-XCKQKB98BB"

};



export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);