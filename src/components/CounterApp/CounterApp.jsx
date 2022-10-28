import {useState} from 'react';
import './CounterApp.css';

const CounterApp = ({value = 0}) => {

const[counter, setCounter]= useState(value);
console.log(counter);

    const increaseValue = () => {
        setCounter(counter + 1); 
    };

    const substractValue = () => {
        setCounter(counter - 1); 
    }


    return (
    <>
        <div className='counterContainer'>
            <button className="buttonCounter"onClick={ increaseValue }>+</button>
            <button className="buttonCounter"onClick={ substractValue }>-</button>
            <div className='counter'>{counter}</div>
        </div>
    </>
    );
};

export default CounterApp;