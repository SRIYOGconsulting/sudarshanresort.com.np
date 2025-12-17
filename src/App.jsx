import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Starting_Page from './components/01homepage/Starting_Page.jsx'

import Home from './components/00homepage/home.jsx' 
import About from './components/02aboutpage/about.jsx'
import Room from './components/03roomspage/room.jsx'
import Services from './components/04servicespage/services.jsx'
import Gallery from './components/05gallerypage/gallery.jsx'
import Contact from './components/06contactpage/contact.jsx'
import ScrollToTop from "./components/01homepage/scrolltop.jsx";
import Book_Now from './components/book_Now/book_now.jsx'


const App = () => {
  return (
  <>
   <ScrollToTop />
    <Routes>
      <Route path="/" element={<Starting_Page/>} />
      <Route path='/home' element={ <Home/>} />
      <Route path="/about" element={<About />} />
      <Route path='/rooms' element={<Room />} />
      <Route path='/services' element={<Services />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/book' element={<Book_Now />} />
        
    </Routes>
    </>
  )
}

export default App
