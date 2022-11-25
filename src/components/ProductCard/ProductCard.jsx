import './ProductCard.css';
import { useContext } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { WishListContext } from '../../context/WishListContext/WishListContext';

// import * as photos from '../../img/index';

const ProductCard = ({ designer, name, img, description, id, price, addToCart, handleAddWished }) => {

    const { wishes } = useContext(WishListContext);

    const item = {
        id: id,
        designer: designer,
        name: name,
        price: price,
        img: img
    };

    // Heart


    const hearToggle = () => {
        const provisional = wishes.find(wish => wish.id === item.id)
        if (provisional) {
            return (
                <button className='heartButton' type="submit" value='add' onClick={() => { handleAddWished(item) }}>
                    <i className="fa fa-heart card red" aria-hidden="true"></i>
                </button>
            )
        } else {
            return (
                <div className='heartButton' type="submit" value='add' onClick={() => { handleAddWished(item) }}>
                    <i className="fa fa-heart card"></i>
                </div>
            )
        }
    }

    return (
        <>

            <div className="wrapperProducts">
                <div className="product-img">
                    <img src={img} alt="lampara" height="420" width="327" />

                </div>

                <div className="product-info">
                    <div className='buttonContainer'>
                        {hearToggle()}
                        {/* <button className='heartButton'type="submit" value='add' onClick={() => { handleAddWished(item) }}> <i className="fa fa-heart card" aria-hidden="true"></i> */}
                        {/* <button className='heartButton'type="submit" value='add' onClick={() => { handleAddWished(item) }}><i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-heart"></i>
                        </button> */}



                    </div>
                    <div className="product-text">
                        <h1>{name}</h1>
                        <h2>by {designer}</h2>
                        <p>{description} </p>
                    </div>

                    <div className="product-price-btn">
                        <p><span>{price}</span> €</p>
                        <button type="submit" value='add' onClick={() => { addToCart(item) }} >buy now</button>
                        <Toaster
                            position="top-right"
                            reverseOrder={true} />
                        <h2>{ }</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;