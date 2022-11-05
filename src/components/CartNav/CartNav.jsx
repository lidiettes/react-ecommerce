import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';




const CartNav = ({ items, removeCart }) => {

  return (
  
      <div className='cartContainer'>
        <h2>MY SHOPPING BAG</h2>
        <ul>
          {items && items.map((item, indice) => {   //incluyendo indice solventamos el error de las key iguales
            return (
              <li key={indice} className="itemC">
                <p>{item.name}  </p>
                <p>{item.price} €</p>
                <button type="submit" value='add' onClick={() => {removeCart(indice)}} >Delete</button>
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

