import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { getTotal } from '../../helpers/functions'
import '../Total/Total.css'

const Total = () => {
    const { items, setItems } = useContext(CartContext);

    return (

        <>
            <div className='containerTotal'>
                <div><h3>Subtotal: {getTotal(items)} € </h3></div>
                <div className='shippingContainer'>Shipping: Free </div>

                
                <div className='cardTotal'>
                    <h3>We accept:</h3>
                    <i className="fa fa-cc-visa fa-2x cartNav" aria-hidden="true"></i>
                    <i className="fa fa-cc-mastercard fa-2x cartNav" aria-hidden="true"></i>
                    <i className="fa fa-cc-paypal fa-2x cartNav" aria-hidden="true"></i>
                </div>
                <Link to="/login"> <button className="button buttonPay"> CHECK OUT  </button></Link>
            </div>
        </>
    )
}

export default Total