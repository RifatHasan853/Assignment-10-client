// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtMU2RmpwUhu_2GSxeubAjNHYnhFkAoq0",
  authDomain: "travel-easy-a7fb9.firebaseapp.com",
  projectId: "travel-easy-a7fb9",
  storageBucket: "travel-easy-a7fb9.appspot.com",
  messagingSenderId: "889331283921",
  appId: "1:889331283921:web:2cc88d85888c3c535752f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth;