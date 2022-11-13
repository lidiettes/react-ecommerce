import './ProductCard.css';
import CounterApp from '../CounterApp/CounterApp';
import { useState } from 'react';
import { useReducer } from 'react'
import toast, { Toaster } from 'react-hot-toast';

// import * as photos from '../../img/index';

const ProductCard = ({ name, img, description, id, price, addToCart, handleAddWished }) => {

    // const { photo01, photo02, photo03} = photos;
    // const productImage = photos[`photo${item.img}`];

    
    const item = {
        id: id,
        name: name,
        price: price,
        img: img
    };
    

    return (
        <>
        
            <div className="wrapperProducts">
                <div className="product-img">
                    <img src={img}  alt="lampara" height="420" width="327" />
                    
                </div>

                <div className="product-info">
                    <div className='buttonContainer'>
                        <button className='heartButton' type="submit" value='add' onClick={() => {handleAddWished(item)}}> 
                            <i className="fa fa-heart card" aria-hidden="true"></i> 
                        </button>
                        </div>
                    <div className="product-text">
                        <h1>{name}</h1>
                        <h2>by Verner Panton</h2>
                        <p>{description} </p>
                    </div>
                    <div className='counterContainer'>  <CounterApp /> </div>
                    <div className="product-price-btn">
                        <p><span>{price}</span>€</p>
                        <button type="submit" value='add' onClick={() => { addToCart(item) }} >buy now</button>
                        <Toaster 
                        position="top-center"
                        reverseOrder={true}/>
                        <h2>{ }</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;