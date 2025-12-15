// import React from 'react'
import Top from '../01homepage/top.jsx'
import NavBar from '../01homepage/Nav_Bar.jsx'
import Herosection from '../00herosection/herosection.jsx'
import Cards from '../04servicespage/services_blog_cards.jsx'
import Footer from '../01homepage/Footer.jsx'
import EnjoyAgro from '../01homepage/EnjoyAgro.jsx'
import Additional_Features from '../04servicespage/additional_feature.jsx'

import img3 from '../../assets/services_images/enjoyagro/bg.jpg'
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
      <Cards />
     <EnjoyAgro bg={img3}/>
     <Additional_Features />
      <Footer />
    </div>
  )
}

export default Services
