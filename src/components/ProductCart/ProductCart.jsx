import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

import CounterApp from '../CounterApp/CounterApp';

import './ProductCart.css'

const ProductCart = ({removeCart,addToCart }) => {

    const { items, setItems } = useContext(CartContext);

    return (
        <>
      
        <div className='container'>
            
            {
                items.length > 0 ?
                    (items.map((item) => {   //incluyendo indice solventamos el error de las key iguales
                        return (
                            <div className="containerProductCart" key={item.id} >
                                <img className="imgProductCart" src={item.img} alt={item.name} />
                                <div className="infoProductCart">{item.name}  {item.price} €
                                    
                                    <button className="buttonDelete" type="submit" value='add' onClick={() => { removeCart(item.id) }} ><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    <div className='counterContainer'>  
                                    <CounterApp 
                                    item={item}
                                    addToCart={addToCart}
                                    removeCart={removeCart}
                                 
                                    
                                    /> 
                                    </div>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    ))
                    : <div className='containerEmpty '>
                        
                        <h3><i className="fa fa-shopping-cart" aria-hidden="true"></i> Your bag is empty</h3>
                        <h4>Items remain in your bag for 60 minutes, and then they're moved to your Saved Items.</h4>
                        <p>   Sign in to see your bag
                            and get shopping!</p>
                    </div>
            }
        </div>
        </>
    )
}

export default ProductCart