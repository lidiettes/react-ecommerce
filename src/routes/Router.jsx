import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';

import LoginPage from '../pages/LoginPage';
import ShippingPage from '../pages/ShippingPage';
import WishListPage from '../pages/WishListPage';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import ThankYouBye from '../pages/ThankYouBye';
import PrivateRoutes from './PrivateRoutes';
import MyAccount from '../pages/MyAccount';
import MyOrders from '../pages/MyOrders';

const Router = () => {
  return (

    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/shop" element = {<Shop />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/wishlist" element ={<WishListPage />} />
        <Route path="/myaccount" element = { <MyAccount /> } />
        <Route path="/myorders" element = { <MyOrders /> } />
  
        <Route path="/shippingpage" element = {<PrivateRoutes> <ShippingPage /> </PrivateRoutes>} />
        <Route path="/thankyou" element = { <PrivateRoutes> <ThankYouBye /> </PrivateRoutes>} />
        
      </Routes>
    </>
  );
}

export default Router