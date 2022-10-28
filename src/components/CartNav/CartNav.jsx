import React, { useState, useEffect } from 'react';
import Items from '../../assets/db';
import './CartNav.css';

const CartNav = () => {


  const [cart, setCart] = useState([]);
  
  // aqui estaría los items

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart]
    hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
    setCart(hardCopy);
  };

  const listItems = Items.map((el) =>
    <div key={el.id}>
      {`${el.name}`}
      <button type="submit" value='add' onClick={() => addToCart(el)}>add </button>
    </div>
  );

  const cartItems = cart.map((el) =>
    <div key={el.id}>
      {`${el.name}`}
      <button type="submit" value='add' onClick={() => removeFromCart(el)}>remove</button>
    </div>
  );
console.log(cartItems);




  return (
    <>
      <div className='cartContainer'>
        <h2>Lista de articulos</h2>
        <div>{listItems}</div>
        <h2>Carrito</h2>
        <div>{cartItems}</div>
      </div>


    </>
  )
}

export default CartNav;