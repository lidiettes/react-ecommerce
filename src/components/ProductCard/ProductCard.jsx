import React, {useState} from 'react'; //no se si se debe hacer

import './ProductCard.css';
import * as photos from '../../assets/img';
import CounterApp from '../CounterApp/CounterApp';
import CartNav from '../CartNav/CartNav';
import Items from '../../assets/db';
import listItems from '../CartNav/CartNav'


const ProductCard = ({id, name, description, price, img, onAdd }) => { // aqui he incluido como props listItem por probar y lo llamo abajo


    return (
            <>
            <div className="wrapperProducts">
                            <div className="product-img">
                                <img src={img} height="420" width="327" />
                            </div>
                            <div className="product-info">
                                <div className="product-text">
                                    <h1 >{name}</h1>
                                    <h2>by Verner Panton</h2>
                                    <p>{description} </p>
                                    
                                    </div>
                                    <div className='counterContainer'>  <CounterApp /> </div>
                                    {/* <p>{}</p> */}

                                    <div className="product-price-btn">
                                            <p><span>{price}</span>€</p>
                                            
                                            {/* <button  type="submit" value='add' >buy now</button> */}

                                            <button type="submit" value='add' onClick={()=> onAdd(items)}>buy now</button>
                                            
                                    </div>
                                </div>
            </div>


            
            </>
    );
};

export default ProductCard;