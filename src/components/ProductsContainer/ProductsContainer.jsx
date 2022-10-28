import React from 'react'
import './ProductsContainer.css';
import Items from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = () => {
    
    return (
    <>
            
            <div className="ContainerCard">
                
            {Items.map(({id,name, description, price, img}) =>{
            return (
                <ProductCard 
                key = {id}
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