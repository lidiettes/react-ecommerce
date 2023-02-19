import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import getDataOrders from '../api/apiOrders';
import Search from '../components/Search/Search';
import TitleOrders from '../components/TitleOrders/TitleOrders';
import { CartContext } from '../context/CartContext/CartContext';
import { OrdersContext } from '../context/OrdersContext/OrdersContext';
import { UserContext } from '../context/UserContext/UserContext';
import { notify } from '../helpers/functions';

const MyOrders = () => {
    const { orders, setOrders } = useContext(OrdersContext);
    const { user } = useContext(UserContext);
    const { setItems } = useContext(CartContext);

    useEffect(() => {
        const fetch = async () => {
            const data = await getDataOrders();
            setOrders(data)
        }
        fetch();
    }, [])

    const personalOrders = orders.filter(o => o.idUser == user.id);
    console.log(personalOrders)

    const ids = orders.map((order) => {
        return (order.products)
    })


    //Search

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value });
    };

    const repeatOrder = (items) => {
        // const personalOrders = orders.filter(o => o.idUser == user.id);
        // console.log(personalOrders)

        // const totalOrders = orders.map((order) => order.products)
        // console.log(totalOrders)
        
        setItems(items);
        return notify();
    }

    return (
        <>
            <TitleOrders />
            <Search
                handleFilter={handleFilter}
                filter={filter}
            />
            <div className="containerOrders">

                    {
                    personalOrders.length > 0 ?
                        (personalOrders.map((order, i) => {
                            return (
                                <div key={order.id}>
                                    <div className="orderTitle">
                                        <div className="h3Orders">Order: {order.id} </div>
                                        <div className="h3Orders date">Date of order: {order.dateOrder}</div>
                                    </div>
                                    <div>
                                        {(order.products)
                                            .filter((o) => {
                                                if (!filter) return true;
                                                else {
                                                    const oName = o.name.toLowerCase()

                                                    return oName.includes(filter.toLocaleLowerCase())
                                                }
                                            })

                                            .map((o) => {
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
                                    
                                    <button className="repeatYourOrder" onClick={() => { repeatOrder(order.products) }}>Repeat your order</button>
                                    <Toaster
                            position="top-right"
                            reverseOrder={true} />

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