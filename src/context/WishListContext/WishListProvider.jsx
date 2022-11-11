import React, { useReducer } from 'react'
import wishesReducer from '../../components/WishList/actions';
import { WishListContext } from './WishListContext';

const WishListProvider = ({ children }) => {
    const init = () => {
        return JSON.parse(localStorage.getItem("wishes")) || [];
    }

    const initialState = [];
    const [wishes, dispatch] = useReducer(wishesReducer, initialState, init);

    return (
        <WishListContext.Provider value={{wishes, dispatch}}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListProvider





  // const init=()=>{
  // return JSON.parse(localStorage.getItem("wishes"))|| [];
  // }

  // const initialState = [];
  // const [wishes, dispatch] = useReducer(wishesReducer, initialState, init);
