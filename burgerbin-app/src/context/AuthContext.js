import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase-config'

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

const AuthContext = ({children}) => {
    const[currentUser, setCurrentUser] = useState(null)
    const [modal, setModal] = useState({isOpen: false, title:'', content:''})

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log('user status changed: ', user)
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signUp,
        login,
        logout,
        modal,
        setModal,
    }

    return (
        <authContext.Provider {...{ value }}>{children}</authContext.Provider>
    )
}

export default AuthContext
{/*comment for the day */}