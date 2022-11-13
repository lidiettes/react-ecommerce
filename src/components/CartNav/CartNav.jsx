import React from 'react';
import './CartNav.css';
import { memo } from 'react'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';



const CartNav = ({ items, removeCart, getTotal }) => {


  return (
    <>
      <h2>MY SHOPPING BAG</h2>
      <div className='cartContainer'>

        <div>

          <ProductCart
            items={items}
            removeCart={removeCart}
          />
        </div>

        <div className='containerTotal'>
          <div><h3>Subtotal: {getTotal(items)}€ </h3></div>
          <div className='shippingContainer'>Shipping: </div>

          <button className="button buttonPay"> CHECK OUT </button>
          <div>
            <h3>We accept:</h3>
            <i class="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
            <i class="fa fa-cc-mastercard fa-2x" aria-hidden="true"></i>
            <i class="fa fa-cc-paypal fa-2x" aria-hidden="true"></i>
            {/* <p>Got a discount code? Add it in the next step.</p> */}
          </div>
        </div>


      </div>
    </>
  )
}

export default memo(CartNav);

