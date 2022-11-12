import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';


// function getTotal(items) {
//   return items.reduce((accum) => {
//     return accum + items.price;
//   }, 0);
  
// }
// console.log(getTotal())

const CartNav = ({ items, removeCart }) => {

  
  return (

    <div className='cartContainer'>
        <h2>MY SHOPPING BAG</h2>
        <ProductCart 
        items={items}
        removeCart={removeCart}
        />


      
    </div>

  )
}

export default memo(CartNav);

