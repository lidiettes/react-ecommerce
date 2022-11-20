import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonCheckOut.css'

const ButtonCheckOut = () => {
  return (
    <>
    <Link to="/login"> <button className="button buttonPay"> CHECK OUT  </button></Link>
    </>
  )
}

export default ButtonCheckOut