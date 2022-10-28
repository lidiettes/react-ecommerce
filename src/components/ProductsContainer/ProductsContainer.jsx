import React from 'react'
import './ProductsContainer.css';
import ProductsInfo from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = () => {
    
    return (
    <>
            
            <div className="ContainerCard">
                
            {ProductsInfo.map(({productId,name, description, price, img}) =>{
            return (
                <ProductCard 
                key = {productId}
                name = {name} 
                description = {description} 
                price = {price} 
                img = {img} 
                />
            )
            })}

            </div>


            </>
            )
};

export default ProductsContainer;