import React from 'react'
import Top from '../01homepage/top.jsx'
import Nav_bar from '../01homepage/Nav_Bar.jsx'
import Hero from '../00herosection/herosection.jsx'
import Booking_Form from './booking_form.jsx'
import Footer from '../01homepage/Footer.jsx'
const book_now = () => {
  return (
    <div>
      <Top />
      <Nav_bar />
      <Hero h1="Booking" tab="Home" p="Booking"/>
      <Booking_Form />
      <Footer/>
    </div>
  )
}

export default book_now
