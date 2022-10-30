import React from 'react'
import './ProductsContainer.css';
import Items from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = ({cart, setCart}) => {
    
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
                    // cart = {item.cart}
                    // setCart = {item.setCart}
                    />
                )
                })}
            </div>
            )
};

export default ProductsContainer;