import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserContext'

const TitleAccount = () => {
    const {user} = useContext(UserContext)
  return (
    <div className="titleContainer">
            <h2 className='h2Title'>Hello {user.name}</h2>
        </div>
  )
}

export default TitleAccount
