import React from 'react'
import './ProductsContainer.css';
import Items from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = ({buyProducts}) => {
    
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
                    buyProducts = {buyProducts}
                    />
                )
                })}
            </div>
            )
};

export default ProductsContainer;