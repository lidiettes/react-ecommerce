import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './CounterApp.css';

export const CounterApp = ({ item, addToCart, removeCart }) => {


    const { items, setItems } = useContext(CartContext);
    console.log(item);

    const [counter, setCounter] = useState(item.quantity);

    const increase = () => {
        setCounter((prevState) => prevState + 1);
        addToCart(item);

    };


    function removeCartUnidad(product) {
        const index = items.find(e => e.id === product.id)
        if (index) {
            setItems(
                items.map(e => e.id === product.id ? {
                    ...index,
                    quantity: index.quantity - 1
                }
                    : e));
        } else {
            setItems([...items, { ...product, quantity: -1 }])
        }
    }
    const substract = () => {
        setCounter((prevState) => prevState - 1);
        removeCartUnidad(item);
    }

    return (
        <>
            <div className='counterContainer'>
                <button className="buttonCounter" onClick={increase}>+</button>
                <button className="buttonCounter" onClick={substract} >-</button>
                <div className='counter'>{counter}</div>
            </div>
        </>
    );
};

export default CounterApp;