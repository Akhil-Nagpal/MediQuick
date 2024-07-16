// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.meta.env.VITE_APIKEY,
  authDomain: process.meta.env.VITE_AUTHDOMAIN,
  projectId: process.meta.env.VITE_PROJECTID,
  storageBucket: process.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: process.meta.env.VITE_MESSAGINGSENDERID,
  appId: process.meta.env.VITE_APPID,
  measurementId: process.meta.env.VITE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
