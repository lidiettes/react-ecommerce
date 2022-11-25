import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoggedInContext } from '../../context/LoggedInContext/LoggedInContext'
import { UserContext } from '../../context/UserContext/UserContext'
import './ButtonCheckOut.css'

const ButtonCheckOut = () => {
    const{loggedIn}= useContext(LoggedInContext);
    const {user}= useContext(UserContext)
    const navigate= useNavigate();

    const loqueyoquiera = ()=>{
        user ? navigate("/shippingpage") : navigate("/login") 
    }
  return (
    <>
    <button onClick={loqueyoquiera} className="button buttonPay"> CHECK OUT  </button>
    </>
  )
}

export default ButtonCheckOut