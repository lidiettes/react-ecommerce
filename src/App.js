import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';
import { useState } from 'react';

function App() {




// console.log(cart);

  return (
  <>
  <Header />
  <ProductsContainer />
  <CartNav  />
  <Footer />
  
  </>
  );
}

export default App;
