import { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || null );

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider