import { db } from "./firebase-config";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users")
class UserDataService {
    addUser = (newUser) => {
        return addDoc(userCollectionRef, newUser);
    };
    updateaddUser = (userID, updatedUser) => {
        const userDoc = doc(db, "users", userID);
        return updateDoc(userDoc, updatedUser);
    };
    deleteUser = (userID) => {
        const userDoc = doc(db, "users", userID);
        return deleteDoc(userDoc);
    };

    getAllUsers = () => {
        return getDocs(userCollectionRef);
    }

    getUser = (userID) => {
        const userDoc = doc(db, "users", userID);
        return getDoc(userDoc);
    }
}

export default new UserDataService();