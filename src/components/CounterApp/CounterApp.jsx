import { useState } from 'react';
import './CounterApp.css';

export const CounterApp = () => {

    const [counter, setCounter] = useState(1);
   
    const increase = () => {
        setCounter((prevState) => prevState + 1);
    };
    const substract = () => {
        setCounter((prevState) => prevState - 1);
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