import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Cart from './components/Cart/Cart';
function App() {
  return (
  <>
  <Header />
  <Cart />
  <ProductsContainer/>
  
  <Footer />
  
  </>
  );
}

export default App;
