import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvBLv5PGi9BUwIqposUqWiQkPzvCAy_bw",
  authDomain: "my-project-ac60f.firebaseapp.com",
  projectId: "my-project-ac60f",
  storageBucket: "my-project-ac60f.firebasestorage.app",
  messagingSenderId: "41395397023",
  appId: "1:41395397023:web:f6c272ba57727ad0e01daa",
  measurementId: "G-66XWH0434M"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
