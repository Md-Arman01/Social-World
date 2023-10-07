import {  useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
import { Navigate } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import PropTypes from 'prop-types'

const PrivateRoutes = ({children}) => {
    const {user, isLoading} = useContext(AuthContext)
    if(isLoading){
        return <LoadingPage></LoadingPage>
    }
    
    if(user){
        return children
    }


    return (
        <Navigate to='/login'></Navigate>
    );
};
PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;