import React from 'react'
import { useContext } from 'react'
import CartNav from '../components/CartNav/CartNav'
import { CartContext } from '../context/CartContext';

const Cart = () => {

    const {items} = useContext(CartContext);

  return (
    <>
    <CartNav 
    items={items}
    />
    </>
  )
}

export default Cart