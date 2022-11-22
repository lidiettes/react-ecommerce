import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { LoggedInContext } from '../context/LoggedInContext/LoggedInContext';

const PrivateRoutes = ({ children }) => {

    const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
    
    return loggedIn ? children : <Navigate to="/login" />


}

export default PrivateRoutes