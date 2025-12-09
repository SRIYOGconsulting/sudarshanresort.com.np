import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Starting_Page from './components/01homepage/Starting_Page.jsx'
import Homepage  from './components/01homepage/Home_page.jsx'
import NavBar from './components/01homepage/Nav_Bar.jsx'
import SudarshanHome from './components/01homepage/sudarshan_main.jsx'
import ContentOverImg from './components/01homepage/Content_Over_Img.jsx'
import Container2 from './components/01homepage/container2.jsx'
import Our_Accomodation from './components/01homepage/Our_Accomodation.jsx'
import Facilities_blogcards from './components/01homepage/facilities_blogcard_container/Facilities_blogcards.jsx'
import EnjoyAgro from './components/01homepage/EnjoyAgro.jsx'
import Testimonials from './components/01homepage/Testimonials/Testimonials.jsx'
import Footer from './components/01homepage/Footer.jsx'
import Whatsapp_logo from './components/01homepage/whatsapp_logo.jsx'
import About from './components/02aboutpage/about.jsx'
import Room from './components/03roomspage/room.jsx'
import Services from './components/04servicespage/services.jsx'

import enjoyagro from './assets/enjoy_agro.jpg'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Starting_Page/>} />
      <Route
      path='/home'
      element={
      <div>
      <Homepage />
      <NavBar />
      <SudarshanHome />
      <ContentOverImg />
      <Container2/>
      <Our_Accomodation/>
      <Facilities_blogcards/>
      <EnjoyAgro bg={enjoyagro}/>
      <Testimonials/>
      <Footer />
      <Whatsapp_logo />
    </div>
      } />
      <Route path="/about" element={<About />} />
      <Route path='/rooms' element={<Room />} />
      <Route path='/services' element={<Services />} />
    
    </Routes>
  )
}

export default App
