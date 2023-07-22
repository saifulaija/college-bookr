// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy8TTtkEZgcxC2zrYCujD9iq5HT_DDeFA",
  authDomain: "collegebookr.firebaseapp.com",
  projectId: "collegebookr",
  storageBucket: "collegebookr.appspot.com",
  messagingSenderId: "220696327547",
  appId: "1:220696327547:web:91e7c1a3b00e2ec6efb9de"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;