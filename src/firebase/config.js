// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from 'firebase/firestore/lite'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqeKCu9P4DmxvAk2SWVntxkTTqVpGjEbg",
  authDomain: "purple-haze-app.firebaseapp.com",
  projectId: "purple-haze-app",
  storageBucket: "purple-haze-app.appspot.com",
  messagingSenderId: "1067143676198",
  appId: "1:1067143676198:web:174b692e969cfb0aba01e7",  
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app)