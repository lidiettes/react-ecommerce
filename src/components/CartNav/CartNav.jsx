import React, { useState, useEffect } from 'react';
import Items from '../../assets/db';
import './CartNav.css';

const CartNav = ({}) => {

  let carritoTotal = JSON.parse(localStorage.getItem("items"));
  console.log(carritoTotal);

  // const [cart, setCart] = useState([]);
  // const addToCart = (el) => {
  //   setCart([...cart, el]);
  // };
  // const removeFromCart = (el) => {
  //   let hardCopy = [...cart]
  //   hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
  //   setCart(hardCopy);
  // };
  // const listItems = Items.map((el) =>
  //   <div key={el.id}>
  //     {`${el.name}`}
  //     <button type="submit" value='add' onClick={() => addToCart(el)}>add </button>
  //   </div>
  // );
  // const cartItems = cart.map((el) =>
  //   <div key={el.id}>
  //     {`${el.name}`}
  //     <button type="submit" value='add' onClick={() => removeFromCart(el)}>remove</button>
  //   </div>
  // );
  
  
  
  return (
    <>
    {carritoTotal && carritoTotal.map((item) => {
      return (

        <div className='cartContainer' key = {item.id}>
          <h2>Carrito</h2> 
          <p>{item.name} {item.price} €</p>
        </div>
      )
    })}
    </>
  )
}

export default CartNav;