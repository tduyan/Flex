// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'



const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_Key,
    authDomain: "bretry-flex.firebaseapp.com",
    projectId: "bretry-flex",
    storageBucket: "bretry-flex.appspot.com",
    messagingSenderId: "654836403109",
    appId: "1:654836403109:web:54b8ffe479dea098e4b64c",
    measurementId: "G-GZ2K32VY9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const methods = {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}
export default app;
const analytics = getAnalytics(app);