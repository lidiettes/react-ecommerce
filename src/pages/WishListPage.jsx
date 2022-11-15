import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import Login from '../components/Login/Login';
import WishList from '../components/WishList/WishList'
import { CartContext } from '../context/CartContext';
import { WishListContext } from '../context/WishListContext/WishListContext';
import './WishListPage.css';


const WishListPage = () => {

  const { items, setItems } = useContext(CartContext);
  const { wishes, dispatch } = useContext(WishListContext);


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

  //PRUEBAS DE AÑADIR WISHES AL CARRITO DE LA COMPRA

  // function addWishToCart(wish, id) {

  //     let listOfCart = JSON.parse(localStorage.getItem("items"));

  //     if (Array.isArray(listOfCart)) {
  //         listOfCart.push(wish);
  //     } else {
  //         listOfCart = [wish];
  //     }
  //     setItems(listOfCart);

  //     const removesWishes = wishes.filter((wish, indice) => indice !== id);

  //     const action = {
  //       type: 'delete_item',
  //       payload: removesWishes,
  //     }
  //     dispatch(action);
  // }
  function addWishToCart(wish, id) {
    const index = items.find(e => e.id === wish.id)
    if (index) {
      setItems(
        items.map(e => e.id === wish.id ? {
          ...index,
          quantity: index.quantity + 1
        }
          : e));
    } else {
      setItems([...items, { ...wish, quantity: 1 }])
    }
    const removesWishes = wishes.filter((wish, indice) => indice !== id);

    const action = {
      type: 'delete_item',
      payload: removesWishes,
    }
    dispatch(action);
  }





    useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
      <>
        <h2>Saved Items</h2>
        <div className="WishListContainer"  >

          <WishList
            wishes={wishes}
            removeCart={removeCart}
            addWishToCart={addWishToCart}
          />

        </div>
      </>
    )
  }

  export default WishListPage