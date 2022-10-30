import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';
import { useState } from 'react';

function App() {

const [cart, setCart]= useState([]);
console.log(cart);

const[bag, setBag]= useState(0);

  return (
  <>
  <Header />
  <ProductsContainer cart={cart} setCart={setCart} bag={bag} setBag={setBag}/>
  <CartNav cart={cart}/>
  <Footer bag={bag}/>
  
  </>
  );
}

export default App;
