import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import getData from '../api/api';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer'
import { CartContext } from '../context/CartContext/CartContext';
import { WishListContext } from '../context/WishListContext/WishListContext';
import toast, { Toaster } from 'react-hot-toast';
import { notify, saveProduct } from '../helpers/functions';
import Title from '../components/Title/Title';
import { HeartContext } from '../context/HeartContext/HeartContext';
import { UserContext } from '../context/UserContext/UserContext';


const Shop = () => {

  const { items, setItems } = useContext(CartContext);
  const {user, setUser} = useContext(UserContext);

  const refresh = JSON.parse(sessionStorage.getItem("user"));


  useEffect(() => {
    saveProduct((items));
  }, [items]);

  //evitar perder usuario con f5
  useEffect(()=>{
    setUser(refresh)
  },[])

  useEffect(()=>{
    sessionStorage.setItem("user", JSON.stringify(user))
  },[user])


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
  const { toggleHeart, setToggleHeart } = useContext(HeartContext);

  const handleAddWished = (product) => {
    const provisionalWish = wishes.find(e => e.id === product.id)
    if (!provisionalWish) {
      const action = {
        type: 'add_item',
        payload: product,
      }
      
      dispatch(action);
      setToggleHeart(!!toggleHeart);
      console.log(toggleHeart);

      const notifyWish = () => toast('Added to wishlist', {
        icon: '❤️',
      });
      return notifyWish();
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
      <Title />
      <ProductsContainer
        addToCart={addToCart}
        stock={stock}
        handleAddWished={handleAddWished}
        setToggleHeart={setToggleHeart} //no se si hace falta pero por si acaso
      />
    </>
  )
}

export default Shop