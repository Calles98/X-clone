// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-v2-ac956.firebaseapp.com",
  projectId: "x-next-v2-ac956",
  storageBucket: "x-next-v2-ac956.appspot.com",
  messagingSenderId: "170490033689",
  appId: "1:170490033689:web:bba2b4bd5448acb51b1c88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
