import { BrowserRouter } from "react-router-dom";
import './App.css';

import Router from './routes/Router';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartProvider from "./context/CartProvider";
import WishListProvider from "./context/WishListContext/WishListProvider";




function App() {

  return (
    <>
      <WishListProvider>
        <CartProvider>

          <BrowserRouter>
            <Header />
            <Router />
            <Footer />
          </BrowserRouter>

        </CartProvider>
      </WishListProvider>
    </>
  );
}

export default App;
