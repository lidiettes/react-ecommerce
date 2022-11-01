import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';
import { useState } from 'react';


function buyProduct (item){
    let elements = JSON.parse(localStorage.getItem("items")); //conseguir elementos ls
    if (Array.isArray(elements)) {
        elements.push(item);
    } else {
        elements = [item];
    }
    localStorage.setItem("items", JSON.stringify(elements)) //guardarlos en ls
}



function App() {

// const [localStorage, setLocalStorage]= useState();

  return (
  <>
  <Header />
  <ProductsContainer buyProduct={()=> buyProduct()}/>
  <CartNav  />
  <Footer />
  </>
  );
}

export default App;
