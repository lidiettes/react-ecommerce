import './ProductCard.css';
import * as photos from '../../assets/img';
import CounterApp from '../CounterApp/CounterApp';
import CartNav from '../CartNav/CartNav';
import Items from '../../assets/db';


const ProductCard = (item) => {

    const productImage = photos[`photo${item.img}`];


    const saveProducts = (item) => {
        let elements = JSON.parse(localStorage.getItem("items")); //conseguir elementos ls
        if (Array.isArray(elements)) {
            elements.push(item);
        } else {
            elements = [item];
        }
        localStorage.setItem("items", JSON.stringify(elements)) //guardarlos en ls
    
    }

    return (
        <>
            <div className="wrapperProducts">
                <div className="product-img">
                    <img src={item.img} height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{item.name}</h1>
                        <h2>by Verner Panton</h2>
                        <p>{item.description} </p>

                    </div>
                    <div className='counterContainer'>  <CounterApp /> </div>
                    <div className="product-price-btn">
                        <p><span>{item.price}</span>€</p>

                        <button key={item.id} type="submit" value='add' onClick={e => {saveProducts(item)}}>buy now</button>

                    </div>
                </div>
            </div>
        </>
);
};

export default ProductCard;