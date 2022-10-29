import React from 'react'

const Basket = (cartItems, onAdd) => {

    return (
        <aside className='cartContainer'>
            <h2>Cart Items</h2>

            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
            <div key={item.id}>
                <div>{item.name}</div>
            <div>
            <button onClick={() => onAdd(item)}>+ </button>
            {/* <button onClick={() => onRemove(item)}>- </button> */}
        </div>
        <div>
            {item.qty} x ${item.price.toFixed(2)}
        </div>
        </div>
        ))}


    </aside >

);
}

export default Basket