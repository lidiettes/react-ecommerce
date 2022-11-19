import React, { useState } from 'react'
import { HeartContext } from './HeartContext';

export const HeartProvider = ({children}) => {

    const  [toggleHeart, setToggleHeart] = useState(false);

  return (
    <HeartContext.Provider value={{toggleHeart, setToggleHeart}}>
        {children}
    </HeartContext.Provider>
  )
}






export default HeartProvider