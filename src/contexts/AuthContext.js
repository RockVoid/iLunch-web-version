import React, { useContext, useState, createContext, useEffect } from 'react';
import { auth } from '../firebase/firebase-sdk-config';

const AuthContext = createContext();

export function useAuth() { return useContext(AuthContext) }

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    let cartGlobal = [];

    function signupEmail(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() { return auth.signOut() }

    function resetPassword(email) { return auth.sendPasswordResetEmail(email) }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function addItemToCart(item) {
        cartGlobal.push(item);
    }

    function removeItemFromCart(id) {
        cartGlobal = cartGlobal.filter(item => item.id !== id);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        cartGlobal,
        login,
        signupEmail,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        addItemToCart,
        removeItemFromCart
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}