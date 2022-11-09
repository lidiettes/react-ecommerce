import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';




const CartNav = ({ items, removeCart, }) => {

  return (
  
      <div className='cartContainer'>
        <h2>MY SHOPPING BAG</h2>
                <ul>
                  {items && items.map((item, indice) => {   //incluyendo indice solventamos el error de las key iguales
                    return (
                      <li key={indice} className="itemC">
                        <div>{item.name}  </div>
                        <div>{item.price} €</div>
                        <div>{item.img}</div>
                        <button class="buttonDelete" type="submit" value='add' onClick={() => {removeCart(indice)}} >Delete</button>
                        <hr/>
                      </li>
                    )
                  }) || "El carrito está vacio" }
                </ul>
        <div className="total">
          <p>Estimated Shipping</p>
          <h3>ESTIMATED TOTAL </h3>
        
        </div>
        <Link to="/shippingpage">
        <button class="button buttonPay" > Pagar ahora </button>
        </Link>
      </div>
    
  )
}

export default memo(CartNav);

