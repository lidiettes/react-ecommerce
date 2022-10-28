import './ProductCard.css';
import * as photos from '../../assets/img';
import CounterApp from '../CounterApp/CounterApp';


const ProductCard = ({name,description, price, img}) => {

const productImage = photos[`photo${img}`];

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
                                    <button type="submit">buy now</button>
                            </div>
                        </div>
    </div>


    
    </>
);
};

export default ProductCard;