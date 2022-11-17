import React from 'react'
import Login from '../components/Login/Login';
import LoginDos from '../components/LoginDos/LoginDos';
import Cart from './Cart';

const divStyle = {
  display:'grid' ,
};

const LoginPage = () => {
  return (
    <>
    <div style={divStyle}>
    <Login />
    
    </div>
    
    
    </>
  )
}

export default LoginPage;