import React from 'react'
import './ProductsContainer.css';
import Items from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = ({addToCart}) => {
    
    return (

            <div className="ContainerCard">
                {Items.map((item) => {
                    
                return (
                    <ProductCard 
                    key = {item.id}
                    id = {item.id}
                    name = {item.name} 
                    description = {item.description} 
                    price = {item.price} 
                    img = {item.img}
                    addToCart={addToCart} 
                    />
                )
                })}
            </div>
            )
};

export default ProductsContainer;