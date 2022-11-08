import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
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

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setStock(data);

    } catch (error) {
     
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <ProductsContainer
      addToCart={addToCart}
      stock={stock}

    />

  )
}

export default Home