import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Starting_Page from './components/page1/Starting_Page.jsx'
import Homepage  from '../src/components/page1/Home_page.jsx'
import NavBar from './components/page1/Nav_Bar.jsx'
import SudarshanHome from './components/page1/sudarshan_main.jsx'
import ContentOverImg from './components/page1/Content_Over_Img.jsx'
import Container2 from './components/page1/container2.jsx'
import Our_Accomodation from './components/page1/Our_Accomodation.jsx'
import Facilities_blogcards from './components/page1/facilities_blogcard_container/Facilities_blogcards.jsx'
import EnjoyAgro from './components/page1/EnjoyAgro.jsx'
import Testimonials from './components/page1/Testimonials/Testimonials.jsx'
import Footer from './components/page1/Footer.jsx'
import Whatsapp_logo from './components/page1/whatsapp_logo.jsx'
import About from './components/page2/about.jsx'
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
       <About h1="About" tab="Home" p="about"/>
      </div>} />
    
    </Routes>
  )
}

export default App
