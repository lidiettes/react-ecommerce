import React from 'react'
import { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { LoggedInContext } from '../../context/LoggedInContext/LoggedInContext'
import './ButtonCheckOut.css'

const ButtonCheckOut = () => {
    const{loggedIn}= useContext(LoggedInContext);
    const navigate= useNavigate();

    const loqueyoquiera = ()=>{
       
        loggedIn ? navigate("/shippingpage") : navigate("/login") 
    }
  return (
    <>
    <button onClick={loqueyoquiera} className="button buttonPay"> CHECK OUT  </button>
    </>
  )
}

export default ButtonCheckOut