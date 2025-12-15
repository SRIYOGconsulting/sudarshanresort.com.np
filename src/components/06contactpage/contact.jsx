import React from 'react'
import Contact_content from '../06contactpage/contact_content.jsx'
import Top from '../01homepage/top.jsx'
import Hero from '../00herosection/herosection.jsx'
import Footer from '../01homepage/Footer.jsx'
import Nav_Bar from '../01homepage/Nav_Bar.jsx'
import Whatsapp from '../01homepage/whatsapp_logo.jsx'
import { useEffect } from 'react'
const Contact = () => {
     useEffect(() => {
        document.title = "Contact | Sudarshan Resort";
      }, []);
  return (
    <div>
        <Top/>
        <Nav_Bar />
        <Hero h1="Contact" tab="Home" p="contact" />
      <Contact_content/>
      <Footer />
      <Whatsapp/>
    </div>
  )
}

export default Contact
