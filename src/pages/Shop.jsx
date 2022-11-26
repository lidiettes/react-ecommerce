import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import getData from '../api/api';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer'
import { CartContext } from '../context/CartContext/CartContext';
import { WishListContext } from '../context/WishListContext/WishListContext';
import toast from 'react-hot-toast';
import { notify } from '../helpers/functions';
import { UserContext } from '../context/UserContext/UserContext';
import TitleShop from '../components/TitleShop/TitleShop';


const Shop = () => {

  const { items, setItems } = useContext(CartContext);
  const {user, setUser} = useContext(UserContext);
  
  function addToCart(product) {
    const index = items.find(e => e.id === product.id)
    if (index) {
      setItems(
        items.map(e => e.id === product.id ? {
          ...index,
          quantity: index.quantity + 1
        }
          : e));
    } else {
      setItems([...items, { ...product, quantity: 1 }])
    }
    return notify();
  }

  //fetch

  const [stock, setStock] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getData();
      setStock(data);
    }
    fetch();
  }, [])

  // wishLists

  const { wishes, dispatch } = useContext(WishListContext);

  const handleAddWished = (product) => {
    const provisionalWish = wishes.find(e => e.id === product.id)
    if (!provisionalWish) {
      const action = {
        type: 'add_item',
        payload: product,
      }
      dispatch(action);
      const notifyWish = () => toast('Added to wishlist', {
        icon: '❤️',
      });
      return notifyWish();
    } else{
      // parte de borrar al renderizar distintos corazones
      const provisionalWish2 = wishes.filter(e => e.id !== product.id)
  
      const action= {
        type: 'delete_item',
        payload :provisionalWish2,
      }
      dispatch(action);
    }
  }

  function saveWish(wishes) {
    localStorage.setItem("wishes", JSON.stringify(wishes));

  }
  useEffect(() => {
    saveWish(wishes)
    
  }, [wishes]);



  return (
    <>
      <TitleShop
      />
      <ProductsContainer
        addToCart={addToCart}
        stock={stock}
        handleAddWished={handleAddWished}
      />
    </>
  )
}

export default Shop