import React from 'react'
import { useReducer } from 'react'
import WishListItemsReducer from './actions'


const initialState = [];

const Wishlist = () => {

    const [wishlistItems, dispatch] = useReducer(WishListItemsReducer, initialState);
    console.log(wishlistItems);

    return (
        <>
            <div>Wishlist listado </div>
            <div>name</div>
            <ul>
                {(initialState && initialState?.map(({ id, name }) => (
                    <li key={id}>
                        <span>{name}</span>
                    </li>
                ))) || "no items found"}
            </ul>
        </>
    );
};

export default Wishlist;