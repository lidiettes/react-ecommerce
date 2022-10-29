import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';
import { useState } from 'react';
import Basket from './components/Basket/Basket';
import Items from './assets/db';

function App() {
  
const [cartItems, setCartItems]= useState([]);
const onAdd =(item)=>{
  const exist = cartItems.find (x.id === item.id);
  if (exist){
    setCartItems(cartItems.map(x.id === item.id ? {...exist, qty: exist.qty +1 }: x
    )
  );
  } else {
    setCartItems([...cartItems, {...item, qty:1 }]);
  }
};

  return (
  <>
  <Header />
  {/* <CartNav /> */}
  <ProductsContainer Items={items} onAdd={onAdd} />
  <Basket onAdd={onAdd} cartItems={cartItems}/>
  <Footer />
  
  </>
  );
}

export default App;
