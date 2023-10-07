import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.confiq';

const githubProvider = new GithubAuthProvider();

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const logoutUser = () =>{
        return signOut(auth)
    }





    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }

    },[])
    


    const contextInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        logoutUser,

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