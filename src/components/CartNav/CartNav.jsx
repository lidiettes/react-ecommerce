import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import ProductCart from '../ProductCart/ProductCart';
import Total from '../Total/Total';
import ButtonCheckOut from '../ButtonCheckOut/ButtonCheckOut';


const CartNav = ({ items, removeCart, addToCart, }) => {


  return (
    
      <div className='cartContainer'>
        <div className=''>
          <ProductCart
            items={items}
            removeCart={removeCart}
            addToCart={addToCart}
          />
        </div>
        <Total/>
        
      </div>
   
  )
}

export default memo(CartNav);

