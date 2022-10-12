import React, { useContext, useState, useEffect } from "react"
import { auth, methods } from "./Firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
    return methods .createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
    return methods .signInWithEmailAndPassword(email, password)
    }

    function logout() {
    return methods .signOut()
    }

    function resetPassword(email) {
    return methods .sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
    return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
    return currentUser.updatePassword(password)
    }

    useEffect(() => {
    const unsubscribe = methods .onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })

    return unsubscribe
    }, [])

    const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
    }

    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    )
}