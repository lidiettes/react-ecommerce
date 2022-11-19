import React from 'react'
import ApiProvider from '../ApiContext/ApiProvider'
import CartProvider from "../CartProvider"
import { HeartProvider } from '../HeartContext/HeartProvider'
import UserProvider from '../UserContext/UserProvider'

import UserDataProvider from '../UserDataContext/UserDataProvider'
import WishListProvider from '../WishListContext/WishListProvider'


const GeneralProvider = ({ children }) => {
    return (
        <><HeartProvider>
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
            </HeartProvider>
        </>
    )
}

export default GeneralProvider