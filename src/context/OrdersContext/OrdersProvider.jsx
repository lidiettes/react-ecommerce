import React from 'react'
import { useState } from 'react';
import { OrdersContext } from './OrdersContext';


const OrdersProvider = ({ children }) => {

    let ordersValue = [];
    if (localStorage.getItem('orders')) {
        ordersValue = JSON.parse(localStorage.getItem('orders'))
    }
    const [orders, setOrders] = useState(ordersValue); // usando el value y el condicional no se eliminan al pulsar f5

    return (
        <OrdersContext.Provider value={{ orders, setOrders }}>
            {children}
        </OrdersContext.Provider>
    )
}

export default OrdersProvider