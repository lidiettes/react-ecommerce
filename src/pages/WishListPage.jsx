import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import Login from '../components/Login/Login';
import WishList from '../components/WishList/WishList'
import { WishListContext } from '../context/WishListContext/WishListContext';
import './WishListPage.css';


const WishListPage = () => {


  const {wishes, dispatch} = useContext(WishListContext);

  
  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  function removeCart(id) {
    const removes = wishes.filter((wish, indice) => indice !== id);
    
    const action = {
      type: 'delete_item',
      payload: removes,
    }
    dispatch(action);
  }




  return (
    <>
      <div className="WishListContainer"  >
          <WishList
            wishes = {wishes}
            removeCart = {removeCart}
          />
          <Login/> 
      </div>
    </>
  )
}

export default WishListPage