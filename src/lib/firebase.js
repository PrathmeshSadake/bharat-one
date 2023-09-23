// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7-shbGzW8ogBvGHNpQcjRbrv3aCKZ1ZM",
  authDomain: "prathmeshsadake-bharat-one.firebaseapp.com",
  projectId: "prathmeshsadake-bharat-one",
  storageBucket: "prathmeshsadake-bharat-one.appspot.com",
  messagingSenderId: "768520156531",
  appId: "1:768520156531:web:96239402e6d06ae8194106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
