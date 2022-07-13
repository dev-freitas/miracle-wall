import React from 'react'
import Contact from '../components/Contact';
import MiracleWall from '../components/MiracleWall';
import faith from '../images/mountain1.png'
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
        <Header />
        <img src={faith} alt="Faith word" className='banner-img'/>
        <h1>Because we all need a miracle</h1>
        <MiracleWall />
        <Contact />
    </div>
  )
}

export default Home
