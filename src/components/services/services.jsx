
import Top from '../top.jsx'
import NavBar from '../Nav_Bar.jsx'
import Herosection from '../herosection.jsx'
import Offer from '../services/offers/services_blog_cards.jsx'
import Footer from '../Footer.jsx'
import EnjoyAgro from '../EnjoyAgro.jsx'
import Additional_Features from '../services/additionalFeatures/additional_feature.jsx'

 import { useEffect } from "react";
 
const Services = () => {
   useEffect(() => {
      document.title = "Services | Sudarshan Resort";
    }, []);
  return (
    <div>
      <Top/>
      <NavBar />
      <Herosection h1="Services" tab="Home" p="Services" />
      <Offer />
     <EnjoyAgro bg="images/services/transparentbg/bg.jpg" />
     <Additional_Features />
      <Footer />
    </div>
  )
}

export default Services
