import { BrowserRouter } from "react-router-dom";
import './App.css';
import Router from './routes/Router';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GeneralProvider from "./context/GeneralContext.jsx/GeneralProvider";
import Helper from "./components/Helper/Helper";
import Dropdown from "./components/Dropdown/Dropdown";






function App() {

  return (
    <>
        <BrowserRouter>
        <GeneralProvider>
          <Helper />
          <Header />
     
          <Router />
          <Footer />
          </GeneralProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
