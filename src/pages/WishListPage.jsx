import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import WishList from '../components/WishList/WishList'

const WishListPage = () => {


  const [wishes, setWishes] = useState(JSON.parse(localStorage.getItem('wishes')));
  
  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  function removeCart(id) {
    const removes = wishes.filter((wish, indice) => indice !== id);
    setWishes(removes);
  }




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