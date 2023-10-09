import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.confiq';
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logoutUser = () =>{
        setIsLoading(true)
        return signOut(auth)
    }





    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setIsLoading(false)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }

    },[])
    


    const contextInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logoutUser,
        isLoading,

    }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthContextProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthContextProvider;