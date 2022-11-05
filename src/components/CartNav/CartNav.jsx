import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';




const CartNav = ({ items }) => {

  

  return (
    
      <div className='cartContainer'>
        <h2>MY SHOPPING BAG</h2>
        <ul>
          {items && items.map((item) => {
            return (
              <li key={item.id} className="itemC">
                <p>{item.name}  </p>
                <p>{item.price} €</p>
                <hr></hr>
              </li>
            )
          }) || "El carrito está vacio" }
          
        </ul>
        

        <div className="total">
        <p>Estimated Shopping</p>
        <h3>ESTIMATED TOTAL </h3>
       
        </div>
      </div>
    
  )
}

export default memo(CartNav);

