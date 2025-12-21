import React from 'react'
import Top from '../top.jsx'
import Nav_bar from '../Nav_Bar.jsx'
import Hero from '../herosection.jsx'
import Booking_Form from './form/booking_form.jsx'
import Footer from '../Footer.jsx'
import { useEffect } from 'react'
const Book_now = () => {
     useEffect(() => {
        document.title = "Booking Form | Sudarshan Resort";
      }, []);
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

export default Book_now
