import React from 'react'
import { useState } from 'react'
import { UserDataContext } from './UserDataContext'

const UserDataProvider = ({children}) => {
    const [userData, setUserData] = useState([])

    return (
        <UserDataContext.Provider value={{userData,setUserData}}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataProvider