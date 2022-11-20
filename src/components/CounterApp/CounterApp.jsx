import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './CounterApp.css';

export const CounterApp = ({ item, addToCart }) => {


    const { items, setItems } = useContext(CartContext);

    // const [counter, setCounter] = useState(item.quantity);

    const increase = () => {
        addToCart(item);
    };

    function removeCartUnidad(product) {
        const copyItems = [...items]
        copyItems.map(e =>{ 
            if (e.id === product.id) {
                if (e.quantity > 1){
                    return e.quantity--;
                } else {
                    const pos = copyItems.indexOf(e)
                    return copyItems.splice(pos,1); 
                }
            }
            return null
        });
        setItems(prev => prev = copyItems)
    }

    const substract = () => {
        removeCartUnidad(item);

        

    
}

return (
    <>
        <div className='counterContainer'>
            <button className="buttonCounter" onClick={increase}>+</button>
            <button className="buttonCounter" onClick={substract} >-</button>
            <div className='counter'>{item.quantity}</div>
        </div>
    </>
);
};

export default CounterApp;