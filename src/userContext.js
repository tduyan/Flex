/**
 * 
 * Tutorials used were by @FullStack Simplified youtube videos.
 * 
 * 
 */


import { Unsubscribe } from '@mui/icons-material';
import {createContext, useState, useContext, useEffect} from  'react';
import {signInWithEmailAndPassword,
        signOut,
        createUserWithEmailAndPassword,
        updateProfile,
        onAuthStateChanged,
        sendPasswordResetEmail
         } from 'firebase/auth';
import {auth} from './firebase'

const UserContext = createContext({});

export const useUserContext = () => { return useContext(UserContext)};

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");
   
    // useEffect work on mount
    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, res =>{
            res ? setUser(res) : setUser(null);
            setError('');
            setLoading(false);
        });
        return unsubscribe
    }, [])
   /**
    * registerUser method context
    * for new users.
    */ 
    const registerUser = (email, password) => {
        
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            return updateProfile(auth.currentUser, { 
                displayName: email,
            });
        })
        .then((res) => console.log(res))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };
    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };
    

    const logoutUser = () => {
        signOut(auth)
    };

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email) 
        
    };

    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
    };
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}