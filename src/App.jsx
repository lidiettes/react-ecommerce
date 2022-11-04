import { BrowserRouter } from "react-router-dom";
import './App.css';
import { useEffect, useState } from 'react';
import Router from './routes/Router';



function App() {

  // const [items, setItems] = useState([]);

  // function saveProduct(items) {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }

  // useEffect(() => {
  //   saveProduct((items));
  // }, [items]);

  // function addToCart(product) {
  //   let listOfCart = JSON.parse(localStorage.getItem("items"));
  //   if (Array.isArray(listOfCart)) {  
  //     listOfCart.push(product);
  //   } else {
  //     listOfCart = [product];
  //   }
  //   setItems(listOfCart);
  //   console.log(listOfCart);
  // }


  return (
    <>
      <BrowserRouter>
      <Router />
      </BrowserRouter>

    </>
  );
}

export default App;
