import { useState } from 'react';
import './CounterApp.css';

export const CounterApp = ({ increase, substract, counter }) => {

    return (
        <>
            <div className='counterContainer'>
                <button className="buttonCounter" onClick={increase}>+</button>
                <button className="buttonCounter" onClick={substract}>-</button>
                <div className='counter'>{counter}</div>
            </div>
        </>
    );
};

export default CounterApp;