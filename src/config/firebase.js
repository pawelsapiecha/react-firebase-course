import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDLTRgF9AMyBjhHw9ufY9q5oJ8Xee8t-Mc",
    authDomain: "react-course-6e5f9.firebaseapp.com",
    projectId: "react-course-6e5f9",
    storageBucket: "react-course-6e5f9.appspot.com",
    messagingSenderId: "693871806149",
    appId: "1:693871806149:web:b7d020f16b1757d56112ac",
    measurementId: "G-WG71YN9T3T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);