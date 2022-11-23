import React, { useContext, useEffect } from 'react'
import { OrdersContext } from '../../context/OrdersContext/OrdersContext';
import { UserContext } from '../../context/UserContext/UserContext';

const Helper = () => {

    const {orders}= useContext(OrdersContext);
	const { user} = useContext(UserContext);

	useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user))
    }, [user])

	useEffect(() => {
        localStorage.setItem("order", JSON.stringify(orders))
    }, [orders])





    return (
    <></>
  )
}

export default Helper