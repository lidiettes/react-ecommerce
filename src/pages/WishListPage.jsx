import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import WishList from '../components/WishList/WishList'

const WishListPage = () => {


  const [wishes, setWishes] = useState(JSON.parse(localStorage.getItem('wishes')));

  function removeCart(id) {
    const removes = wishes.filter((whish, indice) => indice !== id);
    setWishes(removes);
    console.log(wishes);
  }

  //siempre que cambie wishes ejecutamos funcion de actualizar el LS

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);


  return (
    <>

      <WishList
        wishes={wishes}
        removeCart={removeCart}
      />
    </>
  )
}

export default WishListPage