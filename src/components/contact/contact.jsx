

import Top from '../top.jsx'
import Nav_Bar from '../Nav_Bar.jsx'
import Hero from '../herosection.jsx'
import Contacts from './contactContent/contactInfo.jsx'
import Footer from '../Footer.jsx'
import Whatsapp from '../whatsapp_logo.jsx'
import SeoHelmet from '../seoHelmet.jsx'


const Contact = () => {
  
  return (
    <div>
       <SeoHelmet
        title="Contact | Sudarshan Resort"
        description="Get in touch with Sudarshan Resort for reservations, inquiries, or any assistance. We are here to make your stay memorable."
        image="/images/contact/whatsapplogo.webp"
        url="https://sudarshanresort.com/contact"
      />
      
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
