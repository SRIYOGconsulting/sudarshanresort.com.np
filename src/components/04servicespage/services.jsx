import React from 'react'
// import style from './services.module.css'
import Home_page from '../01homepage/Home_page.jsx'
import NavBar from '../01homepage/Nav_Bar.jsx'
import Herosection from '../00herosection/herosection.jsx'
import Cards from '../04servicespage/services_blog_cards.jsx'
import Footer from '../01homepage/Footer.jsx'
import EnjoyAgro from '../01homepage/EnjoyAgro.jsx'

import img3 from '../../assets/services_images/enjoyagro/bg.jpg'

const services = () => {
  return (
    <div>
      <Home_page/>
      <NavBar />
      <Herosection h1="Services" tab="Home" p="Services" />
      <Cards />
     <EnjoyAgro bg={img3}/>
     {/* <Additional_Features /> */}
      <Footer />
    </div>
  )
}

export default services
