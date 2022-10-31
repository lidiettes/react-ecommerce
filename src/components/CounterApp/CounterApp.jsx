import {useState} from 'react';
import './CounterApp.css';

const CounterApp = ({value = 0}) => {

const[counter, setCounter]= useState(value);


    const increase = () => {
        setCounter((prevState) => prevState + 1); 
    };

    const substract = () => {
        setCounter((prevState) => prevState - 1); 
    }


    return (
    <>
        <div className='counterContainer'>
            <button className="buttonCounter"onClick={ increase }>+</button>
            <button className="buttonCounter"onClick={ substract }>-</button>
            <div className='counter'>{counter}</div>
        </div>
    </>
    );
};

export default CounterApp;