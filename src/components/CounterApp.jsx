import {useState} from 'react';

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
        <div>{counter}</div>
        <button onClick={ increaseValue }>+</button>
        <button onClick={ substractValue }>-</button>


    </>
    );
};

export default CounterApp;