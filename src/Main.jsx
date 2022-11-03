import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';
import { useEffect, useState } from 'react';


function Main() {

    const [items, setItems] = useState([]);

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
        <>
            <Header />
            <ProductsContainer addToCart={addToCart} />
            {/* <CartNav items={items} /> */}
            <Footer />

        </>
    );
}

export default Main;
