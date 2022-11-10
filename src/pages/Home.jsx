import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import getData from '../api/api';
import MainSlider from '../components/MainSlider/MainSlider';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer'
import { CartContext } from '../context/CartContext';


const Home = () => {

  const { items, setItems } = useContext(CartContext);

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
  }

  //fetch

  const [stock, setStock] = useState([]);

  useEffect(() => { 
    const prueba = async ()=> {
    const datos = await getData();
    setStock(datos);
    }
    prueba();
  }, [])

// wishLists


  return (
    <>
    <MainSlider />
    <ProductsContainer
      addToCart={addToCart}
      stock={stock}
      // addWishList ={addWishList} 

    />
    </>
  )
}

export default Home