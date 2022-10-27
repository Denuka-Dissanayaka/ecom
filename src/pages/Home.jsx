import React from 'react'

// ---------------- Import Components ------------------
import Nav from '../components/navbar/Nav'
import Showcase from '../components/showcase/Showcase' 
import About from '../components/about/About';
import Popular from '../components/popular/Popular';
import Story from '../components/story/Story';
import Footer from '../components/footer/Footer';
import Mobile from '../components/mobileNav/Mobile';

function Home() {
  return (
    <>
      <Mobile/>
      <Nav/>
      <Showcase/>
      <About/>
      <Popular/>
      <Story/>
      <Footer/>
    </>
  )
}

export default Home
