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
        updateEmail,
        updatePassword,
        createUserWithEmailAndPassword,
        updateProfile,
        onAuthStateChanged,
        sendPasswordResetEmail
        } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from './firebase'

const UserContext = createContext({});

export const useUserContext = () => { return useContext(UserContext)};

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate();
   
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
    const updateUserEmail = (email) => {
        updateEmail(auth.currentUser, email).then(() => {
            console.log("Email updated")
        }).catch((err) => setError(err.message))
    };

    const updateUserPassword = (newPassword) => {
        updatePassword(auth.currentUser, newPassword).then(() => {
            console.log("Password updated")
        }).catch((err) => setError(err.message))
    };

    const logoutUser = () => {
        signOut(auth)
        navigate('/ ')
    };

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email) 
        
    };

    const contextValue = {
        user,
        loading,
        error,
        updateUserEmail,
        updateUserPassword,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
    };
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}