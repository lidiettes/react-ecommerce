import React from 'react'
import './ProductsContainer.css';
import Items from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = () => {
    
    return (

            <div className="ContainerCard">
                {Items.map((item) => {
                    
                return (
                    <ProductCard 
                    key = {item.id}
                    name = {item.name} 
                    description = {item.description} 
                    price = {item.price} 
                    img = {item.img} 

                    />
                )
                })}
            </div>
            )
};

export default ProductsContainer;