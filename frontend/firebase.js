// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "zippeat-76ec8.firebaseapp.com",
  projectId: "zippeat-76ec8",
  storageBucket: "zippeat-76ec8.firebasestorage.app",
  messagingSenderId: "337737660242",
  appId: "1:337737660242:web:414ae066a1457c66fe2c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}