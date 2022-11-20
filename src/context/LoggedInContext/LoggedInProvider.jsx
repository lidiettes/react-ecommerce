import React from 'react'
import { useState } from 'react'
import { LoggedInContext } from './LoggedInContext'

const LoggedInProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);


    return (
        <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    )
}

export default LoggedInProvider
