import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext/UserContext';

const PrivateRoutes = ({ children }) => {

    const { user, setUser } = useContext(UserContext);
    
    return user ? children : <Navigate to="/login" />


}

export default PrivateRoutes