import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBE-6HgKVeosKtS2B_7IfleWwL9i1LSnYY",
    authDomain: "bretry-flex.firebaseapp.com",
    projectId: "bretry-flex",
    storageBucket: "bretry-flex.appspot.com",
    messagingSenderId: "654836403109",
    appId: "1:654836403109:web:54b8ffe479dea098e4b64c",
    measurementId: "G-GZ2K32VY9F"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
          });
        }
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

  const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    logout,
  };