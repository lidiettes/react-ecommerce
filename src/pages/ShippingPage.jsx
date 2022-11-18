import React from 'react'
import CartNav from '../components/CartNav/CartNav'
import ProductCart from '../components/ProductCart/ProductCart'
import ShippingForm from '../components/ShippingForm/ShippingForm'
import Total from '../components/Total/Total'
import Cart from './Cart'

const ShippingPage = () => {
  return (
    <>
      <div className="mari" style={{ display: "flex" }}>
        <div className="pili" >
          
          <ProductCart 
          
          />

        </div>
        <ShippingForm />


      </div>

    </>


  )
}

export default ShippingPage