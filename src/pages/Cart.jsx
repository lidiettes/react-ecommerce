import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import CartNav from '../components/CartNav/CartNav'
import { CartContext } from '../context/CartContext';

const Cart = () => {

    // // nuevo 
    // const increase =(id)=>{
    //  const prueba = counter.filter((count, indice,) => indice !== id);
    //  setCounter((prueba)+1);
    // }
      
    //stock de carrito


    const { items, setItems } = useContext(CartContext);
    function removeCart(id) {
        const removes = items.filter((item, indice) => indice !== id);
        setItems(removes);
    }
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    //Conseguimos el total (faltaria: * curr.quantity)
    // function getTotal(items) {
    //     return items.reduce((accum, curr) => {
    //         return accum + curr.price;
    //     }, 0);
    // }
    

    return (
        <>
            <CartNav
                items={items}
                removeCart={removeCart}
                // getTotal={getTotal}
               
            />
        </>
    )
}
export default Cart








    // function removeFullCart(el) {
    //     let cositas =[...items];
    //     cositas = cositas.filter(item => item.id !== el.id);
    //     setItems(cositas);
    // }
    // const removeFromCart = (el) => {
    //   let hardCopy = [...cart]
    //   hardCopy = hardCopy.filter(cartItem => cartItem.id !== el.id)
    //   setCart(hardCopy);


    // let listOfCart = JSON.parse(localStorage.getItem("items"));
    // listOfCart = listOfCart.filter((item) => item.id !== id);
    // localStorage.setItem("item", JSON.stringify(listOfCart));
    // if (listOfCart.length === 0) {
    //     localStorage.removeItem("item");