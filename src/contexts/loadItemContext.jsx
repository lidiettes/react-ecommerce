import { createContext,useState } from "react";

export const LoadItemContext = createContext();

export function LoadItemContextProvider(props){
  function addToCart(product) {
    let listOfCart = JSON.parse(localStorage.getItem("items"));
    if (Array.isArray(listOfCart)) {
      listOfCart.push(product);
    } else {
      listOfCart = [product];
    }
    setItems(listOfCart);
    console.log(listOfCart);
  }
const valor = addToCart();

return(
    <LoadItemContext.Provider value={valor}>{props.children}

    </LoadItemContext.Provider>
)

}