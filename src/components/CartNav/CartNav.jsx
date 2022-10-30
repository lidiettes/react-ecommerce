import React, { useState, useEffect } from 'react';
import Items from '../../assets/db';
import './CartNav.css';



const CartNav = ({cart}) => {

  let cartTotal = JSON.parse(localStorage.getItem("items"));
  console.log(cartTotal);

  
  return (
    <>
    <div className='cartContainer' > <h2>CART</h2>
    {cartTotal && cartTotal.map((item) => {
      return (

          <p>{item.name}  {item.price} €</p>
        
      )
    })}
    </div>
    </>
  )
}

export default CartNav;







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
  