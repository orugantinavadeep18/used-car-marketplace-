// src/Login/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvBLv5PGi9BUwIqposUqWiQkPzvCAy_bw",
  authDomain: "my-project-ac60f.firebaseapp.com",
  projectId: "my-project-ac60f",
  storageBucket: "my-project-ac60f.appspot.com",  // 🔄 fixed typo: should be .app**spot**.com
  messagingSenderId: "41395397023",
  appId: "1:41395397023:web:f6c272ba57727ad0e01daa",
  measurementId: "G-66XWH0434M"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Create Auth and Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
