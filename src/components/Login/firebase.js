// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvBLv5PGi9BUwIqposUqWiQkPzvCAy_bw",
  authDomain: "my-project-ac60f.firebaseapp.com",
  projectId: "my-project-ac60f",
  storageBucket: "my-project-ac60f.firebasestorage.app",
  messagingSenderId: "41395397023",
  appId: "1:41395397023:web:f6c272ba57727ad0e01daa",
  measurementId: "G-66XWH0434M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);