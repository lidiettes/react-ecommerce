import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './CounterApp.css';

export const CounterApp = ({item, addToCart, removeCart}) => {


    const { items, setItems } = useContext(CartContext);
    console.log(item);

    const [counter, setCounter] = useState(item.quantity);

    const increase = () => {
        setCounter((prevState) => prevState + 1);
        addToCart(item);

    };
    const substract = () => {
        setCounter((prevState) => prevState - 1);
        removeCart(item.id);
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