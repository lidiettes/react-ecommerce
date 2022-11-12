import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import './ProductCart.css'

const ProductCart = ({ items, removeCart }) => {
    
    return (

        <div >
            {
                items.length > 0 ?
                    (items.map((item, indice) => {   //incluyendo indice solventamos el error de las key iguales
                        return (
                            <div className="containerProductCart" key={indice} >
                                <img className="imgProductCart" src={item.img} alt={item.name} />
                                <div className="infoProductCart">{item.name}  {item.price} €
                                    <button className="buttonDelete" type="submit" value='add' onClick={() => { removeCart(indice) }} ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                                <hr />
                            </div>
                            
                            
                        )

                    }
                    
                    
                    
                    ))
                    

                    

                    : <div className='containerEmpty'>
                        
                        <h3><i className="fa fa-shopping-cart" aria-hidden="true"></i> Your bag is empty</h3>
                        <h4>Items remain in your bag for 60 minutes, and then they're moved to your Saved Items.</h4>

                        <p>   Sign in to see your bag
                            and get shopping!</p>

                            

                    </div>



            }
            




        </div>
        

    )

}

export default ProductCart