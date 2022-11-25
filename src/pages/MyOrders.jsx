import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect } from 'react'
import getDataOrders from '../api/apiOrders';
import Title from '../components/TitleShop/TitleShop';
import { OrdersContext } from '../context/OrdersContext/OrdersContext';
import { UserContext } from '../context/UserContext/UserContext';

const MyOrders = () => {
    const { orders, setOrders } = useContext(OrdersContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetch = async () => {
            const data = await getDataOrders();
            console.log(data);

            setOrders(data)
        }
        fetch();

    }, [])

    const personalOrders = orders.filter(o => o.idUser == user.id);
    console.log(personalOrders)
    // 
    // console.log(orders) ---> pedido en CURSO pero como ha finalizado no hay



    return (
        <>
            <Title />
            <div className="containerOrders">
            {
                personalOrders.length > 0 ?
                    (personalOrders.map((order, i) => {
                        return (
                            <div key={order.id}>
                                <div className="orderTitle"> <h3 className="h3Orders">Order: {order.id} </h3></div>
                                <div> {
                                    (order.products).map((o) => {
                                        return (
                                            
                                            <div className="containerProductCart" key={o.id}>
                                                <img className="imgProductCart" src={o.img} />
                                                <div className="infoProductCart">{o.name}</div>
                                                <div className="infoProductCart">Quantity:{o.quantity}</div>
                                            </div>
                                        )
                                    }
                                    )

                                } 
                                </div>


                            </div>
                        )
                    }
                    ))
                    : <p>"No orders"</p>
            }
        </div>
        </>
    )

}

export default MyOrders