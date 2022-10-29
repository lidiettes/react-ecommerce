import {useState} from 'react';
import Items from '../../assets/db';
import './CounterApp.css';

const CounterApp = ({value = 0} ) => {

const[counter, setCounter]= useState(value);


    const increaseValue = () => {
        setCounter(counter + 1); 
    };
    const substractValue = () => {
        setCounter(counter - 1); 
    }

    // const total =(price)=>{
    //     counter * price;
    // }

    return (
    <>
        <div className='counterContainer'>
            <button className="buttonCounter"onClick={ increaseValue }>+</button>
            <button className="buttonCounter"onClick={ substractValue }>-</button>
            <div className='counter'>{counter}</div>
            {/* <div className='counter'>{total}</div> */}
        </div>
    </>
    );
};

export default CounterApp;