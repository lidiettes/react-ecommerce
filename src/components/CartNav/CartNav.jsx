import React from 'react';
import './CartNav.css';



const CartNav = ({items}) => {


  return (
    <>
      <div className='cartContainer'>
        <h2>CART</h2>
        <ul>
        {items && items.map((item) => {
        return (
            <li key={item.id} className="item">
                <p>{item.name}  {item.price}</p>
            </li>
        )
    }) || "no hay elementos"}
        </ul>
      
        
      </div>
    </>
  )
}

export default CartNav;

