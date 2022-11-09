import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';


// function getTotal(items) {
//   return items.reduce((accum) => {
//     return accum + items.price;
//   }, 0);
  
// }
// console.log(getTotal())

const CartNav = ({ items, removeCart, }) => {


  console.log(items.price);
  
  
  
  return (

    <div className='cartContainer'>
      <h2>MY SHOPPING BAG</h2>
      <ul>
        {items && items.map((item, indice) => {   //incluyendo indice solventamos el error de las key iguales
          return (
            <li key={indice} className="itemC">
              <div>{item.name}  </div>
              <div>{item.price} €</div>
              <img src={item.img} width="100px" alt={item.name} />
              <button className="buttonDelete" type="submit" value='add' onClick={() => { removeCart(indice) }} >Delete</button>
              <hr />
            </li>
          )
        }) || "El carrito está vacio"}
      </ul>
      <div className="total">
        <p>Estimated Shipping</p>
        {/* <h3>ESTIMATED TOTAL {getTotal(items)} </h3> */}

      </div>
      <Link to="/shippingpage">
        <button className="button buttonPay"> Pagar ahora </button>
      </Link>
    </div>

  )
}

export default memo(CartNav);

