import { useEffect } from 'react'

import Top from '../top.jsx'
import Nav_Bar from '../Nav_Bar.jsx'
import Hero from '../herosection.jsx'
import Contacts from './contactContent/contactInfo.jsx'
import Footer from '../Footer.jsx'
import Whatsapp from '../whatsapp_logo.jsx'


const Contact = () => {
     useEffect(() => {
        document.title = "Contact | Sudarshan Resort";
      }, []);
  return (
    <div>
        <Top />
        <Nav_Bar />
        <Hero h1="Contact" tab="Home" p="contact" />
        <Contacts />
        <Footer />
        <Whatsapp />
    </div>
  )
}

export default Contact
