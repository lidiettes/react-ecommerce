import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext/CartContext';
import { UserContext } from '../context/UserContext/UserContext'

const ThankYouBye = () => {

    const { user, setUser } = useContext(UserContext);
    const { items, setItems } = useContext(CartContext);


  return (
    <>
    <div>Thank you for your order {user.name}</div>
    <p>I will send you to this address: {user.address}</p>
    {items.map(i => <p>i.name</p>)}
   
    <strong> SEE YOUUU SOONNNNNN </strong>
  
    </>
  )
}

export default ThankYouBye;