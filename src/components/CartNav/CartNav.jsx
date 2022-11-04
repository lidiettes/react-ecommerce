import React from 'react';




const CartNav = ({ items }) => {


  return (
    
      <div className='cartContainer'>
        <h2>CART</h2>
        <ul>
          {items && items.map((item) => {
            return (
              <li key={item.id} className="item">
                <p>{item.name}  {item.price}</p>
              </li>
            )
          }) || "El carrito está vacio" }
        </ul>

      </div>
    
  )
}

export default CartNav;

