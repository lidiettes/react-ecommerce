import React, { useContext, useEffect } from 'react'
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
  }



  return (
    <ProductsContainer 
    addToCart={addToCart}
    />
    
  )
}

export default Home