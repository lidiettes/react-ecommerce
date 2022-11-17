import React from 'react'
import ApiProvider from '../ApiContext/ApiProvider'
import CartProvider from "../CartProvider"
import UserProvider from '../UserContext/UserProvider'

import UserDataProvider from '../UserDataContext/UserDataProvider'
import WishListProvider from '../WishListContext/WishListProvider'


const GeneralProvider = ({ children }) => {
    return (
        <>
            <CartProvider>
                <WishListProvider>
                    <UserProvider>
                        <UserDataProvider>
                            <ApiProvider>
                            {children}
                            </ApiProvider>
                        </UserDataProvider>
                    </UserProvider>
                </WishListProvider>
            </CartProvider>
        </>
    )
}

export default GeneralProvider