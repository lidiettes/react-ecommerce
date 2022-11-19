import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';

import LoginPage from '../pages/LoginPage';
import ShippingPage from '../pages/ShippingPage';
import WishListPage from '../pages/WishListPage';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import ThankYouBye from '../pages/ThankYouBye';

const Router = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shippingpage" element={<ShippingPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/wishlist" element={<WishListPage/>} /> 
        <Route path="/thankyou" element={<ThankYouBye />} />

      </Routes>

    </>
  )
}

export default Router