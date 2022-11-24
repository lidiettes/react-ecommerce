import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
// import { LoggedInContext } from '../context/LoggedInContext/LoggedInContext';
import { UserContext } from '../context/UserContext/UserContext';

const PrivateRoutes = ({ children }) => {

    // const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
    const { user, setUser } = useContext(UserContext);
    
    return user ? children : <Navigate to="/login" />


}

export default PrivateRoutes