import { BrowserRouter } from "react-router-dom";
import './App.css';

import Router from './routes/Router';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartProvider from "./context/CartProvider";




function App() {

  return (
    <>
      <CartProvider>

            <BrowserRouter>
              <Header /> 
              <Router />
              <Footer />
            </BrowserRouter>

      </CartProvider>

    </>
  );
}

export default App;
