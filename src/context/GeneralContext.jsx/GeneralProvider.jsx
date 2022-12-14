import React from 'react'
import ApiProvider from '../ApiContext/ApiProvider'
import CartProvider from '../CartContext/CartProvider'

import LoggedInProvider from '../LoggedInContext/LoggedInProvider'
import OrdersProvider from '../OrdersContext/OrdersProvider'
import UserProvider from '../UserContext/UserProvider'
import UserDataProvider from '../UserDataContext/UserDataProvider'
import WishListProvider from '../WishListContext/WishListProvider'


const GeneralProvider = ({ children }) => {
    return (
        <>
            <LoggedInProvider>
                <OrdersProvider>
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
                </OrdersProvider>
            </LoggedInProvider>
        </>
    )
}

export default GeneralProvider