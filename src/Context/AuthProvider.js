import { React, createContext, useState, useEffect } from 'react';

import { getAuth, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.init';




const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)


    // google sigin
    const googleSignin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }



    // creat user
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // sign in
    const LogInuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // logout
    const LogOut = () => {
        return signOut(auth)
    }
    const userUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('chang', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubsCribe()
        }
    }, [])

    const userInfo = {
        user,
        googleSignin,
        setLoading,
        creatUser,
        LogInuser,
        LogOut,
        userUpdate,
        Loading,



    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;