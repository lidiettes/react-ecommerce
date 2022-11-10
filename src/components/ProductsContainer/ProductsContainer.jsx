
import './ProductsContainer.css';
// import Items from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';




const ProductsContainer = ({ addToCart,stock, addWishList }) => {
    return (

        <div className="ContainerCard">

                {stock.map((item) => {
                    
                return (
                    <ProductCard 
                    key = {item.id}
                    id = {item.id}
                    name = {item.name} 
                    description = {item.description} 
                    price = {item.price} 
                    img = {item.img}
                    addToCart={addToCart}
                    addWishList= {addWishList}

                    />
                )
                })} 
        </div>
    )
};

export default ProductsContainer;