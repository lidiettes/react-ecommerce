import React from 'react'
import './ProductsContainer.css';
import ProductsInfo from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = () => {
    
    return (
    <>
            
            <div className="ContainerCard">
                
            {ProductsInfo.map((card) =>{
            return(
                <ProductCard 
                key = {card.id}
                name = {card.name} 
                description = {card.description} 
                price = {card.price} 
                img = {card.img} 
                />
            )
            })}

            </div>


            </>
            )
};

export default ProductsContainer;