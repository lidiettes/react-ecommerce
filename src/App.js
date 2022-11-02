import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import CartNav from './components/CartNav/CartNav';


function App() {

  function buyProducts(item){
  
    let products = JSON.parse(localStorage.getItem("items")); //conseguir elementos ls
    
    if (Array.isArray(products)) {
        products.push(item);
    } else {
        products = [item];
    }
    localStorage.setItem("items", JSON.stringify(products));//guardarlos en ls

}




  return (
  <>
  <Header />
  <ProductsContainer buyProducts={buyProducts}/>
  <CartNav  />
  <Footer />
  
  </>
  );
}

export default App;
