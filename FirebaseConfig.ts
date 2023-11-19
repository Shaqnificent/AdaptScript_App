// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj78YJOwSKblAVK05TiBOKktW_RcPFE5o",
  authDomain: "adapt-script.firebaseapp.com",
  projectId: "adapt-script",
  storageBucket: "adapt-script.appspot.com",
  messagingSenderId: "92677445458",
  appId: "1:92677445458:web:97cf344304c47230fccc8b",
  measurementId: "G-YRLXM4C141"
};

// Initialize Firebase
export const APP = initializeApp(firebaseConfig);
export const AUTH = getAuth(APP)
export const DB = getFirestore(APP)
