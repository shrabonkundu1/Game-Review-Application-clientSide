import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataId , setDataId] = useState(null)


    const handleDetailes = (id) => {
        setDataId(id)
    }

    
    
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const updateP = (userData) => {
        return updateProfile(auth.currentUser,userData)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false)
        })
            return () => unSubscribe()
                
            
    },[])

    const userInfo ={
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        logOutUser,
        updateP,
        dataId,
        handleDetailes,
        

    }
    

    



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;