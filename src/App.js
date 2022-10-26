import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';

function App() {
  return (
  <>
  <Header />
  <ProductsContainer/>
  <ProductCard/>
  <Footer />
  </>
  );
}

export default App;
