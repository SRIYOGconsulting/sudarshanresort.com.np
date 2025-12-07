import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Starting_Page from './components/page1/Starting_Page.jsx'
import Homepage  from '../src/components/page1/Home_page.jsx'
import NavBar from './components/page1/Nav_Bar.jsx'
import SudarshanHome from './components/page1/sudarshan_main.jsx'
import ContentOverImg from './components/page1/Content_Over_Img.jsx'
import Container2 from './components/page1/container2.jsx'
import Our_Accomodation from './components/page1/Our_Accomodation.jsx'
import Facilities_blogcards from './components/page1/Facilities_blogcards.jsx'
import EnjoyAgro from './components/page1/EnjoyAgro.jsx'
import Testimonials from './components/page1/Testimonials/Testimonials.jsx'
import Footer from './components/page1/Footer.jsx'
import Whatsapp_logo from './components/page1/whatsapp_logo.jsx'
import Home_page from '../src/components/page1/Home_page.jsx'
import Nav_Bar from './components/page1/Nav_Bar.jsx'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Starting_Page/>} />
      <Route
      path='/home'
      element={
      <div>
      {/* <Starting_Page/> */}
      <Homepage />
      <NavBar />
      <SudarshanHome />
      <ContentOverImg />
      <Container2/>
      <Our_Accomodation/>
      <Facilities_blogcards/>
      <EnjoyAgro />
      <Testimonials/>
      <Footer />
      <Whatsapp_logo />
    </div>
      } />
      <Route path="/about" element={<div>
        <Home_page/>
        <Nav_Bar />
      </div>} />
    
    </Routes>
  )
}

export default App
