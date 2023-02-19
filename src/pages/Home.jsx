import React, { useContext, useEffect } from 'react'
import GetInspo from '../components/GetInspo/GetInspo';
import MainSlider from '../components/MainSlider/MainSlider'
import News from '../components/News/News'
import Partners from '../components/Partners/Partners';
import { UserContext } from '../context/UserContext/UserContext';

const Home = () => {

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <MainSlider />
      <News />

      <GetInspo />
      <Partners />




    </>
  )
}

export default Home