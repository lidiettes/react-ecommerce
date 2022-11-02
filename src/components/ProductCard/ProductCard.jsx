import './ProductCard.css';

import CounterApp from '../CounterApp/CounterApp';



const ProductCard = ({name, img, description, id, price, addToCart}) => {

    // const productImage = photos[`photo${item.img}`];
    const item = {
        id: id,
        name: name,
        price: price,
        img: img,
        description: description
    };
    

    return (
        <>
            <div className="wrapperProducts">
                <div className="product-img">
                    <img src={img} height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{name}</h1>
                        <h2>by Verner Panton</h2>
                        <p>{description} </p>

                    </div>
                    <div className='counterContainer'>  <CounterApp /> </div>
                    <div className="product-price-btn">
                        <p><span>{price}</span>€</p>
                        <button type="submit" value='add' onClick={()=>{addToCart(item)}} >buy now</button>
                        <h2>{}</h2>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;