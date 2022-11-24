import React, { useContext, useEffect } from 'react'
import getDataOrders from '../api/apiOrders';
import { OrdersContext } from '../context/OrdersContext/OrdersContext';
import { UserContext } from '../context/UserContext/UserContext';

const MyOrders = () => {
    const { orders, setOrders } = useContext(OrdersContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetch = async () => {
            const data = await getDataOrders();
            setOrders(data);
            console.log(data);
        }
        fetch();

    }, [])
    console.log(orders)

    const personalOrders = orders.filter(o => o.idUser = user.id);
    // console.log(personalOrders);





    return (
        <div>MyOrders</div>
    )
}

export default MyOrders