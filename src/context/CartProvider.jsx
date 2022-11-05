import React from 'react'
import { useState } from 'react';
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {

    let value = [];
    if (localStorage.getItem('items')) {
        value = JSON.parse(localStorage.getItem('items'))
    }
    const [items, setItems] = useState(value); // usando el value y el condicional no se eliminan al pulsar f5




    return (
        <CartContext.Provider value={{ items, setItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider