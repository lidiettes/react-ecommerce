import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';
import CounterApp from '../CounterApp/CounterApp';
import { useState } from 'react';


const CartNav = ({ items, removeCart}) => {


  return (
    <>
      <h2>MY SHOPPING BAG</h2>
      <div className='cartContainer'>

        <div className=''>
          <ProductCart
            items={items}
            removeCart={removeCart}

          />
        </div>

        <div className='containerTotal'>
          <div><h3>Subtotal: € </h3></div>
          <div className='shippingContainer'>Shipping: </div>

          <button className="button buttonPay"> CHECK OUT </button>
          <div>
            <h3>We accept:</h3>
            <i className="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
            <i className="fa fa-cc-mastercard fa-2x" aria-hidden="true"></i>
            <i className="fa fa-cc-paypal fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(CartNav);

