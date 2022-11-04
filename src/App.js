import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';
import { useEffect, useState } from 'react';
import {Link, Navigate, Outlet} from 'react-router-dom';



function App() {

  const [items, setItems] = useState([]);

  function saveProduct(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }

  useEffect(() => {
    saveProduct((items));
  }, [items]);

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
      <header>
        <div className="wrapper">
          <div className="logo">Söy</div>

          <nav>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About us</a>
            <Link to="/cartfinal" >Cart</Link>

            <svg className="bag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
            </svg>

            <div className="bag">  </div>

          </nav>
        </div>
      </header>

      <div>
        <Outlet></Outlet>
      </div>


      <ProductsContainer addToCart={addToCart} />
      {/* <CartNav items={items} /> */}



      <Footer />

    </>
  );
}

export default App;
