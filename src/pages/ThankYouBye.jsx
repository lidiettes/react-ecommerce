import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext/UserContext'

const ThankYouBye = () => {
    const { user, setUser } = useContext(UserContext);
    const { items, setItems } = useContext(CartContext);
    console.log(user);
    console.log(items);




  return (
    <>
    <div>Thankyou for your order {user.name}</div>
    <p>I will send you to this address: {user.address}</p>
    <p>{items[0].name}</p>
    <p>{items[1].name}</p>
    <p>{items[2].name}</p>
    <strong> SEE YOUUU SOONNNNNN </strong>
  
    </>
  )
}

export default ThankYouBye;