import React, { useContext } from 'react'
import ProductCart from '../components/ProductCart/ProductCart';
import { CartContext } from '../context/CartContext/CartContext';
import { OrdersContext } from '../context/OrdersContext/OrdersContext';
import { UserContext } from '../context/UserContext/UserContext'

const ThankYouBye = () => {

    const { user, setUser } = useContext(UserContext);
    const { items, setItems } = useContext(CartContext);
    const {orders,setOrders } = useContext(OrdersContext);
 
   console.log(orders);
   console.log(user);

    return (
        <>  
            <div className='containerThankyou'>
            <div className="TitleThankyou"> Thank you for your order {user.name}</div>
            

            <p className='pThankyou'>Order number: {orders.id}</p>
            <p className='pThankyou'>You will receive an email confirmation shortly at {user.email}</p>



            <div className='containerThankyouProducts'>

                {(items.map((item) => {   //incluyendo indice solventamos el error de las key iguales
                            return (
                                <div className="containerProductCart" key={item.id} >
                                    <img className="imgProductCart" src={item.img} alt={item.name} />
                                    <div className="infoProductCart">{item.name}  {item.price} € </div>
                                    <hr />
                                </div>
                            )
                        }
                        ))
                    }  
                
            </div>
            </div>
        </>





    )
}

export default ThankYouBye;