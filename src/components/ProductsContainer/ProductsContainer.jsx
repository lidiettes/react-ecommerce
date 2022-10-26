import React from 'react'
import './ProductsContainer.css';
import ProductsInfo from "../../assets/db";
import ProductCard from '../ProductCard/ProductCard';


const ProductsContainer = () => {
    console.log(ProductsInfo);
    return (
    <>
            
            <div className="ContainerCard">
                
            <ProductCard />

            </div>


            </>
            )
};

                    export default ProductsContainer;