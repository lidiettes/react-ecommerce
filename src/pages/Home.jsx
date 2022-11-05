import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer'
import { CartContext } from '../context/CartContext';

const Home = () => {

  const {items, setItems} = useContext(CartContext);

  function saveProduct(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  useEffect(() => {
    saveProduct((items));
  }, [items]);

  function addToCart(product) {
    let listOfCart = JSON.parse(localStorage.getItem("items"));
    if (Array.isArray(listOfCart)) {  
      listOfCart.push(product);
    } else {
      listOfCart = [product];
    }
    setItems(listOfCart);
    console.log(listOfCart);

        //   function CountBag(){
        //   const[counterbag, setCounterbag]= useState(0);

        //   const increase = () => {
        //       setCounterbag((prevState) => prevState + 1); 
        //   };
        // }
  }



  return (
    <ProductsContainer 
    addToCart={addToCart}
    />
    
  )
}

export default Home