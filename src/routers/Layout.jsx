import React from 'react'
import {Route, Routes, Link, BrowserRouter, Navigate} from 'react-router-dom';
import CartFinal from '../CartFinal';
import Main from '../Main';



const Layout = () => {
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Main />}/>
    <Route path='*' element={<Main />}/>
    <Route path='/cartfinal' element={<CartFinal />}/>
 

    </Routes>
    </BrowserRouter>



  )
}

export default Layout