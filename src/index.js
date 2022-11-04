import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CartFinal from './CartFinal';
import Vacio from './components/Vacio';
import CartNav from './components/CartNav/CartNav';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import { LoadItemContextProvider } from './contexts/loadItemContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <LoadItemContextProvider>
        <ProductsContainer />
    </LoadItemContextProvider>
);




// ReactDOM.render(

// // <React.StrictMode>
// // <App />
// // {/* </React.StrictMode> */}

// <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<App />}>
//       <Route index element={<Vacio />}></Route>
//       <Route path="cartfinal" element={<CartNav />}></Route>
      

//     </Route>
//   </Routes>

// </BrowserRouter>
// , document.getElementById('root'));



