import React, { useContext, useEffect } from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import News from '../components/News/News'
import { UserContext } from '../context/UserContext/UserContext';

const Home = () => {

  const {user, setUser} = useContext(UserContext);
  console.log(user);

  //no fuchona
  
  // useEffect(()=>{
  //     const refresh = JSON.parse(sessionStorage.getItem("user"));
  //     setUser(refresh)
  //   },[user])

  return (
    <>
    <MainSlider />
    <News />
    <MainSlider />
    <News />
    </>
  )
}

export default Home