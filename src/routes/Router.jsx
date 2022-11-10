import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import ShippingPage from '../pages/ShippingPage';
import WishListPage from '../pages/WishListPage';

const Router = () => {
  return (

    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shippingpage" element={<ShippingPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/wishlist" element={<WishListPage/>} /> 

      </Routes>

    </>
  )
}

export default Router