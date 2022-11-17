import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';
import { useState } from 'react';
import Total from '../Total/Total';


const CartNav = ({ items, removeCart, addToCart, }) => {


  return (
    <>
      
      <div className='cartContainer'>

        <div className=''>
          <ProductCart
            items={items}
            removeCart={removeCart}
            addToCart={addToCart}
            

          />
        </div>
        <Total/>

        {/* <div className='containerTotal'>
          <div><h3>Subtotal: {getTotal(items)} € </h3></div>
          <div className='shippingContainer'>Shipping: </div>

          
          <Link to="/login"> <button className="button buttonPay"> CHECK OUT  </button></Link>
            
            
          
         
          <div>
            <h3>We accept:</h3>
            <i className="fa fa-cc-visa fa-2x cartNav" aria-hidden="true"></i>
            <i className="fa fa-cc-mastercard fa-2x cartNav" aria-hidden="true"></i>
            <i className="fa fa-cc-paypal fa-2x cartNav" aria-hidden="true"></i>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default memo(CartNav);

