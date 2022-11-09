import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ShippingPage from '../pages/ShippingPage';

const Router = () => {
  return (

    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shippingpage" element={<ShippingPage />} />

      </Routes>

    </>
  )
}

export default Router