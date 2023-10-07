import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../../Firebase/Firebase.confiq';

export const AuthContext = createContext(null)

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }

    },[])

    console.log(user)
    



    const contextInfo = {
        createUser,

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