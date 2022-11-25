import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import getDataOrders from '../api/apiOrders';
import Search from '../components/Search/Search';
import Title from '../components/TitleShop/TitleShop';
import { CartContext } from '../context/CartContext/CartContext';
import { OrdersContext } from '../context/OrdersContext/OrdersContext';
import { UserContext } from '../context/UserContext/UserContext';

const MyOrders = () => {
    const { orders, setOrders } = useContext(OrdersContext);
    const { user } = useContext(UserContext);
    const { items, setItems } = useContext(CartContext);

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

    //Search

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value });
    };






        // console.log(personalOrders[0].products)

        // const productPersonalOrder= personalOrders.filter.products;
        // console.log(productPersonalOrder)
        // 
        // console.log(orders) ---> pedido en CURSO pero como ha finalizado no hay



        const repeatOrder = (user, id) => {

            const personalOrders = orders.filter(o => o.idUser == user.id);
            const productPersonalOrder = personalOrders.filter.products;
            console.log(personalOrders)
            console.log(productPersonalOrder)

            // if(personalOrders){
            //     setItems(
            //     orders.map(o => o.idUser == user.id ?{
            //         ...personalOrders,
            //         quantity: personalOrders.quantity + 1}
            //         : o));
            //     } else {
            //         setItems([...items, { ...orders, quantity: 1 }])
            //     }

        }

        useEffect(() => {
            localStorage.setItem("items", JSON.stringify(items));
        }, [items]);



        return (
            <>
                <Title />
                <div className="containerOrders">
                    <Search
                        handleFilter={handleFilter}
                        filter={filter}
                    />
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
                                        <button onClick={() => { repeatOrder(order, i) }}>hola</button>


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